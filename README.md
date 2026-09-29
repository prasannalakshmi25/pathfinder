# 🚀 Nexa – Career & Skill Development Platform

Nexa is an interactive **Career and Skill Development Platform** designed to help students explore career paths, understand required skills, build learning roadmaps, and track their professional development.

The platform provides a simple and engaging interface where users can explore career options and follow structured learning paths.

---

## 🌟 Features

### 🛣️ Career Roadmaps

* Explore different career paths.
* View skills required for each career.
* Follow structured learning roadmaps.
* Explore individual topics and concepts.

### 📊 Dashboard

* Personalized user dashboard.
* Track learning progress.
* Monitor completed skills and topics.
* View career-related information.

### 📄 Resume Analysis

* Analyze resume-related information.
* Identify skills and improvement areas.
* Support career preparation.

### 🤖 AI Career Assistant

* Interactive career guidance.
* Ask career and skill-related questions.
* Get assistance with learning paths and professional development.

### 🔐 User Authentication

* User registration and login.
* Supabase Authentication integration.
* Personalized user experience.

---

## 🛠️ Technologies Used

* **HTML5** – Website structure
* **CSS3** – Styling and responsive UI
* **JavaScript** – Application functionality
* **Supabase** – Authentication and backend services
* **Git** – Version control
* **GitHub** – Source code management and deployment

---

## 📂 Project Structure

```text
Nexa/
│
├── index.html
├── login.html
├── login.js
├── supabase.js
├── README.md
└── other project files
```

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project folder

```bash
cd nexa
```

### 3. Start a local server

Using `npx`:

```bash
npx serve .
```

Or using Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## 🔐 Supabase Setup

Create a project in Supabase and obtain:

* **Project URL**
* **Publishable Key**

Add them to `supabase.js`:

```javascript
import { createClient } from
    'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'YOUR_SUPABASE_PROJECT_URL';
const supabaseKey = 'YOUR_SUPABASE_PUBLISHABLE_KEY';

const supabase = createClient(
    supabaseUrl,
    supabaseKey
);

export { supabase };
```

### ⚠️ Security

Never add a Supabase **secret/service-role key** to frontend files or upload it to GitHub.

Use only the browser-safe **Publishable Key** and configure appropriate Row Level Security (RLS) policies.

---

## 🌐 Deployment

The project can be deployed using **GitHub Pages**.

### GitHub Pages

1. Open the GitHub repository.
2. Go to **Settings**.
3. Select **Pages**.
4. Select **Deploy from a branch**.
5. Choose:

   * Branch: `main`
   * Folder: `/ (root)`
6. Click **Save**.

Your website will then be available through your GitHub Pages URL.

---

## 🎯 Project Objectives

Nexa aims to:

* Help students explore career opportunities.
* Provide structured career roadmaps.
* Identify important technical skills.
* Support resume preparation.
* Provide career guidance.
* Track learning progress.
* Make career development easier and more organized.

---

## 🔮 Future Enhancements

* [ ] Advanced AI-powered career recommendations
* [ ] Complete resume parsing
* [ ] Skill-gap analysis
* [ ] Job recommendations
* [ ] Interview preparation
* [ ] Progress analytics
* [ ] Personalized learning plans
* [ ] Additional career roadmaps
* [ ] Enhanced mobile responsiveness

---

## 👨‍💻 Project Information

**Project Name:** Nexa
**Category:** Career & Skill Development
**Purpose:** Student Career Guidance and Skill Development

Built as a student-focused platform to help learners understand career paths and develop the skills required for their professional journey.

---

## 📜 License

This project is developed for **educational and hackathon purposes**.
