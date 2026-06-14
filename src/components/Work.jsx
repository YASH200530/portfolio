import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { config } from "../config";
import { FaGithub } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    useEffect(() => {
        let mm = gsap.matchMedia();
        
        mm.add("(min-width: 1025px)", () => {
            let translateX = 0;
            function setTranslateX() {
                const box = document.getElementsByClassName("work-box");
                if (box.length === 0)
                    return;
                const rectLeft = document
                    .querySelector(".work-container")
                    .getBoundingClientRect().left;
                const rect = box[0].getBoundingClientRect();
                const parentWidth = box[0].parentElement.getBoundingClientRect().width;
                let padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
                translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
            }
            setTranslateX();
            
            let timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".work-section",
                    start: "top top",
                    end: `+=${translateX}`,
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    id: "work",
                    invalidateOnRefresh: true,
                },
            });
            
            timeline.to(".work-flex", {
                x: -translateX,
                ease: "none",
            });
        });

        // Mobile/Tablet Scroll Entrance Animation
        mm.add("(max-width: 1024px)", () => {
            const boxes = document.querySelectorAll(".work-box");
            boxes.forEach((box) => {
                gsap.fromTo(box, {
                    y: 50,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: box,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });
        });
        
        // Clean up
        return () => {
            mm.revert();
        };
    }, []);
    return (
        <div className="work-section" id="work">
            <div className="work-container section-container">
                <h2>
                    Things<span>I'veBuild</span>
                </h2>
                <div className="work-flex">
                    {config.projects.slice(0, 5).map((project, index) => (
                        <div className="work-box" key={project.id}>
                            <div className="work-info">
                                <div className="work-title">
                                    <h3>0{index + 1}</h3>
                                    <div>
                                        <h4>{project.title}</h4>
                                        <p>{project.category}</p>
                                    </div>
                                </div>
                                <h4>Tools and features</h4>
                                <p>{project.technologies}</p>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-github-link" data-cursor="disable">
                                        <FaGithub /> View Repository
                                    </a>
                                )}
                            </div>
                            <WorkImage image={project.image} alt={project.title} video={project.video}/>
                        </div>
                    ))}
                    {/* See All Works Button */}
                    <div className="work-box work-box-cta">
                        <div className="see-all-works">
                            <h3>Want to see more?</h3>
                            <p>Explore all of my projects and creations</p>
                            <a href={config.contact.github} target="_blank" rel="noopener noreferrer" className="see-all-btn" data-cursor="disable">
                                See All Projects →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
