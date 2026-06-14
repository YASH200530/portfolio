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

            // Animate section heading as scroll begins
            gsap.to(".work-section h2", {
                opacity: 0.15,
                y: -40,
                scale: 0.95,
                scrollTrigger: {
                    trigger: ".work-section",
                    start: "top top",
                    end: "top -150px",
                    scrub: true,
                }
            });

            // Animating each work box as it enters the viewport horizontally
            const boxes = document.querySelectorAll(".work-box");
            boxes.forEach((box) => {
                const img = box.querySelector(".work-image img, .work-image video");
                const info = box.querySelector(".work-info");
                
                // Subtle scale and opacity fade for the whole box
                gsap.fromTo(box, {
                    opacity: 0.3,
                    scale: 0.92,
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: "sine.out",
                    scrollTrigger: {
                        trigger: box,
                        containerAnimation: timeline,
                        start: "left 98%",
                        end: "left 65%",
                        scrub: true,
                    }
                });

                // Premium 3D tilt rotation and zoom on the project images/videos
                if (img) {
                    gsap.fromTo(img, {
                        scale: 0.88,
                        rotationY: -15,
                        transformOrigin: "left center",
                    }, {
                        scale: 1,
                        rotationY: 0,
                        ease: "sine.out",
                        scrollTrigger: {
                            trigger: box,
                            containerAnimation: timeline,
                            start: "left 95%",
                            end: "left 65%",
                            scrub: true,
                        }
                    });
                }
                
                // Staggered slide up for the details text
                if (info) {
                    gsap.fromTo(info, {
                        opacity: 0,
                        y: 40,
                    }, {
                        opacity: 1,
                        y: 0,
                        ease: "sine.out",
                        scrollTrigger: {
                            trigger: box,
                            containerAnimation: timeline,
                            start: "left 90%",
                            end: "left 60%",
                            scrub: true,
                        }
                    });
                }
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
