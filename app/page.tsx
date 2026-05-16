"use client";
import { TypeAnimation } from "react-type-animation";
import Navbar from "@/components/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Mail,
  Code2,
  BrainCircuit,
  Database,
  Globe,
  GitBranch,
  Activity,
  Cloud,
  BarChart3,
} from "lucide-react";
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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
    },
  },
};

const staggerContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Grid Background */}
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-20
    bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
    linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
    bg-[size:60px_60px]"
        />

        {/* Background Glow */}
        <div className="absolute w-[700px] h-[700px] bg-purple-500/10 blur-3xl rounded-full" />

        {/* Floating Blobs */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full top-20 left-20"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10"
        />

        {/* Orbit Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            boxShadow: "0 0 80px rgba(59,130,246,0.08)",
          }}
          className="absolute w-[900px] h-[900px] border border-cyan-500/10 rounded-full"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            boxShadow: "0 0 80px rgba(168,85,247,0.08)",
          }}
          className="absolute w-[650px] h-[650px] border border-purple-500/10 rounded-full"
        />

        {/* Floating Tech Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 left-24 text-6xl text-blue-500/20"
        >
          <SiDocker />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 right-24 text-6xl text-red-500/20"
        >
          <SiRedis />
        </motion.div>

        <motion.div
          animate={{
            x: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-64 right-40 text-5xl text-cyan-500/20"
        >
          <SiPostgresql />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6 relative z-10 max-w-5xl"
        >
          <div className="mb-6 text-[13px] tracking-[0.3em] uppercase text-gray-500">
            Hi, I'm
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ZEENAT
            </span>
          </h1>

          <div className="mt-6 text-xl md:text-3xl font-light tracking-wide text-gray-200">
            Building resilient backend infrastructure for scale
          </div>

          {/* Tech Focus Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm">
              Distributed Systems
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full text-sm">
              Microservices
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm">
              Redis & BullMQ
            </div>

            <div className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full text-sm">
              High Throughput APIs
            </div>
          </div>

          <p className="max-w-3xl mt-10 text-gray-400 mx-auto text-lg leading-8">
            I design and build scalable backend systems focused on performance,
            reliability, caching, distributed workflows, and production-grade
            architectures.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              Redis Caching
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              1M+ Requests/Month
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              BullMQ Jobs
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              Microservices
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12 flex-wrap">
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
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        id="about"
        className="py-24 px-6 py-24 flex items-center"
      >
        <div
          className="
  group relative overflow-hidden
  bg-white/[0.03]
  backdrop-blur-xl
  border border-white/10
  rounded-3xl
  p-6
  transition-all duration-500
  hover:-translate-y-1
  hover:border-cyan-400/30
"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
          </div>

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
      </motion.section>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <motion.section
        id="skills"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-6 py-32 relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/5 blur-3xl rounded-full" />

        {/* Header */}
        <div className="text-center mb-20 relative z-10">
          <div className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">
            Technical Expertise
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Skills & Infrastructure
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed">
            Backend engineering focused on scalable APIs, distributed systems,
            observability, caching, and production-grade infrastructure.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 relative z-10"
        >
          {/* Languages */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-cyan-400" />
                <h3 className="text-xl font-medium">Languages & Core CS</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105">
                  <SiCplusplus className="text-blue-500" />
                  C++
                </div>

                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-yellow-400/40 hover:bg-yellow-500/10 transition-all duration-300 hover:scale-105">
                  <SiJavascript className="text-yellow-400" />
                  JavaScript
                </div>

                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105">
                  <SiTypescript className="text-blue-400" />
                  TypeScript
                </div>

                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-yellow-300/40 hover:bg-yellow-500/10 transition-all duration-300 hover:scale-105">
                  <SiPython className="text-yellow-300" />
                  Python
                </div>

                {["OOP", "LLD", "HLD", "DSA"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-blue-400" />
                <h3 className="text-xl font-medium">Backend Engineering</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-green-400/40 hover:bg-green-500/10 transition-all duration-300 hover:scale-105">
                  <SiNodedotjs className="text-green-400" />
                  Node.js
                </div>

                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-red-400/40 hover:bg-red-500/10 transition-all duration-300 hover:scale-105">
                  <SiNestjs className="text-red-500" />
                  NestJS
                </div>

                {["Express", "REST APIs", "JWT/RBAC", "Cron Jobs"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-blue-500/10 hover:border-blue-400/40 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          {/* Distributed Systems */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <BrainCircuit className="text-purple-400" />
                <h3 className="text-xl font-medium">Distributed Systems</h3>
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
                  <div
                    key={skill}
                    className="bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-purple-500/10 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-purple-500/5 border border-purple-500/10 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-purple-400">10K+</div>
                  <div className="text-sm text-gray-400 mt-1">Jobs/day</div>
                </div>

                <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-cyan-400">70%</div>
                  <div className="text-sm text-gray-400 mt-1">
                    Latency Reduction
                  </div>
                </div>

                <div className="bg-green-500/5 border border-green-500/10 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-gray-400 mt-1">Reliability</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-green-400/30"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-green-400" />
                <h3 className="text-xl font-medium">Databases & Caching</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105">
                  <SiPostgresql className="text-blue-400" />
                  PostgreSQL
                </div>

                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105">
                  <SiMysql className="text-cyan-400" />
                  MySQL
                </div>

                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-green-400/40 hover:bg-green-500/10 transition-all duration-300 hover:scale-105">
                  <SiMongodb className="text-green-500" />
                  MongoDB
                </div>

                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-red-400/40 hover:bg-red-500/10 transition-all duration-300 hover:scale-105">
                  <SiRedis className="text-red-400" />
                  Redis
                </div>

                {["DB Indexing", "Query Optimization"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-green-500/10 hover:border-green-400/40 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Infrastructure */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/30"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-orange-400" />
                <h3 className="text-xl font-medium">
                  Infrastructure & Observability
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-sky-400/40 hover:bg-sky-500/10 transition-all duration-300 hover:scale-105">
                  <SiDocker className="text-sky-400" />
                  Docker
                </div>

                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-orange-400/40 hover:bg-orange-500/10 transition-all duration-300 hover:scale-105">
                  <SiGrafana className="text-orange-400" />
                  Grafana
                </div>

                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-red-400/40 hover:bg-red-500/10 transition-all duration-300 hover:scale-105">
                  <SiJenkins className="text-red-400" />
                  Jenkins
                </div>

                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-green-400/40 hover:bg-green-500/10 transition-all duration-300 hover:scale-105">
                  <GitBranch className="text-green-400" size={16} />
                  CI/CD
                </div>

                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-yellow-400/40 hover:bg-yellow-500/10 transition-all duration-300 hover:scale-105">
                  <Activity className="text-yellow-400" size={16} />
                  Logging
                </div>

                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105">
                  <Cloud className="text-cyan-400" size={16} />
                  Azure Blob
                </div>

                <div className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-purple-400/40 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
                  <BarChart3 className="text-purple-400" size={16} />
                  Databricks
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <section id="projects" className="px-6 py-24">
        <div
          className="
  group relative overflow-hidden
  bg-white/[0.03]
  backdrop-blur-xl
  border border-white/10
  rounded-3xl
  p-6
  transition-all duration-500
  hover:-translate-y-1
  hover:border-cyan-400/30
"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
          </div>

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
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <section id="contact" className="px-6 py-24">
        <div
          className="mt-32 max-w-5xl mx-auto flex flex-col items-center text-center
  group relative overflow-hidden
  bg-white/[0.03]
  backdrop-blur-xl
  border border-white/10
  rounded-3xl
  p-8
  transition-all duration-500
  hover:-translate-y-1
  hover:border-cyan-400/30
"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
          </div>

          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <p className="max-w-3xl text-gray-400 text-lg leading-relaxed mb-10">
            Interested in collaborating, building something cool, or just having
            a tech conversation?
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
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
