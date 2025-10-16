import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      description:
        "A personal portfolio website to showcase projects, skills, and experience. Fully responsive and interactive.",
      frameworks: ["React", "Tailwind CSS", "React Icons", "React Router"],
      website: "https://example-portfolio.com",
      github: "https://github.com/example/portfolio",
    },
    {
      title: "E-Commerce Store",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      description:
        "An online store platform with product listings, cart functionality, and secure checkout system.",
      frameworks: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      website: "https://example-store.com",
      github: "https://github.com/example/ecommerce",
    },
    {
      title: "Chat Application",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      description:
        "Real-time chat application with user authentication, group chats, and online status indicators.",
      frameworks: ["React", "Socket.io", "Node.js", "Express", "Tailwind CSS"],
      website: "https://example-chat.com",
      github: "https://github.com/example/chat-app",
    },
    {
      title: "ProFast",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      description:
        "Real-time chat application with user authentication, group chats, and online status indicators.",
      frameworks: ["React", "Socket.io", "Node.js", "Express", "Tailwind CSS"],
      website: "https://example-chat.com",
      github: "https://github.com/example/chat-app",
    },
  ];

  return (
    <section id="projects" className="px-2">
      <h2 className="text-center md:text-start font-mono text-3xl md:text-4xl mb-10 text-black">
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
              className="w-full h-48 object-contain rounded-lg mb-4"
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
