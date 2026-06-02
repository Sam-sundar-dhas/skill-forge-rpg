import { Link } from "react-router";

export default function SkillTree() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          🌳 Skill Progression Tree
        </span>

        <h1 className="mt-8 text-5xl font-bold md:text-7xl">
          Forge Your
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            {" "}Cloud Skills
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
          Unlock technologies, complete quests, earn XP, and
          progress through the ultimate cloud computing journey.
        </p>
      </section>

      {/* Tree */}
      <section className="mx-auto max-w-6xl px-6 pb-24">

        <div className="flex flex-col items-center">

          {/* Linux */}
          <div className="rounded-3xl border border-green-500/20 bg-slate-900/60 p-8 text-center">
            <div className="text-6xl">🐧</div>
            <h2 className="mt-4 text-2xl font-bold">Linux</h2>
            <p className="mt-2 text-slate-400">
              Foundation of cloud computing.
            </p>

            <div className="mt-4 text-green-400">
              Level 1 • Unlocked
            </div>
          </div>

          {/* Connector */}
          <div className="h-20 w-1 bg-slate-700"></div>

          {/* AWS */}
          <div className="rounded-3xl border border-orange-500/20 bg-slate-900/60 p-8 text-center">
            <div className="text-6xl">☁️</div>
            <h2 className="mt-4 text-2xl font-bold">AWS</h2>
            <p className="mt-2 text-slate-400">
              Learn cloud infrastructure and services.
            </p>

            <div className="mt-4 text-orange-400">
              Level 2 • Available
            </div>
          </div>

          <div className="h-20 w-1 bg-slate-700"></div>

          {/* Docker */}
          <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8 text-center">
            <div className="text-6xl">🐳</div>
            <h2 className="mt-4 text-2xl font-bold">Docker</h2>

            <p className="mt-2 text-slate-400">
              Containerize modern applications.
            </p>

            <div className="mt-4 text-cyan-400">
              Level 3 • Locked
            </div>
          </div>

          <div className="h-20 w-1 bg-slate-700"></div>

          {/* Kubernetes */}
          <div className="rounded-3xl border border-blue-500/20 bg-slate-900/60 p-8 text-center">
            <div className="text-6xl">⚙️</div>
            <h2 className="mt-4 text-2xl font-bold">Kubernetes</h2>

            <p className="mt-2 text-slate-400">
              Orchestrate containers at scale.
            </p>

            <div className="mt-4 text-blue-400">
              Level 4 • Locked
            </div>
          </div>

          <div className="h-20 w-1 bg-slate-700"></div>

          {/* Terraform */}
          <div className="rounded-3xl border border-purple-500/20 bg-slate-900/60 p-8 text-center">
            <div className="text-6xl">🏗️</div>
            <h2 className="mt-4 text-2xl font-bold">Terraform</h2>

            <p className="mt-2 text-slate-400">
              Automate infrastructure deployment.
            </p>

            <div className="mt-4 text-purple-400">
              Level 5 • Locked
            </div>
          </div>

        </div>

        {/* XP Panel */}
        <div className="mt-20 rounded-3xl border border-violet-500/20 bg-slate-900/60 p-8 text-center">

          <h2 className="text-3xl font-bold">
            Adventurer Progress
          </h2>

          <p className="mt-4 text-slate-400">
            Current XP: 250 / 1000
          </p>

          <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-1/4 rounded-full bg-violet-500"></div>
          </div>

          <p className="mt-4 text-violet-400">
            Level 3 Cloud Adventurer
          </p>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/quests"
            className="rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
          >
            View Available Quests →
          </Link>
        </div>

      </section>

    </main>
  );
}