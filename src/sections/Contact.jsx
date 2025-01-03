import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

// Import Contexts
import { useLayout } from "../contexts/LayoutContext";

// Import Styles
import "../styles/css/contact.css";
import "../styles/css/animations.css";

function Contact() {
  const { contactVisible, contactRef } = useLayout();

  const [sendEnabled, setSendEnabled] = useState(false);
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [sentError, setSentError] = useState(false);

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

  const sendMail = async (event) => {
    setSending(true);
    setSentError(false);
    setSentSuccess(false);
    event.preventDefault();

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS Template ID
        {
          name: name,
          email: email,
          message: message,
        }, // Dynamic data from the form
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS Public Key
      );

      console.log("Email sent successfully:", response.status, response.text);
      setSending(false);
      setSentSuccess(true);
      setTimeout(() => {
        setSentSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSending(false);
      setSentError(true);
      setTimeout(() => {
        setSentError(false);
      }, 2000);
    }
  };

  return (
    <div
      id="contact"
      className={`contact fade-in-bottom ${contactVisible ? "is-visible" : ""}`}
      ref={contactRef}
    >
      <div className="contact--heading">
        <h1 className="contact--heading--icon">&#8811;</h1>
        <div className="width-s"></div>
        <h1 className="contact--heading--text">Contact</h1>
        <div className="width-m"></div>
        <div className="contact--heading--line"></div>
      </div>
      <div className="height-m"></div>
      <div className="height-s"></div>
      <div className="contact--container">
        <form className="contact--container--form" onSubmit={sendMail}>
          <input
            className="contact--container--form--name input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div className="height-s"></div>
          <input
            className="contact--container--form--email input"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="height-s"></div>
          <textarea
            className="contact--container--form--message input"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <div className="height-s"></div>
          <div className="contact--container--form--row">
            <div className="contact--container--form--row--wrapper">
              <input
                className={`contact--container--form--row--wrapper--btn
                   ${sentError && "bg-red"} ${sentSuccess && "bg-green"}`}
                disabled={!sendEnabled}
                type="submit"
                value={!sending && !sentError && !sentSuccess ? "Send" : ""}
              />
              {sending && (
                <svg
                  className="contact--container--form--row--wrapper--sending"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="opacity-75"
                    fill="#E3E3E4"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {sentSuccess && (
                <svg
                  className="contact--container--form--row--wrapper--success"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#E3E3E4" // You can change the color
                >
                  <path d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 20 8l-1.4-1.4L9 16.2z" />
                </svg>
              )}
              {sentError && (
                <svg
                  className="contact--container--form--row--wrapper--error"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#E3E3E4" // You can change the color
                >
                  <path d="M18.3 5.71L12 12.01 5.7 5.71 4.29 7.12l6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.3-1.41-1.41z" />
                </svg>
              )}
            </div>
          </div>
        </form>
        <div className="height-m"></div>
        <div className="contact--container--addresses">
          <div className="contact--container--addresses--text">
            <p className="contact--container--addresses--text--line">
              Hit me up if you want to know more about me or my work!
            </p>
            <p className="contact--container--addresses--text--line">
              I'd love to hear from you.
            </p>
          </div>
          <div className="contact--container--addresses--spacer"></div>
          <div className="contact--container--addresses--socials">
            <a
              className="contact--container--addresses--socials--icons--icon"
              href="mailto:info@maltelindemann.com"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </a>
            <div className="width-xs"></div>
            <div className="width-xs"></div>
            <a
              href="https://www.linkedin.com/in/malte-lindemann-b9533b209/"
              className="contact--container--addresses--socials--icons--icon"
              target="blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="32x32"
                fill="currentColor"
                className="mercado-match"
                focusable="false"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
            <div className="width-xs"></div>
            <div className="width-xs"></div>
            <a
              href="https://www.github.com/lambouw"
              className="contact--container--addresses--socials--icons--icon"
              target="blank"
              fill="currentColor"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                version="1.1"
                data-view-component="true"
                fill="currentColor"
              >
                <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
