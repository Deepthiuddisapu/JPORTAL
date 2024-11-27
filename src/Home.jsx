import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import ChatBot1 from './ChatBot1';

function Home() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/Login");
    }

    const handleRegister = () => {
        navigate("/Registration");
    }

    const handleAboutUs = () => {
        navigate("/Aboutus");
    }

    const handleContactUs = () => {
        navigate("/Contactus");
    }

    const handleTerms = () => {
        navigate("/TermsAndConditions");
    }

    // State for showing the chatbot
    const [showChatbot, setShowChatbot] = useState(false);

    // Toggle function for the chatbot visibility
    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };

    return (
        <div>
            {/* Header Section */}
            <div className="header">
                <img 
                    src="https://cdn.prod.website-files.com/65efe5c22fe5c01bbd337a5f/65efef4c8c9490f23afeb120_60a0dbb1754e6b34267a8157_Icon%20File.svg" 
                    alt="imagenotfound" 
                />
                <u><h2 id="">Workfolio</h2></u>
                <h3>Jobs for you</h3>
            </div>
        
             {/* Sign In and Sign Up Buttons */}
            <div className="btnlog">
                <button id="hlog" onClick={handleLogin}>Signin</button>
            </div>

            <div className="btnreg">
                <button id="hreg" onClick={handleRegister}>SignUp</button>
            </div>

            {/* Content */}
            <div className="platcontent">
                <h4 id="quote1">INDIA’S NO#1 JOB PLATFORM</h4>
            </div>

            <div className="quotecontent">
                <h1 id="quote"><b>Your Job Search Ends Here</b></h1>
            </div>

            <div className="discontent">
                <h1 id="quote2">Discover 1000+ career opportunities</h1>
            </div>

             {/* Image Section (Added Image Here) */}
             <div className="image-content">
                <img 
                    src="homeimg1.jpg" 
                    alt="career opportunities"
                    className="home-image"  // You can style the image with CSS
                />
            </div>

            <div className="welcontent">
                <u><h1 id="quote3">Welcome to the ultimate destination for job seekers</h1></u>
            </div>

            <div className="rightcontent">
    <u><h2>Why Choose Us?</h2></u>
    <div class="content-wrapper">
        <div class="text-content">
            <ul id="right">
            <li class="point1">Whether you’re a fresh graduate, mid-level professional, or experienced industry expert, our platform is designed to connect you with jobs that match your skills, passions, and career goals.</li>
                <p><li class="point2">Unmatched Job Listings: Access an extensive database of 50 lakh+ verified job opportunities across various industries, from IT and healthcare to finance and education.</li></p>
                <p><li class="point3">Personalized Experience: Our AI-powered recommendation engine suggests job roles tailored to your experience and aspirations.</li></p>
                <p><li class="point1">Seamless Application Process: Apply with ease and track your applications in real-time, ensuring you stay informed every step of the way.</li></p>
                <p><li class="point2">Trusted Employers: Collaborate with top employers and leading companies who value your skills and dedication.</li></p>
            </ul>
        </div>
    </div>
</div>

            <div className="getstarted">
                <button id="get" onClick={handleLogin}><strong>Get Started</strong></button>
            </div>

            {/* Footer Section */}
            <div className="footer">
                <div className="copyright">
                    <p>&copy;2024 workfolio. All Rights Reserved</p>
                    <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer" id="twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M23.953 4.57c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>

                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" id="fb">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3b5998">
                            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675v-21.35C24 .6 23.4 0 22.675 0zM12 2.063c2.693 0 3.014 0 4.092.058 1.084.058 1.748.23 2.152.464.493.236.755.553.755 1.055 0 .786-.005 1.547-.005 2.338H12v2.947h3.002c-.006 1.312-.008 2.625-.008 3.938H12v8.055H9.006V10.403H7.1V7.456h1.906V5.4c0-1.882.928-4.118 4.01-4.118z"></path>
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" id="linked">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M22.225 0h-20.451C.997 0 0 .997 0 2.225v19.551C0 23.003.997 24 2.225 24h20.451C23.003 24 24 23.003 24 22.225v-19.55C24 .997 23.003 0 22.225 0zM7.057 20.452H3.577V9.001h3.48v11.451zm-1.74-13.1c-1.114 0-2.015-.911-2.015-2.03 0-1.13.901-2.03 2.015-2.03 1.114 0 2.015.9 2.015 2.03 0 1.119-.901 2.03-2.015 2.03zm16.115 13.1h-3.48v-5.724c0-1.36-.025-3.111-1.895-3.111-1.895 0-2.187 1.482-2.187 3.015v5.82h-3.48V9.001h3.34v1.553h.048c.465-.884 1.6-1.811 3.298-1.811 3.526 0 4.173 2.315 4.173 5.312v6.398z"></path>
                        </svg>
                    </a>
                </div>

                <div className="aboutus">
                    <button onClick={handleAboutUs} id="btnabout">About us</button>
                </div>

                <div className="contactus">
                    <button onClick={handleContactUs} id="btncontact">Contact us</button>
                </div>

                <div className="terms">
                    <button onClick={handleTerms} id="btnterms">Terms</button>
                </div>
            </div>


            {/* Chatbot Icon and Modal */}
            <div className="chatbot-icon" onClick={toggleChatbot}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className="fill-current chatbot-svg">
                    <path d="M12 2C6.486 2 2 6.486 2 12c0 4.411 3.134 8.113 7.248 8.872v1.531c0 .275.224.497.5.497a.494.494 0 0 0 .353-.145L14.5 18H17c5.514 0 10-4.486 10-10S17.514 2 12 2zM12 16H6v-2h6v2zm6-4H6v-2h12v2zm0-4H6V6h12v2z"></path>
                </svg>
            </div>

            {showChatbot && (
                <div className="chatbot-modal">
                    <div className="chatbot-header">
                        <h3>ChatBot</h3>
                        <button onClick={toggleChatbot} className="close-btn">
                            ChatBot
                        </button>
                    </div>
                    <div className="chatbot-body">
                        <ChatBot1 /> {/* This should be your chatbot component */}
                    </div>
                </div>
            )}

        </div>
    );
}

export default Home;
