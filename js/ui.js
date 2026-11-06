/**
 * UI CONTROLLER MODULE
 * Mengatur interaksi SPA, router navigasi, pencarian game, filter materi,
 * modul belajar interaktif, engine kuis, scoring real-time, dan render leaderboard.
 */
const UIController = {
    currentQuiz: null,
    currentQuestionIndex: 0,
    userScore: 0,

    init() {
        this.bindEvents();
        this.renderLeaderboard();
        this.loadMaterial('lho');
    },

    bindEvents() {
        // Navigasi Tab SPA
        document.querySelectorAll('.nav-link').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetPage = e.target.getAttribute('data-target');
                this.navigateTo(targetPage);
            });
        });

        // Filter Kategori di Beranda
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                const cat = e.target.getAttribute('data-cat');
                this.filterGames(cat);
            });
        });

        // Pencarian Game / Materi
        const searchInput = document.getElementById('search-game-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                this.searchGames(term);
            });
        }

        // Tombol Mulai Kuis
        document.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains('start-quiz-btn')) {
                const quizId = e.target.getAttribute('data-quiz-id');
                this.startQuiz(quizId);
            }
        });

        // Event Tombol Navigasi Kuis
        document.getElementById('btn-next-question')?.addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('btn-exit-quiz')?.addEventListener('click', () => {
            this.resetQuizState();
        });

        document.getElementById('btn-restart-quiz')?.addEventListener('click', () => {
            if (this.currentQuiz) {
                this.startQuiz(this.currentQuiz.id);
            }
        });

        document.getElementById('btn-view-leaderboard')?.addEventListener('click', () => {
            this.navigateTo('page-peringkat');
        });

        // Sidebar Menu Belajar
        document.querySelectorAll('#material-menu-list li').forEach(item => {
            item.addEventListener('click', (e) => {
                document.querySelectorAll('#material-menu-list li').forEach(li => li.classList.remove('active'));
                e.target.classList.add('active');
                const matKey = e.target.getAttribute('data-material');
                this.loadMaterial(matKey);
            });
        });

        // Reset Identity & Skor
        document.getElementById('btn-reset-data')?.addEventListener('click', () => {
            if (confirm('Apakah kamu yakin ingin mereset identitas dan nilai tersimpan?')) {
                StorageManager.clearUser();
                location.reload();
            }
        });
    },

    navigateTo(pageId) {
        document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

        const activeSec = document.getElementById(pageId);
        if (activeSec) {
            activeSec.classList.remove('hidden');
        }

        const activeLink = document.querySelector(`.nav-link[data-target="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        if (pageId === 'page-peringkat') {
            this.renderLeaderboard();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    filterGames(cat) {
        const cards = document.querySelectorAll('#games-grid .game-card');
        cards.forEach(card => {
            if (cat === 'all' || card.getAttribute('data-category') === cat) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    },

    searchGames(term) {
        const cards = document.querySelectorAll('#games-grid .game-card');
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();
            if (title.includes(term) || desc.includes(term)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    },

    loadMaterial(key) {
        const display = document.getElementById('study-material-display');
        const data = MATERIALS_DATA[key];
        if (data && display) {
            display.innerHTML = `
                <span class="card-tag tag-lho">${data.category}</span>
                <h2 style="font-family: var(--font-heading); color: var(--primary-color); margin: 0.5rem 0 1.5rem 0;">${data.title}</h2>
                <div class="material-body">${data.content}</div>
            `;
        }
    },

    startQuiz(quizId) {
        const quiz = QUIZ_DATA[quizId];
        if (!quiz) return;

        this.currentQuiz = { ...quiz, id: quizId };
        this.currentQuestionIndex = 0;
        this.userScore = 0;

        this.navigateTo('page-bermain');
        document.getElementById('quiz-selection-screen').classList.add('hidden');
        document.getElementById('quiz-result-container').classList.add('hidden');
        document.getElementById('quiz-gameplay-container').classList.remove('hidden');

        this.renderQuestion();
    },

    renderQuestion() {
        const qData = this.currentQuiz.questions[this.currentQuestionIndex];
        const total = this.currentQuiz.questions.length;

        document.getElementById('current-q-num').textContent = this.currentQuestionIndex + 1;
        document.getElementById('total-q-num').textContent = total;
        document.getElementById('question-text').textContent = qData.question;
        
        // Progress bar calculation
        const progressPct = ((this.currentQuestionIndex + 1) / total) * 100;
        document.getElementById('quiz-progress-bar').style.width = `${progressPct}%`;

        // Render Option Buttons
        const container = document.getElementById('options-container');
        container.innerHTML = '';
        document.getElementById('feedback-box').classList.add('hidden');

        qData.options.forEach((optText, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = optText;
            btn.addEventListener('click', () => this.handleAnswerSelect(idx));
            container.appendChild(btn);
        });
    },

    handleAnswerSelect(selectedIndex) {
        const qData = this.currentQuiz.questions[this.currentQuestionIndex];
        const allBtns = document.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.disabled = true);

        const feedbackBox = document.getElementById('feedback-box');
        const feedbackStatus = document.getElementById('feedback-status');
        const feedbackExp = document.getElementById('feedback-explanation');

        feedbackBox.classList.remove('hidden');

        if (selectedIndex === qData.answer) {
            allBtns[selectedIndex].classList.add('correct');
            feedbackStatus.innerHTML = '✅ Benar! Nilai +10';
            feedbackStatus.style.color = '#15803d';
            this.userScore += Math.round(100 / this.currentQuiz.questions.length);
        } else {
            allBtns[selectedIndex].classList.add('wrong');
            allBtns[qData.answer].classList.add('correct');
            feedbackStatus.innerHTML = '❌ Kurang Tepat';
            feedbackStatus.style.color = '#b91c1c';
        }

        feedbackExp.innerHTML = `<strong>Pembahasan:</strong> ${qData.explanation}`;
    },

    nextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.currentQuiz.questions.length) {
            this.renderQuestion();
        } else {
            this.finishQuiz();
        }
    },

    finishQuiz() {
        document.getElementById('quiz-gameplay-container').classList.add('hidden');
        document.getElementById('quiz-result-container').classList.remove('hidden');

        const user = StorageManager.getUser();
        document.getElementById('result-user-name').textContent = `Hebat, ${user ? user.nama : 'Siswa'}!`;
        document.getElementById('final-score-val').textContent = this.userScore;

        let msg = "Tetap semangat belajar untuk meningkatkan pengetahuanmu!";
        if (this.userScore >= 80) {
            msg = "Luar biasa! Pemahamanmu dalam materi Bahasa Indonesia sangat mantap! 🌟";
        } else if (this.userScore >= 60) {
            msg = "Hasil yang bagus! Pelajari lagi beberapa poin modul untuk mencapai skor sempurna! 📚";
        }
        document.getElementById('result-message').textContent = msg;

        // Save score to local storage leaderboard
        StorageManager.saveScore(this.userScore);
        this.updateUserGreeting();
    },

    resetQuizState() {
        document.getElementById('quiz-gameplay-container').classList.add('hidden');
        document.getElementById('quiz-result-container').classList.add('hidden');
        document.getElementById('quiz-selection-screen').classList.remove('hidden');
    },

    renderLeaderboard() {
        const leaderboard = StorageManager.getLeaderboard();
        const user = StorageManager.getUser();

        // Update Personal Best
        const pbScore = StorageManager.getPersonalBest();
        document.getElementById('pb-score-display').textContent = `${pbScore} Pts`;
        document.getElementById('stat-high-score').textContent = `${pbScore} Pts`;

        // Render Podium Top 3
        document.getElementById('podium-1-name').textContent = leaderboard[0] ? leaderboard[0].nama : '-';
        document.getElementById('podium-1-score').textContent = leaderboard[0] ? `${leaderboard[0].score} Pts` : '0 Pts';

        document.getElementById('podium-2-name').textContent = leaderboard[1] ? leaderboard[1].nama : '-';
        document.getElementById('podium-2-score').textContent = leaderboard[1] ? `${leaderboard[1].score} Pts` : '0 Pts';

        document.getElementById('podium-3-name').textContent = leaderboard[2] ? leaderboard[2].nama : '-';
        document.getElementById('podium-3-score').textContent = leaderboard[2] ? `${leaderboard[2].score} Pts` : '0 Pts';

        // Render Table Body
        const tbody = document.getElementById('leaderboard-tbody');
        if (tbody) {
            tbody.innerHTML = '';
            leaderboard.forEach((item, index) => {
                const tr = document.createElement('tr');
                const isCurrentUser = user && item.nama.toLowerCase() === user.nama.toLowerCase();
                if (isCurrentUser) {
                    tr.style.backgroundColor = '#eff6ff';
                    tr.style.fontWeight = 'bold';
                }

                tr.innerHTML = `
                    <td><strong>#${index + 1}</strong></td>
                    <td>${item.nama} ${isCurrentUser ? '(Kamu)' : ''}</td>
                    <td>${item.sekolah}</td>
                    <td><strong>${item.score} Pts</strong></td>
                `;
                tbody.appendChild(tr);
            });
        }
    },

    updateUserGreeting() {
        const user = StorageManager.getUser();
        if (user) {
            document.getElementById('nav-user-name').textContent = user.nama;
            document.getElementById('hero-greeting').textContent = `Halo, ${user.nama}! 👋`;
        }
    }
};
