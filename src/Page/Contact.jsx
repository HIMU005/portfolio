import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from 'emailjs-com';
import toast from "react-hot-toast";

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const service_id = 'service_h8egwnz';
        const template_id = "template_pq63tpm";
        const publicKey = "CKP_xtaaI096PsNj5";

        const templateParams = {
            form_name: name,
            form_email: email,
            to_name: 'Hashanuz Zaman',
            message: message,
        }

        emailjs.send(service_id, template_id, templateParams, publicKey)
            .then(res => {
                toast.success('Email send');
                console.log(res.status);
                e.target.reset();
            })
            .catch((err) => {
                toast.error(err.message);
            })
    }
    return (
        <div className='bg-[#161513] text-white py-12 px-[10%]'>
            <h2 className="text-3xl">Contact</h2>

            <div className="flex justify-center gap-4 md:gap-7 lg:gap-10 py-4">
                <figure>
                    <a href="https://github.com/HIMU005" target="_blank">
                        <FaGithub className="text-3xl ml-3" />
                        <figcaption className="text-center">Github</figcaption>
                    </a>
                </figure>

                <figure>
                    <a href="https://www.facebook.com/himu.hashanuzzaman">
                        <FaFacebook className="text-3xl ml-3 text-primary" />
                        <figcaption>Facebook</figcaption>
                    </a>
                </figure>

                <figure>
                    <a href="https://www.linkedin.com/in/hashanuz-zaman-himu/">
                        <FaLinkedin className="text-3xl ml-3 text-accent" />
                        <figcaption>LinkedIn</figcaption>
                    </a>
                </figure>

                <figure>
                    <a href="https://www.instagram.com/himuhashanuzzaman/">
                        <FaInstagram className="text-3xl ml-3 text-secondary" />
                        <figcaption>Instagram</figcaption>
                    </a>
                </figure>
            </div>

            <form onSubmit={handleSubmit}>
                <input className="input input-bordered input-accent w-full text-black mb-2"
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name" id="" />
                <input className="input input-bordered input-secondary w-full text-black mb-2"
                    type="email"
                    name="email"
                    required
                    placeholder="Email" id="" />
                <textarea name="message"
                    className="w-full text-black p-3" rows='5' />
                <input type="submit" className="btn btn-success btn-outline w-full" value='Send' />
            </form>

        </div>
    );
};

export default Contact;