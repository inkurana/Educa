const platformData = {
    home: `
        <div class="hero-section fade-in">
            <div class="hero-content">
                <h1 class="hero-title">Education at your<br>fingertips</h1>
                <p class="hero-subtitle">Beginning set. Every the subdue that our for green stars second there god upon.</p>
                <div class="hero-buttons">
                    <button class="btn-primary-green" onclick="loadContent('courses')">Get Started</button>
                    <button class="btn-ghost" onclick="loadContent('auth')">Login / Sign Up</button>
                </div>
            </div>
            
            <div class="hero-images">
                <div class="image-wrapper img-1">
                    <div class="green-outline outline-1"></div>
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" alt="Student 1">
                </div>
                
                <div class="image-wrapper img-2">
                    <div class="green-outline outline-2"></div>
                    <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=500&q=80" alt="Student 2">
                </div>
            </div>
        </div>
    `,

    // ==========================================
    // NEW: AUTHENTICATION PAGE
    // ==========================================
    auth: `
        <div class="stellar-header fade-in" style="text-align: center; margin-bottom: 20px;">
            <h1 class="gradient-text" id="auth-title">Welcome Back</h1>
            <p id="auth-subtitle">Log in to continue your learning journey.</p>
        </div>
        <div class="bento-card feature-card fade-in" style="max-width: 450px; margin: 0 auto; padding: 30px;">
            
            <div style="display: flex; gap: 10px; margin-bottom: 30px; background: rgba(255,255,255,0.05); padding: 6px; border-radius: 12px;">
                <button class="btn-ghost" id="btn-login-tab" style="flex: 1; padding: 12px; border-radius: 8px; background: var(--card-bg); box-shadow: 0 4px 15px rgba(0,0,0,0.1); color: var(--text-primary); transition: 0.3s;" onclick="switchAuth('login')">Log In</button>
                <button class="btn-ghost" id="btn-signup-tab" style="flex: 1; padding: 12px; border-radius: 8px; background: transparent; color: var(--text-muted); transition: 0.3s;" onclick="switchAuth('signup')">Sign Up</button>
            </div>

            <div id="login-form" style="display: flex; flex-direction: column; gap: 18px; animation: fadeIn 0.4s ease-out;">
                <div>
                    <label style="font-size: 14px; color: var(--text-muted); margin-bottom: 8px; display: block;">Email Address</label>
                    <div style="position: relative;">
                        <i class="ph ph-envelope-simple" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--text-muted); font-size: 18px;"></i>
                        <input type="email" placeholder="you@example.com" style="width: 100%; padding: 14px 14px 14px 45px; border-radius: 8px; border: 1px solid var(--card-border); background: rgba(0,0,0,0.2); color: var(--text-primary); transition: 0.3s outline;" onfocus="this.style.borderColor='#4ade80'" onblur="this.style.borderColor='var(--card-border)'">
                    </div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <label style="font-size: 14px; color: var(--text-muted);">Password</label>
                        <a href="#" style="color: #4ade80; font-size: 12px; text-decoration: none;">Forgot Password?</a>
                    </div>
                    <div style="position: relative;">
                        <i class="ph ph-lock-key" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--text-muted); font-size: 18px;"></i>
                        <input type="password" placeholder="••••••••" style="width: 100%; padding: 14px 14px 14px 45px; border-radius: 8px; border: 1px solid var(--card-border); background: rgba(0,0,0,0.2); color: var(--text-primary); transition: 0.3s;" onfocus="this.style.borderColor='#4ade80'" onblur="this.style.borderColor='var(--card-border)'">
                    </div>
                </div>
                <button class="primary-btn" style="width: 100%; margin-top: 15px; padding: 14px; font-size: 16px;" onclick="loadContent('dashboard')">Log In</button>
            </div>

            <div id="signup-form" style="display: none; flex-direction: column; gap: 18px; animation: fadeIn 0.4s ease-out;">
                <div>
                    <label style="font-size: 14px; color: var(--text-muted); margin-bottom: 8px; display: block;">Full Name</label>
                    <div style="position: relative;">
                        <i class="ph ph-user" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--text-muted); font-size: 18px;"></i>
                        <input type="text" placeholder="Inkunika Rana" style="width: 100%; padding: 14px 14px 14px 45px; border-radius: 8px; border: 1px solid var(--card-border); background: rgba(0,0,0,0.2); color: var(--text-primary); transition: 0.3s;" onfocus="this.style.borderColor='#60a5fa'" onblur="this.style.borderColor='var(--card-border)'">
                    </div>
                </div>
                <div>
                    <label style="font-size: 14px; color: var(--text-muted); margin-bottom: 8px; display: block;">Email Address</label>
                    <div style="position: relative;">
                        <i class="ph ph-envelope-simple" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--text-muted); font-size: 18px;"></i>
                        <input type="email" placeholder="you@example.com" style="width: 100%; padding: 14px 14px 14px 45px; border-radius: 8px; border: 1px solid var(--card-border); background: rgba(0,0,0,0.2); color: var(--text-primary); transition: 0.3s;" onfocus="this.style.borderColor='#60a5fa'" onblur="this.style.borderColor='var(--card-border)'">
                    </div>
                </div>
                <div>
                    <label style="font-size: 14px; color: var(--text-muted); margin-bottom: 8px; display: block;">Password</label>
                    <div style="position: relative;">
                        <i class="ph ph-lock-key" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--text-muted); font-size: 18px;"></i>
                        <input type="password" placeholder="Create a strong password" style="width: 100%; padding: 14px 14px 14px 45px; border-radius: 8px; border: 1px solid var(--card-border); background: rgba(0,0,0,0.2); color: var(--text-primary); transition: 0.3s;" onfocus="this.style.borderColor='#60a5fa'" onblur="this.style.borderColor='var(--card-border)'">
                    </div>
                </div>
                <button class="primary-btn" style="width: 100%; margin-top: 15px; padding: 14px; font-size: 16px; background: #60a5fa; border-color: #60a5fa;" onclick="loadContent('dashboard')">Create Account</button>
            </div>

        </div>
        <style>
            @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        </style>
    `,

    dashboard: `
        <div class="stellar-header">
            <h1 class="gradient-text">Welcome back, Inkunika.</h1>
            <p>Pick up right where you left off.</p>
        </div>

        <div class="bento-grid">
            <div class="bento-card feature-card">
                <h3><i class="ph ph-code"></i> Active Course</h3>
                <h2>Advanced Web 3.0 Architecture</h2>
                <div class="progress-bar"><div class="progress-fill" style="width: 65%;"></div></div>
                <p>65% Completed</p>
                <button class="primary-btn mt-2" onclick="loadContent('lesson1')">Continue Learning</button>
            </div>

            <div class="bento-card stat-card">
                <i class="ph ph-target"></i>
                <div>
                    <h3>Quizzes Passed</h3>
                    <h2>12</h2>
                </div>
            </div>

            <div class="bento-card stat-card">
                <i class="ph ph-trend-up"></i>
                <div>
                    <h3>Total XP</h3>
                    <h2 class="gradient-text">2,450</h2>
                </div>
            </div>
        </div>
    `,

    courses: `
        <div class="stellar-header">
            <h1 class="gradient-text">Explore Courses</h1>
            <p>Level up your skills with our premium modules.</p>
        </div>
        <div class="bento-grid" style="grid-template-columns: repeat(4, 1fr);">
            <div class="bento-card course-card">
                <div class="course-img-wrapper">
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80" alt="Course 1">
                    <div class="course-hover-popup">
                        <p>Learn the ultimate UI/UX design principles.</p>
                        <button class="primary-btn" onclick="loadContent('lesson1')">View Course</button>
                    </div>
                </div>
                <h3>Advanced UI/UX Design</h3>
            </div>

            <div class="bento-card course-card">
                <div class="course-img-wrapper">
                    <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80" alt="Course 2">
                    <div class="course-hover-popup">
                        <p>Master Web3 and Blockchain architecture.</p>
                        <button class="primary-btn" onclick="loadContent('lesson1')">View Course</button>
                    </div>
                </div>
                <h3>Web 3.0 Architecture</h3>
            </div>

            <div class="bento-card course-card">
                <div class="course-img-wrapper">
                    <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=500&q=80" alt="Course 3">
                    <div class="course-hover-popup">
                        <p>Deep dive into modern Python and AI.</p>
                        <button class="primary-btn" onclick="loadContent('lesson1')">View Course</button>
                    </div>
                </div>
                <h3>Data Science & AI</h3>
            </div>

            <div class="bento-card course-card">
                <div class="course-img-wrapper">
                    <img src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=500&q=80" alt="Course 4">
                    <div class="course-hover-popup">
                        <p>Protect networks with ethical hacking.</p>
                        <button class="primary-btn" onclick="loadContent('lesson1')">View Course</button>
                    </div>
                </div>
                <h3>Cybersecurity 101</h3>
            </div>
        </div>
    `,

    teachers: `
        <div class="stellar-header">
            <h1 class="gradient-text">Meet Your Mentors</h1>
            <p>Learn from India's top industry experts.</p>
        </div>
        <div class="bento-grid">
            <div class="bento-card teacher-card">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aditi" alt="Teacher">
                <div>
                    <h2>Aditi Desai</h2>
                    <p style="color: var(--text-muted); font-size: 14px;">Lead UI/UX Designer</p>
                </div>
            </div>
            <div class="bento-card teacher-card">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram" alt="Teacher">
                <div>
                    <h2>Vikram Singh</h2>
                    <p style="color: var(--text-muted); font-size: 14px;">Senior Web3 Developer</p>
                </div>
            </div>
            <div class="bento-card teacher-card">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" alt="Teacher">
                <div>
                    <h2>Priya Sharma</h2>
                    <p style="color: var(--text-muted); font-size: 14px;">AI & Machine Learning</p>
                </div>
            </div>
        </div>
    `,

    about: `
        <div class="stellar-header">
            <h1 class="gradient-text">About Educa.</h1>
        </div>
        <div class="bento-card feature-card">
            <h2>Our Mission</h2>
            <p style="font-size: 16px; line-height: 1.6;">We believe in democratizing education. Educa is a next-generation platform designed to bridge the gap between complex subjects and eager learners using state-of-the-art UI and interactive learning mechanisms. Born in 2024, our goal is to reach 1 million developers.</p>
        </div>
    `,

    contact: `
        <div class="stellar-header">
            <h1 class="gradient-text">Get in touch</h1>
            <p>We'd love to hear from you.</p>
        </div>
        <div class="bento-grid">
            <div class="bento-card feature-card">
                <h3 style="margin-bottom: 20px;"><i class="ph ph-envelope-simple"></i> Send us a message</h3>
                <input type="text" placeholder="Your Name" style="width: 100%; padding: 12px; margin-bottom: 12px; border-radius: 8px; border: 1px solid var(--card-border); background: transparent; color: var(--text-primary);">
                <input type="email" placeholder="Your Email" style="width: 100%; padding: 12px; margin-bottom: 12px; border-radius: 8px; border: 1px solid var(--card-border); background: transparent; color: var(--text-primary);">
                <textarea placeholder="How can we help?" style="width: 100%; padding: 12px; margin-bottom: 12px; border-radius: 8px; border: 1px solid var(--card-border); background: transparent; color: var(--text-primary); height: 100px;"></textarea>
                <button class="primary-btn">Send Message</button>
            </div>
            
            <div class="bento-card stat-card" style="display: flex; flex-direction: column; align-items: flex-start;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                    <i class="ph ph-map-pin" style="font-size: 24px; color: #4ade80;"></i>
                    <h3>Our Headquarters</h3>
                </div>
                
                <div id="map-container" style="width: 100%; height: 200px; border-radius: 8px; overflow: hidden; background: var(--card-hover); display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                    <span style="color: var(--text-muted);">Loading Map...</span>
                </div>
                
                <h2 id="contact-city-text" style="font-size: 18px;">Galgotias University, Greater Noida, UP</h2>
            </div>
        </div>
    `,

    quizzes: `
        <div class="stellar-header fade-in">
            <h1 class="gradient-text">Generative Quiz Engine</h1>
            <p>Select a core CSE subject to test your knowledge.</p>
        </div>
        
        <div class="bento-grid fade-in" style="grid-template-columns: repeat(3, 1fr);">
            
            <div class="bento-card feature-card" style="cursor: pointer; transition: 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'" onclick="startSubjectQuiz('DSA')">
                <h2 style="font-size: 32px; color: #4ade80; margin-bottom: 15px;"><i class="ph ph-code"></i></h2>
                <h2>Data Structures & Algorithms</h2>
                <p style="margin-top: 10px; font-size: 14px; color: var(--text-muted);">Arrays, Trees, Graphs, DP & more.</p>
                <button class="primary-btn mt-2" style="width: 100%; margin-top: 15px;">Start Quiz</button>
            </div>

            <div class="bento-card feature-card" style="cursor: pointer; transition: 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'" onclick="startSubjectQuiz('DBMS')">
                <h2 style="font-size: 32px; color: #60a5fa; margin-bottom: 15px;"><i class="ph ph-database"></i></h2>
                <h2>Database Management (DBMS)</h2>
                <p style="margin-top: 10px; font-size: 14px; color: var(--text-muted);">SQL, Normalization, Transactions.</p>
                <button class="primary-btn mt-2" style="width: 100%; margin-top: 15px;">Start Quiz</button>
            </div>

            <div class="bento-card feature-card" style="cursor: pointer; transition: 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'" onclick="startSubjectQuiz('OS')">
                <h2 style="font-size: 32px; color: #f472b6; margin-bottom: 15px;"><i class="ph ph-cpu"></i></h2>
                <h2>Operating Systems</h2>
                <p style="margin-top: 10px; font-size: 14px; color: var(--text-muted);">Threads, Memory, Deadlocks.</p>
                <button class="primary-btn mt-2" style="width: 100%; margin-top: 15px;">Start Quiz</button>
            </div>

            <div class="bento-card feature-card" style="cursor: pointer; transition: 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'" onclick="startSubjectQuiz('Computer Networks')">
                <h2 style="font-size: 32px; color: #fbbf24; margin-bottom: 15px;"><i class="ph ph-globe"></i></h2>
                <h2>Computer Networks</h2>
                <p style="margin-top: 10px; font-size: 14px; color: var(--text-muted);">OSI Model, TCP/IP, Routing.</p>
                <button class="primary-btn mt-2" style="width: 100%; margin-top: 15px;">Start Quiz</button>
            </div>

            <div class="bento-card feature-card" style="cursor: pointer; transition: 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'" onclick="startSubjectQuiz('Software Engineering')">
                <h2 style="font-size: 32px; color: #a78bfa; margin-bottom: 15px;"><i class="ph ph-terminal-window"></i></h2>
                <h2>Software Engineering</h2>
                <p style="margin-top: 10px; font-size: 14px; color: var(--text-muted);">SDLC, Agile, Testing, CI/CD.</p>
                <button class="primary-btn mt-2" style="width: 100%; margin-top: 15px;">Start Quiz</button>
            </div>

            <div class="bento-card feature-card" style="cursor: pointer; transition: 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'" onclick="startSubjectQuiz('OOPs')">
                <h2 style="font-size: 32px; color: #fb923c; margin-bottom: 15px;"><i class="ph ph-brackets-curly"></i></h2>
                <h2>Object Oriented Prog.</h2>
                <p style="margin-top: 10px; font-size: 14px; color: var(--text-muted);">Classes, Inheritance, Polymorphism.</p>
                <button class="primary-btn mt-2" style="width: 100%; margin-top: 15px;">Start Quiz</button>
            </div>
            
        </div>
    `
};

// ==========================================
// NEW: LOGIC TO TOGGLE LOGIN & SIGNUP FORMS
// ==========================================
function switchAuth(mode) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginTab = document.getElementById('btn-login-tab');
    const signupTab = document.getElementById('btn-signup-tab');
    const title = document.getElementById('auth-title');
    const subtitle = document.getElementById('auth-subtitle');

    if (mode === 'signup') {
        loginForm.style.display = 'none';
        signupForm.style.display = 'flex';
        
        loginTab.style.background = 'transparent';
        loginTab.style.color = 'var(--text-muted)';
        loginTab.style.boxShadow = 'none';
        
        signupTab.style.background = 'var(--card-bg)';
        signupTab.style.color = 'var(--text-primary)';
        signupTab.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        
        title.innerHTML = 'Join <span style="color: #60a5fa;">Educa.</span>';
        subtitle.innerText = 'Create an account to start learning today.';
    } else {
        signupForm.style.display = 'none';
        loginForm.style.display = 'flex';
        
        signupTab.style.background = 'transparent';
        signupTab.style.color = 'var(--text-muted)';
        signupTab.style.boxShadow = 'none';
        
        loginTab.style.background = 'var(--card-bg)';
        loginTab.style.color = 'var(--text-primary)';
        loginTab.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        
        title.innerHTML = 'Welcome Back';
        subtitle.innerText = 'Log in to continue your learning journey.';
    }
}

// --- Function to change content dynamically ---
function loadContent(section) {
    const contentDiv = document.getElementById('dynamic-content');
    const sidebar = document.getElementById('app-sidebar');
    const dashboardHeader = document.querySelector('.content-area .top-nav');
    
    // Reset animation
    contentDiv.classList.remove('fade-in');
    
    // Safely update active state on sidebar buttons
    const currentEvent = typeof event !== 'undefined' ? event : window.event;
    if(currentEvent && currentEvent.currentTarget && currentEvent.currentTarget.tagName === 'BUTTON') {
        document.querySelectorAll('.nav-links button').forEach(btn => btn.classList.remove('active'));
        // Only add active class if it's not a generic action button inside the UI
        if(currentEvent.currentTarget.parentElement.classList.contains('nav-links')){
            currentEvent.currentTarget.classList.add('active');
        }
    }
    
    setTimeout(() => {
        // Load the actual content
        if (platformData[section]) {
            contentDiv.innerHTML = platformData[section];
        } else {
            contentDiv.innerHTML = `<h2 style="padding: 20px;">Content Coming Soon...</h2>`;
        }
        
        contentDiv.classList.add('fade-in');

        if (section === 'contact') {
            updateContactMap();
        }
        
        if (section === 'home' || section === 'auth') {
            if(sidebar) sidebar.style.display = 'none';
            if(dashboardHeader) dashboardHeader.style.display = 'none';
        } else {
            if(sidebar) sidebar.style.display = 'block'; 
            if(dashboardHeader) dashboardHeader.style.display = 'flex';
        }
    }, 50); 
}

function toggleTheme() {
    const body = document.body;
    const themeBtnIcon = document.querySelector('#theme-toggle i');
    
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        themeBtnIcon.classList.remove('ph-sun');
        themeBtnIcon.classList.add('ph-moon'); 
        localStorage.setItem('educa_theme', 'light'); 
    } else {
        themeBtnIcon.classList.remove('ph-moon');
        themeBtnIcon.classList.add('ph-sun'); 
        localStorage.setItem('educa_theme', 'dark'); 
    }
}

// --- Functions to toggle the sidebar width ---
function openSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    if(sidebar) sidebar.classList.remove('collapsed');
}

function closeSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    if(sidebar) sidebar.classList.add('collapsed');
}

function updateContactMap() {
    const mapContainer = document.getElementById('map-container');
    
    if (mapContainer) {
        // Google Maps Iframe pointing exactly to Galgotias University
        mapContainer.innerHTML = `
            <iframe 
                width="100%" 
                height="100%" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0" 
                src="https://maps.google.com/maps?q=Galgotias+University,+Greater+Noida,+Uttar+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                style="border: 0; filter: contrast(1.2) opacity(0.9);"
            ></iframe>
        `;
    }
}

// --- Hardcoded Top-Nav Location ---
function fetchUserLocation() {
    const locationSpan = document.getElementById('user-location');
    if(locationSpan) {
        locationSpan.innerText = "Greater Noida, UP";
    }
}

// --- Page Load Executions (Theme & Location) ---
window.addEventListener('DOMContentLoaded', () => {
    // Theme Check
    const savedTheme = localStorage.getItem('educa_theme');
    const themeBtnIcon = document.querySelector('#theme-toggle i');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeBtnIcon) {
            themeBtnIcon.classList.remove('ph-sun');
            themeBtnIcon.classList.add('ph-moon');
        }
    }
    
  
    
    fetchUserLocation();
});

const questionsData = {
    "DSA": [
        { q: "Which data structure works on LIFO principle?", a: ["Queue", "Stack", "Tree", "Linked List"], correct: 1 },
        { q: "What is the time complexity of Binary Search?", a: ["O(n)", "O(n^2)", "O(log n)", "O(1)"], correct: 2 },
        { q: "Which of these is a non-linear data structure?", a: ["Array", "Stack", "Queue", "Graph"], correct: 3 }
    ],
    "DBMS": [
        { q: "What does SQL stand for?", a: ["Simple Query Language", "Structured Query Language", "System Query List", "None of the above"], correct: 1 },
        { q: "Which normal form removes partial dependency?", a: ["1NF", "2NF", "3NF", "BCNF"], correct: 1 }
    ],
    "OS": [
        { q: "What is the core of an Operating System called?", a: ["Shell", "Kernel", "Command", "Process"], correct: 1 },
        { q: "Which of the following is not an OS?", a: ["Linux", "Windows", "Oracle", "DOS"], correct: 2 }
    ],
    "Computer Networks": [
        { q: "How many layers are in the OSI model?", a: ["5", "6", "7", "8"], correct: 2 },
        { q: "Which protocol is used to send emails?", a: ["HTTP", "FTP", "SMTP", "POP3"], correct: 2 }
    ],
    "Software Engineering": [
        { q: "What does SDLC stand for?", a: ["System Design Life Cycle", "Software Development Life Cycle", "System Data Logic", "Software Design Logic"], correct: 1 },
        { q: "Which model is heavily dependent on user feedback?", a: ["Waterfall", "Spiral", "Agile", "V-Model"], correct: 2 }
    ],
    "OOPs": [
        { q: "Which of the following is NOT an OOP concept?", a: ["Encapsulation", "Polymorphism", "Compilation", "Inheritance"], correct: 2 },
        { q: "Hiding internal details and showing functionality is called?", a: ["Abstraction", "Inheritance", "Overloading", "Encapsulation"], correct: 0 }
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let currentSubject = "";

// --- Quiz Start Handler ---
function startSubjectQuiz(subject) {
    currentSubject = subject;
    currentQuestionIndex = 0;
    score = 0;
    renderQuestion();
}

// --- Render Question ---
function renderQuestion() {
    const questions = questionsData[currentSubject];
    const qData = questions[currentQuestionIndex];
    const contentDiv = document.getElementById('dynamic-content');

    contentDiv.innerHTML = `
        <div class="stellar-header fade-in">
            <h1 class="gradient-text">${currentSubject} Quiz</h1>
            <p>Question ${currentQuestionIndex + 1} of ${questions.length}</p>
        </div>
        <div class="bento-card feature-card fade-in" style="max-width: 600px; margin: 0 auto;">
            <h2 style="margin-bottom: 20px; font-size: 22px;">${qData.q}</h2>
            <div class="quiz-options" style="display: flex; flex-direction: column; gap: 12px;">
                ${qData.a.map((opt, i) => `
                    <button class="btn-ghost" style="text-align: left; padding: 15px; font-size: 16px; width: 100%; transition: 0.2s;" onmouseover="this.style.backgroundColor='var(--card-hover)'" onmouseout="this.style.backgroundColor='transparent'" onclick="checkAnswer(${i})">${opt}</button>
                `).join('')}
            </div>
        </div>
    `;
}

// --- Check Answer & Proceed ---
function checkAnswer(selectedIndex) {
    const questions = questionsData[currentSubject];
    if (selectedIndex === questions[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

// --- Show Final Score ---
function showResults() {
    const contentDiv = document.getElementById('dynamic-content');
    let message = score === questionsData[currentSubject].length ? "Excellent!" : "Good effort!";
    
    contentDiv.innerHTML = `
        <div class="stellar-header fade-in" style="text-align: center; max-width: 600px; margin: 40px auto;">
            <h1 class="gradient-text">Quiz Completed!</h1>
            <p>${message}</p>
            <div class="bento-card" style="margin-top: 30px; background: var(--card-bg);">
                <h2 style="font-size: 48px; margin: 20px 0; color: #4ade80;">${score} / ${questionsData[currentSubject].length}</h2>
                <p style="color: var(--text-muted); margin-bottom: 30px;">You have successfully completed the ${currentSubject} module.</p>
                <button class="btn-primary-green" onclick="loadContent('quizzes')" style="width: 100%;">Back to Subject Selection</button>
            </div>
        </div>
    `;
}