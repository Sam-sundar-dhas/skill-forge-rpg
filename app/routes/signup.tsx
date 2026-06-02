import { useState } from "react";
import { supabase } from "~/lib/supabase";
export default function Signup() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

const handleSignup = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  setLoading(false);

  if (error) {
    alert(error.message);
    return;
  }

const { error: profileError } = await supabase
  .from("profiles")
  .insert({
    id: data.user?.id,
    email,
    xp: 0,
    level: 1,
  });

if (profileError) {
  console.error(profileError);
  alert(profileError.message);
}

  alert("Account created successfully!");
};
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10 grid min-h-screen md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden flex-col justify-center px-16 md:flex">

          <div className="max-w-lg">

            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              ⚔️ Join SkillForge
            </span>

            <h1 className="mt-8 text-6xl font-bold leading-tight text-white">
              Start Your
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Hero Journey
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Create your account and begin mastering Linux,
              AWS, Docker, Kubernetes and DevOps through
              quests, achievements and interactive learning.
            </p>

            {/* Benefits */}
            <div className="mt-12 grid gap-4">

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-slate-200 backdrop-blur-sm">
                🎯 Personalized Learning Paths
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-slate-200 backdrop-blur-sm">
                🏆 Earn XP & Achievements
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-slate-200 backdrop-blur-sm">
                🚀 Build Real Cloud Projects
              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-10">

          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl">

            <div className="text-center">

              <h2 className="text-4xl font-bold text-white">
                Create Account
              </h2>

              <p className="mt-3 text-slate-400">
                Begin your cloud adventure today.
              </p>

            </div>

           <form onSubmit={handleSignup} className="mt-8 space-y-4">

  <input
    type="text"
    placeholder="Full Name"
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-violet-500"
  />

  <input
    type="email"
    placeholder="Email Address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-violet-500"
    required
  />

  <input
    type="text"
    placeholder="Username"
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-violet-500"
  />

  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-violet-500"
    required
  />

  <input
    type="password"
    placeholder="Confirm Password"
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-violet-500"
  />

  <button
    type="submit"
    disabled={loading}
    className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
  >
    {loading ? "Creating Account..." : "Create Account"}
  </button>

</form>

            <div className="my-6 flex items-center">

              <div className="h-px flex-1 bg-slate-700" />

              <span className="px-4 text-sm text-slate-400">
                OR
              </span>

              <div className="h-px flex-1 bg-slate-700" />

            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/50">

              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="h-5 w-5"
              />

              Continue with Google

            </button>

            <div className="mt-6 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-violet-400 transition hover:text-violet-300"
              >
                Login
              </a>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}