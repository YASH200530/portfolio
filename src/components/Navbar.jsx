import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";
import { config } from "../config";
gsap.registerPlugin(ScrollTrigger);
export let lenis = null;
const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        // Initialize Lenis smooth scroll
        lenis = new Lenis({
            duration: 1.7,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.7,
            touchMultiplier: 2,
            infinite: false,
        });
        // Start paused
        lenis.stop();
        // Handle smooth scroll animation frame
        function raf(time) {
            lenis?.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        // Handle navigation links
        let links = document.querySelectorAll(".header ul a");
        links.forEach((elem) => {
            let element = elem;
            element.addEventListener("click", (e) => {
                setMenuActive(false);
                if (window.innerWidth > 1024) {
                    let elem = e.currentTarget;
                    let section = elem.getAttribute("data-href");
                    if (section) {
                        e.preventDefault();
                        if (lenis) {
                            const target = document.querySelector(section);
                            if (target) {
                                lenis.scrollTo(target, {
                                    offset: 0,
                                    duration: 1.5,
                                });
                            }
                        }
                    }
                }
            });
        });
        // Handle resize
        window.addEventListener("resize", () => {
            lenis?.resize();
        });
        return () => {
            lenis?.destroy();
        };
    }, []);
    return (
        <>
            <div className="header">
                <a href="/#" className="navbar-title-logo" data-cursor="disable" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                    <svg width="36" height="36" viewBox="0 0 100 100" style={{ filter: "drop-shadow(0 0 6px var(--accent))" }}>
                        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke="var(--accent)" strokeWidth="8" fill="rgba(0,0,0,0.3)" />
                        <text x="50" y="55" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="34" fontWeight="800" fontFamily="sans-serif">
                            YS
                        </text>
                    </svg>
                    <span className="navbar-title" style={{ margin: 0, padding: 0 }}>
                        {config.developer.fullName.toUpperCase()}
                    </span>
                </a>
                <button className={`nav-toggle ${menuActive ? "active" : ""}`} onClick={() => setMenuActive(!menuActive)} aria-label="Toggle Navigation">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <ul className={menuActive ? "active" : ""}>
                    <li>
                        <a data-href="#about" href="#about" onClick={() => setMenuActive(false)}>
                            <HoverLinks text="ABOUT"/>
                        </a>
                    </li>
                    <li>
                        <a data-href="#work" href="#work" onClick={() => setMenuActive(false)}>
                            <HoverLinks text="PROJECTS"/>
                        </a>
                    </li>
                    <li>
                        <a data-href="#contact" href="#contact" onClick={() => setMenuActive(false)}>
                            <HoverLinks text="CONTACT"/>
                        </a>
                    </li>
                    <li>
                        <a href="/YASH_SINGH_CV.pdf" target="_blank" rel="noopener noreferrer" data-cursor="disable" onClick={() => setMenuActive(false)}>
                            <HoverLinks text="RESUME"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="landing-circle1"></div>
            <div className="landing-circle2"></div>
            <div className="nav-fade"></div>
        </>
    );
};
export default Navbar;
