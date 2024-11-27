import React, { useState } from "react";
import "./apply.css";
import { Navigate } from "react-router-dom";
 
function JobApplication() {
    const [redirect, setRedirect] = useState(false); // State for redirection
    const [message, setMessage] = useState(''); // Success or error message
 
    // State to store form data
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        fathername: '',
        email: '',
        contact: '',
        course: '',
        university: '',
        passoutyear: '',
        marks: '',
        country: '',
        state: '',
        district: '',
        city: '',
        pincode: '',
        skill1: '',
        skill1Level: 'Basic',
        skill2: '',
        skill2Level: 'Basic',
        skill3: '',
        skill3Level: 'Basic',
    });
 
    // Handle change event for all form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
 
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
 
        try {
            const response = await fetch('http://localhost:8082/api/jobapplication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
 
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error:', errorText); // Log backend error
                throw new Error('Failed to submit application');
            }
 
            // const data = await response.json();
            setMessage("Application submitted successfully!");
            setFormData({
                firstname: '',
                lastname: '',
                fathername: '',
                email: '',
                contact: '',
                course: '',
                university: '',
                passoutyear: '',
                marks: '',
                country: '',
                state: '',
                district: '',
                city: '',
                pincode: '',
                skill1: '',
                skill1Level: 'Basic',
                skill2: '',
                skill2Level: 'Basic',
                skill3: '',
                skill3Level: 'Basic',
            });
            setRedirect(true);
        } catch (error) {
            console.error('Error:', error);
            setMessage("Failed to submit application. Please try again.");
        }
    };
 
    if (redirect) {
        return <Navigate to="/MockTest" />;
    }
 
    return (
        <div className="appcontainer">
            <form onSubmit={handleSubmit}>
                <h1>Application</h1>
 
                <h2 id="pd">Personal Details</h2>
                <div className="personal-details-container">
                    <div className="firstname">
                        <label htmlFor="firstname"><strong>First Name</strong></label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="First Name"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                        />
                    </div>
 
                    <div className="lastname">
                        <label htmlFor="lastname"><strong>Last Name</strong></label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Last Name"
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                        />
                    </div>
 
                    <div className="fathername">
                        <label htmlFor="fathername"><strong>Father Name</strong></label>
                        <input
                            type="text"
                            id="fathername"
                            name="fathername"
                            placeholder="Father Name"
                            value={formData.fathername}
                            onChange={handleChange}
                            required
                        />
                    </div>
 
                    <div className="appemail">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
 
                    <div className="appcontact">
                        <label htmlFor="contact"><strong>Contact</strong></label>
                        <input
                            type="tel"
                            id="contact"
                            name="contact"
                            placeholder="Mobile No"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
 
                <h2 id="eq">Educational Qualification</h2>
                <div className="qualification-container">
                    <div className="course">
                        <label htmlFor="course"><strong>Course</strong></label>
                        <input
                            type="text"
                            id="course"
                            name="course"
                            placeholder="Course"
                            value={formData.course}
                            onChange={handleChange}
                        />
                    </div>
 
                    <div className="university">
                        <label htmlFor="university"><strong>University</strong></label>
                        <input
                            type="text"
                            id="university"
                            name="university"
                            placeholder="University"
                            value={formData.university}
                            onChange={handleChange}
                        />
                    </div>
 
                    <div className="passoutyear">
                        <label htmlFor="passoutyear"><strong>PassOut Year</strong></label>
                        <input
                            type="number"
                            id="passoutyear"
                            name="passoutyear"
                            value={formData.passoutyear}
                            onChange={handleChange}
                        />
                    </div>
 
                    <div className="marks">
                        <label htmlFor="marks"><strong>Marks</strong></label>
                        <input
                            type="number"
                            id="marks"
                            name="marks"
                            value={formData.marks}
                            onChange={handleChange}
                        />
                    </div>
                </div>
 
                <h2 id="adr">Address</h2>
                <div className="address-container">
                    <div className="country">
                        <label htmlFor="country"><strong>Country</strong></label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </div>
 
                    <div className="state">
                        <label htmlFor="state"><strong>State</strong></label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="State"
                            value={formData.state}
                            onChange={handleChange}
                        />
                    </div>
 
                    <div className="district">
                        <label htmlFor="district"><strong>District</strong></label>
                        <input
                            type="text"
                            id="district"
                            name="district"
                            placeholder="District"
                            value={formData.district}
                            onChange={handleChange}
                        />
                    </div>
 
                    <div className="city">
                        <label htmlFor="city"><strong>City</strong></label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
 
                    <div className="pincode">
                        <label htmlFor="pincode"><strong>Pin Code</strong></label>
                        <input
                            type="number"
                            id="pincode"
                            name="pincode"
                            placeholder="Pin Code"
                            value={formData.pincode}
                            onChange={handleChange}
                        />
                    </div>
                </div>
 
                <h2 id="skills">Skills</h2>
                <div className="skills-container">
                    <div className="skill1">
                        <label htmlFor="skill1"><strong>Skill 1</strong></label>
                        <input
                            type="text"
                            id="skill1"
                            name="skill1"
                            value={formData.skill1}
                            onChange={handleChange}
                        />
 
                        <select
                            name="skill1Level"
                            value={formData.skill1Level}
                            onChange={handleChange}
                            required
                        >
                            <option value="Basic">Basic</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
 
 
                    </div>
 
                   
 
                    <div className="skill2">
                        <label htmlFor="skill2"><strong>Skill 2</strong></label>
                        <input
                            type="text"
                            id="skill2"
                            name="skill2"
                            value={formData.skill2}
                            onChange={handleChange}
                        />
 
                        <select
                            name="skill2Level"
                            value={formData.skill2Level}
                            onChange={handleChange}
                            required
                        >
                            <option value="Basic">Basic</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
 
                    </div>
 
                    <div className="skill3">
                        <label htmlFor="skill3"><strong>Skill 3</strong></label>
                        <input
                            type="text"
                            id="skill3"
                            name="skill3"
                            value={formData.skill3}
                            onChange={handleChange}
                        />
 
                        <select
                            name="skill3Level"
                            value={formData.skill3Level}
                            onChange={handleChange}
                            required
                        >
                            <option value="Basic">Basic</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
 
                    </div>
                </div>
 
                <div className="footer-apply"></div>
                <button type="submit">Submit Application</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
 
export default JobApplication;


