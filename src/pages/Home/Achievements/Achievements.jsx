const Achievements = () => {
  const achievements = [
    {
      image: "https://i.ibb.co.com/5XJBM2MV/Codechef.png",
      title: "2★ Star on CodeChef",
      description: `Earned 2★ on CodeChef with a 1473 rating (Div 3), ranking 410 globally. Practiced extensively on Codeforces (Max 1090) and solved 1000+ problems overall.`,
      reference: {
        label: "Website",
        url: "https://www.codechef.com/users/sifathossain",
      },
    },
    {
      image: "https://i.ibb.co.com/6RPLJhrk/Coursera-UKPYPJVH5-FSN.jpg",
      title: "Machine Learning with Python",
      description: `Completed the Machine Learning course on Coursera on January 29, 2024. Gained hands-on experience with Clustering, Regression, Classification, and practical implementation using SciPy & scikit-learn.`,
      reference: {
        label: "Website",
        url: "https://www.coursera.org/account/accomplishments/verify/UKPYPJVH5FSN",
      },
    },
  ];

  return (
    <section id="achievements" className="px-2">
      <h2 className="text-center md:text-start font-mono text-3xl md:text-4xl mb-12 text-gray-800">
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
              className="w-full p-6 h-full rounded-lg object-cover"
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
