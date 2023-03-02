import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>CONTACT US</h1>
      <form action="">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Type Your E-mail" required />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Write Here....."
        ></textarea>
        <input type="submit" value="send" />
      </form>
    </div>
  );
}

export default Contact;
