import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Air Collection",
      image: "https://i.ibb.co.com/NPLNDZP/aircollection1.png",
      description:
        "Developed Air Collection, a scalable full-stack e-commerce application powered by Node.js and a robust PostgreSQL database. Engineered secure JWT authentication and optimized live deployment pipelines using Nginx reverse proxies.",
      frameworks: [
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "Daisy UI",
        "Node.js",
        "Next.js",
        "PostgreSQL",
        "Nginx",
      ],
      website: "https://aircollection.shop/",
      github: "https://github.com/zharmo/Air-collection",
    },
    {
      title: "Buyoron",
      image: "https://i.ibb.co.com/TBc1N75d/logo2.png",
      description:
        "Developed Buyoron, a scalable full stack e-commerce platform with multi-role dashboards and real-time order management. Built efficient RESTful APIs to handle authentication, data processing, and system operations.",
      frameworks: [
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Daisy UI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Auth",
      ],
      website: "https://buyoron.com/",
      github: "https://github.com/sifathossain-ai/buyoron-client",
    },
    {
      title: "Wapzen.io",
      image: "https://i.ibb.co.com/4Z4Hdg1p/Wap-Zen-Logo-03.png",
      description:
        "Contributed to the frontend and backend development of Wapzen.io, a scalable communication platform focused on WhatsApp-based automation. The system enables businesses to manage messages efficiently via RESTful APIs.",
      frameworks: [
        "Node.js",
        "TypeScript",
        "Nest JS",
        "PostgreSQL",
        "Prigma",
        "Next.js",
        "Tailwind CSS",
        "Radix UI",
        "Clerk",
      ],
      website: "https://wapzen.io/",
      github: "https://github.com/the-jahid/wa-send-preview",
    },
    {
      title: "Slicee",
      image: "https://i.ibb.co.com/fY8Gs2sJ/slicee.png",
      description:
        "Developed Slicee, a high-performance Next.js e-commerce application with server-state caching and responsive layouts. Built modular UI components to handle secure authentication, cart persistence, and multi-step checkout operations.",
      frameworks: [
        "React.js",
        "Tailwind CSS",
        "DaisyUI",
        "React Router",
        "Node.js",
        "Next.js",
        "PostgreSQL",
      ],
      website: "https://slicee-by-sifat.vercel.app/",
      github: "https://github.com/sifathossain-ai/slicee-frontend",
    },
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
