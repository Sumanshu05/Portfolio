import React, { useState } from 'react'
import { FaInstagram, FaLinkedin, FaGithubSquare, FaMapMarkerAlt, FaEnvelope, FaRegPaperPlane, FaCheckCircle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  // ✅ Web3Forms Integration
  // Paste your Web3Forms Access Key below (get it free from https://web3forms.com/)
  // Emails will be delivered directly to nagpalsumanshu@gmail.com
  const WEB3FORMS_KEY = "f5418e41-63b3-4a94-85eb-a9696ca29a39"; // 👈 Replace this with your key

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side Validation
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    if (WEB3FORMS_KEY && WEB3FORMS_KEY !== "YOUR_ACCESS_KEY_HERE") {
      // ✅ Real submission via Web3Forms — emails go to nagpalsumanshu@gmail.com
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          subject: subject || "New Portfolio Contact Form Submission",
          message,
          from_name: "Portfolio Contact Form"
        })
      })
      .then(async (response) => {
        const data = await response.json();
        setIsSubmitting(false);
        if (data.success) {
          setIsSuccess(true);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          alert("Oops! There was a problem submitting your form. Please try again.");
        }
      })
      .catch(() => {
        setIsSubmitting(false);
        alert("Oops! There was a network error. Please try again.");
      });
    } else {
      // Simulated submission (demo mode — paste your Web3Forms key to go live)
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }, 1500);
    }
  };

  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-grid">
          {/* Left Side: Contact Info */}
          <div className="contact-left" data-aos="fade-right" data-aos-duration="1000">
            <h2>Let's Connect!</h2>
            <p>
              I am open to discuss new opportunities, internships, or collaboration on exciting development projects. Feel free to drop a message or reach out via my social profiles!
            </p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <FaMapMarkerAlt />
                <span>Punjab, India</span>
              </div>
              <div className="contact-detail-item">
                <FaEnvelope />
                <span>nagpalsumanshu@gmail.com</span>
              </div>
            </div>

            <div className="contact-icon">
              <a href="https://www.linkedin.com/in/sumanshu-nagpal/" target="_blank" rel="noopener noreferrer" className="items">
                <FaLinkedin className='icons' />
              </a>
              <a href="https://github.com/Sumanshu05" target="_blank" rel="noopener noreferrer" className="items">
                <FaGithubSquare className='icons' />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="items">
                <FaInstagram className='icons' />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nagpalsumanshu@gmail.com" 
                className="items" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGmail className="icons" />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-right" data-aos="fade-left" data-aos-duration="1000">
            {isSuccess ? (
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for getting in touch. I have received your message and will get back to you shortly.</p>
                <button className="btn-outline-cyan mt-3" onClick={() => setIsSuccess(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Project Inquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea 
                    className="form-textarea" 
                    placeholder="Hi Sumanshu, I'd love to chat about..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-gradient form-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaRegPaperPlane />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
