import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#about" className="hover:underline">About Me</a></li>
                        <li><a href="#services" className="hover:underline">Services</a></li>
                        <li><a href="#skills" className="hover:underline">Skills</a></li>
                        <li><a href="/gisprojects" className="hover:underline">Projects</a></li>
                        <li><a href="#projects" className="hover:underline">Projects</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Nairobi, Kenya <br />
                        <strong>Phone:</strong> +254 742149060 <br />
                        <strong>Email:</strong> oumab743@gmail.com
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">About Brian Makanda</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Passionate  Gesopatial Specialist ,Geospatial analyst ,Frontend & Backend Developer with a love for  remote sensing .
                    </p>
                    <div className="flex gap-4 text-xl text-gray-400">
                        <a href="mailto:oumab743@gmail.com" className="hover:text-teal-400"><FaEnvelope /></a>
                        <a href="https://www.linkedin.com/in/brian-makanda-26ba7424a/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400"><FaLinkedin /></a>
                        <a href="https://github.com/makanda596" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400"><FaGithub /></a>
               
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Brian Makanda. All Rights Reserved. <br />
                 <span className="text-white font-semibold">Brian Makanda</span>
            </div>
        </footer>
    );
};

export default Footer;
  