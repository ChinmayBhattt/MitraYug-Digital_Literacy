## Digital Literacy Learning Game

The **Digital Literacy Learning Game** is an interactive web-based platform designed to teach essential digital skills. It covers fundamental topics such as computer basics, internet safety, and responsible digital behavior. The game includes features like light/dark mode, search functionality, and responsive UI for an enhanced user experience.

### Features
- **Chapter-wise Learning**: Users can navigate through different digital literacy topics.
- **Light/Dark Mode**: Toggle between light and dark mode for better accessibility.
- **Search Functionality**: Find specific topics quickly.
- **Responsive UI**: Works on different screen sizes.

### Technologies Used
- **HTML**: Structuring the content
- **CSS**: Styling and UI/UX enhancements
- **JavaScript**: Adding interactivity

### Installation

#### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/digital-literacy-game.git
cd digital-literacy-game
```

#### **2. Open the Project**
Simply open `index.html` in your web browser.

#### **3. Optional: Run with Live Server**
If you have VS Code, install the Live Server extension and click "Go Live" to see updates in real time.

### Code Structure

#### **1. HTML (index.html)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Literacy Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Digital Literacy Learning</h1>
        <button id="themeToggle">Toggle Theme</button>
    </header>
    <input type="text" id="search" placeholder="Search topics...">
    <main>
        <section class="chapter">
            <h2>Chapter 1: Introduction</h2>
            <p>Learn about the basics of using a computer and the internet.</p>
        </section>
        <section class="chapter">
            <h2>Chapter 2: Online Safety</h2>
            <p>Understanding cybersecurity and staying safe online.</p>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>
```

#### **2. CSS (styles.css)**
```css
body {
    font-family: Arial, sans-serif;
    transition: background 0.3s, color 0.3s;
}
.dark-mode {
    background-color: #121212;
    color: white;
}
header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: lightgray;
}
.chapter {
    margin: 20px;
    padding: 15px;
    border: 1px solid gray;
}
```

#### **3. JavaScript (script.js)**
```js
document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('search').addEventListener('input', function(e) {
    let filter = e.target.value.toLowerCase();
    let chapters = document.querySelectorAll('.chapter');
    chapters.forEach(chapter => {
        let text = chapter.textContent.toLowerCase();
        chapter.style.display = text.includes(filter) ? '' : 'none';
    });
});
```

### Future Enhancements
- **Quiz Section**: Add interactive quizzes for better learning.
- **Progress Tracking**: Show users their learning progress.
- **Multilingual Support**: Include support for different languages.

---
**👨‍💻 Contribute**: Feel free to improve or suggest new features!

---
