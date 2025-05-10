import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#about" className="hover:underline">About us</a></li>
                        <li><a href="#services" className="hover:underline">Services</a></li>
                        <li><a href="#skills" className="hover:underline">Skills</a></li>
                        <li><a href="#projects" className="hover:underline">Projects</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
                    <p className="text-sm text-gray-300">
                        Nairobi, Kenya<br />
                        Kenya<br />
                        <strong>Phone:</strong> +254 742149060<br />
                        <strong>Email:</strong> oumab743@gmail.com
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">About Brian Makanda</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        A Frontend Developer, Backend Developer and Programmer by passion.
                    </p>
                    <div className="flex gap-4 text-xl">
                        <a href="mailto:oumab743@gmail.com" className="text-blue-300 hover:text-white"><FaEnvelope /></a>
                        <a href="https://www.linkedin.com/in/brian-makanda-26ba7424a/" className="text-blue-600 hover:text-white"><FaLinkedin /></a>
                        <a href="https://github.com/makanda596" className="text-gray-400 hover:text-white"><FaGithub /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Brian Makanda. All Rights Reserved.<br />
                Designed by <span className="text-white">Brian Makanda</span>
            </div>
        </footer>
    );
};

export default Footer;
