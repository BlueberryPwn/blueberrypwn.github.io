import "../styles/Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "portfolio_template",
        form.current,
        "sCefP6qu2VBqOhEGB"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("ERROR: Message couldn't be sent. Please try again.");
        }
      );
  };

  return (
    <div className="form">
      <div className="title">
        <h1>Contact Form</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formList">
          <label>Name</label>
          <input type="text" required name="user_name" />
          <label>Email</label>
          <input type="email" required name="user_email" />
          <label>Subject</label>
          <input type="text" required name="subject" />
          <label>Message</label>
          <textarea name="message" required />
          <Button variant="contained" input type="submit">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
