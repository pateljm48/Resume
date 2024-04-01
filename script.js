// You can add JavaScript functionality here
// For example, dynamically loading work experience and project details

// Sample work experience data (replace with your own)
const workExperience = [
    {
        company: "Velox Group",
        location: "Visnagar, India",
        position: "Software Developer",
        startDate: "Jul 2018",
        endDate: "May 2023",
        responsibilities: [
            "Developed and maintained web and mobile applications using C#, JavaScript, ASP.NET, Flutter, SQL Server.",
            "Managed and maintained databases ensuring data integrity and optimization."
        ]
    },
    {
        company: "Bhaskaracharya Institute for Space Applications and Geoinformatics",
        location: "Gandhinagar, India",
        position: "Machine Learning Research Intern",
        startDate: "Jan 2018",
        endDate: "May 2018",
        responsibilities: [
            "Implemented an anomaly-based intrusion detection system using Isolation Forest and One-Class SVM.",
            "Cleaned and structured raw network data, optimized it for machine learning, and employed feature extraction and selection methods like PCA.",
            "Fine-tuned algorithms like Random Forest and Gradient Boosting."
        ]
    },
    {
        company: "Electro web Solution for Bug Tracking System",
        location: "Gandhinagar, India",
        position: "ASP.NET, C#, SQL server Intern",
        startDate: "Sep 2017",
        endDate: "May 2018",
        responsibilities: [
            "Developed ASP.NET framework based on coding techniques such as web forms and application form.",
            "Worked with SQL Server including stored procedures, views, functions, and SQL queries."
        ]
    }
];

// Sample project data (replace with your own)
const projects = [
    {
        title: "Image Captioning",
        description: "Created an image captioning model using deep learning techniques, combining CNN and RNN for generating descriptive captions."
    },
    {
        title: "Car Authorization and Monitoring System",
        description: "Developed and implemented an access control and authorization system for managing vehicle entry into designated areas."
    }
];

// Function to create work experience section
function createWorkExperience() {
    const experienceSection = document.getElementById('experience');

    workExperience.forEach(exp => {
        const experienceHTML = `
            <div>
                <h3>${exp.company}</h3>
                <p><strong>Location:</strong> ${exp.location}</p>
                <p><strong>Position:</strong> ${exp.position}</p>
                <p><strong>Dates:</strong> ${exp.startDate} - ${exp.endDate}</p>
                <p><strong>Responsibilities:</strong></p>
                <ul>
                    ${exp.responsibilities.map(res => `<li>${res}</li>`).join('')}
                </ul>
            </div>
        `;
       

