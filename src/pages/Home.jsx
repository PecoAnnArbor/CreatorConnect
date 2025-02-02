import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

function Home() {
    const [fadeOut, setFadeOut] = useState(false);
    const [skipAnimation, setSkipAnimation] = useState(false); // New state for skipping animation

    const creatorText = "Creator";
    const connectText = "Connect";
    const ANIMATION_LENGTH = 0.5;
    // const FADEOUT_LENGTH = 5;
    const navigate = useNavigate();

    useEffect(() => {
        // Auto-transition after FADEOUT_LENGTH seconds
        // const timer = setTimeout(() => {
        //     setFadeOut(true);
        //     setTimeout(() => navigate("/dashboard"), FADEOUT_LENGTH * 300);
        // }, FADEOUT_LENGTH * 1000);

        // Spacebar key listener for skipping animation
        const handleKeyPress = (event) => {
            if (event.code === "Space") {
                setSkipAnimation(true); // Instantly show everything
                setTimeout(() => setFadeOut(true), 500);
                setTimeout(() => navigate("/dashboard"), 2000); // Navigate faster
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            // clearTimeout(timer);
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [navigate]);

    return (
        <div className={`home-page ${fadeOut ? "fade-out" : ""}`}>
            <h1 className="home-title">
                <span className="fade-in-left">
                    {creatorText.split("").map((char, index) => (
                        <span 
                            key={index} 
                            style={{ 
                                animationDelay: skipAnimation ? "0s" : `${index * ANIMATION_LENGTH}s`, 
                                opacity: skipAnimation ? "1" : "0" 
                            }}>
                            {char}
                        </span>
                    ))}
                </span>

                <span className="fade-in-right">
                    {connectText.split("").map((char, index, arr) => (
                        <span 
                            key={index} 
                            style={{ 
                                animationDelay: skipAnimation ? "0s" : `${(arr.length - index - 1) * ANIMATION_LENGTH}s`,
                                opacity: skipAnimation ? "1" : "0"
                            }}>
                            {char}
                        </span>
                    ))}
                </span>
            </h1>

            <span className="continue">Press Spacebar to Continue</span>
        </div>
    );
}

export default Home;
