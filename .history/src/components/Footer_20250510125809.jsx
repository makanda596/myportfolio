import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-850 text-white py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                <div className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Brian Makanda. All rights reserved.
                </div>

                <div className="flex gap-6 text-xl">
                    <a
                        href="mailto:oumab743@gmail.com"
                        className="text-blue-400 hover:text-blue-600 transition"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://github.com/makanda596"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/brian-makanda-26ba7424a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
