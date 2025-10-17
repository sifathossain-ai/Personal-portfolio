import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";

const ContactMe = () => {
  const contacts = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "bg-gray-700",
      link: "https://github.com/sifathossain-ai",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      color: "bg-[#0A66C2]",
      link: "https://linkedin.com/in/sifathossain-ai",
    },
    {
      name: "Gmail",
      icon: <FaEnvelope />,
      color: "bg-red-500",
      link: "mailto:sifathossain.swe@gmail.com",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      color: "bg-blue-600",
      link: "https://facebook.com/sifathossain.net",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      color: "bg-sky-400",
      link: "https://twitter.com/sifathossain_ai",
    },
    { name: "Discord", icon: <FaDiscord />, color: "bg-indigo-500", link: "" },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      color: "bg-pink-600",
      link: "https://www.instagram.com/sifathossain.ai/",
    },
  ];
  return (
    <section id="contact" className="px-2">
      <h2 className="gap-2 md:text-start text-center font-mono text-3xl md:text-4xl mb-4 text-gray-800">
        Contact Me
      </h2>
      <p className="text-gray-500 md:text-start text-center mb-2">
        If you want to hire me or have other queries, then knock me anytime.
      </p>
      <p className="text-gray-500 md:text-start text-center mb-10">
        I try to reply within 24 hours.
      </p>
      <p className="text-gray-400 mb-5 text-xl md:text-2xl font-medium md:text-start text-center">
        sifathossain.swe@gamil.com
      </p>

      <div className="flex flex-wrap px-0 md:justify-start justify-center gap-2">
        {contacts.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-white px-4 py-2 rounded-md ${item.color} hover:opacity-80 transition`}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </a>
        ))}
      </div>
      <footer className="py-12 space-y-2">
        <p className="text-center text-gray-700">Thank you for your visiting</p>
        <p className="text-center text-gray-500 font-mono text-sm">
          © {new Date().getFullYear()} Sifat Hossain — All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default ContactMe;
