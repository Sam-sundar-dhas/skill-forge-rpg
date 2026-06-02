import { Link } from "react-router";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed33,transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            ⚔️ About SkillForge
          </span>

          <h1 className="mt-8 text-5xl font-extrabold md:text-7xl">
            Transforming Cloud Learning Into
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              An Epic Adventure
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400 md:text-xl">
            SkillForge is a gamified cloud learning platform designed to help
            students master Linux, AWS, Docker, Kubernetes, Terraform and
            DevOps through quests, achievements, XP rewards and interactive
            learning paths.
          </p>

        </div>

      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <h2 className="text-4xl font-bold">
              Why SkillForge Exists
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Most cloud computing courses are filled with long videos,
              complicated documentation and endless theory. Many learners lose
              motivation before reaching their goals.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-400">
              SkillForge was created to make cloud education engaging,
              structured and rewarding. Instead of simply watching lessons,
              learners progress through missions, gain experience points,
              unlock achievements and build real-world skills step by step.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

            <h3 className="mb-8 text-2xl font-bold text-violet-400">
              Our Mission
            </h3>

            <p className="leading-8 text-slate-300">
              To make cloud computing education accessible, exciting and
              career-focused by combining modern learning techniques with
              RPG-inspired progression systems.
            </p>

          </div>

        </div>

      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Our Core Values
          </h2>

          <p className="mt-4 text-slate-400">
            Principles that guide every feature we build.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-violet-500/20 bg-slate-900/60 p-8">
            <div className="mb-4 text-5xl">🎯</div>

            <h3 className="text-xl font-bold">
              Clear Progression
            </h3>

            <p className="mt-4 text-slate-400">
              Structured learning paths that guide students from beginner
              to advanced cloud skills.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8">
            <div className="mb-4 text-5xl">⚔️</div>

            <h3 className="text-xl font-bold">
              Gamified Learning
            </h3>

            <p className="mt-4 text-slate-400">
              XP rewards, quests and achievements that make learning
              engaging and motivating.
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-slate-900/60 p-8">
            <div className="mb-4 text-5xl">☁️</div>

            <h3 className="text-xl font-bold">
              Practical Skills
            </h3>

            <p className="mt-4 text-slate-400">
              Real-world cloud projects and challenges focused on
              industry-ready expertise.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-slate-900/60 p-8">
            <div className="mb-4 text-5xl">🚀</div>

            <h3 className="text-xl font-bold">
              Career Growth
            </h3>

            <p className="mt-4 text-slate-400">
              Helping learners build confidence for certifications,
              interviews and cloud careers.
            </p>
          </div>

        </div>

      </section>

      {/* What Makes Us Different */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-12">

          <h2 className="text-center text-4xl font-bold">
            What Makes SkillForge Different?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <div>
              <h3 className="mb-4 text-xl font-bold text-violet-400">
                Traditional Learning
              </h3>

              <ul className="space-y-3 text-slate-400">
                <li>❌ Long passive video courses</li>
                <li>❌ No clear progression</li>
                <li>❌ Low engagement</li>
                <li>❌ Limited motivation</li>
                <li>❌ Difficult skill tracking</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-cyan-400">
                SkillForge Learning
              </h3>

              <ul className="space-y-3 text-slate-300">
                <li>✅ Interactive quest system</li>
                <li>✅ Guided career paths</li>
                <li>✅ XP and achievement rewards</li>
                <li>✅ Skill tree progression</li>
                <li>✅ Real-world projects</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-8 text-center md:grid-cols-4">

          <div>
            <h3 className="text-5xl font-bold text-violet-400">
              150+
            </h3>

            <p className="mt-2 text-slate-400">
              Quests
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-cyan-400">
              50+
            </h3>

            <p className="mt-2 text-slate-400">
              Achievements
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-green-400">
              4
            </h3>

            <p className="mt-2 text-slate-400">
              Career Paths
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">
              ∞
            </h3>

            <p className="mt-2 text-slate-400">
              XP Rewards
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}