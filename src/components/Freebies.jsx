import Freebie from "./Freebie";

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
      <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-12 ml-4 mr-4 text-center md:text-lg xl:text-3xl mt-9 lg:max-w-[1800px] md:mx-auto font-bold">
        <p className="pl-4"> Our Newsletter </p>
        <p> Mentorship </p>
        <p className="pr-4"> Success Report </p>
      </div>
      <div className="flex flex-col md:grid grid-cols-3 md:gap-4 lg:gap-12 ml-4 mr-4 pt-1 lg:max-w-[1800px] md:mx-auto md:p-4">
        <Freebie
          freebie="Our Newsletter"
          description="One podcast a week to help you achieve your goals. <br/> <br/> Every Monday. "
        />
        <Freebie
          freebie="Mentorship"
          description="1:1 Coaching sessions to coach, educate, equip, and advise you on how to live a spirit led life."
        />
        <Freebie
          freebie="Success Report"
          description='"7 Biblical Principals to Success Report" for FREE!'
        />
      </div>
    </>
  );
}
