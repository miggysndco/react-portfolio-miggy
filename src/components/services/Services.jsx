import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    
    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section class="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I offer</span>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-visual-studio services_icon"></i>
                    <h3 className="services_title">Website <br></br> Development</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">Web Development</h3>
                        <p className="services_modal-description">
                            I offer comprehensive website development services tailored to meet your business needs. 
                            Whether you're looking for a simple landing page or a fully functional website.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Design and develop responsive websites.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Implement SEO best practices to improve website visibility and search engine ranking.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Integrate databases and APIs for dynamic content and functionality.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Maintain and update existing websites to ensure optimal performance.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

    {/* ----------------------------------------------------------------------------------------------------- */}
            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">UI/UX <br></br> Design</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">UI/UX Design</h3>
                        <p className="services_modal-description">
                            I provide UI/UX design services focused on creating intuitive and 
                            engaging user experiences. By blending aesthetics with functionality, 
                            I ensure your website or app is visually appealing and easy to navigate, 
                            enhancing user satisfaction and retention.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Conduct user research and create user personas to inform design decisions.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Design wireframes, prototypes, and high-fidelity mockups.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Ensure responsive design for seamless experience across devices.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Perform usability testing and optimize user flows for a smooth experience.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

    {/* ----------------------------------------------------------------------------------------------------- */}
            <div className="services_content">
                <div>
                    <i className="uil uil-image-edit services_icon"></i>
                    <h3 className="services_title">Media <br></br> Editing</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(3)}>
                    View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">Media Editing</h3>
                        <p className="services_modal-description">
                            I offer media editing services to enhance your visual and audio content, 
                            ensuring professional quality that aligns with your brand’s message. 
                            From video editing to sound design, I bring your creative vision to life 
                            while maintaining high production standards.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Edit and enhance videos with transitions, effects, and color grading.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Mix and master audio for clear and balanced sound.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Create and edit graphics, animations, and visual effects for multimedia content.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Optimize multimedia files for various platforms and formats.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
