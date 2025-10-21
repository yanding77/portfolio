import {useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const SectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(()=>{
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(card, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration:1,
                delay: 0.3 * (index+1), scrollTrigger:{trigger: card, start:'top bottom-=100'}});
        })
        gsap.fromTo(SectionRef.current, {opacity:0}, {opacity: 1, duration:1.5,});

    },[]);

    return(
        <section id="work" ref={SectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {}
                    <div className="first-project-wrapper" ref={project1Ref} >
                        <div className='image-wrapper' >
                            <a href="https://github.com/yanding77/mass-general" target="_blank">
                            <img src="/images/project4.png" alt="Hosptial"/>
                            </a>
                        </div>
                        <div className="text-content">
                            <h2>The UMass General Brigham navigation website helps patients and visitors find their way with ease.</h2>
                            <p className="text-white-50 md:text-xl">
                                An App built with React, Express and PostgreSQL for a fast, user-friendly experience.
                            </p>

                        </div>
                    </div>
                    {}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ebd0ac]">
                                <a href="https://github.com/yanding77/QR" target="_blank">
                                <img src='images/project5.png' alt="Restaurant"/>
                                </a>
                            </div>
                            <h2>QR Restaurant Ordering App</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#f0e5d9]">
                                <img src='images/project6.png' alt="Spreadsheet"/>
                            </div>
                            <h2>Spreadsheet tool for creating, editing, and managing data</h2>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default ShowcaseSection;