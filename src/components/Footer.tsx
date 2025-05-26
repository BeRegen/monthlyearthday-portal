import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <p className="text-center">© 2025 #MonthlyEarthDay. All rights reserved.</p>
        </div>
        
        <div className="flex justify-center mb-6">
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              <li><Link to="/" className="hover:text-green-400">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-green-400">About</Link></li>
              <li><Link to="/impacto" className="hover:text-green-400">Impact</Link></li>
              <li><Link to="/participe" className="hover:text-green-400">Join Us</Link></li>
              <li><Link to="/galeria" className="hover:text-green-400">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-green-400">Blog</Link></li>
              <li><Link to="/contato" className="hover:text-green-400">Contact</Link></li>
            </ul>
          </nav>
        </div>
        
        <div className="flex justify-center space-x-4">
          <a href="https://x.com/HighlyArtistic" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400">🐦</a>
          <a href="#" className="text-2xl hover:text-green-400">📷</a>
          <a href="#" className="text-2xl hover:text-green-400">📘</a>
          <a href="#" className="text-2xl hover:text-green-400">📱</a>
        </div>
      </div>
    </footer>
  );
};
