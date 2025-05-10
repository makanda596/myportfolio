import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Useful Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About us</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Terms of service</a></li>
                        <li><a href="#" className="hover:underline">Privacy policy</a></li>
                    </ul>
                </div>

                {/* My Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">My Services</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:underline">Mobile Apps Design</a></li>
                        <li><a href="#" className="hover:underline">Web Development</a></li>
                        <li><a href="#" className="hover:underline">Payments Integration</a></li>
                        <li><a href="#" className="hover:underline">API Integration</a></li>
                        <li><a href="#" className="hover:underline">MPESA Integration</a></li>
                    </ul>
                </div>

                {/* Contact Me */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
                    <p className="text-sm text-gray-300">
                        Eldoret, Uasin Gishu<br />
                        Kenya<br />
                        <strong>Phone:</strong> +254 704 080 870<br />
                        <strong>Email:</strong> dev.bensalcie@gmail.com
                    </p>
                </div>

                {/* About */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Ben Salcie</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        A Mobile Apps Engineer, Engineer by career and Programmer by passion.
                    </p>
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="text-blue-400 hover:text-white"><FaTwitter /></a>
                        <a href="#" className="text-pink-500 hover:text-white"><FaInstagram /></a>
                        <a href="mailto:dev.bensalcie@gmail.com" className="text-blue-300 hover:text-white"><FaEnvelope /></a>
                        <a href="#" className="text-blue-600 hover:text-white"><FaLinkedin /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaGithub /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Ben Salcie. All Rights Reserved.<br />
                Designed by <span className="text-white">Ben Salcie</span>
            </div>
        </footer>
    );
};

export default Footer;
