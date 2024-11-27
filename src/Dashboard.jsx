import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Dashboard.css';

const jobs = [
  { id: 1, title: 'Software Developer', location: 'San Francisco, CA', description: 'Develop and maintain web applications.' },
  { id: 2, title: 'Data Scientist', location: 'New York, NY', description: 'Analyze and interpret complex data.' },
  { id: 3, title: 'UX Designer', location: 'Los Angeles, CA', description: 'Design user-friendly interfaces for applications.' },
  { id: 4, title: 'Marketing Specialist', location: 'Chicago, IL', description: 'Create and implement marketing strategies.' },
  { id: 5, title: 'Project Manager', location: 'Austin, TX', description: 'Manage projects and ensure timely delivery.' },
  { id: 6, title: 'DevOps Engineer', location: 'Boston, MA', description: 'Automate and streamline infrastructure.' },
  { id: 7, title: 'Cybersecurity Analyst', location: 'Seattle, WA', description: 'Ensure data and network security.' },
  { id: 8, title: 'Business Analyst', location: 'Denver, CO', description: 'Analyze business needs and solutions.' },
  { id: 9, title: 'AI/ML Engineer', location: 'San Jose, CA', description: 'Develop machine learning models and AI solutions.' },
  { id: 10, title: 'Content Writer', location: 'Remote, CA', description: 'Create engaging content for digital platforms.' },
  { id: 11, title: 'Product Managaer', location: 'Dallas, TX', description: 'Oversee product lifecycle and strategy.' },
  { id: 12, title: 'Graphic Designer', location: 'Miami, FL', description: 'Design visually appealing content and graphics..' }
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate =useNavigate();

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApply=(jobId)=> {
    console.log("Apply button clicked for Job ID:", jobId);
    navigate('/JobApplication',{state:{ jobId }});
  }

  const handleSendEmail = () => {
    navigate('/send-email'); // Navigate to the JobPortalMail page
};

  return (
    <div className="dashboard-container">
      <h1>Job Vacancies</h1>
      <button className="send-email-button" onClick={handleSendEmail}>
        Send-email
      </button>
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="job-list">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <button className="apply-button" onClick={()=> handleApply(job.id)}> 
            Apply  
            </button>
         </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;