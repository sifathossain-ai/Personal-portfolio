import { HashLink } from "react-router-hash-link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import profileImg from "../../../assets/sifat-pro.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between px-2 pt-28 md:pt-32 gap-12"
    >
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-[43px] md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
          Hi, I’m Sifat Hossain
        </h1>
        <p className="text-lg md:text-2xl font-light font-sans text-gray-700 mb-4 max-w-xl mx-auto md:mx-0">
          Software Engineer | Passionate{" "}
          <span className="font-normal">Full Stack Developer</span> skilled in{" "}
          <span className="font-normal">React.js</span>, Tailwind CSS, DaisyUI,{" "}
          <span className="font-normal">Node.js, Express.js</span>, &{" "}
          <span className="font-normal">MongoDB</span>
        </p>

        <div className="flex items-center justify-center">
          <hr className="w-14 mb-4 text-gray-400" />
        </div>

        <p className="text-lg md:text-2xl font-light font-sans text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
          <span className="font-normal">2★ Star</span> on CodeChef |{" "}
          <span className="font-normal">1091 Rating</span> on Codeforces |{" "}
          <span className="font-normal">1000+ </span>
          Problems Solved.
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-3 mb-8">
          <a
            href="https://github.com/sifathossain-ai"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-cyan-500 transition-colors text-2xl"
          >
            <FaGithub className="w-7 h-7" />
          </a>
          <a
            href="https://linkedin.com/in/sifathossain-ai"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-cyan-500 transition-colors text-2xl"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a
            href="mailto:sifathossain.swe@gmail.com"
            className="text-gray-700 hover:text-cyan-500 transition-colors text-2xl"
          >
            <FaEnvelope className="w-7 h-7" />
          </a>
          <a
            href="https://facebook.com/sifathossain.net"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-cyan-500 transition-colors text-2xl"
          >
            <FaFacebook className="w-7 h-7" />
          </a>
          <a
            href="https://twitter.com/sifathossain_ai"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-cyan-500 transition-colors text-2xl"
          >
            <FaTwitter className="w-7 h-7" />
          </a>
        </div>

        {/* Contact Button */}
        <HashLink
          smooth
          to="/#contact"
          className="btn bg-cyan-500 btn-md font-semibold rounded-lg shadow-md text-white hover:bg-cyan-600"
        >
          Contact Me
        </HashLink>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end lg:pr-24">
        <div className="w-64 h-64 lg:w-80 border-3 border-white lg:h-80 rounded-full overflow-hidden shadow-lg hover:scale-107 transition-transform duration-300">
          <img
            src={profileImg}
            alt="Sifat Hossain"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
