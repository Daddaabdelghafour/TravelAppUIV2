import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="max-container relative py-12">
      <Image
        src={"/pattern.png"}
        alt="pattern"
        width={1440}
        height={1440}
        className="absolute -z-50 bottom-12"
      ></Image>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Our Features
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-10 items-center">
        {/* Left Section */}
        <div className="flex justify-center">
          <Image
            src={"/phone.png"}
            alt="phone"
            width={500}
            height={500}
            className="rotate-12"
            priority
          />
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature Card 1 */}
          <div className="p-4 flex hover:scale-95 flex-col gap-4 bg-white rounded-lg shadow-lg">
            <div className="h-[70px] w-[70px] rounded-full bg-emerald-500 flex justify-center items-center mx-auto">
              <Image src={"/map.svg"} alt="map" width={40} height={40} />
            </div>
            <h2 className="text-lg font-bold text-center text-black">
              Real Maps Can be Offline
            </h2>
            <p className="text-sm text-slate-500 font-bold text-center">
              Step into a city where tradition meets modernity, and every corner
              tells a story. Marrakech invites you to explore its vibrant souks,
              marvel at its ancient architecture, and unwind.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="p-4 flex flex-col  hover:scale-95 gap-4 bg-white rounded-lg shadow-lg">
            <div className="h-[70px] w-[70px] rounded-full bg-emerald-500 flex justify-center items-center mx-auto">
              <Image src={"/map.svg"} alt="map" width={40} height={40} />
            </div>
            <h2 className="text-lg font-bold text-center text-black">
              Set An Adventure Schedule
            </h2>
            <p className="text-sm text-slate-500 font-bold  text-center">
              Schedule an adventure with friends. On holidays, there are many
              interesting offers from Marrakech Camp. That way, there's no more
              discussion.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="p-4 flex flex-col gap-4 hover:scale-95 bg-white rounded-lg shadow-lg">
            <div className="h-[70px] w-[70px] rounded-full bg-emerald-500 flex justify-center items-center mx-auto">
              <Image src={"/map.svg"} alt="map" width={40} height={40} />
            </div>
            <h2 className="text-lg font-bold text-center text-black">
              Technology Using Augmented Reality
            </h2>
            <p className="text-sm text-slate-500 font-bold  text-center">
              Technology uses augmented reality as a guide to your hiking trail
              in the forest to the top of the mountain. Already supported by the
              latest technology without an internet connection.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="p-4 flex flex-col gap-4 hover:scale-95 bg-white rounded-lg shadow-lg">
            <div className="h-[70px] w-[70px] rounded-full bg-emerald-500 flex justify-center items-center mx-auto">
              <Image src={"/map.svg"} alt="map" width={40} height={40} />
            </div>
            <h2 className="text-lg font-bold text-center text-black">
              Many New Locations Every Month
            </h2>
            <p className="text-sm text-slate-500 font-bold  text-center">
              Lots of new locations every month, because we have a worldwide
              community of climbers who share their best experiences with
              climbing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
