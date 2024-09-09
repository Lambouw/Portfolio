import { useEffect, useState } from "react";

// Import Styles
import "../styles/css/contact.css";

// Import Images
import React from "../assets/images/react.svg";
import React2 from "../assets/images/react2.svg";

function Contact() {
  const [sendEnabled, setSendEnabled] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name !== null &&
      name.length > 0 &&
      email !== null &&
      email.length > 0 &&
      email.match(emailPattern) &&
      message !== null &&
      message.length > 0
    ) {
      setSendEnabled(true);
    } else {
      setSendEnabled(false);
    }
  }, [name, email, message]);

  return (
    <div id="contact" className="contact">
      <h1 className="contact--heading">Contact</h1>
      <div className="height-sm"></div>
      <div className="contact--container">
        <div className="contact--container--left">
          <div className="contact--container--left--text">
            <p>Hit me up if you want to know more about me or my work!</p>
            <p>I'd love to hear from you.</p>
          </div>
          <div className="height-md"></div>
          <div className="contact--container--left--formular">
            <input
              className="contact--container--left--formular--name input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div className="height-sm"></div>
            <input
              className="contact--container--left--formular--email input"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="height-sm"></div>
            <textarea
              className="contact--container--left--formular--message input"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <div className="contact--container--left--formular--button">
              <button
                className="contact--container--left--formular--button--btn"
                onClick={() => {
                  console.log("Implement send function");
                }}
                disabled={!sendEnabled}
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="contact--container--right">
          <h2 className="contact--container--right--email-heading">Email</h2>
          <a
            href="mailto:jm.lindemann@web.de"
            className="contact--container--right--email"
          >
            jm.lindemann@web.de
          </a>
          <div className="height-md"></div>
          <h2 className="contact--container--right--socials-heading">
            Socials
          </h2>
          <div className="contact--container--right--socials">
            <div className="contact--container--right--socials--item">
              Instagram
            </div>
            <div className="contact--container--right--socials--item">
              LinkedIn
            </div>
            <div className="contact--container--right--socials--item">
              Github
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
