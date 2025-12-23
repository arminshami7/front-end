// src/components/Header.jsx

function Header() {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 text-white">
        {/* بخش لوگو/اسم */}
        <div className="text-2xl font-bold">
          <a href="#">Your Name</a>
        </div>

        {/* بخش لینک‌های ناوبری */}
        <ul className="flex items-center gap-8">
          <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;