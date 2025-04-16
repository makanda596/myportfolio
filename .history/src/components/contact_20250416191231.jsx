import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-10">
          Whether you want to collaborate, ask a question, or just say hi — my inbox is always open.
        </p>

        <div className="flex justify-center gap-8 mb-10">
          <a
            href="mailto:oumab743@gmail.com"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition"
          >
            <FaEnvelope className="text-xl" /> oumab743@gmail.com
          </a>

          <a
            href="https://github.com/makanda596"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-gray-400 transition"
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
          action="https://formspree.io/f/xnqepzvn" // Replace with your Formspree form endpoint or your own backend route
          method="POST"
          className="grid grid-cols-1 gap-4 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
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
