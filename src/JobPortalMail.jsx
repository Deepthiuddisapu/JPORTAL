import React, { useState } from "react";
import './JobPortalMail.css';  //import the css

const JobPortalMail = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMail = () => {
    alert(`Mail Sent to ${email} with Status: ${status} and Message: ${message}`);
    // You can add your email API logic here
  };

  return (
    <div style={{ margin: "50px auto", maxWidth: "600px", fontFamily: "Arial, sans-serif" }}>
      <h1>Recruitment Mail</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <label>
          Email Address:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter recipient's email"
            required
            style={{
              padding: "10px",
              width: "100%",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label>
          Select Status:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            style={{
              padding: "10px",
              width: "100%",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Select</option>
            <option value="Offer">Offer</option>
            <option value="Reject">Reject</option>
            <option value="Pending">Pending</option>
          </select>
        </label>

        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows="4"
            required
            style={{
              padding: "10px",
              width: "100%",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <button
          type="button"
          onClick={handleSendMail}
          style={{
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Send Mail
        </button>
      </form>
    </div>
  );
};

export default JobPortalMail;
