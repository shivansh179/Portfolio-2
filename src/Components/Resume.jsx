import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-900 rounded-lg text-teal-200 p-8 flex justify-center ">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-mono font-bold mb-4 border-b-2 border-teal-500 pb-4">Resume</h1>
        <section>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-teal-500 flex-shrink-0 mt-2"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">SRM University , Delhi - Ncr</h3>
                <span className="text-gray-400">2021 — 2025</span>
                <p className="mt-2 text-gray-300">
                  Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum delenit atque corrupti, quos dolores et quas molestias exceptur.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-teal-500 flex-shrink-0 mt-2"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">Nehru Balodyan Inter College, Jaunpur</h3>
                <span className="text-gray-400">2019 - 2021</span>
                <p className="mt-2 text-gray-300">
                  Ratione voluptatem sequi nesciunt, facere quisquam facere menda oessimus, omnis voluptas assumenda est omnis.
                </p>
              </div>
            </div>
            
          </div>


          <h2 className="text-2xl font-semibold mb-6  mt-10">Experience</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-teal-500 flex-shrink-0 mt-2"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">Varsity Pro, New-Delhi</h3>
                <span className="text-gray-400">2024 June — 2024 september</span>
                <p className="mt-2 text-gray-300">
                  Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum delenit atque corrupti, quos dolores et quas molestias exceptur.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-teal-500 flex-shrink-0 mt-2"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">Skolor, New-Delhi</h3>
                <span className="text-gray-400">2022 Aug - 2022 Oct</span>
                <p className="mt-2 text-gray-300">
                  Ratione voluptatem sequi nesciunt, facere quisquam facere menda oessimus, omnis voluptas assumenda est omnis.
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
