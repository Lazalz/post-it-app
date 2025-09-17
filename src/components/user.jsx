import React from 'react';
import { User as UserIcon, Star, BarChart3, FileText, Calendar } from 'lucide-react';

export function User() {
  return (
    <UserProfile 
      user={{
        name: "Username",
        noteCount: 1002,
        avatar: "https://i.pravatar.cc/150?img=32"
      }} 
    />
  );
}

function UserProfile({ user }) {
  const getContributionLevel = (noteCount) => {
    if (noteCount > 100) return { 
      level: "Grand Contributeur", 
      color: "badge-primary" 
    };
    if (noteCount > 50) return { 
      level: "Contributeur Moyen", 
      color: "badge-secondary" 
    };
    return { 
      level: "Nouveau Contributeur", 
      color: "badge-accent" 
    };
  };

  const contribution = getContributionLevel(user?.noteCount || 0);

  // Génère des données aléatoires pour le graphique
  const generateContributionData = () => {
    return Array.from({ length: 30 }, () => Math.floor(Math.random() * 10));
  };

  const contributionData = generateContributionData();
  const maxContribution = Math.max(...contributionData, 1);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          {/* En-tête du profil */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100">
                  <img src={user?.avatar} alt="Profil" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <div className={`badge  h-full gap-2 mt-2 ${contribution.color}`}>
                  <Star className="w-4 h-4" />
                  {contribution.level}
                </div>
              </div>
            </div>
            
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="stat-title">Total des notes</div>
                <div className="stat-value text-3xl">{user?.noteCount || 0}</div>
              </div>
            </div>
          </div>

          {/* Graphique d'activité */}
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Activité récente</h2>
            </div>
            <div className="h-32 flex items-end gap-1">
              {contributionData.map((value, index) => (
                <div 
                  key={index}
                  className="flex-1 rounded-t bg-primary/50 hover:bg-primary transition-colors"
                  style={{
                    height: `${(value / maxContribution) * 100}%`,
                    minHeight: '4px'
                  }}
                  title={`${value} contributions`}
                />
              ))}
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="stat bg-base-200 rounded-box p-4">
              <div className="stat-title flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Notes ce mois-ci
              </div>
              <div className="stat-value text-2xl">
                {Math.floor((user?.noteCount || 0) * 0.2)}
              </div>
              <div className="stat-desc"><span className='text-green-400'>+5%</span> vs mois dernier</div>
            </div>
            
            <div className="stat bg-base-200 rounded-box p-4">
              <div className="stat-title">Moyenne quotidienne</div>
              <div className="stat-value text-2xl">
                {Math.ceil((user?.noteCount || 0) / 30)}
              </div>
              <div className="stat-desc">notes par jour</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;