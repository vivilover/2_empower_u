export default function Freebies() {
  return (
    <>
      <div className="flex justify-center items-center pt-6">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-1 md:pb-3 font-semibold">
            <span className="underline ">Freebies</span> You&apos;ll Love
          </h1>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl">
            Publishing weekly to give back to our amazing community!
          </p>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-3 gap-4 ml-4 mr-4 text-center font-semibold md:text-lg mt-5">
        <p> Our Newsletter </p>
        <p> Mentorship </p>
        <p> Success Reprot </p>
      </div>
      <div className="flex flex-col md:grid grid-cols-3 md:gap-4 ml-4 mr-4 pt-1">
        <div className="pt-2">
          <h2 className="md:hidden text-center pb-1 font-semibold">
            Our Newsletter
          </h2>
          <div className="bg-gray-200 p-2 md:p-4 rounded-lg h-[75px] md:h-[175px] flex items-center md:items-start justify-center">
            <p className="font-semibold text-[0.85rem] md:text-xl lg:text-2xl">
              One newsletter a week to help you achieve your goals.
              <br />
              <br className="hidden md:block" />
              Every Monday.
            </p>
          </div>
        </div>
        <div className="pt-2">
          <h2 className="md:hidden text-center pb-1 font-semibold">
            Mentorship
          </h2>
          <div className="bg-gray-200 p-2 md:p-4 rounded-lg h-[75px] md:h-[175px] flex items-center md:items-start justify-center">
            <p className="font-semibold text-[0.85rem] md:text-xl lg:text-2xl">
              1:1 coaching sessions to coach, educate, equip, and advise you on
              how to live a spirit led life.
            </p>
          </div>
        </div>
        <div className="pt-2">
          <h2 className="md:hidden text-center pb-1 font-semibold">
            Success Report
          </h2>
          <div className="bg-gray-200 p-2 md:p-4 rounded-lg h-[75px] md:h-[175px] flex items-center md:items-start justify-center">
            <p className="font-semibold text-[0.85em] md:text-xl lg:text-2xl">
              &quot;7 Biblical Principles to Success Report&quot; for FREE!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
