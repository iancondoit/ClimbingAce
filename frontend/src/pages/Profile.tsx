import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Profile: React.FC = () => {
  // Mock user data
  const [user] = useState({
    name: 'Alex Honnold',
    email: 'alex@climbingace.com',
    location: 'Las Vegas, NV',
    bio: 'Professional rock climber known for free-soloing El Capitan in Yosemite National Park.',
    climbingLevel: 'Advanced',
    preferredTypes: ['Trad', 'Free Solo', 'Sport']
  });

  // Mock favorite routes
  const [favoriteRoutes] = useState([
    { id: 1, name: 'El Capitan - Free Rider', location: 'Yosemite, CA', difficulty: '5.13a', imageUrl: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    { id: 3, name: 'The Nose', location: 'Yosemite, CA', difficulty: '5.14a', imageUrl: 'https://images.unsplash.com/photo-1452858594105-cc902bf251b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    { id: 5, name: 'Moonlight Buttress', location: 'Zion, UT', difficulty: '5.12+', imageUrl: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' }
  ]);

  // Mock trip plans
  const [tripPlans] = useState([
    { 
      id: 1, 
      name: 'Yosemite Fall Trip', 
      startDate: '2023-10-15', 
      endDate: '2023-10-22',
      routes: ['El Capitan', 'Half Dome']
    },
    { 
      id: 2, 
      name: 'Red River Gorge Weekend', 
      startDate: '2023-11-03', 
      endDate: '2023-11-05',
      routes: ['Military Wall', 'Bruise Brothers']
    }
  ]);

  // State for active tab
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 pt-20 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container-custom">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
            AH
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-1">{user.name}</h1>
            <p className="text-gray-600 mb-2">{user.location}</p>
            <p className="text-primary font-medium mb-3">{user.climbingLevel} Climber</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {user.preferredTypes.map((type, index) => (
                <span 
                  key={index} 
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-light/20 text-primary-dark"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-gray-200 mb-6">
          <button 
            className={`px-4 py-2 font-medium border-b-2 ${
              activeTab === 'profile' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button 
            className={`px-4 py-2 font-medium border-b-2 ${
              activeTab === 'favorites' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('favorites')}
          >
            Favorite Routes
          </button>
          <button 
            className={`px-4 py-2 font-medium border-b-2 ${
              activeTab === 'trips' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('trips')}
          >
            Trip Plans
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'profile' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-3">About Me</h2>
                <p className="text-gray-700">{user.bio}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-3">Contact Information</h2>
                <p className="mb-2"><span className="font-medium">Email:</span> {user.email}</p>
                <p><span className="font-medium">Location:</span> {user.location}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Account Settings</h2>
                <div className="flex flex-wrap gap-3">
                  <button className="btn-primary">Edit Profile</button>
                  <button className="btn bg-gray-200 text-gray-800 hover:bg-gray-300">Change Password</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">My Favorite Routes</h2>
              </div>
              
              {favoriteRoutes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoriteRoutes.map(route => (
                    <div key={route.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-40 bg-gray-300">
                        <img 
                          src={route.imageUrl} 
                          alt={route.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{route.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{route.location}</p>
                        <p className="text-sm mb-3">
                          <span className="font-medium">Difficulty:</span> {route.difficulty}
                        </p>
                        <Link 
                          to={`/routes/${route.id}`} 
                          className="text-primary hover:text-primary-dark font-medium text-sm flex items-center"
                        >
                          View Details 
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p className="mb-4">You haven't added any favorite routes yet.</p>
                  <Link to="/routes" className="btn-primary">
                    Explore Routes
                  </Link>
                </div>
              )}
            </div>
          )}

          {activeTab === 'trips' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">My Trip Plans</h2>
                <button className="btn-secondary">
                  + New Trip Plan
                </button>
              </div>
              
              {tripPlans.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tripPlans.map(trip => (
                    <div key={trip.id} className="border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="border-b border-gray-100 pb-3 mb-3">
                        <h3 className="font-bold text-lg mb-1">{trip.name}</h3>
                        <div className="text-sm text-gray-600">
                          <span>{new Date(trip.startDate).toLocaleDateString()}</span>
                          <span> - </span>
                          <span>{new Date(trip.endDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Planned Routes:</h4>
                        <ul className="list-disc list-inside text-gray-700">
                          {trip.routes.map((route, index) => (
                            <li key={index}>{route}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-primary hover:text-primary-dark text-sm font-medium">Edit</button>
                        <button className="text-red-500 hover:text-red-700 text-sm font-medium">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p className="mb-4">You haven't created any trip plans yet.</p>
                  <button className="btn-primary">
                    Create Trip Plan
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Profile; 