import "../styles/Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
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
        <div className="description">
          <p>Wish to discuss oppurtunities? Feel free to send a message!</p>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formList">
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
