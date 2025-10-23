import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "ProFast",
      image: "https://i.ibb.co.com/qLPG5rMw/logo.png",
      description:
        "Profast is a full-stack parcel delivery platform that enables users to send, track, and manage parcels efficiently. It includes real-time delivery status updates, authentication, and role-based dashboards for users and admins.",
      frameworks: [
        "React.js",
        "Tailwind CSS",
        "DaisyUI",
        "React Router",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      website: "https://zap-shift-85255.web.app/",
      github: "https://github.com/sifathossain-ai/Profast-Client-Side-Frontend",
    },
    {
      title: "Gadget Heaven",
      image: "https://i.ibb.co.com/WpvjG6nF/Group.png",
      description:
        "Tech Accessorize (Gadget Heaven) — A frontend-developed e-commerce web app for tech gadgets. Users can view products, explore details, and interact through a smooth, responsive UI built with modern frontend technologies",
      frameworks: [
        "React",
        "Tailwind CSS",
        "DaisyUI",
        "Firebase Auth",
        "React Router",
      ],
      website: "https://gadget-heaven-from-sifat.surge.sh/",
      github: "https://github.com/sifathossain-ai/Assignment8-Gadget-Heaven",
    },
    {
      title: "Sports Online",
      image: "https://i.ibb.co.com/5hytNJ78/download-3-removebg-preview.png",
      description:
        "Real-time chat application with user authentication, group chats, and online status indicators.",
      frameworks: ["React", "Socket.io", "Node.js", "Express", "Tailwind CSS"],
      website: "https://example-chat.com",
      github: "https://github.com/sifathossain-ai/sports-online-store-client",
    },
    {
      title: "Coffee Store",
      image: "https://i.ibb.co.com/MkTvtdJQ/coffee-shop-removebg-preview.png",
      description:
        "Real-time chat application with user authentication, group chats, and online status indicators.",
      frameworks: ["React", "Socket.io", "Node.js", "Express", "Tailwind CSS"],
      website: "https://coffee-store-df024.web.app",
      github:
        "https://github.com/sifathossain-ai/coffee-store-client-with-auth",
    },
  ];

  return (
    <section id="projects" className="px-2">
      <h2 className="text-center md:text-start font-mono text-3xl md:text-4xl mb-12 text-black">
        Projects
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:scale-101 transition-transform duration-300 hover:shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-45 h-45 object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {project.title}
            </h3>
            <p className="text-gray-700 text-center mb-2">
              {project.description}
            </p>

            <p className="flex flex-wrap justify-center gap-1 mb-4">
              {project.frameworks.map((framework, i) => (
                <span
                  key={i}
                  className="inline-flex items-center bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10"
                >
                  {framework}
                </span>
              ))}
            </p>

            <hr className="w-full flex-1 border-gray-300 mb-4" />

            <div className="flex gap-3">
              <div>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 text-white px-2 py-1 rounded-md hover:bg-cyan-700 transition-colors text-sm"
                >
                  Website
                </a>
              </div>
              <div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-2 py-1 rounded-md hover:bg-black transition-colors text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
