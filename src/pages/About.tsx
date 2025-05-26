export const About = () => {
  // Data that can be easily edited by the user
  const aboutData = {
    history: `Monthly Earth Day was founded in February 2022 by @HighlyArtistic, with the vision of transforming Earth Day into a continuous commitment throughout the year. The idea emerged from the perception that environmental issues need constant attention, not just on an annual commemorative date.`,
    mission: `Our mission is to inspire and unite global communities to protect the planet through consistent and impactful actions, transforming each month into an opportunity to make a difference.`,
    vision: `A world where every day is treated as Earth Day, with individuals and communities engaged in continuous sustainable practices that regenerate our ecosystems.`,
    
    timeline: [
      {
        year: 2022,
        events: [
          'Movement founded in February',
          'First 1,000 trees planted',
          'Social media launch'
        ]
      },
      {
        year: 2023,
        events: [
          'Expansion to 10 countries',
          'Partnership with 5 environmental NGOs',
          'Over 20,000 trees planted'
        ]
      },
      {
        year: 2024,
        events: [
          'Ambassador program launch',
          'First annual conference',
          'Reached 47,000+ trees planted'
        ]
      },
      {
        year: 2025,
        events: [
          'Surpassed 47,000 trees planted',
          'Presence in more than 10 countries',
          'Launch of the impact portal'
        ]
      }
    ],
    
    faq: [
      {
        question: 'How can I participate in #MonthlyEarthDay?',
        answer: 'You can participate by planting trees, organizing or joining environmental cleanups, educating your community, or simply sharing our messages. Visit our "Join Us" page for more details.'
      },
      {
        question: 'Is there any fee to participate?',
        answer: 'No! Participation is completely free. Our goal is to encourage environmental actions accessible to everyone.'
      },
      {
        question: 'How do you count the planted trees?',
        answer: 'We rely on participants\' records through photos and reports. We also have partnerships with organizations that verify and document larger-scale plantings.'
      },
      {
        question: 'Can I start a #MonthlyEarthDay action in my city?',
        answer: 'Absolutely! We encourage local initiatives. Contact us for guidance and support materials.'
      }
    ]
  };

  return (
    <div>
      {/* Page banner */}
      <section className="bg-light-section py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">About #MonthlyEarthDay</h1>
        </div>
      </section>

      {/* History and Mission */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">Our History</h2>
            <p className="text-lg mb-8">{aboutData.history}</p>
            
            <h2 className="text-2xl font-bold text-primary mb-4">Mission</h2>
            <p className="text-lg mb-8">{aboutData.mission}</p>
            
            <h2 className="text-2xl font-bold text-primary mb-4">Vision</h2>
            <p className="text-lg mb-8">{aboutData.vision}</p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-light-section py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full flex-shrink-0 overflow-hidden">
              <img src="/images/profile-image.jpg" alt="@HighlyArtistic" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Founder</h2>
              <h3 className="text-xl font-bold mb-2">@HighlyArtistic</h3>
              <p className="text-lg">
                Passionate environmentalist and advocate for continuous climate action.
                Founded #MonthlyEarthDay with the vision of transforming care for our planet
                into a monthly commitment, not just an annual celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Our Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            {aboutData.timeline.map((period, index) => (
              <div key={index} className="mb-8 relative pl-8 border-l-2 border-secondary">
                <h3 className="text-xl font-bold mb-2">{period.year}</h3>
                <ul className="list-disc pl-5">
                  {period.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="mb-1">{event}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light-section py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            {aboutData.faq.map((item, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                <p className="text-lg">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
