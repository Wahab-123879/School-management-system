# School Management System (Demo)

This is a small demo project added to the repository to illustrate a simple School Management System frontend with a login flow.

Features included:
- Login page with demo accounts (frontend-only, hardcoded credentials).
- Simple dashboard protected by checking a localStorage session.
- Minimal HTML/CSS/JS structure to build on.

Demo accounts (for testing):
- admin / admin123
- teacher / teach123
- student / student123

How to test locally:
1. Open `docs/school-management/login.html` in your browser (double-click the file or serve the repo via a static server).
2. Use one of the demo accounts above to sign in.
3. You will be redirected to the dashboard which shows a placeholder UI.

GitHub Pages live URL (after publishing):
https://Wahab-123879.github.io/wahab-portfolio/school-management/index.html

Notes:
- Publishing may take a minute. If you still see a 404 after a short wait, check repository Settings → Pages and ensure the site is configured to use the `main` branch and the `/docs` folder as source.
- If the repo is private, GitHub Pages won't publish from the `/docs` folder for free accounts.

Next steps to make this production-ready:
- Implement a backend (Node/Express, Django, etc.) with secure password storage (bcrypt) and a database for users.
- Replace frontend-only auth with server-side session or JWT-based authentication.
- Add features: student/teacher management, classes, attendance, grades, role-based access control, validations, and tests.

If you want, I can enable the Pages source setting or open a PR that moves the site into `docs/` (already done) and verifies publishing — tell me and I'll continue.
