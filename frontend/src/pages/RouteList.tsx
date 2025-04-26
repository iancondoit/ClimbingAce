import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RouteList: React.FC = () => {
  // Mock data for routes with more detailed info
  const [routes] = useState([
    { 
      id: 1, 
      name: 'Solar Slab', 
      location: 'Red Rock, NV', 
      difficulty: '5.6', 
      type: 'Sport', 
      approach: '30 min hike',
      imageUrl: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 2, 
      name: 'King\'s Hand', 
      location: 'Joshua Tree, CA', 
      difficulty: 'V5', 
      type: 'Boulder', 
      approach: '10 min hike',
      imageUrl: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 3, 
      name: 'Half Dome', 
      location: 'Yosemite, CA', 
      difficulty: '5.12a', 
      type: 'Trad', 
      approach: '4 hr hike',
      imageUrl: 'https://images.unsplash.com/photo-1452858594105-cc902bf251b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 4, 
      name: 'Midnight Lightning', 
      location: 'Yosemite, CA', 
      difficulty: 'V8', 
      type: 'Boulder',
      approach: '15 min hike', 
      imageUrl: 'https://images.unsplash.com/photo-1502126324834-38f8e02d7160?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 5, 
      name: 'Moonlight Buttress', 
      location: 'Zion, UT', 
      difficulty: '5.12+', 
      type: 'Trad', 
      approach: '45 min hike',
      imageUrl: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 6, 
      name: 'The Naked Edge', 
      location: 'Eldorado Canyon, CO', 
      difficulty: '5.11b', 
      type: 'Trad',
      approach: '20 min hike',
      imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  ]);

  // Filter states
  const [filters, setFilters] = useState({
    difficulty: '',
    type: '',
    location: ''
  });

  // Loading state for skeleton
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Climbing Routes</h1>
        </motion.div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="filter-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
              <select 
                name="difficulty"
                value={filters.difficulty}
                onChange={handleFilterChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              >
                <option value="">All</option>
                <option value="beginner">Beginner (5.0-5.8)</option>
                <option value="intermediate">Intermediate (5.9-5.11)</option>
                <option value="advanced">Advanced (5.12+)</option>
                <option value="boulder">Bouldering (V0-V16)</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select 
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              >
                <option value="">All</option>
                <option value="Sport">Sport</option>
                <option value="Trad">Trad</option>
                <option value="Boulder">Boulder</option>
                <option value="Top Rope">Top Rope</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select 
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              >
                <option value="">All</option>
                <option value="Yosemite, CA">Yosemite, CA</option>
                <option value="Red Rock, NV">Red Rock, NV</option>
                <option value="Joshua Tree, CA">Joshua Tree, CA</option>
                <option value="Zion, UT">Zion, UT</option>
                <option value="Eldorado Canyon, CO">Eldorado Canyon, CO</option>
              </select>
            </div>
          </div>
        </div>

        {/* Routes Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {isLoading ? (
            // Skeleton loading states
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            // Actual route cards
            routes.map(route => (
              <ClimbCard key={route.id} climb={route} variants={itemVariants} />
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

// Skeleton Card for loading state
const SkeletonCard: React.FC = () => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <div className="h-40 bg-gray-200 animate-pulse"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-2/3"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-1/3"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-1/2"></div>
      <div className="flex justify-between items-center mt-2">
        <div className="h-8 bg-gray-200 rounded animate-pulse w-1/4"></div>
        <div className="h-8 bg-gray-200 rounded animate-pulse w-1/4"></div>
      </div>
    </div>
  </div>
);

// Climb Card Component
interface ClimbProps {
  climb: {
    id: number;
    name: string;
    location: string;
    difficulty: string;
    type: string;
    approach: string;
    imageUrl: string;
  };
  variants?: any;
}

const ClimbCard: React.FC<ClimbProps> = ({ climb, variants }) => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSaved(!isSaved);
  };

  return (
    <motion.div 
      variants={variants}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-40 bg-gray-300">
        <img 
          src={climb.imageUrl} 
          alt={climb.name} 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{climb.name}</h3>
        <p className="text-gray-600 text-sm">{climb.location}</p>
        <div className="flex items-center mt-2 space-x-2">
          <span className="inline-block px-2 py-1 bg-primary-light/20 text-primary-dark rounded text-xs font-medium">
            {climb.difficulty} ({climb.type})
          </span>
        </div>
        <p className="text-gray-700 mt-2 text-sm">
          Approach: {climb.approach}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <button 
            onClick={toggleSave}
            className="text-gray-500 hover:text-accent transition-colors"
            aria-label={isSaved ? "Unsave climb" : "Save climb"}
          >
            {isSaved ? (
              <span className="flex items-center">
                <span className="text-lg mr-1">❤️</span> Saved
              </span>
            ) : (
              <span className="flex items-center">
                <span className="text-lg mr-1">🤍</span> Save
              </span>
            )}
          </button>
          <Link 
            to={`/routes/${climb.id}`} 
            className="text-primary hover:text-primary-dark font-medium text-sm flex items-center"
          >
            View Details 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RouteList; 