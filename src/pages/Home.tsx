import { Link } from 'react-router-dom';
import { ImpactMetricProps, TestimonialProps } from '../types';
import { Newsletter } from '../components/Newsletter';

// Componente para exibir métricas de impacto
const ImpactMetric = ({ icon, value, label, color }: ImpactMetricProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-32 h-32 rounded-full ${color} flex items-center justify-center mb-4`}>
        <span className="text-4xl text-white">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-gray-700">{label}</p>
    </div>
  );
};

// Componente para exibir depoimentos
const Testimonial = ({ name, text, avatar }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
          {avatar ? <img src={avatar} alt={name} className="rounded-full" /> : '👤'}
        </div>
        <h4 className="font-bold">{name}</h4>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export const Home = () => {
  // Dados que podem ser facilmente editados pelo usuário
  const impactData = {
    trees: {
      icon: '🌳',
      value: '47,000+',
      label: 'Trees Planted',
      color: 'bg-primary'
    },
    waste: {
      icon: '🗑️',
      value: '14,359+',
      label: 'Pounds of Waste',
      color: 'bg-secondary'
    },
    participants: {
      icon: '👥',
      value: '480+',
      label: 'Participants',
      color: 'bg-secondary-teal'
    }
  };

  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'Participating in #MonthlyEarthDay changed my perspective on how I can contribute to the environment. Planting trees monthly has become a ritual for my family.',
      avatar: null
    },
    {
      name: 'John Santos',
      text: 'Amazing to see how small consistent actions can generate such a big impact. The movement shows us that we don\'t need to wait for Earth Day to make a difference.',
      avatar: null
    }
  ];

  return (
    <div>
      {/* Banner principal */}
      <section className="py-20" style={{
        backgroundImage: "url('/images/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)"
        }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-light">Building today for a better tomorrow</h1>
          <p className="text-xl mb-8 text-light">Turning Earth Day into continuous action</p>
          <Link to="/participe" className="btn-accent text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition">
            JOIN US
          </Link>
        </div>
      </section>

      {/* Métricas de impacto */}
      <section className="bg-light-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-10">Our Impact</h2>
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <ImpactMetric {...impactData.trees} />
            <ImpactMetric {...impactData.waste} />
            <ImpactMetric {...impactData.participants} />
          </div>
        </div>
      </section>

      {/* Sobre o movimento */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-6">About #MonthlyEarthDay</h2>
          <p className="text-lg mb-6">
            Monthly Earth Day transforms Earth Day into a continuous year-round commitment 
            to environmental stewardship. Our mission is to inspire and unite communities 
            to protect our planet through consistent and impactful actions.
          </p>
          <p className="text-lg mb-8">
            Founded in 2022 by @HighlyArtistic, the movement has already planted over 47,000 trees
            and organized beach cleanups around the world.
          </p>
          <Link to="/sobre" className="bg-primary text-white px-6 py-2 rounded-md font-bold hover:bg-green-800 transition">
            LEARN MORE
          </Link>
        </div>
      </section>

      {/* Galeria de fotos */}
      <section className="bg-gradient-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Placeholders para imagens - serão substituídas por imagens reais */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-48 bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-secondary text-4xl opacity-30">{item === 1 ? '🌳' : item === 2 ? '🌊' : item === 3 ? '♻️' : '👥'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-light-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Stay Updated</h2>
          <div className="max-w-md mx-auto">
            <Newsletter variant="block" title="" />
          </div>
        </div>
      </section>
    </div>
  );
};
