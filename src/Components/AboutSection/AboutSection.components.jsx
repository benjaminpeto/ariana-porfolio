import React from "react";

import resume from '../../data/ariana_scalzo_cv.pdf'

import './AboutSection.styles.scss';

function AboutSection() {
  return (
    <section className='about-wrapper'>

        <h1>Hola!</h1>
        <div className="paragraph-wrapper">
          <div>
            <p>
              I'm Ariana, a UX/UI | graphic designer who is passionate about providing interactive experiences and identities to forward thinking brands and companies worldwide.
              Having gained an architectural design based degree, my career saw a natural progression from merchandising, spacial design, enterprise management to graphic and UX/UI design.
            </p>
            <p className="odd-paragraph">
              For the past nine years, I've worked on various design projects including, package design, outdoor and print advertisements, branding, illustrations and most recently UX/UI design.
            </p>
          </div>

          <div>
            <p>
              Using mostly Adobe Creative Suite alongside Figma, I have implemented successful design solutions for brands such as Eat at Sicily, Baker & Spice, Philpotts, Patisserie Valerie, R2 Hotels and Rubys of London.
            </p>
            <p>
              I have an end-to-end understanding of project development from concept to solution, and from pitch to discussed implementation. I enjoy challenges and working to targets, planning ahead, problem solving and quick thinking. Creatively, I enjoy brainstorming and innovative ideas that exploit target market opportunities using advertising strategies that impact consumer buying trends. 
            </p>
          </div>
        </div>
        <div className="button-wrapper">
          <a className='resume-btn' href={resume} download="ariana_scalzo_cv.pdf">RESUME</a>
        </div>

    </section>
  );
}

export default AboutSection;