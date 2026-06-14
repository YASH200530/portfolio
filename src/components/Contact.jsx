import { useState, useEffect } from "react";
import { FiCopy, FiCheck, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    useEffect(() => {
        const contactTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact-section",
                start: "top 80%",
                end: "bottom center",
                toggleActions: "play none none none",
            },
        });

        // Animate title from bottom
        contactTimeline.fromTo(".contact-heading", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
        });

        // Animate contact components with stagger from bottom
        contactTimeline.fromTo(".contact-animate-item", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
        }, "-=0.4");

        // Clean up
        return () => {
            contactTimeline.kill();
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(config.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || config.contact.web3forms_key;
        
        const triggerMailtoFallback = () => {
            const mailtoUri = `mailto:${config.contact.email}?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AReply to: ${encodeURIComponent(formData.email)}`;
            window.location.href = mailtoUri;
            setSubmitted(true);
        };

        if (accessKey) {
            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        access_key: accessKey,
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        subject: `New Portfolio Message from ${formData.name}`
                    })
                });
                
                const result = await response.json();
                if (result.success) {
                    setSubmitted(true);
                } else {
                    console.error("Web3Forms submission failed:", result);
                    triggerMailtoFallback();
                }
            } catch (error) {
                console.error("Error submitting to Web3Forms:", error);
                triggerMailtoFallback();
            } finally {
                setSubmitting(false);
            }
        } else {
            triggerMailtoFallback();
            setSubmitting(false);
        }
    };

    return (
        <section className="contact-section" id="contact">
            {/* Background glowing gradients matching design theme */}
            <div className="contact-bg-glow-1"></div>
            <div className="contact-bg-glow-2"></div>

            <div className="contact-container">
                <div className="contact-header-wrapper">
                    <h2 className="contact-heading">
                        LET'S <br />
                        <span className="contact-heading-accent">CONNECT !!</span>
                    </h2>
                </div>

                <div className="contact-grid">
                    <div className="contact-left-col">
                        {/* Email Card */}
                        <div className="contact-email-card contact-animate-item" onClick={handleCopyEmail}>
                            <p className="contact-label">
                                <span className="contact-dot animate-pulse"></span>
                                DROP A LINE
                            </p>
                            <div className="contact-email-wrapper">
                                <h3 className="contact-email-text">{config.contact.email}</h3>
                                <div className={`contact-copy-btn ${copied ? "copied" : ""}`}>
                                    {copied ? <FiCheck /> : <FiCopy />}
                                    {copied && <span className="copy-tooltip">Copied!</span>}
                                </div>
                            </div>
                        </div>

                        {/* Socials Card */}
                        <div className="contact-socials-card contact-animate-item">
                            <p className="contact-label">SOCIALS</p>
                            <div className="contact-socials-grid">
                                <a href={config.contact.linkedin} target="_blank" rel="noreferrer" className="contact-social-item">
                                    <div className="social-icon-circle">
                                        <FaLinkedinIn />
                                    </div>
                                    <span className="social-text">LINKEDIN</span>
                                </a>
                                <a href={config.contact.github} target="_blank" rel="noreferrer" className="contact-social-item">
                                    <div className="social-icon-circle">
                                        <FaGithub />
                                    </div>
                                    <span className="social-text">GITHUB</span>
                                </a>
                            </div>
                        </div>

                        <div className="contact-note contact-animate-item">
                            <p>Good work starts with a conversation.</p>
                        </div>
                    </div>

                    <div className="contact-right-col contact-animate-item">
                        {submitted ? (
                            <div className="contact-success-message">
                                <h4>Thank you!</h4>
                                <p>Your message has been sent. I will get back to you shortly.</p>
                                <button className="contact-reset-btn" onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}>
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        placeholder="What's your name?" 
                                        className="form-input" 
                                        name="name" 
                                        required 
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        placeholder="Your email address" 
                                        className="form-input" 
                                        name="email" 
                                        required 
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        name="message" 
                                        rows="1" 
                                        placeholder="Write your message here" 
                                        className="form-textarea" 
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                                <div className="form-submit-wrapper">
                                    <button type="submit" disabled={submitting} className="form-submit-btn">
                                        <span className="btn-bg"></span>
                                        <span className="btn-text">
                                            {submitting ? "Sending..." : "Send Message"}
                                        </span>
                                        <FiSend className="btn-icon" />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <footer className="contact-footer">
                <div className="footer-content">
                    <p>
                        <MdCopyright /> {new Date().getFullYear()} {config.developer.fullName}. All rights reserved.
                    </p>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
