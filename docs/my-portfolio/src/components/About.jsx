// src/components/About.jsx

function About(){
    return(
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">

                <h2 className="text-3x1 font-bold text-center mb-12">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-12">

                    <div className="md:w-2/3">
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Hello! I'm Armin, a passionate Front-End Developer with a love for 
                        creating clean, intuitive, and dynamic user interfaces. My journey into web development 
                        started with a simple "Hello World", and has since grown into a full-fledged passion for 
                        building beautiful and functional websites.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                       I specialize in React and its ecosystem, and I'm always excited to learn new 
                       technologies and take on new challenges. When I'm not coding, you can find me exploring new 
                       hiking trails or brewing the perfect cup of coffee. 
                    </p>
                    </div>

                    <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">My Tech Stack:</h3>
            <div className="grid grid-cols-3 gap-4">
              {/* اینجا می‌تونیم آیکون‌ها یا اسم تکنولوژی‌ها رو بذاریم */}
              <div className="bg-gray-800 p-3 rounded-lg text-center">HTML</div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">CSS</div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">JavaScript</div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">React</div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">Tailwind</div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">Git</div>
            </div>
          </div>

       </div>
     </div>
  </section>
    );
}

export default About;