// auth.js - very small demo authentication (frontend only)
// Demo users are hardcoded. Replace this with a real backend for production.
(function() {
  const demoUsers = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'teacher', password: 'teach123', role: 'teacher' },
    { username: 'student', password: 'student123', role: 'student' }
  ];

  function findUser(u, p) {
    return demoUsers.find(x => x.username === u && x.password === p);
  }

  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const msg = document.getElementById('message');

    const user = findUser(username, password);
    if (!user) {
      msg.textContent = 'Invalid username or password.';
      return;
    }

    // store a minimal session in localStorage (demo only)
    localStorage.setItem('sms_user', JSON.stringify({ username: user.username, role: user.role }));
    location.href = '/school-management/dashboard.html';
  });
})();
