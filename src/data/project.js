import Tutor01 from '../images/projects/Tutor/01.jpeg';
import Tutor02 from '../images/projects/Tutor/2.jpeg';
import Tutor03 from '../images/projects/Tutor/03.jpeg';
import Tutor04 from '../images/projects/Tutor/04.jpeg';
import Medec01 from '../images/projects/Medec/01.jpeg';
import Medec02 from '../images/projects/Medec/02.jpeg';
import Medec03 from '../images/projects/Medec/03.jpeg';
import Medec04 from '../images/projects/Medec/04.jpeg';
import Medec05 from '../images/projects/Medec/05.jpeg';
import Medec06 from '../images/projects/Medec/06.jpeg';
import Medec07 from '../images/projects/Medec/07.jpeg';
import Payroll01 from '../images/projects/Payroll/01.png';
import Payroll02 from '../images/projects/Payroll/02.png';
import Payroll03 from '../images/projects/Payroll/03.png';
import Payroll04 from '../images/projects/Payroll/04.png';
import Payroll05 from '../images/projects/Payroll/05.png';
import Payroll06 from '../images/projects/Payroll/06.png';

export const projects = [
    {
        id: 1,
        title: 'Top Tutors Global: A Secure Tutoring Platform for Student Engagements',
        categories: ['Web Application'],
        desc: "Top Tutors Global is an educational platform where students can connect with tutors for tailored learning support. Key features include secure user authorization and authentication, email verification with OTP, student question submissions, and a streamlined tutor registration process.",
        images: [
            Tutor01,
            Tutor02,
            Tutor03,
            Tutor04
        ],
        technologies: [
            "ReactJS",
            "TypeScript",
            "Node.js",
            "Express",
            "MySQL",
            "cPanel",
            "Docker"
        ]
    },
    {
        id: 2,
        title: 'Full-Stack Healthcare Management Platform',
        categories: ['Web Application', 'Mobile Application'],
        desc: "The system offers secure access with role-specific permissions, allowing patients to manage their own medical history, doctors to view and update records, and admins to oversee the platform. Login is secured with options such as Google or Facebook for ease of access. A real-time patient count feature helps manage hospital capacity, particularly in emergencies. Patients can also find doctors, book appointments, and receive notifications about upcoming visits. Additionally, patients have the ability to view and securely manage their health records, while receiving alerts for appointments, medications, and important health updates.",
        images: [
            Medec01,
            Medec02,
            Medec03,
            Medec04,
            Medec05,
            Medec06,
            Medec07
        ],
        technologies: [
            "React",
            "Node.js",
            "AWS Application",
            "GraphQL",
            "Docker"
        ]
    },
    {
        id: 3,
        title: 'Payroll Management System',
        categories: ['Web Application'],
        desc: "This payroll management software offers a comprehensive solution for handling all aspects of employee payroll with ease and accuracy. It allows businesses to automatically generate payslips based on employee data and salary structure, simplifying the payroll process and reducing manual work. Employee pay management is streamlined, enabling tracking of payments, deductions, and bonuses effortlessly. With built-in tools for data filtering and analysis, the software provides insights into payment trends and expenses, helping businesses make informed financial decisions. Summarizing payment data is quick and straightforward, offering managers a clear snapshot of payroll details. The software also includes a secure user management system that controls access, ensuring sensitive information remains protected.",
        images: [
            Payroll01,
            Payroll02,
            Payroll03,
            Payroll04,
            Payroll05,
            Payroll06
        ],
        technologies: [
            "PHP",
            "Laravel",
            "Node.js",
            "CSS",
            "JavaScript",
            "SQL"
        ]
    }
];