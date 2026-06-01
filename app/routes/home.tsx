import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
   useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

   const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.15 }
);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed33,transparent_50%)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">⚔️</span>
            <h1 className="text-xl font-bold">
              Skill<span className="text-violet-400">Forge</span>
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#courses"
              className="text-slate-300 transition hover:text-violet-400"
            >
              Courses
            </a>

            <a
              href="#about"
              className="text-slate-300 transition hover:text-violet-400"
            >
              About Us
            </a>

            <a
              href="#bulletin"
              className="text-slate-300 transition hover:text-violet-400"
            >
              Bulletin
            </a>

            <a
              href="#contact"
              className="text-slate-300 transition hover:text-violet-400"
            >
              Contact
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white md:block"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-violet-500"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
          ⚔ RPG Powered Cloud Learning
        </span>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          Forge Your
          <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Cloud Career
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
          Learn AWS, Linux, Docker, Kubernetes, Terraform and DevOps through
          quests, achievements, XP rewards, career paths and interactive skill
          trees.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/signup"
            className="rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
          >
            Start Adventure →
          </Link>

          <Link
            to="/skill-tree"
            className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-violet-500"
          >
            Explore Skill Tree
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-3xl font-bold text-violet-400">150+</h3>
            <p className="text-slate-400">Quests</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
            <p className="text-slate-400">Achievements</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-green-400">4</h3>
            <p className="text-slate-400">Career Paths</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-400">∞</h3>
            <p className="text-slate-400">XP To Earn</p>
          </div>
        </div>
      </section>
      {/* Career Paths */}
<section
  id="courses"
  className="fade-up relative z-10 mx-auto max-w-7xl px-6 py-24"
>
  <div className="mb-16 text-center">
    <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
      Career Paths
    </span>

    <h2 className="mt-6 text-4xl font-bold md:text-5xl">
      Choose Your Destiny
    </h2>

    <p className="mt-4 text-slate-400">
      Follow structured learning paths and unlock powerful cloud skills.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
    {/* Cloud Engineer */}
    <div className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.35)]">
      <div className="mb-4 text-5xl">☁️</div>

      <h3 className="mb-3 text-2xl font-bold">
        Cloud Engineer
      </h3>

      <p className="mb-6 text-slate-400">
        Master AWS services, networking, IAM,
        storage and scalable cloud infrastructure.
      </p>

      <ul className="space-y-2 text-sm text-slate-300">
        <li>✓ AWS Fundamentals</li>
        <li>✓ EC2 & S3</li>
        <li>✓ IAM & Security</li>
        <li>✓ Cloud Architecture</li>
      </ul>
    </div>

    {/* DevOps */}
    <div className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]">
      <div className="mb-4 text-5xl">⚙️</div>

      <h3 className="mb-3 text-2xl font-bold">
        DevOps Engineer
      </h3>

      <p className="mb-6 text-slate-400">
        Build CI/CD pipelines, automate deployments
        and manage modern cloud platforms.
      </p>

      <ul className="space-y-2 text-sm text-slate-300">
        <li>✓ Linux</li>
        <li>✓ Docker</li>
        <li>✓ Kubernetes</li>
        <li>✓ Terraform</li>
      </ul>
    </div>

    {/* Security */}
    <div className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]">
      <div className="mb-4 text-5xl">🔐</div>

      <h3 className="mb-3 text-2xl font-bold">
        Security Engineer
      </h3>

      <p className="mb-6 text-slate-400">
        Protect cloud systems using identity,
        monitoring and threat detection.
      </p>

      <ul className="space-y-2 text-sm text-slate-300">
        <li>✓ IAM Security</li>
        <li>✓ Cloud Auditing</li>
        <li>✓ Threat Detection</li>
        <li>✓ Compliance</li>
      </ul>
    </div>

    {/* Architect */}
    <div className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]">
      <div className="mb-4 text-5xl">🏗️</div>

      <h3 className="mb-3 text-2xl font-bold">
        Solutions Architect
      </h3>

      <p className="mb-6 text-slate-400">
        Design highly available cloud systems
        and enterprise-scale architectures.
      </p>

      <ul className="space-y-2 text-sm text-slate-300">
        <li>✓ Architecture Design</li>
        <li>✓ Scalability</li>
        <li>✓ Cost Optimization</li>
        <li>✓ High Availability</li>
      </ul>
    </div>
  </div>
</section>
{/* About SkillForge */}
<section
  id="about"
  className="fade-up relative z-10 mx-auto max-w-7xl px-6 py-24"
>
  <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

    {/* Left Side */}
    <div>
      <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
        About SkillForge
      </span>

      <h2 className="mt-6 text-4xl font-bold md:text-5xl">
        Learn Cloud Computing Like an RPG Adventure
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        SkillForge transforms cloud learning into an exciting RPG-style
        journey. Instead of following boring tutorials, learners progress
        through quests, earn experience points, unlock achievements, and
        build real-world cloud skills step by step.
      </p>

      <p className="mt-4 text-lg leading-8 text-slate-400">
        Whether you're starting with Linux basics or aiming to master AWS,
        Docker, Kubernetes, and DevOps, SkillForge provides a structured path
        that keeps learning engaging and rewarding.
      </p>
    </div>

    {/* Right Side */}
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm">
      <h3 className="mb-8 text-2xl font-bold text-violet-400">
        Our Objectives
      </h3>

      <div className="space-y-6">

        <div className="flex gap-4">
          <span className="text-3xl">🎯</span>
          <div>
            <h4 className="font-semibold">Structured Learning</h4>
            <p className="text-slate-400">
              Provide clear cloud learning paths from beginner to advanced.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <span className="text-3xl">⚔️</span>
          <div>
            <h4 className="font-semibold">Gamified Experience</h4>
            <p className="text-slate-400">
              Turn learning into quests, achievements, XP and progression.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <span className="text-3xl">☁️</span>
          <div>
            <h4 className="font-semibold">Industry Skills</h4>
            <p className="text-slate-400">
              Focus on practical AWS, Linux, Docker, Kubernetes and DevOps skills.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <span className="text-3xl">🚀</span>
          <div>
            <h4 className="font-semibold">Career Growth</h4>
            <p className="text-slate-400">
              Help learners prepare for cloud certifications and real-world jobs.
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
{/* Cloud Adventurer's Bulletin */}
<section
  id="bulletin"
  className=" fade-up relative z-10 mx-auto max-w-7xl px-6 py-24"
>
  <div className="mb-16 text-center">
    <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
      📜 Live Cloud Bulletin
    </span>

    <h2 className="mt-6 text-4xl font-bold md:text-5xl">
      Stay Updated With The Cloud Realm
    </h2>

    <p className="mt-4 text-slate-400">
      Discover the latest cloud computing updates and earn rewards by staying informed.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-3">

    <div className="rounded-3xl border border-orange-500/20 bg-slate-900/60 p-6 backdrop-blur-sm transition hover:-translate-y-2 hover:border-orange-500">
      <div className="mb-3 text-4xl">☁️</div>

      <h3 className="text-lg font-bold">
        AWS Launches New AI Service
      </h3>

      <p className="mt-3 text-sm text-slate-400">
        Learn how AWS is expanding its AI offerings for developers.
      </p>

      <div className="mt-5 inline-block rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
        Reward: +20 XP
      </div>
    </div>

    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur-sm transition hover:-translate-y-2 hover:border-cyan-500">
      <div className="mb-3 text-4xl">⚙️</div>

      <h3 className="text-lg font-bold">
        Kubernetes Major Update Released
      </h3>

      <p className="mt-3 text-sm text-slate-400">
        Explore new features and improvements in the latest version.
      </p>

      <div className="mt-5 inline-block rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
        Reward: +50 XP
      </div>
    </div>

    <div className="rounded-3xl border border-purple-500/20 bg-slate-900/60 p-6 backdrop-blur-sm transition hover:-translate-y-2 hover:border-purple-500">
      <div className="mb-3 text-4xl">🐳</div>

      <h3 className="text-lg font-bold">
        Docker Security Enhancements
      </h3>

      <p className="mt-3 text-sm text-slate-400">
        Discover new container security capabilities.
      </p>

      <div className="mt-5 inline-block rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
        Reward: +30 XP
      </div>
    </div>

  </div>

  <div className="mt-10 text-center">
    <button className="rounded-xl border border-slate-700 px-6 py-3 transition hover:border-yellow-500">
      View All Bulletins
    </button>
  </div>
</section>
{/* Skill Tree Preview */}
{/* Skill Tree Preview */}
<section
  id="skill-tree-preview"
  className="fade-up relative z-10 mx-auto max-w-7xl px-6 py-24"
>
  <div className="mb-16 text-center">
    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
      Skill Progression
    </span>

    <h2 className="mt-6 text-4xl font-bold md:text-5xl">
      Your Cloud Journey
    </h2>

    <p className="mt-4 text-slate-400">
      Unlock new technologies and level up your cloud expertise step by step.
    </p>
  </div>

 <div className="overflow-hidden py-8">
  <div className="skill-scroll gap-6">

    <div className="w-56 rounded-3xl border border-green-500/20 bg-slate-900/60 p-6 text-center">
      <div className="text-5xl">🐧</div>
      <h3 className="mt-3 font-bold">Linux</h3>
    </div>

    <div className="w-56 rounded-3xl border border-orange-500/20 bg-slate-900/60 p-6 text-center">
      <div className="text-5xl">☁️</div>
      <h3 className="mt-3 font-bold">AWS</h3>
    </div>

    <div className="w-56 rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-6 text-center">
      <div className="text-5xl">🐳</div>
      <h3 className="mt-3 font-bold">Docker</h3>
    </div>

    <div className="w-56 rounded-3xl border border-blue-500/20 bg-slate-900/60 p-6 text-center">
      <div className="text-5xl">⚙️</div>
      <h3 className="mt-3 font-bold">Kubernetes</h3>
    </div>

    <div className="w-56 rounded-3xl border border-purple-500/20 bg-slate-900/60 p-6 text-center">
      <div className="text-5xl">🏗️</div>
      <h3 className="mt-3 font-bold">Terraform</h3>
    </div>

    {/* Duplicate for infinite loop */}

    <div className="w-56 rounded-3xl border border-green-500/20 bg-slate-900/60 p-6 text-center">
      <div className="text-5xl">🐧</div>
      <h3 className="mt-3 font-bold">Linux</h3>
    </div>

    <div className="w-56 rounded-3xl border border-orange-500/20 bg-slate-900/60 p-6 text-center">
      <div className="text-5xl">☁️</div>
      <h3 className="mt-3 font-bold">AWS</h3>
    </div>

  </div>
</div>

  <div className="mt-12 text-center">
    <Link
      to="/skill-tree"
      className="rounded-xl bg-cyan-600 px-8 py-4 font-semibold transition hover:bg-cyan-500"
    >
      Explore Full Skill Tree
    </Link>
  </div>
</section>
{/* Quest Board Preview */}
<section
  id="quests"
  className="fade-up relative z-10 mx-auto max-w-7xl px-6 py-24"
>
  <div className="mb-16 text-center">
    <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300">
      🎯 Quest Board
    </span>

    <h2 className="mt-6 text-4xl font-bold md:text-5xl">
      Complete Quests, Earn XP
    </h2>

    <p className="mt-4 text-slate-400">
      Turn your cloud learning journey into an adventure with daily and weekly quests.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-3">

    {/* Daily Quest */}
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur-sm transition hover:-translate-y-2 hover:border-cyan-500">
      <div className="mb-4 text-4xl">☁️</div>

      <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
        Daily Quest
      </span>

      <h3 className="mt-4 text-xl font-bold">
        Learn AWS S3 Basics
      </h3>

      <p className="mt-3 text-slate-400">
        Complete the beginner-friendly S3 storage challenge.
      </p>

      <div className="mt-6 font-semibold text-green-400">
        Reward: +150 XP
      </div>
    </div>

    {/* Weekly Quest */}
    <div className="rounded-3xl border border-orange-500/20 bg-slate-900/60 p-6 backdrop-blur-sm transition hover:-translate-y-2 hover:border-orange-500">
      <div className="mb-4 text-4xl">🔥</div>

      <span className="rounded-full bg-orange-500/10 px-3 py-1 text-sm text-orange-300">
        Weekly Quest
      </span>

      <h3 className="mt-4 text-xl font-bold">
        Master Linux Fundamentals
      </h3>

      <p className="mt-3 text-slate-400">
        Complete all Linux beginner modules and unlock new skills.
      </p>

      <div className="mt-6 font-semibold text-green-400">
        Reward: +500 XP
      </div>
    </div>

    {/* Achievement */}
    <div className="rounded-3xl border border-purple-500/20 bg-slate-900/60 p-6 backdrop-blur-sm transition hover:-translate-y-2 hover:border-purple-500">
      <div className="mb-4 text-4xl">🏆</div>

      <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
        Achievement
      </span>

      <h3 className="mt-4 text-xl font-bold">
        First Cloud Deployment
      </h3>

      <p className="mt-3 text-slate-400">
        Deploy your first application and earn a special badge.
      </p>

      <div className="mt-6 font-semibold text-yellow-400">
        Badge Unlocked
      </div>
    </div>

  </div>

  <div className="mt-10 text-center">
    <a
      href="#"
      className="rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
    >
      View All Quests
    </a>
  </div>
</section>
{/* Call To Action */}
<section
  className="fade-up relative z-10 mx-auto max-w-7xl px-6 py-24"
>
  <div className="overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-900/40 via-slate-900 to-cyan-900/40 p-12 text-center backdrop-blur-sm">

    <div className="mx-auto max-w-3xl">
      <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
        🚀 Start Your Adventure
      </span>

      <h2 className="mt-8 text-4xl font-bold md:text-6xl">
        Ready To Become A Cloud Hero?
      </h2>

      <p className="mt-6 text-lg text-slate-300">
        Master Linux, AWS, Docker, Kubernetes and DevOps through
        quests, achievements, XP rewards and interactive skill trees.
      </p>

      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

        <a
          href="/signup"
          className="rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
        >
          Start Learning Free
        </a>

        <a
          href="#courses"
          className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-cyan-500"
        >
          Explore Courses
        </a>

      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
        <span>🎯 Quest-Based Learning</span>
        <span>🏆 Achievement System</span>
        <span>☁️ Cloud Career Paths</span>
      </div>
    </div>

  </div>
</section>
{/* Footer */}
<footer className="fade-up border-t border-slate-800 bg-slate-950">
  <div className="mx-auto max-w-7xl px-6 py-16">

    <div className="grid gap-10 md:grid-cols-4">

      {/* Brand */}
      <div>
        <h3 className="text-2xl font-bold text-violet-400">
          SkillForge
        </h3>

        <p className="mt-4 text-slate-400">
          Master Cloud Computing through quests, achievements,
          skill trees and real-world projects.
        </p>
      </div>

      {/* Explore */}
      <div>
        <h4 className="mb-4 font-semibold text-white">
          Explore
        </h4>

        <ul className="space-y-3 text-slate-400">
          <li>
            <a href="#courses" className="hover:text-violet-400">
              Courses
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-violet-400">
              About Us
            </a>
          </li>

          <li>
            <a href="#bulletin" className="hover:text-violet-400">
              Bulletin
            </a>
          </li>

          <li>
            <a href="#quests" className="hover:text-violet-400">
              Quests
            </a>
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h4 className="mb-4 font-semibold text-white">
          Resources
        </h4>

        <ul className="space-y-3 text-slate-400">
          <li>
            <a href="/blog" className="hover:text-violet-400">
              Blog
            </a>
          </li>

          <li>
            <a href="/contact" className="hover:text-violet-400">
              Contact
            </a>
          </li>

          <li>
            <a href="/faq" className="hover:text-violet-400">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      {/* Connect */}
      <div>
        <h4 className="mb-4 font-semibold text-white">
          Connect
        </h4>

        <ul className="space-y-3 text-slate-400">
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href="mailto:hello@skillforge.dev"
              className="hover:text-violet-400"
            >
              Email
            </a>
          </li>
        </ul>
      </div>

    </div>

    <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
      © 2026 SkillForge. All rights reserved.
    </div>

  </div>
</footer>
    </main>
  );
}