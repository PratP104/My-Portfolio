import React from "react";
import "./contact.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();

    emailjs.sendForm(
      "service_jd375ok",
      "template_mn9juwf",
      form.current,
      "IYATNEgmbp25xOFwX"
    );
  };
  return (
    <section id="contact">
      <h5>You Can</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__icons" />
            <h4>Email</h4>
            <h5>purnayepratik@ymail.com</h5>
            <a href="mailto:purnayepratik@ymail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__icons" />
            <h4>Linkedin Messenger</h4>
            <h5>Pratik Purnaye</h5>
            <a
              href="https://www.linkedin.com/in/pratik-purnaye-63344976/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__icons" />
            <h4>WhatsApp</h4>
            <h5>9075005054</h5>
            <a
              href="http://api.whatsapp.com/send?phone=+919075005054"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            row="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
