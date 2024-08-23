import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-900 rounded-lg text-yellow-200 p-8 flex justify-center">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 border-b-2 border-yellow-500 pb-4">Resume</h1>
        <section>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-yellow-500 flex-shrink-0 mt-2"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">University Of Engineering Pune</h3>
                <span className="text-gray-400">2021 — 2024</span>
                <p className="mt-2 text-gray-300">
                  Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum delenit atque corrupti, quos dolores et quas molestias exceptur.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-yellow-500 flex-shrink-0 mt-2"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">New York Academy Of Texas</h3>
                <span className="text-gray-400">2018 — 2024</span>
                <p className="mt-2 text-gray-300">
                  Ratione voluptatem sequi nesciunt, facere quisquam facere menda oessimus, omnis voluptas assumenda est omnis.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-yellow-500 flex-shrink-0 mt-2"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">High School Of Art And Design</h3>
                <span className="text-gray-400">2017 — 2018</span>
                <p className="mt-2 text-gray-300">
                  Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
