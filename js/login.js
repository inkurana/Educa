let isLogin = true;

function switchTab(tab) {
    const loginTab = document.getElementById('tab-login');
    const registerTab = document.getElementById('tab-register');
    const nameGroup = document.getElementById('name-group');
    const formTitle = document.getElementById('form-title');
    const submitBtn = document.getElementById('submit-btn');

    if (tab === 'login') {
        isLogin = true;
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        nameGroup.classList.add('hidden');
        nameGroup.querySelector('input').required = false;
        formTitle.innerText = 'Welcome Back';
        submitBtn.innerText = 'Log In';
    } else {
        isLogin = false;
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        nameGroup.classList.remove('hidden');
        nameGroup.querySelector('input').required = true;
        formTitle.innerText = 'Create Account';
        submitBtn.innerText = 'Sign Up';
    }
}

function handleLogin(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    // Simulate authentication processing
    const btn = document.getElementById('submit-btn');
    const originalText = btn.innerText;
    btn.innerText = 'Processing...';
    btn.style.opacity = '0.7';

    // Redirect to home page after 1 second to simulate logging in
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}