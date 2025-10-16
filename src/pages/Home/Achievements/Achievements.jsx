const Achievements = () => {
  const achievements = [
    {
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      title: "Open Source Contribution",
      description:
        "Contributed reusable UI components that were adopted by 50+ projects.",
      reference: {
        label: "Repository",
        url: "https://example.com/github-repo",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      title: "500+ Community Tutorials",
      description:
        "Published 500+ tutorials and walkthroughs empowering new developers.",
      reference: {
        label: "Browse Tutorials",
        url: "https://example.com/tutorials",
      },
    },
  ];

  return (
    <section id="achievements" className="px-2 max-w-7xl mx-auto">
      <h2 className="text-center md:text-start font-mono text-3xl md:text-4xl mb-8 text-gray-800">
        Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((ach, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:scale-101 border border-gray-200 transition-transform duration-300 hover:shadow-xl overflow-hidden flex flex-col"
          >
            <img
              src={ach.image}
              alt={ach.title}
              className="w-full p-6 h-44 object-cover"
            />
            <div className="p-6 flex-1 flex items-center text-center flex-col">
              <h3 className="text-xl font-semibold mb-2">{ach.title}</h3>
              <p className="text-gray-500 text-sm flex-1">{ach.description}</p>
              <div className="mt-4">
                <a
                  href={ach.reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-2 py-1 rounded-md bg-cyan-500 text-white text-sm hover:bg-cyan-800 hover:text-white transition"
                >
                  {ach.reference.label}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
