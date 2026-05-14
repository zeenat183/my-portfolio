import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full top-20 left-20"></div>

        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

        <div className="text-center px-6 relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold">Hi, I'm Zeenat 👋</h1>

          <p className="text-xl text-gray-400 mt-4">AI + Software Engineer</p>

          <p className="max-w-2xl mt-6 text-gray-500 mx-auto">
            I build useful things using AI, web tech, and code.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
              View Resume
            </button>

            <a
              href="https://github.com/"
              target="_blank"
              className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 py-24 flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-10">About Me</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>

              <p className="text-gray-400 leading-8">
                I'm passionate about building useful and creative tech products.
                I enjoy working with AI APIs, full-stack development, and
                solving real-world problems through code.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Current Interests</h3>

              <ul className="space-y-4 text-gray-400">
                <li>⚡ AI-powered applications</li>
                <li>⚡ Developer tools</li>
                <li>⚡ Full-stack systems</li>
                <li>⚡ Real-time applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="py-24 px-6 py-24 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>

              <div className="space-y-2 text-gray-400">
                <p>C++</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>Python</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>

              <div className="space-y-2 text-gray-400">
                <p>React</p>
                <p>Next.js</p>
                <p>Tailwind CSS</p>
                <p>HTML/CSS</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>

              <div className="space-y-2 text-gray-400">
                <p>Node.js</p>
                <p>Express</p>
                <p>REST APIs</p>
                <p>MongoDB</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold mb-4">AI / Tools</h3>

              <div className="space-y-2 text-gray-400">
                <p>OpenAI APIs</p>
                <p>Grok APIs</p>
                <p>Git & GitHub</p>
                <p>VS Code</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
              <h3 className="text-2xl font-semibold mb-4">AI Meal Planner</h3>

              <p className="text-gray-400 leading-7 mb-6">
                An AI-powered app that suggests healthy meals based on calorie
                goals and food preferences.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                  Next.js
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                  Tailwind
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                  AI APIs
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="border border-white/20 px-5 py-2 rounded-xl hover:bg-white/10 transition"
                >
                  GitHub
                </a>

                <a
                  href="/"
                  className="bg-white text-black px-5 py-2 rounded-xl hover:scale-105 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
              <h3 className="text-2xl font-semibold mb-4">
                Hotel Price Comparator
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                A real-time hotel comparison platform that aggregates prices
                from multiple providers.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                  React
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                  APIs
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                  System Design
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="border border-white/20 px-5 py-2 rounded-xl hover:bg-white/10 transition"
                >
                  GitHub
                </a>

                <a
                  href="/"
                  className="bg-white text-black px-5 py-2 rounded-xl hover:scale-105 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <p className="text-gray-400 text-lg mb-10">
            Interested in collaborating, building something cool, or just having
            a tech conversation?
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:yourmail@example.com"
              className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
