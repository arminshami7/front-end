function Hero() {
    return(
        <section id="Home" className="min-h-screen flex items-center justify-center text-center">
            <div className="max-w-3x1">
                <h1 className="text-5x1 md:text-7x1 font-extrabold">
                    <span className="bg-gradiant-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
                        Your Name
                    </span>
                </h1>
                <p className="text-2x1 md:text-3x1 text-gray-300 mt-4">
                    Front-End Developer & React Specialist
                </p>
                <p className="text-lg text-gray-400 mt-6 max-w-xl mx-auto">
                    I build fast, reponsive, and beautiful web application. Let's create somthing amazing together.
                </p>
                <a 
                href="#project"
                className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full ">
                    View My Work
                </a>
            </div>
        </section>
    );
}

export default Hero;