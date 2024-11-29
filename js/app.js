// Embedded JSON data
const resumeData = {
  "personal": {
    "name": "Amit Chaudhary",
    "title": "Senior Mobile Application Developer",
    "location": "Gadhawa, Dang, Nepal",
    "contact": {
      "phone": "+977 9847967132",
      "email": "itheamc@gmail.com",
      "linkedin": "https://linkedin.com/in/itheamc",
      "github": "https://github.com/itheamc"
    },
    "summary": "Highly skilled and passionate Mobile App Developer with over 4 years of experience in creating engaging, high-performance cross-platform mobile applications. Adept in languages including Java, Kotlin, Dart, JavaScript and Python, and highly eager to contribute to your team."
  },
  "workExperience": [
    {
      "company": "Naxa Pvt. Ltd.",
      "position": "Sr. Mobile Application Developer",
      "period": "July 2022 - Current",
      "location": "Kathmandu, Nepal",
      "responsibilities": [
        "Lead the development and maintenance of mobile applications for iOS and Android platforms",
        "Collaborate with cross-functional teams to define and implement new features",
        "Optimize app performance and enhance user experience",
        "Mentor junior developers and provide code reviews",
        "Built a secure and scalable data collection app with offline capabilities using Collect ODK's forms and survey tools",
        "Demonstrated in-depth understanding of Flutter plugin architecture by modifying mapbox_gl, file_picker, image_gallery_saver, flutter_html, flutter_compass plugins"
      ]
    },
    {
      "company": "Casper Technology India",
      "position": "Flutter Developer",
      "period": "Jan 2022 - May 2022",
      "location": "Bengaluru, India",
      "responsibilities": [
        "Developed location-based ecommerce applications for Android and iOS platforms utilizing Flutter framework",
        "Used Django framework to build backend billing application",
        "Created user-friendly and elegant interface designs",
        "Produced clean, efficient, and maintainable code"
      ]
    }
  ],
  "skills": {
    "technical": [
      "Android: Java, Kotlin, Jetpack Compose, Retrofit, Room, Dagger",
      "Flutter: Dart, Provider, Riverpod, GetX, Firebase",
      "SwiftUI: Swift, SwiftUI",
      "ReactJs: Javascript, Typescript, Redux, React Native",
      "Web: HTML, CSS, JavaScript",
      "Backend: Django (Python), ExpressJs",
      "Database: PostgreSQL, MySQL, MongoDB, SQLite",
      "Web3.0: Solidity, Truffle, web3.js, web3.storage",
      "Version Control: Git, Github, Bitbucket"
    ],
    "soft": [
      "Problem-solving",
      "Critical thinking",
      "Effective communication",
      "Teamwork",
      "Time management",
      "Creativity",
      "UI/UX Design",
      "Attention to detail"
    ]
  },
  "languages": [
    "English",
    "Hindi",
    "Nepali"
  ],
  "officeProjects": [
    {
      "name": "Victory App",
      "description": "Mobile app for disaster risk reduction with real-time monitoring of rain and water levels, supporting early warnings for floods and landslides. Enhances civil science participation, data quality checks, and real-time risk mapping.",
      "link": "https://github.com/itheamc"
    },
    {
      "name": "Naxa Assessment",
      "description": "Offline multi-hazard risk assessment app for communities vulnerable to floods, earthquakes, and landslides.",
      "link": "https://github.com/itheamc"
    },
    {
      "name": "Zite Manager",
      "description": "Task management app for automating referrals, managing approvals, creating tracking numbers, assigning statuses, and visualizing program workflows.",
      "link": "https://github.com/itheamc"
    },
    {
      "name": "Bhumi Susasan",
      "description": "Developed in association with the Ministry of Land Management, Cooperatives and Poverty Alleviation to provide land-related services.",
      "link": "https://github.com/itheamc"
    },
    {
      "name": "Safa Nepal",
      "description": "Previously known as Nepal Waste Map, an open-data waste management and data collection system implemented by Clean up Nepal.",
      "link": "https://github.com/itheamc"
    },
    {
      "name": "Rkado",
      "description": "Social networking app enabling global user connections through chatting, mini-blogging, gaming, and virtual gifts.",
      "link": "https://github.com/itheamc"
    }
  ],
  "personalProjects": [
    {
      "name": "Mapbox Map Gl Plugin",
      "description": "Cutting-edge plugin to unlock the newest Mapbox Map SDK capabilities in Flutter apps, bringing advanced mapping features.",
      "link": "https://github.com/itheamc"
    },
    {
      "name": "Navigation for Compose for Desktop",
      "description": "Codebase empowering smooth navigation within Compose for Desktop applications.",
      "link": "https://github.com/itheamc"
    }
  ],
  "education": [
    {
      "degree": "BBA",
      "institution": "Victoria International College / Pokhara University",
      "period": "2011 - 2015",
      "location": "Ghorahi, Nepal"
    },
    {
      "degree": "+2",
      "institution": "Janata Higher Secondary School",
      "period": "2009 - 2011",
      "location": "Gadhawa, Nepal"
    },
    {
      "degree": "SLC",
      "institution": "Janata Higher Secondary School",
      "period": "2009",
      "location": "Gadhawa, Nepal"
    }
  ]
};

// Render resume data
function renderResume(data) {
  const container = document.getElementById('resume-app');

  // Header
  container.innerHTML = `
            <div class="header">
                <div class="header-content">
                    <h1>${data.personal.name}</h1>
                    <h2>${data.personal.title}</h2>
                </div>
                <div class="contact-links">
                    <a href="tel:${data.personal.contact.phone}"><i class="fas fa-phone"></i></a>
                    <a href="mailto:${data.personal.contact.email}"><i class="fas fa-envelope"></i></a>
                    <a href="${data.personal.contact.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="${data.personal.contact.github}" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">Summary</h2>
                <p>${data.personal.summary}</p>
            </div>

            <div class="section">
                <h2 class="section-title">Work Experience</h2>
                ${data.workExperience.map(job => `
                    <div class="job">
                        <h3>${job.position} at ${job.company}</h3>
                        <p>${job.period} | ${job.location}</p>
                        <ul>
                            ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>

            <div class="section">
                <h2 class="section-title">Skills</h2>
                <div class="skills-grid">
                    <div class="skill-card">
                        <h3>Technical Skills</h3>
                        <ul>
                            ${data.skills.technical.map(skill => `<li>${skill}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="skill-card">
                        <h3>Soft Skills</h3>
                        <ul>
                            ${data.skills.soft.map(skill => `<li>${skill}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">Languages</h2>
                <div class="languages-grid">
                    ${data.languages.map(language => `
                        <div class="language-card">
                            <p>${language}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">Office Projects</h2>
                <div class="projects-grid">
                    ${data.officeProjects.map(project => `
                        <div class="project-card">
                            <h3>${project.name}</h3>
                            <p>${project.description}</p>
                            ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">Personal Projects</h2>
                <div class="projects-grid">
                    ${data.personalProjects.map(project => `
                        <div class="project-card">
                            <h3>${project.name}</h3>
                            <p>${project.description}</p>
                            ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">Education</h2>
                ${data.education.map(edu => `
                    <div class="education-item">
                        <h3>${edu.degree} - ${edu.institution}</h3>
                        <p>${edu.period} | ${edu.location}</p>
                    </div>
                `).join('')}
            </div>
        `;
}

// Render resume on page load
renderResume(resumeData);
