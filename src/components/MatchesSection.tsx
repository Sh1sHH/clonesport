import React from 'react';
import { matches } from '../data';
import { Calendar, Clock, Trophy } from 'lucide-react';

const MatchesSection: React.FC = () => {
  // Filter matches by upcoming and past
  const upcomingMatches = matches.filter(match => match.isUpcoming);
  const pastMatches = matches.filter(match => match.hasEnded);

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Matches</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow our team's journey through various tournaments and championships
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Matches */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="mr-2 text-orange-500" size={20} />
              Upcoming Matches
            </h3>
            <div className="space-y-4">
              {upcomingMatches.map((match) => (
                <div 
                  key={match.id} 
                  className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-orange-500 transition-colors duration-200"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium bg-gray-700 px-2 py-1 rounded">
                      {match.tournament}
                    </span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock size={14} className="mr-1" />
                      {new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {match.time}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="font-bold text-sm">{match.team1.name.charAt(0)}</span>
                      </div>
                      <span className="ml-3 font-medium">{match.team1.name}</span>
                    </div>
                    
                    <div className="text-center px-4">
                      <span className="text-sm font-medium text-orange-500">VS</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="mr-3 font-medium">{match.team2.name}</span>
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="font-bold text-sm">{match.team2.name.charAt(0)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-center">
                    <button className="text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors duration-200">
                      Add to Calendar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Past Matches */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Trophy className="mr-2 text-orange-500" size={20} />
              Recent Results
            </h3>
            <div className="space-y-4">
              {pastMatches.map((match) => (
                <div 
                  key={match.id} 
                  className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-orange-500 transition-colors duration-200"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium bg-gray-700 px-2 py-1 rounded">
                      {match.tournament}
                    </span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock size={14} className="mr-1" />
                      {new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="font-bold text-sm">{match.team1.name.charAt(0)}</span>
                      </div>
                      <span className="ml-3 font-medium">{match.team1.name}</span>
                    </div>
                    
                    <div className="text-center px-4">
                      <div className="text-lg font-bold">
                        <span className={match.team1.score! > match.team2.score! ? "text-orange-500" : "text-white"}>
                          {match.team1.score}
                        </span>
                        <span className="mx-1">-</span>
                        <span className={match.team2.score! > match.team1.score! ? "text-orange-500" : "text-white"}>
                          {match.team2.score}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="mr-3 font-medium">{match.team2.name}</span>
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="font-bold text-sm">{match.team2.name.charAt(0)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-center">
                    <button className="text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors duration-200">
                      Match Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="/matches" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200">
            View All Matches
          </a>
        </div>
      </div>
    </section>
  );
};

export default MatchesSection;