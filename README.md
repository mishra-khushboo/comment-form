
# 📝 React Comments Form

A simple **React application** that allows users to submit comments with a username, remarks, and rating using controlled form components.

---

## 🚀 Features

✅ User comment submission form
✅ Controlled inputs using React `useState`
✅ Dynamic form handling
✅ Rating system (1–5)
✅ Simple and beginner-friendly React structure

---

## 📂 Project Structure

```
src/
│
├── App.js
├── CommentsForm.js
├── App.css
└── index.js
```

---

## ⚙️ Technologies Used

* ⚛️ React.js
* JavaScript (ES6)
* HTML5
* CSS3

---

## 🧩 Components

### 1️⃣ App Component

The main component that renders the `CommentsForm`.

```jsx
import './App.css'
import CommentsForm from './CommentsForm'

function App() {
  return (
    <>
      <CommentsForm />
    </>
  )
}

export default App
```

---

### 2️⃣ CommentsForm Component

Handles:

* Form state management
* Input changes
* Form submission

#### State Structure

```js
{
  username: "",
  remarks: "",
  rating: 5
}
```

#### Functionalities

* Uses `useState` for managing form data.
* Single handler updates multiple inputs using `name` attribute.
* Prevents page refresh using `event.preventDefault()`.

---

## 🧠 Key Concepts Used

* Controlled Components
* React Hooks (`useState`)
* Event Handling
* Form Handling in React
* Dynamic State Updates

---

## 🖥️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/comments-form.git
```

### 2️⃣ Navigate to Project

```bash
cd comments-form
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Run Project

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
---

## 🔮 Future Improvements

* Store submitted comments
* Display comment list
* Form validation
* Toast notifications
* Backend integration (API)

---

## 👩‍💻 Author

**Khushboo Mishra**
IT Engineer | React Learner | Software Developer


