export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">

      {/* Header */}
      <section className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-3xl font-bold">
              ⚔️ SkillForge Dashboard
            </h1>

            <p className="mt-1 text-slate-400">
              Welcome,Cloud Adventurer
            </p>
          </div>

          <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-violet-300">
            Level 1
          </div>

        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Stats */}
        <section className="grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-violet-500/20 bg-slate-900/60 p-6">
            <h3 className="text-slate-400">XP Earned</h3>
            <p className="mt-2 text-4xl font-bold text-violet-400">
              0
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-6">
            <h3 className="text-slate-400">Courses</h3>
            <p className="mt-2 text-4xl font-bold text-cyan-400">
              0
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-slate-900/60 p-6">
            <h3 className="text-slate-400">Achievements</h3>
            <p className="mt-2 text-4xl font-bold text-green-400">
              0
            </p>
          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-slate-900/60 p-6">
            <h3 className="text-slate-400">Rank</h3>
            <p className="mt-2 text-4xl font-bold text-orange-400">
              Novice
            </p>
          </div>

        </section>

        {/* Progress */}
        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

          <h2 className="text-2xl font-bold">
            Current Progress
          </h2>

          <p className="mt-2 text-slate-400">
            Reach 100 XP to level up.
          </p>

          <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-[0%] bg-gradient-to-r from-violet-500 to-cyan-500" />
          </div>

          <p className="mt-2 text-sm text-slate-400">
            0 / 100 XP
          </p>

        </section>

        {/* Learning Paths */}
        <section className="mt-10">

          <h2 className="mb-6 text-2xl font-bold">
            Learning Paths
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="text-4xl">🐧</div>
              <h3 className="mt-4 text-xl font-bold">
                Linux
              </h3>
              <p className="mt-2 text-slate-400">
                Learn terminal commands and system administration.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="text-4xl">☁️</div>
              <h3 className="mt-4 text-xl font-bold">
                AWS
              </h3>
              <p className="mt-2 text-slate-400">
                Master EC2, S3, IAM and cloud services.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="text-4xl">🐳</div>
              <h3 className="mt-4 text-xl font-bold">
                Docker
              </h3>
              <p className="mt-2 text-slate-400">
                Build and manage containers.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="text-4xl">⚙️</div>
              <h3 className="mt-4 text-xl font-bold">
                Kubernetes
              </h3>
              <p className="mt-2 text-slate-400">
                Orchestrate containers at scale.
              </p>
            </div>

          </div>

        </section>

        {/* Recent Activity */}
        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="mt-6 space-y-4">

            <div className="rounded-xl border border-slate-800 p-4">
              🚀 Welcome to SkillForge
            </div>

            <div className="rounded-xl border border-slate-800 p-4">
              🎯 Complete your first course to earn XP
            </div>

            <div className="rounded-xl border border-slate-800 p-4">
              🏆 Unlock achievements as you progress
            </div>

          </div>

        </section>

      </div>

    </main>
  );
}