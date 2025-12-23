import movieAppImg from '../assets/movie-app.png'; // مسیر اسکرین‌شات‌ها
import blogAppImg from '../assets/blog-app.png'

const ProjectsData = [
    {
        title:'Movie Search App',
        image: movieAppImg,
        description: 'A dynamic, multi-page application for searching movies using the OMDb API, built with React and React Router.',
        tech: ['React', 'React Router', 'Tilwind Css', 'API'],
        liveUrl: 'https://your-movie-app-link.netlify.app', // <-- لینک نت‌لیفای خودت رو بذار
        codeUrl: 'https://github.com/your-username/your-repo', // <-- لینک گیت‌هاب خودت رو بذار
    },
    {
    title: 'Simple Blog Platform',
    image: blogAppImg,
    description: 'A clean and modern blog platform fetching and displaying posts, built to practice React fundamentals and Tailwind CSS.',
    tech: ['React', 'React Router', 'Tailwind CSS'],
    liveUrl: 'https://your-blog-app-link.netlify.app', // <-- لینک نت‌لیفای خودت رو بذار
    codeUrl: 'https://github.com/your-username/your-repo', // <-- لینک گیت‌هاب خودت رو بذار
  },
];


function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* اینجا هم آرایه و هم پارامتر با حرف کوچک هستن */}
          {ProjectsData.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
              {/* همه جا از project استفاده می‌کنیم */}
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.liveUrl} /* ... */>Live Demo</a>
                  <a href={project.codeUrl} /* ... */>View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;