export default function Skills() {
  return (
    <>
      <section class="text-black bg-white">
        <div class="max-w-6xl mx-auto px-5 py-24 ">
          <div class="text-center mb-10">
            <h1 class=" title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
              My Skills
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Here are some of the technologies I'm proficient in.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-5 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div class="pattern-dots-md gray-light">
                <div class="rounded p-4">
                  <div class="flex-grow ">
                    <h2 class=" text-xl title-font font-medium mb-3">
                      Front-End
                    </h2>
                    <p class="leading-relaxed text-sm text-justify">
                      React, Next.js, HTML, CSS, JavaScript, TypeScript
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-5 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div class="pattern-dots-md gray-light">
                <div class="rounded p-4">
                  <div class="flex-grow ">
                    <h2 class=" text-xl title-font font-medium mb-3">
                      Back-End
                    </h2>
                    <p class="leading-relaxed text-sm text-justify">
                      Node.js, Express, MongoDB, PostgreSQL
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-5 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div class="pattern-dots-md gray-light">
                <div class="rounded p-4">
                  <div class="flex-grow ">
                    <h2 class=" text-xl title-font font-medium mb-3">Tools</h2>
                    <p class="leading-relaxed text-sm text-justify">
                      Git, GitHub, VS Code, Figma, Postman
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
