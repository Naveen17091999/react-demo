import "./market.scss"
import java from "../../asserts/java.jpg"
import javascript from "../../asserts/javascript.jpg"
import python from "../../asserts/python.jpg"
import react from "../../asserts/react.jpg"
import angular from "../../asserts/angular.jpg"
import springBoot from "../../asserts/springBoot.jpg"
import Card from "../card/Card"


function Courses() {
    const data1=[
        {
          "courseTitle": "Introduction to Web Development",
          "courseImage": "web-development.jpg",
          "instructorName": "Jane Smith",
          "courseDescription": "Learn the basics of web development including HTML, CSS, and JavaScript.",
          "duration": "20 hours",
          "difficultyLevel": "Beginner",
          "rating": 4.7,
          "reviews": 320,
          "price": "$39.99",
          "courseCategory": "Web Development",
          "enrolledStudents": 2500,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Downloadable content, Access to community forums"
        },
        {
          "courseTitle": "Advanced Python Programming",
          "courseImage": "advanced-python.jpg",
          "instructorName": "John Doe",
          "courseDescription": "Master advanced concepts in Python including OOP, web scraping, and data analysis.",
          "duration": "30 hours",
          "difficultyLevel": "Advanced",
          "rating": 4.9,
          "reviews": 500,
          "price": "$59.99",
          "courseCategory": "Programming",
          "enrolledStudents": 1800,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Code snippets, Practice projects"
        },
        {
          "courseTitle": "Data Science with R",
          "courseImage": "data-science-r.jpg",
          "instructorName": "Emily Johnson",
          "courseDescription": "Explore data science techniques and tools using the R programming language.",
          "duration": "25 hours",
          "difficultyLevel": "Intermediate",
          "rating": 4.6,
          "reviews": 280,
          "price": "$49.99",
          "courseCategory": "Data Science",
          "enrolledStudents": 2200,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Datasets, Quizzes"
        },
        {
          "courseTitle": "Machine Learning A-Z",
          "courseImage": "machine-learning.jpg",
          "instructorName": "Michael Brown",
          "courseDescription": "A complete guide to machine learning algorithms and applications.",
          "duration": "40 hours",
          "difficultyLevel": "Intermediate",
          "rating": 4.8,
          "reviews": 410,
          "price": "$69.99",
          "courseCategory": "Machine Learning",
          "enrolledStudents": 3500,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Python and R code templates, Case studies"
        },
        {
          "courseTitle": "Digital Marketing Masterclass",
          "courseImage": "digital-marketing.jpg",
          "instructorName": "Sarah Lee",
          "courseDescription": "Learn the latest digital marketing strategies and techniques.",
          "duration": "15 hours",
          "difficultyLevel": "Beginner",
          "rating": 4.5,
          "reviews": 270,
          "price": "$29.99",
          "courseCategory": "Marketing",
          "enrolledStudents": 1500,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Case studies, Marketing templates"
        },
        {
          "courseTitle": "Graphic Design Essentials",
          "courseImage": "graphic-design.jpg",
          "instructorName": "Anna Martinez",
          "courseDescription": "Discover the fundamentals of graphic design and create stunning visuals.",
          "duration": "18 hours",
          "difficultyLevel": "Beginner",
          "rating": 4.4,
          "reviews": 230,
          "price": "$34.99",
          "courseCategory": "Design",
          "enrolledStudents": 1200,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Design assets, Project files"
        },
        {
          "courseTitle": "Project Management Professional (PMP) Prep",
          "courseImage": "pmp-prep.jpg",
          "instructorName": "David Anderson",
          "courseDescription": "Prepare for the PMP certification with comprehensive project management training.",
          "duration": "35 hours",
          "difficultyLevel": "Intermediate",
          "rating": 4.7,
          "reviews": 390,
          "price": "$79.99",
          "courseCategory": "Project Management",
          "enrolledStudents": 2000,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Practice exams, Study guides"
        },
        {
          "courseTitle": "Introduction to Cybersecurity",
          "courseImage": "cybersecurity.jpg",
          "instructorName": "Mark Wilson",
          "courseDescription": "Learn the basics of cybersecurity and how to protect yourself online.",
          "duration": "12 hours",
          "difficultyLevel": "Beginner",
          "rating": 4.3,
          "reviews": 150,
          "price": "$29.99",
          "courseCategory": "Cybersecurity",
          "enrolledStudents": 900,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Security tools, Best practices"
        },
        {
          "courseTitle": "Complete JavaScript Course",
          "courseImage": "javascript-course.jpg",
          "instructorName": "Laura Roberts",
          "courseDescription": "Master JavaScript from the ground up, including ES6+ features.",
          "duration": "28 hours",
          "difficultyLevel": "Intermediate",
          "rating": 4.8,
          "reviews": 450,
          "price": "$49.99",
          "courseCategory": "Programming",
          "enrolledStudents": 2800,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Coding exercises, Project-based learning"
        },
        {
          "courseTitle": "Financial Analysis and Modeling",
          "courseImage": "financial-analysis.jpg",
          "instructorName": "Steven Clark",
          "courseDescription": "Learn to analyze financial statements and build financial models.",
          "duration": "22 hours",
          "difficultyLevel": "Intermediate",
          "rating": 4.6,
          "reviews": 300,
          "price": "$59.99",
          "courseCategory": "Finance",
          "enrolledStudents": 1800,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Excel templates, Case studies"
        },
        {
          "courseTitle": "Full-Stack Web Development Bootcamp",
          "courseImage": "full-stack.jpg",
          "instructorName": "Daniel Green",
          "courseDescription": "Become a full-stack web developer with hands-on projects using HTML, CSS, JavaScript, and more.",
          "duration": "50 hours",
          "difficultyLevel": "Advanced",
          "rating": 4.9,
          "reviews": 600,
          "price": "$99.99",
          "courseCategory": "Web Development",
          "enrolledStudents": 4500,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Real-world projects, Portfolio building"
        },
        {
          "courseTitle": "Introduction to Artificial Intelligence",
          "courseImage": "ai-introduction.jpg",
          "instructorName": "Sophia Hernandez",
          "courseDescription": "Understand the fundamentals of AI and its applications in various industries.",
          "duration": "20 hours",
          "difficultyLevel": "Beginner",
          "rating": 4.5,
          "reviews": 280,
          "price": "$39.99",
          "courseCategory": "Artificial Intelligence",
          "enrolledStudents": 2500,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "AI tools, Practical examples"
        },
        {
          "courseTitle": "Mobile App Development with React Native",
          "courseImage": "react-native.jpg",
          "instructorName": "Chris Evans",
          "courseDescription": "Build cross-platform mobile apps using React Native.",
          "duration": "35 hours",
          "difficultyLevel": "Intermediate",
          "rating": 4.7,
          "reviews": 370,
          "price": "$69.99",
          "courseCategory": "Mobile Development",
          "enrolledStudents": 2200,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Source code, Design assets"
        },
        {
          "courseTitle": "Creative Writing Mastery",
          "courseImage": "creative-writing.jpg",
          "instructorName": "Patricia King",
          "courseDescription": "Enhance your creative writing skills with expert techniques and exercises.",
          "duration": "18 hours",
          "difficultyLevel": "Beginner",
          "rating": 4.4,
          "reviews": 220,
          "price": "$29.99",
          "courseCategory": "Writing",
          "enrolledStudents": 1400,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Writing prompts, Peer reviews"
        },
        {
          "courseTitle": "Public Speaking for Beginners",
          "courseImage": "public-speaking.jpg",
          "instructorName": "Nancy White",
          "courseDescription": "Overcome your fear of public speaking and learn to deliver engaging presentations.",
          "duration": "10 hours",
          "difficultyLevel": "Beginner",
          "rating": 4.3,
          "reviews": 160,
          "price": "$19.99",
          "courseCategory": "Communication",
          "enrolledStudents": 1200,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Presentation tips, Practice sessions"
        },
        {
          "courseTitle": "Excel for Data Analysis",
          "courseImage": "excel-data-analysis.jpg",
          "instructorName": "Paul Robinson",
          "courseDescription": "Learn to analyze and visualize data using Microsoft Excel.",
          "duration": "15 hours",
          "difficultyLevel": "Beginner",
          "rating": 4.5,
          "reviews": 200,
          "price": "$34.99",
          "courseCategory": "Data Analysis",
          "enrolledStudents": 1700,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Excel templates, Data sets"
        },
        {
          "courseTitle": "Blockchain Essentials",
          "courseImage": "blockchain.jpg",
          "instructorName": "Robert Davis",
          "courseDescription": "Understand the basics of blockchain technology and its potential applications.",
          "duration": "12 hours",
          "difficultyLevel": "Beginner",
          "rating": 4.6,
          "reviews": 180,
          "price": "$29.99",
          "courseCategory": "Technology",
          "enrolledStudents": 1300,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Blockchain tools, Case studies"
        },
        {
          "courseTitle": "SQL for Data Science",
          "courseImage": "sql-data-science.jpg",
          "instructorName": "Carol Thompson",
          "courseDescription": "Master SQL queries and database management for data science applications.",
          "duration": "20 hours",
          "difficultyLevel": "Intermediate",
          "rating": 4.7,
          "reviews": 250,
          "price": "$39.99",
          "courseCategory": "Data Science",
          "enrolledStudents": 2100,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "SQL exercises, Practice databases"
        },
        {
          "courseTitle": "Introduction to Cloud Computing",
          "courseImage": "cloud-computing.jpg",
          "instructorName": "George Harris",
          "courseDescription": "Learn the fundamentals of cloud computing and major cloud service providers.",
          "duration": "14 hours",
          "difficultyLevel": "Beginner",
          "rating": 4.4,
          "reviews": 140,
          "price": "$29.99",
          "courseCategory": "Cloud Computing",
          "enrolledStudents": 1000,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Cloud labs, Case studies"
        },
        {
          "courseTitle": "SEO Fundamentals",
          "courseImage": "seo-fundamentals.jpg",
          "instructorName": "Kevin Wright",
          "courseDescription": "Learn the basics of search engine optimization and improve your website's ranking.",
          "duration": "12 hours",
          "difficultyLevel": "Beginner",
          "rating": 4.5,
          "reviews": 150,
          "price": "$24.99",
          "courseCategory": "Marketing",
          "enrolledStudents": 1100,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "SEO tools, Checklists"
        },
        {
          "courseTitle": "Ethical Hacking for Beginners",
          "courseImage": "ethical-hacking.jpg",
          "instructorName": "Jessica Green",
          "courseDescription": "An introduction to ethical hacking techniques and tools.",
          "duration": "25 hours",
          "difficultyLevel": "Intermediate",
          "rating": 4.7,
          "reviews": 220,
          "price": "$49.99",
          "courseCategory": "Cybersecurity",
          "enrolledStudents": 1600,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Lab exercises, Hacking tools"
        },
        {
          "courseTitle": "Photography Basics",
          "courseImage": "photography.jpg",
          "instructorName": "Brian Young",
          "courseDescription": "Learn the fundamentals of photography and improve your skills.",
          "duration": "10 hours",
          "difficultyLevel": "Beginner",
          "rating": 4.3,
          "reviews": 130,
          "price": "$19.99",
          "courseCategory": "Photography",
          "enrolledStudents": 900,
          "courseLanguage": "English",
          "certificateAvailability": true,
          "additionalResources": "Photo editing tutorials, Practice assignments"
        }
      ]
      
      
    const data = [
        {
            courseName: "Java Programming",
            duration: "3 months",
            img: java,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$1020"
        },
        {
            courseName: "Python Programming",
            duration: "1 months",
            img: python,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$120"
        },
        {
            courseName: "JavaScript Programming",
            duration: "2 months",
            img: javascript,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$100"
        },
        {
            courseName: "React Framework",
            duration: "3 months",
            img: react,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$500"
        },
        {
            courseName: "Angular Framework",
            duration: "3 months",
            img: angular,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$700"
        },
        {
            courseName: "Java Programming",
            duration: "3 months",
            img: java,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$1020"
        },
        {
            courseName: "Java Programming",
            duration: "3 months",
            img: java,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$1020"
        },
    ]
    return (
        <div className="courses">
            <h3>Available Courses.</h3>
            <div className="course">

                {
                    data.map((data, index) => (
                        <Card data={data} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Courses;