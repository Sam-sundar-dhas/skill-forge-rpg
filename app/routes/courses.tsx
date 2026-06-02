import { Link } from "react-router";

export default function Courses() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800">

        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            ⚔ SkillForge Courses
          </span>

          <h1 className="mt-8 text-5xl font-extrabold md:text-7xl">
            Master
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Cloud Computing
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Structured learning paths covering Linux, AWS,
            Docker, Kubernetes, Terraform and DevOps.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">

            <div>
              <h3 className="text-3xl font-bold text-violet-400">
                150+
              </h3>
              <p className="text-slate-400">
                Lessons
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                50+
              </h3>
              <p className="text-slate-400">
                Quests
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-400">
                4
              </h3>
              <p className="text-slate-400">
                Career Paths
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">
                ∞
              </h3>
              <p className="text-slate-400">
                XP Available
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Courses */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold">
            Available Learning Paths
          </h2>

          <p className="mt-4 text-slate-400">
            Choose a path and begin your adventure.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {/* Linux */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

            <div className="text-5xl">🐧</div>

            <h3 className="mt-4 text-2xl font-bold">
              Linux Essentials
            </h3>

            <p className="mt-3 text-slate-400">
              Learn the foundation of cloud and DevOps.
            </p>

            <ul className="mt-6 space-y-2 text-slate-300">
              <li>✓ Linux Basics</li>
              <li>✓ File System</li>
              <li>✓ Permissions</li>
              <li>✓ Users & Groups</li>
              <li>✓ Shell Commands</li>
            </ul>

            <div className="mt-6 text-green-400">
              Beginner • 20+ Hours
            </div>

          </div>

          {/* AWS */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

            <div className="text-5xl">☁️</div>

            <h3 className="mt-4 text-2xl font-bold">
              AWS Cloud Foundations
            </h3>

            <p className="mt-3 text-slate-400">
              Master core AWS services.
            </p>

            <ul className="mt-6 space-y-2 text-slate-300">
              <li>✓ IAM</li>
              <li>✓ EC2</li>
              <li>✓ S3</li>
              <li>✓ VPC</li>
              <li>✓ CloudWatch</li>
            </ul>

            <div className="mt-6 text-green-400">
              Beginner → Intermediate
            </div>

          </div>

          {/* Docker */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

            <div className="text-5xl">🐳</div>

            <h3 className="mt-4 text-2xl font-bold">
              Docker Mastery
            </h3>

            <p className="mt-3 text-slate-400">
              Containerize applications efficiently.
            </p>

            <ul className="mt-6 space-y-2 text-slate-300">
              <li>✓ Images</li>
              <li>✓ Containers</li>
              <li>✓ Dockerfiles</li>
              <li>✓ Volumes</li>
              <li>✓ Networking</li>
            </ul>

            <div className="mt-6 text-cyan-400">
              Intermediate
            </div>

          </div>

          {/* Kubernetes */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

            <div className="text-5xl">⚙️</div>

            <h3 className="mt-4 text-2xl font-bold">
              Kubernetes Bootcamp
            </h3>

            <p className="mt-3 text-slate-400">
              Orchestrate containers at scale.
            </p>

            <ul className="mt-6 space-y-2 text-slate-300">
              <li>✓ Pods</li>
              <li>✓ Deployments</li>
              <li>✓ Services</li>
              <li>✓ ConfigMaps</li>
              <li>✓ Ingress</li>
            </ul>

            <div className="mt-6 text-yellow-400">
              Advanced
            </div>

          </div>

          {/* Terraform */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

            <div className="text-5xl">🏗️</div>

            <h3 className="mt-4 text-2xl font-bold">
              Terraform IaC
            </h3>

            <p className="mt-3 text-slate-400">
              Automate infrastructure deployment.
            </p>

            <ul className="mt-6 space-y-2 text-slate-300">
              <li>✓ Providers</li>
              <li>✓ Resources</li>
              <li>✓ Variables</li>
              <li>✓ Modules</li>
              <li>✓ State Files</li>
            </ul>

            <div className="mt-6 text-cyan-400">
              Intermediate
            </div>

          </div>

          {/* DevOps */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

            <div className="text-5xl">🚀</div>

            <h3 className="mt-4 text-2xl font-bold">
              DevOps Engineering
            </h3>

            <p className="mt-3 text-slate-400">
              Build CI/CD and automation workflows.
            </p>

            <ul className="mt-6 space-y-2 text-slate-300">
              <li>✓ Git</li>
              <li>✓ GitHub Actions</li>
              <li>✓ Jenkins</li>
              <li>✓ CI/CD</li>
              <li>✓ Monitoring</li>
            </ul>

            <div className="mt-6 text-violet-400">
              Intermediate → Advanced
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="rounded-3xl border border-violet-500/20 bg-slate-900/60 p-12 text-center">

          <h2 className="text-4xl font-bold">
            Ready To Begin?
          </h2>

          <p className="mt-4 text-slate-400">
            Start your cloud journey and unlock new skills.
          </p>

          <Link
            to="/signup"
            className="mt-8 inline-block rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
          >
            Start Learning
          </Link>

        </div>

      </section>

    </main>
  );
}