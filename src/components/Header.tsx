import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
            <img src="/profile-image.jpg" alt="MonthlyEarthDay mascot" className="w-10 h-10 rounded-full object-cover" />
          </div>
          <Link to="/" className="text-xl font-bold">MonthlyEarthDay</Link>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/impact" className="hover:underline">Impact</Link></li>
            <li><Link to="/join-us" className="hover:underline">Join Us</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
        
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </header>
  );
};
