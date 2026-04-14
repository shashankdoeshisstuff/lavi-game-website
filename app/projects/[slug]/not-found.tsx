import Link from "next/link";
import { ArrowLeft, Frown, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 overflow-hidden relative">
      <div className="relative z-10 text-center max-w-md w-full">
        {/* 404 - static, no glitch */}
        <h1
          className="
            text-8xl sm:text-9xl font-black tracking-tighter
            text-primary
          "
        >
          404
        </h1>

        <div className="mt-6 flex justify-center">
          <div className="rounded-full bg-neutral-800/50 p-3 backdrop-blur-sm">
            <Frown className="w-8 h-8 text-yellow-400" />
          </div>
        </div>

        <p className="text-white/70 text-lg sm:text-xl mt-6 font-medium">
          Project not found
        </p>
        <p className="text-white/40 text-sm mt-2 max-w-sm mx-auto">
          The project you're looking for might have been moved, deleted, or never existed.
        </p>

        {/* Interactive suggestion card */}
        <div className="mt-8 bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-5 border border-white/10 text-left">
          <div className="flex items-center gap-3 text-yellow-400">
            <Search className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider font-semibold">
              Try these
            </span>
          </div>
          <ul className="mt-3 space-y-2 text-white/60 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-yellow-400 rounded-full" />
              Check the URL for typos
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-yellow-400 rounded-full" />
              Go back to the{" "}
              <Link href="/#projects" className="text-yellow-400 hover:underline">
                projects overview
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-yellow-400 rounded-full" />
              Visit our{" "}
              <Link href="/" className="text-yellow-400 hover:underline">
                homepage
              </Link>
            </li>
          </ul>
        </div>

        {/* Primary action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/#projects"
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3 rounded-full
              bg-primary text-black font-semibold
              text-sm transition-all duration-300
              hover:bg-primary/80
            "
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <Link
            href="/"
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3 rounded-full
              border border-white/20 text-white/80
              text-sm transition-all duration-300
              hover:bg-white hover:text-black
            "
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}