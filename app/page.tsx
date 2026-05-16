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
    <main className="min-h-screen relative overflow-hidden bg-[#f6f3ee] text-[#111111] dark:bg-[#050505] dark:text-white transition-colors duration-500">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.02] mix-blend-overlay">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-24">
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
          className="
      absolute inset-0
      opacity-40 dark:opacity-20
      bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),
      linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
      dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
      linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
      bg-[size:60px_60px]
    "
        />

        {/* Ambient Glow */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      absolute
      top-0
      left-0
      w-[600px]
      h-[600px]
      bg-purple-500/10
      blur-3xl
      rounded-full
    "
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      absolute
      bottom-0
      right-0
      w-[500px]
      h-[500px]
      bg-cyan-500/10
      blur-3xl
      rounded-full
    "
        />

        {/* Floating Tech Icons */}
        <motion.div
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      absolute
      top-32
      left-16
      text-6xl
      text-blue-500/20
      hidden lg:block
    "
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
          className="
      absolute
      bottom-24
      right-20
      text-6xl
      text-red-500/20
      hidden lg:block
    "
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
          className="
      absolute
      top-56
      right-32
      text-5xl
      text-cyan-500/20
      hidden lg:block
    "
        >
          <SiPostgresql />
        </motion.div>

        {/* HERO CONTAINER */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            {/* SMALL INTRO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
          inline-flex items-center gap-2
          px-4 py-2
          rounded-full
          border border-black/10 dark:border-white/10
          bg-white/50 dark:bg-white/[0.03]
          backdrop-blur-xl
          text-sm
          text-gray-600 dark:text-gray-400
          mb-8
        "
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              currently building scalable backend systems
            </motion.div>

            {/* MAIN HEADING */}
            <div className="space-y-2">
              <h1
                className="
            text-5xl
            md:text-7xl
            font-bold
            leading-[0.95]
            tracking-tight
            text-black dark:text-white
          "
              >
                hey, i'm
              </h1>

              <h1
                className="
            text-7xl
            md:text-[8rem]
            font-black
            leading-none
            tracking-tight
            bg-gradient-to-r
            from-purple-500
            via-blue-500
            to-cyan-500
            dark:from-purple-400
            dark:via-blue-400
            dark:to-cyan-400
            bg-clip-text
            text-transparent
          "
              >
                ZEENAT
              </h1>

              <div
                className="
            text-xl
            md:text-3xl
            text-gray-700 dark:text-gray-300
            font-light
            mt-6
            leading-relaxed
          "
              >
                i build backend systems that survive scale,
                <br className="hidden md:block" />
                traffic spikes, and production chaos.
              </div>
            </div>

            {/* TECH PILLS */}
            <div
              className="
          flex flex-wrap
          justify-center lg:justify-start
          gap-3
          mt-10
        "
            >
              {[
                "Redis",
                "BullMQ",
                "Microservices",
                "PostgreSQL",
                "System Design",
                "Observability",
              ].map((item) => (
                <div
                  key={item}
                  className="
              px-4 py-2
              rounded-full
              border border-black/10 dark:border-white/10
              bg-white/40 dark:bg-white/[0.03]
              backdrop-blur-xl
              text-sm
              text-gray-700 dark:text-gray-300
              hover:scale-105
              hover:border-cyan-400/30
              hover:bg-black/[0.03]
              dark:hover:bg-white/[0.06]
              transition-all duration-300
            "
                >
                  {item}
                </div>
              ))}
            </div>

            {/* DESCRIPTION */}
            <p
              className="
          max-w-2xl
          mt-10
          text-lg
          leading-8
          text-gray-600 dark:text-gray-400
        "
            >
              Backend engineer focused on distributed systems, caching, async
              workflows, observability, and building production-grade
              architectures that actually hold up under load.
            </p>

            {/* CTA BUTTONS */}
            <div
              className="
          flex flex-wrap
          items-center
          justify-center lg:justify-start
          gap-4
          mt-12
        "
            >
              <a
                href="/resume.pdf"
                className="
            px-7 py-3
            rounded-2xl
            bg-black
            dark:bg-white
            text-white
            dark:text-black
            font-medium
            hover:scale-105
            transition-all duration-300
            shadow-lg shadow-black/10 dark:shadow-white/10
          "
              >
                View Resume
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                className="
            p-3
            rounded-2xl
            border border-black/10 dark:border-white/10
            bg-white/40 dark:bg-white/[0.03]
            backdrop-blur-xl
            hover:bg-black/[0.05]
            dark:hover:bg-white/[0.08]
            hover:scale-105
            transition-all duration-300
          "
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="
            p-3
            rounded-2xl
            border border-black/10 dark:border-white/10
            bg-white/40 dark:bg-white/[0.03]
            backdrop-blur-xl
            hover:bg-black/[0.05]
            dark:hover:bg-white/[0.08]
            hover:scale-105
            transition-all duration-300
          "
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:yourmail@example.com"
                className="
            p-3
            rounded-2xl
            border border-black/10 dark:border-white/10
            bg-white/40 dark:bg-white/[0.03]
            backdrop-blur-xl
            hover:bg-black/[0.05]
            dark:hover:bg-white/[0.08]
            hover:scale-105
            transition-all duration-300
          "
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="
        relative
        hidden lg:flex
        items-center
        justify-center
      "
          >
            {/* Glow */}
            <div
              className="
          absolute
          w-[500px]
          h-[500px]
          bg-gradient-to-br
          from-purple-500/20
          via-cyan-500/10
          to-blue-500/20
          blur-3xl
          rounded-full
        "
            />

            {/* IMAGE CARD */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
          relative
          w-[420px]
          h-[520px]
          rounded-[32px]
          overflow-hidden
          border border-black/10 dark:border-white/10
          bg-white/40 dark:bg-white/[0.03]
          backdrop-blur-2xl
          shadow-2xl
        "
            >
              <img
                src="/zeenat.png"
                alt="Zeenat"
                className="
            w-full
            h-full
            object-cover
          "
              />

              {/* Overlay */}
              <div
                className="
            absolute inset-0
            bg-gradient-to-t
            from-black/60
            via-transparent
            to-transparent
          "
              />

              {/* TEXT */}
              <div
                className="
            absolute bottom-0 left-0
            p-8
          "
              >
                <div
                  className="
              text-white
              text-2xl
              font-bold
            "
                >
                  Backend Engineer
                </div>

                <div
                  className="
              text-gray-300
              mt-2
            "
                >
                  distributed systems • observability • scalable infra
                </div>
              </div>
            </motion.div>

            {/* FLOATING TECH BADGE */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
          absolute
          -bottom-6
          -left-8
          px-5 py-3
          rounded-2xl
          border border-black/10 dark:border-white/10
          bg-white/70 dark:bg-black/40
          backdrop-blur-xl
          shadow-xl
        "
            >
              <div className="text-sm text-gray-500 dark:text-gray-400">
                currently working with
              </div>

              <div className="flex gap-3 mt-2 text-2xl">
                <SiDocker className="text-blue-500" />
                <SiRedis className="text-red-500" />
                <SiPostgresql className="text-cyan-500" />
              </div>
            </motion.div>
          </motion.div>
        </div>
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
  bg-black/[0.03] dark:bg-white/[0.03]
  backdrop-blur-xl bg-white/40 dark:bg-transparent
  border border-black/10 dark:border-black/10 dark:border-white/10
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
            <div className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>

              <p className="text-gray-600 dark:text-gray-600 dark:text-gray-400 leading-8">
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

            <div className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Current Interests</h3>

              <ul className="space-y-4 text-gray-600 dark:text-gray-600 dark:text-gray-400">
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
          <div className="text-sm tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-4">
            Technical Expertise
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white">
            Skills & Infrastructure
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
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
          {/* LANGUAGES */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <Code2 className="text-cyan-400" size={22} />
                </div>

                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Languages & Core CS
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: <SiCplusplus className="text-blue-500" size={18} />,
                    name: "C++",
                    hover: "hover:border-blue-400/40 hover:bg-blue-500/10",
                  },
                  {
                    icon: (
                      <SiJavascript className="text-yellow-400" size={18} />
                    ),
                    name: "JavaScript",
                    hover: "hover:border-yellow-400/40 hover:bg-yellow-500/10",
                  },
                  {
                    icon: <SiTypescript className="text-blue-400" size={18} />,
                    name: "TypeScript",
                    hover: "hover:border-cyan-400/40 hover:bg-cyan-500/10",
                  },
                  {
                    icon: <SiPython className="text-yellow-300" size={18} />,
                    name: "Python",
                    hover: "hover:border-yellow-300/40 hover:bg-yellow-500/10",
                  },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-105 ${skill.hover}`}
                  >
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}

                {["OOP", "LLD", "HLD", "DSA"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-cyan-500/10 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <Database className="text-blue-400" size={22} />
                </div>

                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Backend Engineering
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: <SiNodedotjs className="text-green-400" size={18} />,
                    name: "Node.js",
                    hover: "hover:border-green-400/40 hover:bg-green-500/10",
                  },
                  {
                    icon: <SiNestjs className="text-red-500" size={18} />,
                    name: "NestJS",
                    hover: "hover:border-red-400/40 hover:bg-red-500/10",
                  },
                  { name: "Express" },
                  { name: "REST APIs" },
                  { name: "JWT/RBAC" },
                  { name: "Cron Jobs" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-105 ${skill.hover || "hover:border-blue-400/40 hover:bg-blue-500/10"}`}
                  >
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* DISTRIBUTED */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <BrainCircuit className="text-purple-400" size={22} />
                </div>

                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Distributed Systems
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
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
                    className="bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-purple-500/10 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    value: "10K+",
                    label: "Jobs/day",
                    color: "text-purple-400",
                    bg: "bg-purple-500/5 border-purple-500/10",
                  },
                  {
                    value: "70%",
                    label: "Latency Reduction",
                    color: "text-cyan-400",
                    bg: "bg-cyan-500/5 border-cyan-500/10",
                  },
                  {
                    value: "99.9%",
                    label: "Reliability",
                    color: "text-green-400",
                    bg: "bg-green-500/5 border-green-500/10",
                  },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className={`${metric.bg} border rounded-2xl p-4`}
                  >
                    <div className={`text-2xl font-bold ${metric.color}`}>
                      {metric.value}
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* DATABASES */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-green-400/30"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-green-500/10 border border-green-500/20">
                  <Database className="text-green-400" size={22} />
                </div>

                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Databases & Caching
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: <SiPostgresql className="text-blue-400" size={18} />,
                    name: "PostgreSQL",
                    hover: "hover:border-blue-400/40 hover:bg-blue-500/10",
                  },
                  {
                    icon: <SiMysql className="text-cyan-400" size={18} />,
                    name: "MySQL",
                    hover: "hover:border-cyan-400/40 hover:bg-cyan-500/10",
                  },
                  {
                    icon: <SiMongodb className="text-green-500" size={18} />,
                    name: "MongoDB",
                    hover: "hover:border-green-400/40 hover:bg-green-500/10",
                  },
                  {
                    icon: <SiRedis className="text-red-400" size={18} />,
                    name: "Redis",
                    hover: "hover:border-red-400/40 hover:bg-red-500/10",
                  },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-105 ${skill.hover}`}
                  >
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}

                {["DB Indexing", "Query Optimization"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-green-500/10 hover:border-green-400/40 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* INFRA */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/30"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <Globe className="text-orange-400" size={22} />
                </div>

                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Infrastructure & Observability
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: <SiDocker className="text-sky-400" size={18} />,
                    name: "Docker",
                    hover: "hover:border-sky-400/40 hover:bg-sky-500/10",
                  },
                  {
                    icon: <SiGrafana className="text-orange-400" size={18} />,
                    name: "Grafana",
                    hover: "hover:border-orange-400/40 hover:bg-orange-500/10",
                  },
                  {
                    icon: <SiJenkins className="text-red-400" size={18} />,
                    name: "Jenkins",
                    hover: "hover:border-red-400/40 hover:bg-red-500/10",
                  },
                  {
                    icon: <GitBranch className="text-green-400" size={18} />,
                    name: "CI/CD",
                    hover: "hover:border-green-400/40 hover:bg-green-500/10",
                  },
                  {
                    icon: <Activity className="text-yellow-400" size={18} />,
                    name: "Logging",
                    hover: "hover:border-yellow-400/40 hover:bg-yellow-500/10",
                  },
                  {
                    icon: <Cloud className="text-cyan-400" size={18} />,
                    name: "Azure Blob",
                    hover: "hover:border-cyan-400/40 hover:bg-cyan-500/10",
                  },
                  {
                    icon: <BarChart3 className="text-purple-400" size={18} />,
                    name: "Databricks",
                    hover: "hover:border-purple-400/40 hover:bg-purple-500/10",
                  },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-105 ${skill.hover}`}
                  >
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <section id="projects" className="px-6 py-32 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/5 blur-3xl rounded-full" />

        <div
          className="
      group relative overflow-hidden
      bg-white/40 dark:bg-white/[0.03]
      backdrop-blur-xl
      border border-black/10 dark:border-white/10
      rounded-[32px]
      p-8
    "
        >
          {/* Hover Gradient */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
          </div>

          <div className="relative z-10">
            {/* Heading */}
            <div className="mb-14">
              <div className="text-sm tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-4">
                Engineering Work
              </div>

              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white">
                Systems I’ve Built
              </h2>

              <p className="max-w-3xl mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Production-grade backend systems focused on scalability,
                distributed workflows, caching, observability, and
                high-throughput architectures.
              </p>
            </div>

            {/* GRID */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* PROJECT 1 */}
              <div
                className="
            group/card relative overflow-hidden
            bg-black/[0.03] dark:bg-white/[0.03]
            border border-black/10 dark:border-white/10
            rounded-3xl
            p-8
            transition-all duration-500
            hover:-translate-y-2
            hover:border-purple-400/30
          "
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10" />
                </div>

                <div className="relative z-10">
                  {/* Label */}
                  <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full text-xs text-purple-400 mb-6">
                    Distributed Systems
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-black dark:text-white leading-tight mb-4">
                    Hotel Discovery Infrastructure
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-8 mb-8 text-[15px]">
                    High-throughput hotel discovery and filtering system built
                    with schema optimization, Redis caching, DB indexing, and
                    scalable pagination for fast listing retrieval at scale.
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-purple-500/[0.06] border border-purple-500/10 rounded-2xl p-5 hover:scale-[1.02] transition duration-300">
                      <div className="text-3xl font-bold text-purple-400">
                        70%
                      </div>

                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Latency Reduction
                      </div>
                    </div>

                    <div className="bg-cyan-500/[0.06] border border-cyan-500/10 rounded-2xl p-5 hover:scale-[1.02] transition duration-300">
                      <div className="text-3xl font-bold text-cyan-400">
                        1M+
                      </div>

                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Requests / Month
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {[
                      "Node.js",
                      "NestJS",
                      "MongoDB",
                      "Redis",
                      "DB Indexing",
                      "Query Optimization",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="
                    bg-black/[0.03] dark:bg-white/[0.04]
                    border border-black/10 dark:border-white/10
                    px-4 py-2
                    rounded-xl
                    text-sm
                    text-gray-700 dark:text-gray-300
                    hover:bg-purple-500/10
                    hover:border-purple-400/30
                    hover:text-black dark:hover:text-white
                    transition-all duration-300
                  "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      className="
                  border border-black/10 dark:border-white/10
                  bg-white/40 dark:bg-white/[0.03]
                  backdrop-blur-xl
                  px-6 py-3
                  rounded-xl
                  text-black dark:text-white
                  hover:bg-black/5 dark:hover:bg-white/10
                  hover:border-purple-400/30
                  transition-all duration-300
                "
                    >
                      GitHub
                    </a>

                    <a
                      href="/"
                      className="
                  bg-white dark:bg-white
                  text-black
                  px-6 py-3
                  rounded-xl
                  font-medium
                  hover:scale-105
                  transition-all duration-300
                "
                    >
                      Case Study
                    </a>
                  </div>
                </div>
              </div>

              {/* PROJECT 2 */}
              <div
                className="
            group/card relative overflow-hidden
            bg-black/[0.03] dark:bg-white/[0.03]
            border border-black/10 dark:border-white/10
            rounded-3xl
            p-8
            transition-all duration-500
            hover:-translate-y-2
            hover:border-cyan-400/30
          "
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
                </div>

                <div className="relative z-10">
                  {/* Label */}
                  <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-xs text-cyan-400 mb-6">
                    Real-Time Systems
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-black dark:text-white leading-tight mb-4">
                    Flight Intelligence APIs
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-8 mb-8 text-[15px]">
                    Real-time airport and route-based flight tracking APIs
                    designed for scalable filtering, pagination, low-latency
                    responses, and production-grade reliability.
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-cyan-500/[0.06] border border-cyan-500/10 rounded-2xl p-5 hover:scale-[1.02] transition duration-300">
                      <div className="text-3xl font-bold text-cyan-400">
                        Real-Time
                      </div>

                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Tracking APIs
                      </div>
                    </div>

                    <div className="bg-blue-500/[0.06] border border-blue-500/10 rounded-2xl p-5 hover:scale-[1.02] transition duration-300">
                      <div className="text-3xl font-bold text-blue-400">
                        Low Latency
                      </div>

                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Optimized Responses
                      </div>
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {[
                      "Node.js",
                      "REST APIs",
                      "Redis",
                      "Pagination",
                      "System Design",
                      "Caching",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="
                    bg-black/[0.03] dark:bg-white/[0.04]
                    border border-black/10 dark:border-white/10
                    px-4 py-2
                    rounded-xl
                    text-sm
                    text-gray-700 dark:text-gray-300
                    hover:bg-cyan-500/10
                    hover:border-cyan-400/30
                    hover:text-black dark:hover:text-white
                    transition-all duration-300
                  "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      className="
                  border border-black/10 dark:border-white/10
                  bg-white/40 dark:bg-white/[0.03]
                  backdrop-blur-xl
                  px-6 py-3
                  rounded-xl
                  text-black dark:text-white
                  hover:bg-black/5 dark:hover:bg-white/10
                  hover:border-cyan-400/30
                  transition-all duration-300
                "
                    >
                      GitHub
                    </a>

                    <a
                      href="/"
                      className="
                  bg-white dark:bg-white
                  text-black
                  px-6 py-3
                  rounded-xl
                  font-medium
                  hover:scale-105
                  transition-all duration-300
                "
                    >
                      Case Study
                    </a>
                  </div>
                </div>
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
  bg-black/[0.03] dark:bg-white/[0.03]
  backdrop-blur-xl bg-white/40 dark:bg-transparent
  border border-black/10 dark:border-black/10 dark:border-white/10
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

          <p className="max-w-3xl text-gray-600 dark:text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
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
              className="border border-black/10 dark:border-white/20 px-6 py-3 rounded-xl hover:bg-black/5 dark:bg-white/10 transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="border border-black/10 dark:border-white/20 px-6 py-3 rounded-xl hover:bg-black/5 dark:bg-white/10 transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
