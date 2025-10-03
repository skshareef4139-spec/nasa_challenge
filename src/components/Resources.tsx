import { Star, ExternalLink, BookOpen, Database, Github, FileText } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: any;
}

const resources: Resource[] = [
  {
    id: 'nasa-exoplanet',
    title: 'NASA Exoplanet Archive',
    description: 'Comprehensive database of confirmed exoplanets and candidates with light curves and transit data',
    url: 'https://exoplanetarchive.ipac.caltech.edu/',
    icon: Database,
  },
  {
    id: 'kepler-data',
    title: 'Kepler Mission Data',
    description: 'Access raw and processed data from the Kepler Space Telescope for exoplanet detection',
    url: 'https://www.nasa.gov/mission_pages/kepler/main/index.html',
    icon: BookOpen,
  },
  {
    id: 'ml-exoplanets',
    title: 'ML for Exoplanet Detection',
    description: 'Research papers and tutorials on applying machine learning to astronomical data',
    url: 'https://arxiv.org/search/?query=machine+learning+exoplanet&searchtype=all',
    icon: FileText,
  },
  {
    id: 'github-notebooks',
    title: 'Exoplanet Detection Notebooks',
    description: 'Open-source Jupyter notebooks with example ML models for transit detection',
    url: 'https://github.com/topics/exoplanet-detection',
    icon: Github,
  },
  {
    id: 'tess-mission',
    title: 'TESS Mission Overview',
    description: 'Learn about the Transiting Exoplanet Survey Satellite and access its datasets',
    url: 'https://www.nasa.gov/tess-transiting-exoplanet-survey-satellite',
    icon: Database,
  },
];

export function Resources() {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const favoriteResources = resources.filter((r) => favorites.includes(r.id));

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Learning Resources
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Essential datasets, research papers, and tools to help you build your exoplanet detection AI
          </p>
        </div>

        {favorites.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              My Favorites ({favorites.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favoriteResources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <div
                    key={resource.id}
                    className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-yellow-100 text-yellow-600 w-10 h-10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">{resource.title}</h4>
                      </div>
                      <button
                        onClick={() => toggleFavorite(resource.id)}
                        className="text-yellow-500 hover:text-yellow-600 transition-colors"
                      >
                        <Star className="w-5 h-5 fill-yellow-500" />
                      </button>
                    </div>
                    <p className="text-slate-600 mb-4">{resource.description}</p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      Visit Resource
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">All Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon;
              const isFavorite = favorites.includes(resource.id);
              return (
                <div
                  key={resource.id}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg">{resource.title}</h4>
                    </div>
                    <button
                      onClick={() => toggleFavorite(resource.id)}
                      className={`transition-colors ${
                        isFavorite
                          ? 'text-yellow-500 hover:text-yellow-600'
                          : 'text-slate-300 hover:text-yellow-500'
                      }`}
                    >
                      <Star className={`w-5 h-5 ${isFavorite ? 'fill-yellow-500' : ''}`} />
                    </button>
                  </div>
                  <p className="text-slate-600 mb-4">{resource.description}</p>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    Visit Resource
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
