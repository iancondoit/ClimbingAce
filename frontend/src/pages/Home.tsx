import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Hero image
const heroImage = 'https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for featured climbs with more detailed info
  const featuredClimbs = [
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
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom text-center text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Discover Your Next Climb
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Real-time conditions, maps, and trail tips.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Find a climb..."
                  className="w-full py-3 px-4 pr-12 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-white shadow-sm sticky top-16 z-20">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <FilterButton label="Grade" />
            <FilterButton label="Type" />
            <FilterButton label="Distance" />
            <FilterButton label="Weather OK" />
          </div>
        </div>
      </section>

      {/* Featured Climbs */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Climbs</h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredClimbs.map(climb => (
              <ClimbCard key={climb.id} climb={climb} variants={itemVariants} />
            ))}
          </motion.div>
          
          <div className="text-center mt-10">
            <Link to="/routes" className="btn-primary">
              View All Climbs
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Climbing Ace?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🌤️" 
              title="Real-time Weather Data" 
              description="Get up-to-date weather conditions for your favorite climbing destinations."
            />
            <FeatureCard 
              icon="🚗" 
              title="Traffic Insights" 
              description="Plan your trip with accurate traffic information to avoid delays."
            />
            <FeatureCard 
              icon="📱" 
              title="Mobile Access" 
              description="Access route details offline with our mobile app."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Filter Button Component
const FilterButton: React.FC<{label: string}> = ({ label }) => (
  <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm md:text-base font-medium">
    {label}
  </button>
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

// Feature Card Component
const FeatureCard: React.FC<{icon: string; title: string; description: string}> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home; 