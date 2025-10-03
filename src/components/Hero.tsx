import { Check } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function Hero() {
  const [joined, setJoined] = useLocalStorage('joined', false);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold">
            2025 NASA Space Apps Challenge
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          A World Away
        </h1>

        <p className="text-2xl sm:text-3xl lg:text-4xl text-blue-200 mb-4 font-light">
          Hunting for Exoplanets with AI
        </p>

        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join innovators worldwide in developing cutting-edge AI solutions to discover planets beyond our solar system
        </p>

        <button
          onClick={() => setJoined(!joined)}
          className={`group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
            joined
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {joined ? (
            <>
              <Check className="w-5 h-5" />
              Joined
            </>
          ) : (
            'Join the Challenge'
          )}
        </button>

        {joined && (
          <p className="mt-6 text-green-300 text-sm animate-fade-in">
            Welcome aboard! Scroll down to explore resources and form your team.
          </p>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
