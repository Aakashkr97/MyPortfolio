

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const skillDetailsData = {
    'HTML': 'HyperText Markup Language (HTML) is the standard markup language for creating web pages. It forms the structure of web pages and is used alongside CSS and JavaScript.',
    'CSS': 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
    'JavaScript': 'JavaScript is a programming language that is commonly used to create interactive effects within web browsers. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.',
    'React': 'React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.',
    'Node.js': 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows you to run JavaScript on the server, making it possible to build scalable network applications.',
    'Express':  'Express JS is a small framework that works on top of Node web server functionality to simplify its APIs and add helpful new features.',
    'MongoDB': 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
    'MySQL': 'MySQL is an open-source relational database management system. It is widely used for database-driven web applications and is known for its reliability, robustness, and ease of use.',
    'GitHub': 'GitHub is a web-based platform used for version control. It uses Git, an open-source version control software, to help manage and store revisions of projects.',
    'Bootstrap': 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.'
};

// Function to show skill details
const showSkillDetails = (skill) => {
    const skillDetails = document.getElementById('skill-details');
    skillDetails.innerHTML = `<h3>${skill}</h3><p>${skillDetailsData[skill]}</p>`;
    skillDetails.style.display = 'block';
};

// Add event listeners to skill boxes
document.querySelectorAll('.skill-box').forEach(skillBox => {
    skillBox.addEventListener('click', () => {
        const skillName = skillBox.querySelector('h4').textContent;
        showSkillDetails(skillName);
    });
});

