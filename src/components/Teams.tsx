import { useState } from 'react';
import { Users, UserPlus, Trash2 } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Team {
  id: string;
  name: string;
  members: string[];
  createdAt: string;
}

export function Teams() {
  const [teams, setTeams] = useLocalStorage<Team[]>('teams', []);
  const [teamName, setTeamName] = useState('');
  const [memberNames, setMemberNames] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!teamName.trim() || !memberNames.trim()) {
      return;
    }

    const members = memberNames
      .split(',')
      .map((m) => m.trim())
      .filter((m) => m.length > 0);

    const newTeam: Team = {
      id: Date.now().toString(),
      name: teamName.trim(),
      members,
      createdAt: new Date().toISOString(),
    };

    setTeams((prev) => [...prev, newTeam]);
    setTeamName('');
    setMemberNames('');
  };

  const deleteTeam = (id: string) => {
    setTeams((prev) => prev.filter((team) => team.id !== id));
  };

  return (
    <section id="teams" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Form Your Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Collaboration is key to success. Create your team and start building innovative solutions together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                <UserPlus className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Create Team</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="teamName" className="block text-sm font-semibold text-slate-700 mb-2">
                  Team Name
                </label>
                <input
                  id="teamName"
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g., Exoplanet Hunters"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="memberNames" className="block text-sm font-semibold text-slate-700 mb-2">
                  Team Members
                </label>
                <input
                  id="memberNames"
                  type="text"
                  value={memberNames}
                  onChange={(e) => setMemberNames(e.target.value)}
                  placeholder="Enter names separated by commas"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
                <p className="mt-2 text-sm text-slate-500">
                  Example: Alice Smith, Bob Johnson, Carol Lee
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Save Team
              </button>
            </form>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Registered Teams ({teams.length})
              </h3>
            </div>

            {teams.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 shadow-xl border border-slate-200 text-center">
                <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500 text-lg">No teams registered yet</p>
                <p className="text-slate-400 text-sm mt-2">Create your first team to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {teams.map((team) => (
                  <div
                    key={team.id}
                    className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-lg">{team.name}</h4>
                          <p className="text-sm text-slate-500">
                            {new Date(team.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteTeam(team.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-2"
                        title="Delete team"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-2">Members:</p>
                      <div className="flex flex-wrap gap-2">
                        {team.members.map((member, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
