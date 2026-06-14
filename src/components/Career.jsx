import "./styles/Career.css";

const Career = () => {
    return (
        <div className="career-section section-container" id="philosophy">
            <div className="career-container">
                <h2>
                    My <span>Philosophy</span>
                    <br /> & Approach
                </h2>
                <div className="career-info-philosophy">
                    <p className="philosophy-text">
                        I am a software engineer who loves coding and building digital solutions. I am passionate about learning how things work under the hood, from algorithms and databases to modern web architectures.
                    </p>
                    <p className="philosophy-text">
                        I approach every project with curiosity and a problem-solving mindset, striving to write readable, reusable, and robust code that adds value to users.
                    </p>
                    <p className="philosophy-text">
                        By asking incisive questions and slicing problems into clear, actionable steps, I create smart, streamlined solutions that drive my personal development and, with the right perspective, uplift the wider community.
                    </p>
                    <p className="philosophy-text">
                        When I am not developing, you'll find me exploring thought-provoking insights from podcasts and books, mentoring others or in the gym.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Career;
