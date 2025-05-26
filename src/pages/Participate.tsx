export const Participate = () => {
  // Data that can be easily edited by the user
  const participateData = {
    ways: [
      {
        title: 'Plant Trees',
        description: 'Organize a planting in your community or participate in existing events. Every tree counts!',
        icon: '🌳',
        steps: [
          'Choose native species for your region',
          'Find a suitable location for planting',
          'Document your action with photos',
          'Share using the hashtag #MonthlyEarthDay'
        ]
      },
      {
        title: 'Organize Cleanups',
        description: 'Gather friends and family to clean beaches, parks, or urban areas in your city.',
        icon: '🧹',
        steps: [
          'Gather volunteers and necessary materials',
          'Choose an area that needs attention',
          'Separate waste for recycling',
          'Record the amount collected and share'
        ]
      },
      {
        title: 'Educate Your Community',
        description: 'Share knowledge about sustainability and inspire others to join the movement.',
        icon: '📚',
        steps: [
          'Organize lectures or workshops',
          'Create educational content for social media',
          'Involve local schools and institutions',
          'Share success stories'
        ]
      }
    ],
    
    events: [
      {
        title: 'Collective Planting - National Park',
        date: 'June 15, 2025',
        location: 'Rio de Janeiro, Brazil',
        description: 'Join us to plant 500 native seedlings in the park\'s recovery area.'
      },
      {
        title: 'Beach Cleanup - Green Coast',
        date: 'July 22, 2025',
        location: 'Angra dos Reis, Brazil',
        description: 'Cleanup action at one of the most beautiful beaches in the region. Equipment provided.'
      },
      {
        title: 'Online Workshop - Home Composting',
        date: 'August 5, 2025',
        location: 'Virtual (Zoom)',
        description: 'Learn simple techniques to transform organic waste into quality compost.'
      }
    ],
    
    resources: [
      {
        title: 'Planting Guide',
        description: 'Complete manual with planting techniques and seedling care.',
        type: 'PDF',
        icon: '📄'
      },
      {
        title: 'Social Media Kit',
        description: 'Ready-to-share images and texts for your social networks.',
        type: 'ZIP',
        icon: '🖼️'
      },
      {
        title: 'Recording Spreadsheet',
        description: 'Document to record and account for your environmental actions.',
        type: 'XLSX',
        icon: '📊'
      },
      {
        title: 'Educational Presentation',
        description: 'Slides about environmental impact and the importance of monthly actions.',
        type: 'PPTX',
        icon: '📽️'
      }
    ]
  };

  return (
    <div>
      {/* Page banner */}
      <section className="bg-light-section py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Join Us</h1>
          <p className="text-xl mt-2">Join the movement and make a difference every month</p>
        </div>
      </section>

      {/* How to participate */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">How to Participate</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {participateData.ways.map((way, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="text-4xl mb-4">{way.icon}</div>
                <h3 className="text-xl font-bold mb-2">{way.title}</h3>
                <p className="mb-4">{way.description}</p>
                
                <h4 className="font-bold mb-2">Steps:</h4>
                <ol className="list-decimal pl-5">
                  {way.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="mb-1">{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event calendar */}
      <section className="bg-light-section py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Upcoming Events</h2>
          
          <div className="max-w-4xl mx-auto">
            {participateData.events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg p-6 mb-4 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <span className="text-gray-600">{event.date}</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-gray-600 mb-2">{event.location}</p>
                    <p>{event.description}</p>
                    <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white border border-primary text-primary px-6 py-2 rounded-md hover:bg-opacity-10 transition">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Contact Us</h2>
          
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <p className="mb-6">
              Have questions or want to organize a #MonthlyEarthDay action in your region? 
              Fill out the form below and we'll get in touch.
            </p>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1">Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block mb-1">Subject</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-6">
                <label className="block mb-1">Message</label>
                <textarea rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
              </div>
              
              <button type="submit" className="bg-accent text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Download resources */}
      <section className="bg-light-section py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Resources</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {participateData.resources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="font-bold mb-2">{resource.title}</h3>
                <p className="text-sm mb-4">{resource.description}</p>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm">{resource.type}</span>
                <button className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
