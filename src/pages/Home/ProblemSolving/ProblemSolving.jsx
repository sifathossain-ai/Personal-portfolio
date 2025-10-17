import React from "react";

const ProblemSolving = () => {
  const problems = [
    {
      title: "Binary Search Algorithm",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      description:
        "Implemented a binary search algorithm to find elements in a sorted array efficiently with O(log n) complexity.",
      reference: "https://en.wikipedia.org/wiki/Binary_search_algorithm",
    },
    {
      title: "Dijkstra's Shortest Algorithm",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      description:
        "Used Dijkstra's algorithm to find the shortest path in weighted graphs. Optimized using priority queues.",
      reference: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",
    },
    {
      title: "Dynamic Programming(DP) - Knapsack",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      description:
        "Solved the 0-1 knapsack problem using dynamic programming to maximize profit under weight constraints.",
      reference: "https://en.wikipedia.org/wiki/Knapsack_problem",
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
