import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface RouteParams {
  [key: string]: string | undefined;
  id: string;
}

const RouteDetail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [isLoading, setIsLoading] = useState(true);
  const [route, setRoute] = useState<any>(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Mock data for the route
      setRoute({
        id: parseInt(id || '1'),
        name: id === '1' ? 'Solar Slab' : id === '2' ? 'King\'s Hand' : 'Half Dome',
        location: id === '1' ? 'Red Rock, NV' : id === '2' ? 'Joshua Tree, CA' : 'Yosemite, CA',
        difficulty: id === '1' ? '5.6' : id === '2' ? 'V5' : '5.12a',
        type: id === '1' ? 'Sport' : id === '2' ? 'Boulder' : 'Trad',
        approach: id === '1' ? '30 min hike' : id === '2' ? '10 min hike' : '4 hr hike',
        description: 'This is a beautiful and challenging route with amazing views. The climbing is varied and engaging, with a mix of face and crack climbing. The route is well-protected and has several distinct sections.',
        imageUrl: id === '1' 
          ? 'https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
          : id === '2'
            ? 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
            : 'https://images.unsplash.com/photo-1452858594105-cc902bf251b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        weather: {
          current: 'Sunny, 72°F',
          forecast: [
            { day: 'Today', condition: 'Sunny', high: '75°F', low: '55°F' },
            { day: 'Tomorrow', condition: 'Partly Cloudy', high: '70°F', low: '52°F' },
            { day: 'Wednesday', condition: 'Cloudy', high: '65°F', low: '50°F' }
          ]
        }
      });
      setIsLoading(false);
    }, 1000);
  }, [id]);

  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
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
        {isLoading ? (
          <LoadingSkeleton />
        ) : route ? (
          <>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <img 
                src={route.imageUrl} 
                alt={route.name} 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{route.name}</h1>
                <p className="text-xl opacity-90">{route.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-light/20 text-primary-dark rounded font-medium">
                      {route.difficulty}
                    </span>
                    <span className="inline-block px-3 py-1 bg-secondary-light/20 text-secondary-dark rounded font-medium">
                      {route.type}
                    </span>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded font-medium">
                      {route.approach}
                    </span>
                    <button 
                      onClick={toggleSave}
                      className={`ml-auto inline-flex items-center px-3 py-1 rounded-full ${
                        isSaved 
                          ? 'bg-accent text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <span className="mr-1">{isSaved ? '❤️' : '🤍'}</span>
                      {isSaved ? 'Saved' : 'Save'}
                    </button>
                  </div>

                  <h2 className="text-xl font-bold mb-3">Description</h2>
                  <p className="text-gray-700 mb-6">{route.description}</p>

                  <h2 className="text-xl font-bold mb-3">Location & Approach</h2>
                  <p className="text-gray-700">The approach takes approximately {route.approach} from the parking area. Follow the well-marked trail towards the base of the cliff.</p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4">Weather</h2>
                  <p className="text-2xl font-medium mb-4">{route.weather.current}</p>
                  
                  <div className="space-y-3">
                    {route.weather.forecast.map((day: any, index: number) => (
                      <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-2">
                        <span className="font-medium">{day.day}</span>
                        <div className="text-right">
                          <div>{day.condition}</div>
                          <div className="text-sm text-gray-600">{day.high} / {day.low}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4">Recommended Gear</h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>60m Rope</li>
                    <li>12 Quickdraws</li>
                    <li>Helmet</li>
                    <li>2L Water</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/routes" className="btn-primary">
                Back to Routes
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold mb-4">Route Not Found</h1>
            <p className="text-gray-600 mb-6">We couldn't find the route you're looking for.</p>
            <Link to="/routes" className="btn-primary">
              Browse All Routes
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div>
    <div className="h-64 md:h-96 rounded-xl bg-gray-200 animate-pulse mb-8"></div>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="h-8 w-20 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-8 w-20 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-8 w-32 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="h-6 w-48 bg-gray-200 animate-pulse rounded mb-3"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded mb-6 w-2/3"></div>
          
          <div className="h-6 w-48 bg-gray-200 animate-pulse rounded mb-3"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="h-6 w-32 bg-gray-200 animate-pulse rounded mb-4"></div>
          <div className="h-8 w-40 bg-gray-200 animate-pulse rounded mb-4"></div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2">
              <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-8 w-24 bg-gray-200 animate-pulse rounded"></div>
            </div>
            <div className="flex items-center justify-between pb-2">
              <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-8 w-24 bg-gray-200 animate-pulse rounded"></div>
            </div>
            <div className="flex items-center justify-between pb-2">
              <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-8 w-24 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RouteDetail; 