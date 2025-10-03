import { Rocket, Github, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-lg">NASA Challenge 2025</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Join the global community of innovators using AI to discover exoplanets and advance space exploration.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Official Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.spaceappschallenge.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 text-sm"
                >
                  NASA Space Apps Challenge
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 text-sm"
                >
                  NASA Official Website
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://exoplanets.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 text-sm"
                >
                  NASA Exoplanet Exploration
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/nasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@spaceappschallenge.org"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 NASA Space Apps Challenge. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            This is a demonstration project for the NASA Space Apps Challenge
          </p>
        </div>
      </div>
    </footer>
  );
}
