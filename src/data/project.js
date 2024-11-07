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

export const projects = [
    {
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
    }
];