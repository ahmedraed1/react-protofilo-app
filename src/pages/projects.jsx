export default function Projects() {
  return (
    <>
      <div class="bg-white font-[sans-serif] py-24 px-6 sm:px-10">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col text-start">
            <h2 class="text-3xl font-extrabold text-[#333] inline-block relative mb-2">
              Projects ✨
            </h2>
            <h2 class="text-xl font-bold text-[#333] inline-block relative">
              Explore a selection of my latest projects.
            </h2>
          </div>
          <div class="flex flex-row gap-1 w-fit mt-6">
            <select
              id="countries"
              class="basis-1/2 p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
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
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
            <div class="bg-white h-fit p-4 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img
                src="https://readymadeui.com/Imagination.webp"
                alt="Blog Post 1"
                class="w-full h-60 object-cover"
              />
              <div class="pt-4">
                {/* <span class="text-sm block text-gray-400 mb-2">
                  10 FEB 2023
                </span> */}
                <h3 class="text-3xl font-bold text-[#333] mb-1">Project 1</h3>
                <p class="text-gray-700 text-sm font-bold">
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
            <div class="bg-white h-fit p-4 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img
                src="https://readymadeui.com/Imagination.webp"
                alt="Blog Post 1"
                class="w-full h-60 object-cover"
              />
              <div class="pt-4">
                {/* <span class="text-sm block text-gray-400 mb-2">
                  10 FEB 2023
                </span> */}
                <h3 class="text-3xl font-bold text-[#333] mb-1">Project 1</h3>
                <p class="text-gray-700 text-sm font-bold">
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
            <div class="bg-white h-fit p-4 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img
                src="https://readymadeui.com/Imagination.webp"
                alt="Blog Post 1"
                class="w-full h-60 object-cover"
              />
              <div class="pt-4">
                {/* <span class="text-sm block text-gray-400 mb-2">
                  10 FEB 2023
                </span> */}
                <h3 class="text-3xl font-bold text-[#333] mb-1">Project 1</h3>
                <p class="text-gray-700 text-sm font-bold">
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
