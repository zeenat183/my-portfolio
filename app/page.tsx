"use client";
import { TypeAnimation } from "react-type-animation";
import Navbar from "@/components/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Code2, BrainCircuit, Database, Globe } from "lucide-react";
import { motion } from "framer-motion";
import {
  SiDocker,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiGrafana,
  SiJenkins,
} from "react-icons/si";

import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full top-20 left-20"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6 relative z-10"
        >
          <div className="mb-6 text-[13px] tracking-[0.3em] uppercase text-gray-500">
            Hi, I'm
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ZEENAT
            </span>
          </h1>

          <div className="mt-6 text-xl md:text-2xl text-gray-300 font-light">
            Backend Engineer crafting scalable distributed systems
          </div>

          <div className="text-xl text-gray-400 mt-6 h-10">
            <TypeAnimation
              sequence={[
                "Distributed Systems",
                2000,
                "Microservices Architecture",
                2000,
                "High Performance APIs",
                2000,
                "Redis & Queue Systems",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="max-w-3xl mt-8 text-gray-500 mx-auto text-lg leading-8">
            I design and build scalable backend systems focused on performance,
            reliability, caching, distributed workflows, and production-grade
            architectures.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[13px] text-gray-300">
              Redis Caching
            </div>

            <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[13px] text-gray-300">
              1M+ Requests/Month
            </div>

            <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[13px] text-gray-300">
              BullMQ Jobs
            </div>

            <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[13px] text-gray-300">
              Microservices
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
              View Resume
            </button>

            <a
              href="https://github.com/"
              target="_blank"
              className="border border-white/20 px-4 py-3 rounded-xl hover:bg-white/10 transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="border border-white/20 px-4 py-3 rounded-xl hover:bg-white/10 transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:yourmail@example.com"
              className="border border-white/20 px-4 py-3 rounded-xl hover:bg-white/10 transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="py-24 px-6 py-24 flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-10">Engineering Profile</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>

              <p className="text-gray-400 leading-8">
                I enjoy building scalable backend systems focused on
                performance, reliability, distributed workflows, and
                production-grade engineering. My interests include caching
                strategies, async job processing, database optimization,
                microservices, and high-throughput API architectures.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <div className="bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-xl text-sm">
                  1M+ Requests
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-xl text-sm">
                  Redis Caching
                </div>

                <div className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-xl text-sm">
                  50K Jobs/Day
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Current Interests</h3>

              <ul className="space-y-4 text-gray-400">
                <li>⚡ Distributed Systems</li>
                <li>⚡ High-performance APIs</li>
                <li>⚡ Real-time Backend Infrastructure</li>
                <li>⚡ System Design & Observability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="py-24 px-6 py-24 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Languages & Core CS */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6 hover:border-cyan-500/40 transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5 transition duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <Code2 className="text-cyan-400" />
                  <h3 className="text-2xl font-semibold">
                    Languages & Core CS
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* {[
                    "C++",
                    "Java",
                    "JavaScript",
                    "TypeScript",
                    "Python",
                    "OOP",
                    "LLD",
                    "HLD",
                    "DSA",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-cyan-500/20 transition"
                    >
                      {skill}
                    </span>
                  ))} */}
                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    <SiCplusplus className="text-blue-500" />
                    C++
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    <SiJavascript className="text-yellow-400" />
                    JavaScript
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    <SiTypescript className="text-blue-400" />
                    TypeScript
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    <SiPython className="text-yellow-300" />
                    Python
                  </div>
                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    OOP
                  </div>
                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    LLD
                  </div>
                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    HLD
                  </div>
                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    DSA
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Engineering */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6 hover:border-blue-500/40 transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5 transition duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <Database className="text-blue-400" />
                  <h3 className="text-2xl font-semibold">
                    Backend Engineering
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* {[
                    "Node.js",
                    "NestJS",
                    "Express",
                    "REST APIs",
                    "JWT/RBAC",
                    "Cron Jobs",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-blue-500/20 transition"
                    >
                      {skill}
                    </span>
                  ))} */}
                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    <SiNodedotjs className="text-green-400" />
                    Node.js
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    <SiNestjs className="text-red-500" />
                    Nestjs
                  </div>
                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    Express
                  </div>
                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    REST APIs
                  </div>
                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    JWT/RBAC
                  </div>
                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    Cron Jobs
                  </div>
                </div>
              </div>
            </div>

            {/* Distributed Systems */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6 hover:border-purple-500/40 transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5 transition duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <BrainCircuit className="text-purple-400" />
                  <h3 className="text-2xl font-semibold">
                    Distributed Systems
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Microservices",
                    "BullMQ",
                    "Async Pipelines",
                    "Event-driven",
                    "Read Replicas",
                    "Rate Limiting",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-purple-500/20 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Databases & Caching */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6 hover:border-green-500/40 transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5 transition duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <Database className="text-green-400" />
                  <h3 className="text-2xl font-semibold">
                    Databases & Caching
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* {[
                    "PostgreSQL",
                    "MySQL",
                    "MongoDB",
                    "Redis",
                    "DB Indexing",
                    "Query Optimization",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-green-500/20 transition"
                    >
                      {skill}
                    </span>
                  ))} */}
                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    <SiPostgresql className="text-blue-400" />
                    PostgreSQL
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    <SiMysql className="text-cyan-400" />
                    MySQL
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    <SiMongodb className="text-green-500" />
                    MongoDB
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    <SiRedis className="text-red-400" />
                    Redis
                  </div>
                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    DB Indexing
                  </div>
                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    Query Optimization
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure & Observability */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6 hover:border-orange-500/40 transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5 transition duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <Globe className="text-orange-400" />
                  <h3 className="text-2xl font-semibold">
                    Infrastructure & Observability
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    <SiDocker className="text-sky-400" />
                    Docker
                  </div>

                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    <SiGrafana className="text-orange-400" />
                    Grafana
                  </div>

                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    <SiJenkins className="text-red-400" />
                    Jenkins
                  </div>

                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    CI/CD
                  </div>

                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    Logging
                  </div>

                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    Azure Blob
                  </div>

                  <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-[13px] hover:bg-orange-500/20 transition">
                    Databricks
                  </div>
                </div>
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
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10 transition duration-300">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full text-xs text-purple-300 mb-6">
                Distributed Systems
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Scalable Hotel Search Engine
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                Designed theme-based hotel filtering system (HLD/LLD) with
                schema + indexing + Redis caching for fast listing retrieval
                along with pagination.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-6 mb-6">
                <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-purple-400">70%</div>
                  <div className="text-[13px] text-gray-400 mt-1">
                    Latency Reduction
                  </div>
                </div>

                <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-blue-400">1M+</div>
                  <div className="text-[13px] text-gray-400 mt-1">
                    Requests / Month
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white/10 px-3 py-1 rounded-full text-[13px]">
                  Node.js
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-[13px]">
                  NestJS
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-[13px]">
                  MongoDB
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-[13px]">
                  DB Indexing
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-[13px]">
                  DB Query Optimization
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
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10 transition duration-300">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full text-xs text-purple-300 mb-6">
                Distributed Systems
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Real-Time Flight Tracking APIs
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                Architected Flight Tracker listings for Airport-based (arr/dep)
                and Route-based tracking with filtering + pagination.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white/10 px-3 py-1 rounded-full text-[13px]">
                  Node.js
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-[13px]">
                  RestFul APIs
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-[13px]">
                  Redis
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-[13px]">
                  DB
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-[13px]">
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
              <Mail size={22} />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
