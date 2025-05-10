import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-2 bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-10">
          Whether you want to collaborate, ask a question, or just say hi  my inbox is always open.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 text-sm sm:text-base">
          <a
            href="tel:+254742149060"
            className="text-blue-500 hover:text-blue-700 font-semibold text-lg transition duration-200 ease-in-out"
          >Phone
          </a>

          <a
            href="mailto:oumab743@gmail.com"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition"
          >
            <FaEnvelope className="text-xl" /> email
          </a>

          <a
            href="https://github.com/makanda596"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-gray-400 transition"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/brian-makanda-26ba7424a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="grid grid-cols-1 gap-4 max-w-xl mx-auto"
        >
          <input
            type="hidden"
            name="access_key"
            value="1a963b75-8bc9-43a3-b79f-457662aa4798"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-100 text-white border border-gray-700 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-100 text-white border border-gray-700 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded bg-gray-100 text-white border border-gray-700 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
