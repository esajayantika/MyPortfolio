import Dataimage from "./data";
import { listTools } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Im I Putu Esa Jayantika</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Bachelor of Informatics Engineering with more than 7 years of experience in retail and inventory control, currently making a career switch to Full-Stack Development to leverage a technology background and build a career more
            aligned with these competencies.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              My Projects <i className="ri-arrow-down-line" ri-lg></i>
            </a>
          </div>
        </div>
        <img src={Dataimage.HeroImage} alt="Hero-image" className="w-125 md:ml-auto" />
      </div>
      {/* About Section */}
      <div className="about mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img src={Dataimage.HeroImage} alt="image" className="w-12 rounded-md mb-10 sm:hidden" />
          <p className="text-base/loose mb-10">
            Interested in translating ideas and creativity into practical digital solutions through software engineering, while actively developing skills through a bootcamp and web-based projects. Practical experience using HTML, CSS,
            JavaScript, TypeScript, Node.js, Express.js, EJS, React Vite, MongoDB and Bootstrap.
          </p>
          <div className="flex items-center justify-between">
            <img src={Dataimage.HeroImage} alt="image" className="w-12 rounded-md sm:block hidden" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Completed Projects</p>
              </div>

              <div>
                <h1 className="text-4xl mb-1">
                  10<span className="text-violet-500">+</span>
                </h1>
                <p>Tools & Tech Stack </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tech Stack</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">Tools and technologies I use for building websites and digital designs.</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
                <img src={tool.gambar} alt="Tools-image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End About Section */}
      {/* Project Section */}
      <div className="proyek mt-32 py-10">
        <h1>Projects</h1>
        <p>Here's what I've Done :</p>
      </div>
      {/* End Project Section */}
    </>
  );
}

export default App;
