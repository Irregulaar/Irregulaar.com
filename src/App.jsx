import { useState } from "react";

function App() {
 const languages = {
  html: { name: "HTML 5", rute: "/languages/html.png" },
  css: { name: "CSS 3", rute: "/languages/css.png" },
  js: { name: "JavaScript", rute: "/languages/js.png" },
  react: { name: "React JS", rute: "/languages/react.png" },
  tailwind: { name: "Tailwind CSS", rute: "/languages/tailwind.png" },
  python: { name: "Python", rute: "/languages/python.png" },
  lua: { name: "Lua", rute: "/languages/lua.png" },
  sql: { name: "SQL", rute: "/languages/sql.svg" },
  git: { name: "Git", rute: "/languages/git.png" },
  github: { name: "Github", rute: "/languages/github.svg" },
 };

 const projects = {
  profile_page: {
   name: "Profile Page",
   url: "https://github.com/Irregulaar/Irregulaar.com",
   img: "/projects/profilepage.png",
   description: "A page to showcase my skills and projects.",
  },
 };

 return (
  <div className="grid grid-cols-2 absolute h-screen w-full text-white">
   <div className="h-screen w-[50%] fixed col-start-1 col-end-1 self-end hidden md:flex">
    <div className="absolute flex justify-center bg-[#222222] top-4 w-20 h-6 rounded-tr-lg rounded-br-lg">
     <a href="https://github.com/Irregulaar/Irregulaar.com" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
      Source
     </a>
    </div>
    <img src="/pfp.png" className="h-fit self-end" alt="Foto de perfil de la pagina"></img>
   </div>

   <div className="flex flex-col justify-start items-center col-span-2 md:col-start-2 mt-20">
    <header className="flex flex-col justify-start items-center">
     <h1 className="font-bold tracking-wider text-5xl text-center">I'M IRREGULAAR</h1>
     <h1 className="font-light text-3xl mt-2 w-[90%] text-center">A 20 year old guy who uses the internet a lot and likes programming.</h1>
    </header>

    <div className="flex flex-col relative justify-start items-center  w-[80%] h-fit mt-10 rounded p-2 gap-2">
     <h1 className="text-[30px] font-bold mb-2">SKILLS</h1>

     <div className="flex flex-wrap justify-center gap-2">
      {Object.values(languages).map((languages) => (
       <div
        key={languages.name}
        className="group flex flex-col justify-center items-center gap-2 border-[#343434] border-1 rounded w-30 h-20 hover:bg-[#2f2f2f] transition-all duration-300"
       >
        <img
         src={languages.rute}
         className="h-7 w-auto grayscale group-hover:grayscale-0 group-hover:-translate-y-0.5 transition-all duration-500"
         alt={languages.name}
        ></img>
        <h1 className="font-regular">{languages.name}</h1>
       </div>
      ))}
     </div>

     <h1 className="text-[30px] font-bold mb-2 mt-10">PROJECTS</h1>

     <div className="flex flex-wrap w-full justify-center gap-2">
      {Object.values(projects).map((project) => (
       <a
        key={project.name}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col relative items-center gap-2 p-2 border-[#343434] border-1 rounded w-30 h-20 hover:bg-[#2f2f2f] hover:w-fit hover:h-40 transition-all duration-500 cursor-pointer"
       >
        <div className="flex flex-row justify-center items-center gap-3">
         <h1 className="font-regular group-hover:self-start">{project.name}</h1>
         <p className="hidden underline opacity-0 text-[12px] font-light group-hover:block group-hover:opacity-100 transition-all text-[#8795ff]">
          Click to visit
         </p>
        </div>

        <div className="flex flex-row gap-2">
         <img
          src={project.img}
          className="h-7 w-auto grayscale group-hover:grayscale-0 group-hover:h-30 group-hover:pb-3 transition-all duration-500"
          alt={project.name}
         ></img>
         <div className="pointer-events-none opacity-0 rounded p-1 max-w-35 group-hover:opacity-100 transition-all duration-1000">
          <p className="text-[0px] text-center group-hover:text-[10px] transition-all">{project.description}</p>
         </div>
        </div>
       </a>
      ))}
     </div>

     <footer className="flex flex-col justify-center items-center mb-1 w-full mt-10">
      <div className="h-0.5 w-full bg-[#ffffff50] mb-3"></div>

      <div className="flex flex-row gap-5">
       <div className="flex flex-row justify-center items-center gap-2">
        <img src="/languages/github.svg" className="h-full w-6"></img>
        <a href="https://github.com/Irregulaar" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
         GitHub
        </a>
       </div>

       <div className="group flex flex-row justify-center items-center gap-2">
        <img src="/twitter.png" className="h-full w-6"></img>
        <a href="https://x.com/Irregulaaaar" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
         Twitter
        </a>
        <div className="opacity-0 absolute bg-[#3a3a3a] rounded p-1 text-[10px] group-hover:opacity-100 transition-all -translate-y-10">
         <p className="text-center">Me rehuso a llamarlo X, perdon.</p>
        </div>
       </div>

       <div className="flex flex-row justify-center items-center gap">
        <img src="/discord.svg" className="h-full w-6"></img>
        <p className="ml-2">irregulaaar</p>
       </div>
      </div>
     </footer>
    </div>
   </div>
  </div>
 );
}

export default App;
