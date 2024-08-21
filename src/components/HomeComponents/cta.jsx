export default function Cta() {
  return (
    <>
      <div class="text-black bg-white font-[sans-serif] pt-20 pb-24 text-new-font">
        <div class="flex flex-col gap-y-4 max-w-lg mx-auto p-4 text-center">
          <h2 class="text-gray-800 text-4xl font-bold mb-6">Get in Touch</h2>
          <p class="text-gray-800 text-base">
            Feel free to reach out if you have any questions or would like to
            discuss any of projects.
          </p>
          <div class="my-2 flex items-center bg-gray-100 rounded overflow-hidden sm:w-11/12 mx-auto">
            <input
              name="name"
              type="text"
              class="flex-1 w-full text-gray-800 bg-transparent text-sm px-4 py-3 outline-none"
              placeholder="example@email.com"
            />
            <button
              type="button"
              class="w-max px-6 py-3 text-sm tracking-wider outline-none border-none bg-blue-600 text-white hover:bg-blue-700 transition-all"
            >
              Send Email
            </button>
          </div>
          <span>I&apos;ll get back to you as soon as possible.</span>
        </div>
      </div>
    </>
  );
}
