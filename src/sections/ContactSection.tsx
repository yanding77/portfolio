import TitleHeader from "../components/TitleHeader.tsx";
import ContactExperience from "../components/Models3D/ContactExperience.tsx";
import {type ChangeEvent, type FormEvent, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {useMediaQuery} from "react-responsive";

const ContactSection = () => {
    const isMobile = useMediaQuery({query: '(max-width: 1024)'});
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        setLoading(true);

        try {
            if (!formRef.current) {
                setLoading(false);
                return;
            }
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            setFormData({
                name: "",
                email: "",
                message: "",
            })
        }
        catch(error){
            console.log('EMAIL JS ERROR: ', error);
        } finally {
            setLoading(false)
        }
    }
    const HandleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <section id='contact' className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Let's Get in Touch" sub={"✉️ yandingmario@gmail.com"}/>

                <div className="mt-16 grid-12-cols">
                    {}
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7" ref = {formRef}>
                            <div className="mb-6">
                            <label htmlFor="name">Name</label>
                                <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={HandleChange}
                                required/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email">Email</label>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your email address"
                                value={formData.email}
                                onChange={HandleChange}
                                required/>
                            </div>
                            { isMobile ?  (<div className="mb-6">
                                <label htmlFor="message">Message</label>
                                <textarea
                                id="message"
                                name="message"
                                placeholder="Your message"
                                value={formData.message}
                                rows = {5}
                                onChange={HandleChange}
                                required></textarea>
                            </div>) : null}
                            <button
                            type="submit" disabled={loading}>
                            <div className="cta-button group">
                                <div className="bg-circle"/>
                                    <p className="text">{loading ? 'Sending..':'Send Info'}</p>
                                    <div className="arrow-wrapper">
                                        <img src='./images/arrow-down.svg' alt="arrow"/>

                                    </div>

                            </div>
                            </button>

                        </form>
                        </div>

                    </div>
                    {}
                    <div className="xl:col-span-7  min-h-96">
                        <div className="w-full h-full hover:cursor-grab round rounded-3xl overflow-hidden">
                        <ContactExperience />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection;