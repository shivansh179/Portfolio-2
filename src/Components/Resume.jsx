import React from "react";

const Resume = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 rounded-lg text-teal-200 lg:p-8 lg:flex justify-center">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-mono font-bold mb-4 border-b-2 border-teal-500 pb-4">
            Resume
          </h1>
          <section>
            <h2 className="text-2xl font-semibold mb-6">Education</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-teal-500 flex-shrink-0 mt-2"></div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">
                    SRM University, Delhi - NCR
                  </h3>
                  <span className="text-gray-400">2021 — 2025</span>
                  <p className="mt-2 text-gray-300">
                    Pursuing a Bachelor of Technology in Computer Science and
                    Engineering. Developed a strong foundation in software
                    engineering principles, data structures, algorithms, and web
                    development. Actively participated in various technical
                    clubs and hackathons.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-teal-500 flex-shrink-0 mt-2"></div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">
                    Nehru Balodyan Inter College, Jaunpur
                  </h3>
                  <span className="text-gray-400">2019 - 2021</span>
                  <p className="mt-2 text-gray-300">
                    Completed my higher secondary education with a focus on
                    Science, securing a strong academic record. Developed a keen
                    interest in technology and software development, laying the
                    groundwork for my future studies in computer science.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6 mt-10">Experience</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-teal-500 flex-shrink-0 mt-2"></div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">
                    Varsity Pro, New-Delhi
                  </h3>
                  <span className="text-gray-400">
                    June 2024 — September 2024
                  </span>
                  <p className="mt-2 text-gray-300">
                    Worked as a Software Developer, contributing to the design,
                    development, and implementation of scalable software
                    solutions. Collaborated with cross-functional teams to
                    ensure the delivery of high-quality software products.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-teal-500 flex-shrink-0 mt-2"></div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">Skolor, New-Delhi</h3>
                  <span className="text-gray-400">
                    August 2022 — October 2022
                  </span>
                  <p className="mt-2 text-gray-300">
                    Served as a Data Science Intern, where I applied data
                    analysis techniques to extract insights from complex
                    datasets, supported data-driven decision-making, and worked
                    on predictive modeling projects.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Centering the Download Resume button */}
      <div className="flex justify-center mt-8">
        <a
          href="https://drive.google.com/file/d/1GQdkMAZBaxuy3g_yavVL6TNTmjd_Em98/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-teal-700 p-2 rounded-md font-bold text-gray-900">
            Download Resume
          </button>
        </a>
      </div>
    </>
  );
};

export default Resume;
