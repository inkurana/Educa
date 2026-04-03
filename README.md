# Educa - Online Education Platform 🎓

Educa is a responsive online education platform designed to deliver courses, quizzes, and track student progress. Built with a lightweight tech stack consisting of HTML, CSS, JavaScript for the frontend, and PHP for backend database management.

## 🚀 Features

* **Interactive Frontend:** Built with vanilla JavaScript to handle UI components and dynamic data.
* **Authentication:** Login system with user session handling.
* **Quiz Engine:** Built-in quiz system for course assessments (`quiz-engine.js`).
* **Progress Tracking:** Saves user progress through backend PHP integration.
* **Responsive Design:** Mobile-friendly layouts configured via custom CSS.
* **Data Management:** Uses XML (`lessons.xml`) for structured lesson data and SQL (`schema.sql`) for database setup.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Backend:** PHP
* **Database:** MySQL / MariaDB (via XAMPP/WAMP)
* **Data Formats:** XML, JSON

## 📂 Project Structure

```text
Educa/
├── assets/
│   └── images/            # Image assets for the platform
├── backend/
│   ├── config.php         # Database and server configuration
│   ├── save_progress.php  # Handles saving student progress
│   └── .env               # Environment variables (Do not commit actual credentials)
├── css/
│   ├── main.css           # Global stylesheets
│   └── responsive.css     # Media queries for mobile support
├── data/
│   ├── lessons.xml        # Structured course and lesson data
│   └── schema.sql         # Database tables setup
├── js/
│   ├── api-handler.js     # Manages API requests to the PHP backend
│   ├── app.js             # Main application logic
│   ├── login.js           # Handles authentication logic
│   ├── pricing.js         # Logic for the pricing page
│   └── quiz-engine.js     # Runs the interactive quizzes
├── index.html             # Main landing/dashboard page
├── login.html             # User login page
└── pricing.html           # Subscription/Pricing page
```


⚙️ Installation & Setup
* To run this project locally, you will need a local server environment like XAMPP, WAMP, or MAMP because it uses PHP.

## Clone the repository: git clone [https://github.com/inkurana/Educa.git](https://github.com/inkurana/Educa.git)

* Move to your local server directory:
* Move the cloned Educa folder into your local server's web directory (e.g., C:\xampp\htdocs\Educa if you are using XAMPP).

## 📐Database Setup:

* Open phpMyAdmin (usually http://localhost/phpmyadmin).
* Create a new database named educa_db (or as specified in your config).
* Import the data/schema.sql file to generate the required tables.

⚡Environment Configuration:

Open backend/config.php and ensure the database credentials match your local setup (usually root for username and an empty password for local XAMPP).

🏃Run the Platform:

Open your web browser and navigate to: http://localhost/Educa/index.html

🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

📝 License
This project is open-source and available under the MIT License.

## 🎥 Project Demo


https://github.com/user-attachments/assets/2084dcf9-0615-4c94-83ce-95f84d94a283


