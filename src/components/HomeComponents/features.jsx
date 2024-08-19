export default function Features() {
  return (
    <>
      <div class="bg-white mx-auto font-[sans-serif] pt-24">
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-gray-800 text-3xl font-extrabold text-center mb-6">
            Our Exclusive Features
          </h2>
          <p class="text-gray-600 text-sm">
            Unlock a world of possibilities with our exclusive features. Explore
            how our unique offerings can transform your journey and empower you
            to achieve more.
          </p>
        </div>

        <div class="flex justify-center mt-16">
          <div class="features grid md:grid-cols-2 items-center gap-16 gap-y-20 px-10 py-10">
            <div>
              <img
                src="https://readymadeui.com/image-1.webp"
                class="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
              />
            </div>
            <div>
              <h3 class="text-gray-800 text-xl font-bold mb-4">
                Customization
              </h3>
              <p class="text-gray-600 text-sm">
                Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
                consequat id. Dolore et sint mollit in nisi tempor culpa
                consectetur. Qui elit labore in nisi dolore tempor anim laboris
                ipsum ad ad consequat id.
              </p>
              <div className="py-10 flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                <button
                  type="button"
                  class="h-fit px-6 py-2 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
                >
                  Read More
                </button>
                <button
                  type="button"
                  class="h-fit px-6 py-2 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
            <div class="max-md:order-1">
              <h3 class="text-gray-800 text-xl font-bold mb-4">Performance</h3>
              <p class="text-gray-600 text-sm">
                Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
                consequat id. Dolore et sint mollit in nisi tempor culpa
                consectetur. Qui elit labore in nisi dolore tempor anim laboris
                ipsum ad ad consequat id.
              </p>
              <div className="py-10 flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                <button
                  type="button"
                  class="h-fit px-6 py-2 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
                >
                  Read More
                </button>
                <button
                  type="button"
                  class="h-fit px-6 py-2 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://readymadeui.com/contact.webp"
                class="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
