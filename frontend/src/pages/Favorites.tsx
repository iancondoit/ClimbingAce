import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Favorites: React.FC = () => {
  // Mock data for favorite climbs
  const [favorites] = useState([
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
      id: 3, 
      name: 'Half Dome', 
      location: 'Yosemite, CA', 
      difficulty: '5.12a', 
      type: 'Trad', 
      approach: '4 hr hike',
      imageUrl: 'https://images.unsplash.com/photo-1452858594105-cc902bf251b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  ]);

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
    <motion.div 
      className="min-h-screen bg-gray-50 pt-20 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Your Favorite Climbs</h1>
        
        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">You haven't saved any climbs yet.</p>
            <Link to="/routes" className="btn-primary">
              Explore Routes
            </Link>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {favorites.map(climb => (
              <ClimbCard key={climb.id} climb={climb} variants={itemVariants} />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

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
  const [isSaved, setIsSaved] = useState(true); // Already favorited

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSaved(!isSaved);
  };

  return (
    <motion.div 
      variants={variants}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      layout
      exit={{ opacity: 0, scale: 0.8 }}
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

export default Favorites; 