import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <form>
        <label>Your Name</label>
        <input type="text" name="name" placeholder="Enter your name" required />
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter Your mobile number"
          required
        />
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter a valid email"
          required
        />
        <label>Write a Message here</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required></textarea>
        <button type="submit" className="btn">
          Submit now
        </button>
      </form>
      <span></span>
    </div>
  );
};

export default Contact;
