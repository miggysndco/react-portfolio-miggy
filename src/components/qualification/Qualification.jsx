import React from 'react'
import './qualification.css'

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
            <div className="qualification_button qualification_active button--flex">
                <i className="uil uil-graduation-cap qualification_icon"></i>
                Education
            </div>

            <div className="qualification_button button--flex">
                <i className="uil uil-briefcase-alt qualification_icon"></i>
                Experience
            </div>
        </div>

        <div className="qualification_sections">
            <div className="qualification_content qualification_content-active">
                <div className="qualification_data">
                    <div>
                        <h3 class="qualification_title">College</h3>
                        <span 
                        class="qualification_subtitle">La Consolacion College</span>
                        <div class="qualification_calendar">
                            <i class="uil uil-calendar-alt calendar_icon"></i>
                            2020 - 2024
                        </div>  
                    </div>

                    <div>
                      <span class="qualification_rounder"></span>
                      <span class="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>

                    <div>
                      <span className="qualification_rounder"></span>
                      <span className="qualification_line"></span>
                    </div>
                    
                    <div>
                        <h3 className="qualification_title">Internship</h3>
                        <span 
                        className="qualification_subtitle">IQor Philippines</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt calendar_icon"></i>
                            Aug - Dec 2023
                        </div>  
                    </div>
                </div>

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Senior High School</h3>
                        <span 
                        className="qualification_subtitle">Alpha Angelicum Academy</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt calendar_icon"></i>
                            2018-2020
                        </div>  
                    </div>

                    <div>
                      <span className="qualification_rounder"></span>
                      <span className="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>

                    <div>
                      <span className="qualification_rounder"></span>
                      <span className="qualification_line"></span>
                    </div>
                    
                    <div>
                        <h3 className="qualification_title">Junior High School</h3>
                        <span 
                        className="qualification_subtitle">Alpha Angelicum Academy</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt calendar_icon"></i>
                            2014 - 2018
                        </div>  
                    </div>
                </div>
            </div>

            <div className="qualification_content">
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Product Designer</h3>
                        <span 
                        className="qualification_subtitle">Microsoft - Spain</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt calendar_icon"></i>
                            2021 - Present
                        </div>  
                    </div>

                    <div>
                      <span className="qualification_rounder"></span>
                      <span className="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>

                    <div>
                      <span className="qualification_rounder"></span>
                      <span className="qualification_line"></span>
                    </div>
                    
                    <div>
                        <h3 className="qualification_title">UX Designer</h3>
                        <span 
                        className="qualification_subtitle">Apple Inc - Spain</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt calendar_icon"></i>
                            2021 - Present
                        </div>  
                    </div>
                </div>

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Web Designer</h3>
                        <span 
                        className="qualification_subtitle">Figma - Spain</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt calendar_icon"></i>
                            2021 - Present
                        </div>  
                    </div>

                    <div>
                      <span className="qualification_rounder"></span>
                      <span className="qualification_line"></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
