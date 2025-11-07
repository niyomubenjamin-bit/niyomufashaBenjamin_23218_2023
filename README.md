# NIYOMUFASHA Benjamin - Personal Portfolio Website

A modern, fully responsive personal portfolio website built with HTML, CSS, and JavaScript.

## 📋 Project Information

- **Student Name:** NIYOMUFASHA Benjamin
- **Student ID:** 23218
- **Year:** 2023
- **Repository Name:** NIYOMUFASHABenjamin_23218_2023

## 🚀 Features

- ✅ **Fully Responsive Design** - Works on all devices (mobile, tablet, desktop)
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **Semantic HTML5** - Proper structure and accessibility
- ✅ **CSS Flexbox & Grid** - Modern layout techniques
- ✅ **Interactive Navigation** - Smooth scroll and active section highlighting
- ✅ **Animated Sections** - Fade-in effects and progress bars
- ✅ **Contact Form** - Functional form with validation (front-end only)
- ✅ **Social Media Integration** - FontAwesome icons for social links
- ✅ **Download Resume** - Button to download CV/resume
- ✅ **Scroll to Top Button** - Easy navigation back to top
- ✅ **Mobile Menu** - Hamburger menu for mobile devices

## 📁 Project Structure

```
NIYOMUFASHABenjamin_23218_2023/
│
├── index.html          # Main HTML file
├── styles.css          # Complete stylesheet with responsive design
├── script.js           # JavaScript for interactions and animations
├── README.md           # Project documentation
│
└── assets/             # Asset folder for images and files
    ├── profile-photo.jpg   # Profile picture placeholder
    ├── project1.jpg        # Project screenshot 1
    ├── project2.jpg        # Project screenshot 2
    ├── project3.jpg        # Project screenshot 3
    ├── project4.jpg        # Project screenshot 4
    └── resume.pdf          # Resume/CV file
```

## 📄 Sections Included

1. **Navigation Bar** - Responsive navbar with smooth scroll links
2. **Home Section** - Hero section with profile photo and introduction
3. **About Section** - Personal information and statistics
4. **Education Section** - Timeline of educational background
5. **Experience Section** - Work experience and internships
6. **Projects Section** - Portfolio projects with descriptions
7. **Skills Section** - Technical skills with progress bars and tags
8. **Certificates Section** - Certifications and awards
9. **Contact Section** - Contact information and form
10. **Footer** - Social links and copyright information

## 🎨 Design Features

- **Color Scheme:** Modern blue gradient theme
- **Typography:** Clean, readable Segoe UI font family
- **Layout:** CSS Grid and Flexbox for responsive design
- **Animations:** Smooth hover effects, fade-ins, and transitions
- **Icons:** FontAwesome 6.4.0 for social and UI icons

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality
- **FontAwesome** - Icon library

## 📱 Responsive Breakpoints

- **Desktop:** 1024px and above
- **Tablet:** 768px - 1023px
- **Mobile:** 480px - 767px
- **Small Mobile:** Below 480px

## 🔧 Setup Instructions

1. **Clone or Download** the repository
2. **Replace Placeholder Images:**
   - Add your profile photo as `assets/profile-photo.jpg` (400x400px recommended)
   - Add project screenshots as `assets/project1.jpg`, `project2.jpg`, etc. (600x400px recommended)
   - Add your resume as `assets/resume.pdf`
3. **Update Personal Information:**
   - Open `index.html` and replace placeholder text with your actual information
   - Update contact details (phone, email, LinkedIn, GitHub)
   - Update education, experience, projects, and skills sections
4. **Update Social Links:**
   - Replace placeholder URLs with your actual social media profiles
5. **Open** `index.html` in your web browser

### ✉️ Contact Form Setup

**The contact form uses FormSubmit.co (free, no backend needed!)**

The form is already configured to send emails to `niyomubenjamin@gmail.com`. 

**First time setup:**
1. Open your portfolio in a browser
2. Fill out the contact form and submit
3. Check your email for a confirmation link from FormSubmit
4. Click the confirmation link to activate
5. Done! All future submissions will be sent directly to your email

**To change the email address:**
- Open `index.html` (line 520)
- Change `action="https://formsubmit.co/YOUR_EMAIL@gmail.com"`
- Replace with your email address

## 🌐 How to Use

Simply open the `index.html` file in any modern web browser. No server or build process required!

### For Development:
```bash
# Option 1: Open directly
double-click index.html

# Option 2: Use a local server (recommended)
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server package)
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

## ✏️ Customization Guide

### Colors
Edit CSS variables in `styles.css` (lines 2-15):
```css
:root {
    --primary-color: #2563eb;    /* Change primary color */
    --secondary-color: #1e40af;  /* Change secondary color */
    --accent-color: #3b82f6;     /* Change accent color */
}
```

### Content
All content can be edited directly in `index.html`:
- Personal bio and introduction
- Education timeline
- Work experience
- Projects and descriptions
- Skills and proficiency levels
- Certificates and awards
- Contact information

### Layout
Modify section layouts in `styles.css` using Grid and Flexbox properties.

## 📋 Checklist of Requirements

- ✅ Repository name: `NIYOMUFASHABenjamin_23218_2023`
- ✅ Main file: `index.html`
- ✅ Name as comment at top of HTML and CSS files
- ✅ Clean, structured, readable code
- ✅ Responsive navigation bar (8 sections)
- ✅ Hero section with profile photo and bio
- ✅ Education section with timeline
- ✅ Experience section with responsibilities
- ✅ Projects section (4 projects with details)
- ✅ Skills section (progress bars and tags)
- ✅ Certificates & awards section
- ✅ Contact section with all details
- ✅ Contact form (Name, Email, Message)
- ✅ Fully responsive with media queries
- ✅ Flexbox and Grid layout
- ✅ Semantic HTML
- ✅ Uniform typography and color scheme
- ✅ Smooth hover effects and transitions
- ✅ FontAwesome social icons
- ✅ Download resume button
- ✅ Smooth scroll and typing effect animations

## 🎯 Bonus Features Included

- ✨ Typing animation effect on home section
- ✨ Smooth scroll behavior
- ✨ Active navigation highlighting
- ✨ Animated skill progress bars
- ✨ Intersection Observer for fade-in animations
- ✨ Scroll to top button
- ✨ Mobile hamburger menu
- ✨ Form validation with notifications
- ✨ Hover effects on cards and buttons
- ✨ Timeline layout for education
- ✨ Project overlay effects

## 📝 Notes for Students

This portfolio is designed to be:
- **Easy to customize** - Just update the HTML content
- **Well-commented** - Code explanations throughout
- **Responsive** - Works on all devices
- **Professional** - Ready for deployment
- **Extensible** - Easy to add more sections or features

## 🚀 Deployment

You can deploy this website to:
- **GitHub Pages** (Free)
- **Netlify** (Free)
- **Vercel** (Free)
- **Any web hosting service**

### GitHub Pages Deployment:
1. Create a new repository on GitHub
2. Upload all files
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

## 📞 Support

For any issues or questions about this portfolio:
1. Check that all file paths are correct
2. Ensure images are in the `assets` folder
3. Verify that all files are in the correct locations
4. Test in different browsers (Chrome, Firefox, Safari, Edge)

## 📜 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

**NIYOMUFASHA Benjamin**
- Student ID: 23218
- Year: 2023

---

**Happy Coding! 🎉**
