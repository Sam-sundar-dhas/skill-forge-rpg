export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-4 text-center text-5xl font-bold">
          Contact Us
        </h1>

        <p className="mb-16 text-center text-slate-400">
          We'd love to hear from you.
        </p>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-violet-500/20 bg-slate-900/60 p-6">
            <div className="text-4xl">📧</div>
            <h3 className="mt-4 text-xl font-bold">Email Us</h3>
            <p className="mt-2 text-slate-400">
              support@skillforge.dev
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-6">
            <div className="text-4xl">📞</div>
            <h3 className="mt-4 text-xl font-bold">Call Us</h3>
            <p className="mt-2 text-slate-400">
              +1 (555) 728-9142
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-slate-900/60 p-6">
            <div className="text-4xl">📍</div>
            <h3 className="mt-4 text-xl font-bold">Headquarters</h3>
            <p className="mt-2 text-slate-400">
              250 Cloud Avenue<br />
              San Francisco, CA 94105<br />
              United States
            </p>
          </div>

        </div>

        <div className="mt-10 flex justify-center gap-6">
          <a href="https://github.com" className="text-slate-400 hover:text-violet-400">
            GitHub
          </a>

          <a href="https://linkedin.com" className="text-slate-400 hover:text-violet-400">
            LinkedIn
          </a>

          <a href="https://twitter.com" className="text-slate-400 hover:text-violet-400">
            X / Twitter
          </a>

          <a href="https://discord.com" className="text-slate-400 hover:text-violet-400">
            Discord
          </a>
        </div>

      </div>
    </main>
  );
}