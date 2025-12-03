import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
      <div>
        <p className="mb-3 inline-flex rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-[11px] text-slate-300">
          End-to-end encrypted • Real-time • Cross-platform
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          SecureChat:{' '}
          <span className="text-primary-400">
            real-time messaging, truly private.
          </span>
        </h1>
        <p className="mb-6 max-w-xl text-sm text-slate-300 sm:text-base">
          SecureChat is an encrypted real-time messaging platform that protects
          conversations with strong cryptography while keeping the user
          experience fast, modern, and intuitive for individuals and teams.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/features"
            className="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-primary-600/30 hover:bg-primary-500"
          >
            View Key Features
          </Link>
          <Link
            to="/architecture"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-primary-500 hover:text-primary-400"
          >
            View Architecture
          </Link>
        </div>
        <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 text-xs text-slate-300">
          <div>
            <dt className="text-slate-400">Avg. latency</dt>
            <dd className="font-semibold text-slate-100">&lt; 150 ms</dd>
          </div>
          <div>
            <dt className="text-slate-400">Encryption</dt>
            <dd className="font-semibold text-slate-100">End-to-end</dd>
          </div>
          <div>
            <dt className="text-slate-400">Delivery</dt>
            <dd className="font-semibold text-slate-100">Real-time</dd>
          </div>
        </dl>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-primary-600/20 blur-3xl" />
        <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-xl">
          <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
            <span className="font-medium text-slate-200">SecureChat Room</span>
            <span>End-to-end encrypted</span>
          </div>
          <div className="space-y-3 text-xs">
            <div className="flex gap-2">
              <div className="mt-1 h-6 w-6 rounded-full bg-primary-600/80" />
              <div>
                <p className="font-semibold text-slate-100">Alice</p>
                <p className="rounded-2xl bg-slate-800 px-3 py-2 text-slate-200">
                  Hey team, the new encryption rollout is live. 🔐
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <div>
                <p className="text-right font-semibold text-slate-100">You</p>
                <p className="rounded-2xl bg-primary-600 px-3 py-2 text-slate-50">
                  Awesome! Latency looks great in Asia and EU.
                </p>
              </div>
              <div className="mt-1 h-6 w-6 rounded-full bg-slate-700" />
            </div>
            <p className="mt-2 text-[11px] text-slate-500">
              Messages are secured before leaving your device using strong
              end-to-end encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
