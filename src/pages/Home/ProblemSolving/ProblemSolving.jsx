import React from "react";

const ProblemSolving = () => {
  const problems = [
    {
      title: "1091 Rating on Codeforces",
      image: "https://i.ibb.co.com/8LTWcJft/images-1.png",
      description:
        "Solved 450+ problems on Codeforces, including complex challenges using diverse algorithms and data structures.",
      reference: "https://codeforces.com/profile/sifathossain",
    },
    {
      title: "2★ Star on CodeChef ",
      image: "https://i.ibb.co.com/tw45brHz/codechef-icon-filled-256.png",
      description:
        "2★ Coder on CodeChef (1473 Rating, Div 3) — regularly participate in rated contests and solve algorithmic challenges to sharpen problem-solving skills.",
      reference: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",
    },
    {
      title: "Regular AtCoder Participant",
      image: "https://i.ibb.co.com/KcQ2ydnz/atcoder.png",
      description:
        "Actively participate in AtCoder contests to strengthen problem-solving and algorithmic thinking skills.",
      reference: "https://atcoder.jp/users/sifathossain",
    },
  ];

  return (
    <section id="problem-solving" className="px-2">
      <div className="mb-12 space-y-3 text-center md:text-start">
        <h2 className="font-mono text-3xl md:text-4xl text-gray-800">
          Problem Solving Activities
        </h2>
        <p className="text-gray-400">My Competitive Programming Journey</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="bg-white border-l-2 border-gray-400 hover:border-cyan-700 hover:scale-101 overflow-hidden flex flex-col"
          >
            <img
              src={problem.image}
              alt={problem.title}
              className="w-full p-2 h-56 object-contain"
            />
            <div className="p-2 flex-1 flex items-center text-center flex-col">
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-500 text-sm flex-1">
                {problem.description}
              </p>
              <div className="mt-4">
                <a
                  href={problem.reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-2 py-1 rounded-md bg-cyan-500 text-white text-sm hover:bg-cyan-800 hover:text-white transition"
                >
                  Reference
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSolving;
