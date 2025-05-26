import React from 'react';

export const Gallery = () => {
  // Data that can be easily edited by the user
  const galleryData = {
    categories: [
      { id: 'tree-planting', name: 'Tree Planting' },
      { id: 'beach-cleanup', name: 'Beach Cleanup' },
      { id: 'education', name: 'Environmental Education' },
      { id: 'community', name: 'Community' }
    ],
    
    images: [
      {
        id: 1,
        title: 'Collective Planting in Minas Gerais',
        category: 'tree-planting',
        date: 'March 2025',
        thumbnail: 'placeholder-1.jpg',
        description: 'Volunteers planting native seedlings to recover degraded area.'
      },
      {
        id: 2,
        title: 'Cleanup at Copacabana Beach',
        category: 'beach-cleanup',
        date: 'January 2025',
        thumbnail: 'placeholder-2.jpg',
        description: 'Action that removed more than 300kg of waste from the beach.'
      },
      {
        id: 3,
        title: 'Workshop at Municipal School',
        category: 'education',
        date: 'February 2025',
        thumbnail: 'placeholder-3.jpg',
        description: 'Teaching children about the importance of environmental preservation.'
      },
      {
        id: 4,
        title: 'Volunteer Gathering',
        category: 'community',
        date: 'April 2025',
        thumbnail: 'placeholder-4.jpg',
        description: 'Celebrating the results achieved in the first quarter of 2025.'
      },
      {
        id: 5,
        title: 'Urban Area Planting',
        category: 'tree-planting',
        date: 'May 2025',
        thumbnail: 'placeholder-5.jpg',
        description: 'Revitalization of public square with fruit tree planting.'
      },
      {
        id: 6,
        title: 'River Cleanup',
        category: 'beach-cleanup',
        date: 'April 2025',
        thumbnail: 'placeholder-6.jpg',
        description: 'Volunteers removing waste from river banks.'
      },
      {
        id: 7,
        title: 'Lecture on Sustainability',
        category: 'education',
        date: 'March 2025',
        thumbnail: 'placeholder-7.jpg',
        description: 'Educational event about sustainable practices in daily life.'
      },
      {
        id: 8,
        title: 'Annual Gathering',
        category: 'community',
        date: 'January 2025',
        thumbnail: 'placeholder-8.jpg',
        description: 'Celebration of results achieved in 2024.'
      }
    ],
    
    videos: [
      {
        id: 1,
        title: 'Documentary: A Year of Impact',
        thumbnail: 'video-placeholder-1.jpg',
        duration: '15:42',
        description: 'Summary of the main actions carried out in 2024.'
      },
      {
        id: 2,
        title: 'Tutorial: How to Plant Your First Tree',
        thumbnail: 'video-placeholder-2.jpg',
        duration: '08:27',
        description: 'Step-by-step guide for beginners in tree planting.'
      }
    ]
  };

  // State to filter images by category
  const [activeCategory, setActiveCategory] = React.useState('all');

  // Filter images based on selected category
  const filteredImages = activeCategory === 'all' 
    ? galleryData.images 
    : galleryData.images.filter(img => img.category === activeCategory);

  return (
    <div>
      {/* Page banner */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Gallery</h1>
          <p className="text-xl mt-2">Images and videos of our actions</p>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className={`px-4 py-2 rounded-full ${activeCategory === 'all' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            
            {galleryData.categories.map(category => (
              <button 
                key={category.id}
                className={`px-4 py-2 rounded-full ${activeCategory === category.id ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-700 mb-8">Photos</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map(image => (
              <div key={image.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                {/* Placeholder for image - would be replaced with real image */}
                <div className="h-48 bg-gray-300"></div>
                
                <div className="p-4">
                  <h3 className="font-bold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{image.date}</p>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <p className="text-center py-8">No images found in this category.</p>
          )}
          
          <div className="text-center mt-8">
            <button className="bg-white border border-green-600 text-green-600 px-6 py-2 rounded-md hover:bg-green-50 transition">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Video gallery */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-700 mb-8">Videos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryData.videos.map(video => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                {/* Placeholder for video thumbnail */}
                <div className="h-64 bg-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                      <span className="text-2xl">▶️</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-sm rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold mb-2">{video.title}</h3>
                  <p className="text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white border border-green-600 text-green-600 px-6 py-2 rounded-md hover:bg-green-50 transition">
              View All Videos
            </button>
          </div>
        </div>
      </section>

      {/* Share your photos */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Share Your Photos</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Did you participate in a #MonthlyEarthDay action? Share your photos on social media
            using the hashtag or send them directly to us.
          </p>
          
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Send Photos
          </button>
        </div>
      </section>
    </div>
  );
};
