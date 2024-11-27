import React from "react";
import "./About.css";

const About = () => {
  const students = [
    { 
      name: "Satya", 
      company: "TechCorp", 
      package: "10 LPA", 
      image: "./Satya.jpg" 
    },
    { 
      name: "Puneeth", 
      company: "DevSolutions", 
      package: "11 LPA", 
      image: "./puneeth.jpeg" 
    },
    { 
      name: "Ankit", 
      company: "CodeWorks", 
      package: "12 LPA", 
      image: "./Ankit.jpeg" 
    },
    { 
      name: "nimal", 
      company: "InnovateX", 
      package: "9 LPA", 
      image: "./nimal.jpeg" 
    },
    { 
      name: "pranav", 
      company: "FutureTech", 
      package: "11 LPA", 
      image: "./pranav.jpeg" 
    },
    ]
  return (
    <div>
        {/* About Us Section */}
      <div className="about-container">
        <h1>Hired Graduates</h1>
        <div className="students-grid">
          {students.map((student, index) => (
            <div key={index} className="student-card">
              <img
                src={student.image}
                alt={`${student.name}'s Image`}
                className="student-image"
              />
              <h2>{student.name}</h2>
              <p>Company: {student.company}</p>
              <p>Package: {student.package}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;