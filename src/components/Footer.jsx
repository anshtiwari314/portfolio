import { profile } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p className="text-sm text-zinc-600">
          Built with React + Vite + Tailwind
        </p>
      </div>
    </footer>
  );
}
