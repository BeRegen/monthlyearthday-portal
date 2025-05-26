export const Contact = () => {
  return (
    <div>
      {/* Page banner */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="text-xl mt-2">Get in touch with #MonthlyEarthDay</p>
        </div>
      </section>

      {/* Contact information and form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact information */}
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-green-700 mb-6">Contact Information</h2>
              
              <div className="mb-6">
                <h3 className="font-bold mb-2">Social Media</h3>
                <p className="mb-2">
                  <span className="font-bold">X:</span> <a href="https://x.com/HighlyArtistic" className="text-blue-600 hover:underline">@HighlyArtistic</a>
                </p>
                <p className="mb-2">
                  <span className="font-bold">Instagram:</span> <a href="#" className="text-blue-600 hover:underline">@monthlyearthday</a>
                </p>
                <p className="mb-2">
                  <span className="font-bold">Facebook:</span> <a href="#" className="text-blue-600 hover:underline">MonthlyEarthDay</a>
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold mb-2">Email</h3>
                <p className="mb-2">
                  <a href="mailto:contact@monthlyearthday.org" className="text-blue-600 hover:underline">contact@monthlyearthday.org</a>
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Location</h3>
                <p>Colorado, USA</p>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-green-700 mb-6">Send a Message</h2>
              
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
                
                <div className="mb-4">
                  <label className="block mb-1">Message</label>
                  <textarea rows={6} className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
                </div>
                
                <div className="mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>I agree to receive email updates</span>
                  </label>
                </div>
                
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">How can I participate in #MonthlyEarthDay?</h3>
              <p>You can participate by planting trees, organizing or joining environmental cleanups, educating your community, or simply sharing our messages. Visit our "Join Us" page for more details.</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Is there any fee to participate?</h3>
              <p>No! Participation is completely free. Our goal is to encourage environmental actions accessible to everyone.</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">How do you count the planted trees?</h3>
              <p>We rely on participants' records through photos and reports. We also have partnerships with organizations that verify and document larger-scale plantings.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Can I start a #MonthlyEarthDay action in my city?</h3>
              <p>Absolutely! We encourage local initiatives. Contact us for guidance and support materials.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
