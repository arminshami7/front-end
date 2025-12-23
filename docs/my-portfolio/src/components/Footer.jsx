// src/components/Footer.jsx

function Footer() {
  return (
    <footer className="bg-slate-800 py-6">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;