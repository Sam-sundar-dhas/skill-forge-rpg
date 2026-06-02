import { Link } from "react-router";

export default function Blog() {
  const bulletins = [
    {
      title: "AWS Launches New AI Service",
      category: "AWS",
      reward: "+20 XP",
      icon: "☁️",
      description:
        "Explore how AWS is expanding its AI ecosystem with new services designed for developers and enterprises.",
    },
    {
      title: "Kubernetes Major Update Released",
      category: "Kubernetes",
      reward: "+50 XP",
      icon: "⚙️",
      description:
        "Discover the newest Kubernetes features, performance improvements, and security enhancements.",
    },
    {
      title: "Docker Security Enhancements",
      category: "Docker",
      reward: "+30 XP",
      icon: "🐳",
      description:
        "Learn about the latest container security improvements and best practices for production workloads.",
    },
    {
      title: "Terraform 2.0 Roadmap",
      category: "Terraform",
      reward: "+40 XP",
      icon: "🏗️",
      description:
        "See what's coming next in Infrastructure as Code and how Terraform continues evolving.",
    },
    {
      title: "Linux Foundation Announces New Certifications",
      category: "Linux",
      reward: "+25 XP",
      icon: "🐧",
      description:
        "Stay ahead with upcoming certification paths for cloud and DevOps professionals.",
    },
    {
      title: "Cloud Security Trends 2026",
      category: "Security",
      reward: "+35 XP",
      icon: "🔐",
      description:
        "Understand emerging threats and the newest strategies for securing cloud environments.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
            📜 Cloud Adventurer's Bulletin
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Latest Cloud
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              {" "}
              Updates
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Stay informed about AWS, Linux, Docker, Kubernetes,
            Terraform and DevOps. Earn XP by keeping up with
            the latest developments in the cloud world.
          </p>

        </div>
      </section>

      {/* Featured Article */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-900/30 via-slate-900 to-cyan-900/30 p-10">

          <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
            Featured Update
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            The Rise of AI-Powered Cloud Engineering
          </h2>

          <p className="mt-6 max-w-3xl text-slate-300">
            Artificial Intelligence is rapidly becoming a core
            component of cloud platforms. Engineers now use AI
            for monitoring, automation, security analysis,
            infrastructure optimization and application deployment.
          </p>

          <div className="mt-8 text-yellow-400 font-semibold">
            Reward: +100 XP
          </div>

        </div>

      </section>

      {/* Bulletin Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Recent Bulletins
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {bulletins.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-violet-500"
            >
              <div className="mb-4 text-5xl">{item.icon}</div>

              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                {item.category}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {item.description}
              </p>

              <div className="mt-6 text-green-400 font-semibold">
                Reward: {item.reward}
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* Categories */}
      <section className="border-t border-slate-800 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-12 text-center text-4xl font-bold">
            Explore Categories
          </h2>

          <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-6">

            {[
              "AWS",
              "Linux",
              "Docker",
              "Kubernetes",
              "Terraform",
              "Security",
            ].map((category) => (
              <div
                key={category}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center transition hover:border-violet-500"
              >
                <h3 className="font-semibold">{category}</h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Back Button */}
      <section className="pb-20 text-center">

        <Link
          to="/"
          className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-violet-500"
        >
          ← Back To Home
        </Link>

      </section>

    </main>
  );
}