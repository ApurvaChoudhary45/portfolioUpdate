import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 md:mt-16">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        {/* Name or Signature */}
        <p className="text-gray-600 text-sm">© 2025 Apurva Singh. All rights reserved.</p>

        {/* Icons */}
        <div className="flex space-x-6 text-gray-600">
          <a
            href="https://github.com/ApurvaChoudhary45"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/apurva-singh-choudhary-374991223/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:apurvasinghchoudhary@gmail.com"
            className="hover:text-red-600 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
