export default function Projects() {
  return (
    <>
      <div className="bg-white font-[sans-serif] py-28 px-6 sm:px-10 text-new-font">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col text-start">
            <h2 className="text-3xl font-extrabold text-[#333] inline-block relative mb-2">
              Projects ✨
            </h2>
            <h2 className="text-xl font-bold text-[#333] inline-block relative">
              Explore a selection of my latest projects.
            </h2>
          </div>
          <div className="flex flex-row gap-1 w-fit mt-6">
            <select
              id="countries"
              className="basis-1/2 p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            >
              <option selected>All Categories</option>
              <option value="US">Web</option>
              <option value="US">Ui Ux</option>
              <option value="US">CV design</option>
              <option value="CA">Desktop</option>
            </select>
            {/* <select
              id="countries"
              class="basis-1/2 p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
            >
              <option selected>Tags</option>
              <option value="US"></option>
              <option value="US">Ui Ux</option>
              <option value="US">Tailwind Css</option>
              <option value="CA">React.js</option>
              <option value="FR">Node.js</option>
              <option value="DE">Python</option>
            </select> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
            <div className="bg-white h-fit p-4 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img
                src="https://readymadeui.com/Imagination.webp"
                alt="Blog Post 1"
                className="w-full h-60 object-cover"
              />
              <div className="pt-4">
                {/* <span className="text-sm block text-gray-400 mb-2">
                  10 FEB 2023
                </span> */}
                <h3 className="text-3xl font-bold text-[#333] mb-1">
                  Project 1
                </h3>
                <p className="text-gray-700 text-sm font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
              <div className="pt-2 flex flex-row gap-1 items-center">
                <button className="w-fit h-fit px-8 py-1 rounded">
                  Live Site
                </button>
                <button className="w-fit h-fit px-6 py-1 rounded bg-white text-black border-2 border-black hover:bg-black hover:text-white">
                  GitHub
                </button>
              </div>
            </div>
            <div className="bg-white h-fit p-4 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img
                src="https://readymadeui.com/Imagination.webp"
                alt="Blog Post 1"
                className="w-full h-60 object-cover"
              />
              <div className="pt-4">
                {/* <span className="text-sm block text-gray-400 mb-2">
                  10 FEB 2023
                </span> */}
                <h3 className="text-3xl font-bold text-[#333] mb-1">
                  Project 2
                </h3>
                <p className="text-gray-700 text-sm font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
              <div className="pt-2 flex flex-row gap-1 items-center">
                <button className="w-fit h-fit px-8 py-1 rounded">
                  Live Site
                </button>
                <button className="w-fit h-fit px-6 py-1 rounded bg-white text-black border-2 border-black hover:bg-black hover:text-white">
                  GitHub
                </button>
              </div>
            </div>
            <div className="bg-white h-fit p-4 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img
                src="https://readymadeui.com/Imagination.webp"
                alt="Blog Post 1"
                className="w-full h-60 object-cover"
              />
              <div className="pt-4">
                {/* <span className="text-sm block text-gray-400 mb-2">
                  10 FEB 2023
                </span> */}
                <h3 className="text-3xl font-bold text-[#333] mb-1">
                  Project 3
                </h3>
                <p className="text-gray-700 text-sm font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
              <div className="pt-2 flex flex-row gap-1 items-center">
                <button className="w-fit h-fit px-8 py-1 rounded">
                  Live Site
                </button>
                <button className="w-fit h-fit px-6 py-1 rounded bg-white text-black border-2 border-black hover:bg-black hover:text-white">
                  GitHub
                </button>
              </div>
            </div>
            <div className="bg-white h-fit p-4 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img
                src="https://readymadeui.com/Imagination.webp"
                alt="Blog Post 1"
                className="w-full h-60 object-cover"
              />
              <div className="pt-4">
                {/* <span className="text-sm block text-gray-400 mb-2">
                  10 FEB 2023
                </span> */}
                <h3 className="text-3xl font-bold text-[#333] mb-1">
                  Project 4
                </h3>
                <p className="text-gray-700 text-sm font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
              <div className="pt-2 flex flex-row gap-1 items-center">
                <button className="w-fit h-fit px-8 py-1 rounded">
                  Live Site
                </button>
                <button className="w-fit h-fit px-6 py-1 rounded bg-white text-black border-2 border-black hover:bg-black hover:text-white">
                  GitHub
                </button>
              </div>
            </div>
            <div className="bg-white h-fit p-4 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img
                src="https://readymadeui.com/Imagination.webp"
                alt="Blog Post 1"
                className="w-full h-60 object-cover"
              />
              <div className="pt-4">
                {/* <span className="text-sm block text-gray-400 mb-2">
                  10 FEB 2023
                </span> */}
                <h3 className="text-3xl font-bold text-[#333] mb-1">
                  Project 5
                </h3>
                <p className="text-gray-700 text-sm font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
              <div className="pt-2 flex flex-row gap-1 items-center">
                <button className="w-fit h-fit px-8 py-1 rounded">
                  Live Site
                </button>
                <button className="w-fit h-fit px-6 py-1 rounded bg-white text-black border-2 border-black hover:bg-black hover:text-white">
                  GitHub
                </button>
              </div>
            </div>
            <div className="bg-white h-fit p-4 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img
                src="https://readymadeui.com/Imagination.webp"
                alt="Blog Post 1"
                className="w-full h-60 object-cover"
              />
              <div className="pt-4">
                {/* <span className="text-sm block text-gray-400 mb-2">
                  10 FEB 2023
                </span> */}
                <h3 className="text-3xl font-bold text-[#333] mb-1">
                  Project 6
                </h3>
                <p className="text-gray-700 text-sm font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
              <div className="pt-2 flex flex-row gap-1 items-center">
                <button className="w-fit h-fit px-8 py-1 rounded">
                  Live Site
                </button>
                <button className="w-fit h-fit px-6 py-1 rounded bg-white text-black border-2 border-black hover:bg-black hover:text-white">
                  GitHub
                </button>
              </div>
            </div>
            <div className="bg-white h-fit p-4 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img
                src="https://readymadeui.com/Imagination.webp"
                alt="Blog Post 1"
                className="w-full h-60 object-cover"
              />
              <div className="pt-4">
                {/* <span className="text-sm block text-gray-400 mb-2">
                  10 FEB 2023
                </span> */}
                <h3 className="text-3xl font-bold text-[#333] mb-1">
                  Project 7
                </h3>
                <p className="text-gray-700 text-sm font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
              <div className="pt-2 flex flex-row gap-1 items-center">
                <button className="w-fit h-fit px-8 py-1 rounded">
                  Live Site
                </button>
                <button className="w-fit h-fit px-6 py-1 rounded bg-white text-black border-2 border-black hover:bg-black hover:text-white">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
