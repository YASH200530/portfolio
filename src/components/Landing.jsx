import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }) => {
    const nameParts = config.developer.fullName.split(" ");
    const firstName = nameParts[0] || config.developer.name;
    const lastName = nameParts.slice(1).join(" ") || "";
    
    return (
        <>
            <div className="landing-section" id="landingDiv">
                <div className="landing-container">
                    <div className="landing-intro">
                        <h2>Hello! I'm</h2>
                        <h1>
                            {firstName.toUpperCase()}
                            {' '}
                            <br />
                            {lastName && <span>{lastName.toUpperCase()}</span>}
                        </h1>
                    </div>
                    <div className="landing-info">
                        <h3>A</h3>
                        <h2 className="landing-info-h2">
                            <div className="landing-h2-1">Software Engineer</div>
                        </h2>
                        <h2 className="landing-info-h2-sub">
                            <div className="landing-h2-info">Fullstack Developer</div>
                        </h2>
                    </div>
                    {/* Mobile photo - shows only on mobile when 3D character is hidden */}
                    <div className="mobile-photo">
                        <img src="/public/images/WhatsApp Image 2026-06-14 at 2.01.41 AM.jpeg" alt="Yash"/>
                    </div>
                </div>
                {children}
            </div>
        </>
    );
};

export default Landing;
