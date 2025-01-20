import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../stylesheet/landing_page.css";

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function LandingPage() {
    const navigate = useNavigate();
    const mailInputRef = useRef(null);

    return (
            <div className="landing-page">
            <div className="form-container">
                <h1>Welcome!</h1>
                <input
                    type="text"
                    ref={mailInputRef}
                    placeholder="Enter your email"
                    className="email-input"
                />
                <button
                    className="start-button"
                    onClick={() => {
                        let mail = mailInputRef.current.value;
                        if (!isValidEmail(mail)) {
                            alert("Please enter a valid email");
                            mailInputRef.current.value = "";
                        } else {
                            navigate("/test");
                        }
                    }}
                >
                    Start
                </button>
            </div>
        </div>
        
    );
}
