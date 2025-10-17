import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      name: "Daffodil International University",
      program: "B.Sc. in Software Engineering",
      result: "3.76",
      session: "2023 – Present",
      location: "Daffodil Smart City (DSC), Birulia, Savar, Dhaka",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      name: "Amrita Lal Day College, Barisal",
      program: "Higher Secondary Certificate (HSC)",
      result: "5:00 ( Golden )",
      session: "2020 – 2021",
      location: "Barisal City, Barisal",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      name: "Galachipa Model Secondary School",
      program: "Secondary School Certificate (SSC)",
      result: "5:00",
      session: "2018 – 2019",
      location: "Galachipa, Patuakhali, Barisal",
    },
  ];

  return (
    <section id="education" className="px-2">
      <h2 className="gap-2 md:text-start text-center font-mono text-3xl md:text-4xl mb-12 text-gray-800">
        Education
      </h2>

      <div className="flex flex-col gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border-b-2 border-gray-200 hover:border-cyan-700 hover:scale-101 flex flex-col md:items-start gap-6 transition-shadow duration-300"
          >
            <img
              src={edu.logo}
              alt={edu.name}
              className="w-20 h-20 rounded-xl object-contain border border-gray-200 p-2"
            />

            <div className="md:text-left space-y-1 mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {edu.name}
              </h3>
              <p className="text-gray-700">{edu.program}</p>
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">
                GPA - {edu.result}
              </span>
              <div className="flex md:justify-start items-center text-gray-500 text-sm gap-2 mt-2">
                <FaCalendarAlt className="text-cyan-600" />
                <span>{edu.session}</span>
              </div>

              <div className="flex md:justify-start items-center text-gray-500 text-sm gap-2">
                <FaMapMarkerAlt className="text-cyan-600" />
                <span>{edu.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
