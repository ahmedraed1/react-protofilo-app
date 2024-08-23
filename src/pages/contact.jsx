export default function Contact() {
  return (
    <>
      <div className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden text-new-font">
        <div className="layout-container flex h-full grow flex-col mt-20">
          <div className="px-8 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <h2 className="text-[#141414] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
                Let&apos;s connect
              </h2>
              <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
                I&apos;m currently available for freelance work and open to
                full-time opportunities. If you&apos;re interested in working
                together or just want to say hi, feel free to contact me using
                the form below.
              </p>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#141414] text-base font-medium leading-normal pb-2">
                    Name
                  </p>
                  <input
                    type="text"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#DBE1E6] bg-[#FFFFFF] focus:border-[#DBE1E6] h-14 placeholder:text-[#3E4D5B] p-[15px] text-base font-normal leading-normal"
                    value=""
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#141414] text-base font-medium leading-normal pb-2">
                    Email
                  </p>
                  <input
                    type="email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#DBE1E6] bg-[#FFFFFF] focus:border-[#DBE1E6] h-14 placeholder:text-[#3E4D5B] p-[15px] text-base font-normal leading-normal"
                    value=""
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#141414] text-base font-medium leading-normal pb-2">
                    Message
                  </p>
                  <textarea className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#DBE1E6] bg-[#FFFFFF] focus:border-[#DBE1E6] min-h-36 placeholder:text-[#3E4D5B] p-[15px] text-base font-normal leading-normal"></textarea>
                </label>
              </div>
              <div className="flex px-4 py-3 justify-end">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#359EFF] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Submit</span>
                </button>
              </div>
              <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Connect with me
              </h2>
              <a
                href="mailto:ahmedraed101@yahoo.com"
                className="text-[#3E4D5B] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline"
              >
                ahmedraed101@yahoo.com
              </a>
              <a
                href="https://linkedin.com/in/ahmed-raed-767869253"
                className="text-[#3E4D5B] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline"
              >
                linkedin.com/in/ahmed-raed-767869253
              </a>
              <a
                href="https://github.com/ahmedraed1"
                className="text-[#3E4D5B] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline"
              >
                github.com/ahmedraed1
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
