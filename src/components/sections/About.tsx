export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a full-stack developer with a passion for creating elegant solutions
              to complex problems. With expertise in modern web technologies, I
              specialize in building responsive and user-friendly applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My journey in software development started [Your Story]. I love
              learning new technologies and staying up-to-date with the latest
              industry trends.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                React
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                Next.js
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                Node.js
              </span>
            </div>
          </div>
          <div className="relative h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg">
            {/* Add your image here */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Your Photo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 