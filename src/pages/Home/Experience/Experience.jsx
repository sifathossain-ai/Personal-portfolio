import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Not Yet",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      role: "Software Engineer",
      type: "Full Stack",
      startDate: "Feb 2024",
      endDate: "Present",
      duration: "1 yrs 8 mos",
      location: "Remote (New York, United States)",
      project: "Dragon News",
      projectLink: "https://dragon-news-by-sifat.surge.sh",
      points: [
        "Led team of 4 engineers to architect production-scale RAG pipeline processing millions of data points.",
        "Built advanced RAG retrieval system enabling Web3 AI agents with sub-100ms latency.",
        "Engineered AWS cloud infrastructure with Docker and Datadog monitoring achieving 99.9% uptime.",
        "Engineered AWS cloud infrastructure with Docker and Datadog monitoring achieving 99.9% uptime.",
      ],
    },
  ];

  return (
    <section id="experience" className="px-2">
      <h2 className="text-center md:text-start font-mono text-3xl md:text-4xl mb-12 text-gray-800">
        Work Experience
      </h2>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border-l-4 border-cyan-500 hover:scale-101 transition-transform duration-300 hover:shadow-lg hover:border-cyan-700"
          >
            <div className="flex items-center bg-gray-50 rounded-t-2xl p-6 border-b border-gray-200 gap-4">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-12 h-12 rounded-lg object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold ">{exp.company}</h3>
                <p className="font-semibold text-blue-700">{exp.role}</p>

                <div className="flex items-center text-sm text-gray-500 gap-2 mt-1">
                  <FaCalendarAlt className="text-cyan-800" />
                  <span>
                    {exp.startDate} – {exp.endDate} • {exp.duration}
                  </span>
                </div>

                <div className="flex items-center text-sm text-gray-500 gap-2">
                  <FaMapMarkerAlt className="text-cyan-800" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="">
                <h4 className="font-semibold text-lg text-gray-800">
                  {exp.role} – {exp.type}
                </h4>

                {exp.project && (
                  <a
                    href={exp.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 text-sm mt-1"
                  >
                    <FaBriefcase /> Project: {exp.project}
                  </a>
                )}
              </div>

              <ul className="list-disc ml-5 mt-3 text-gray-700 leading-relaxed text-[15px]">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
