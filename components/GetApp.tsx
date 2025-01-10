import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const GetApp = () => {
  return (
    <div className="get-app bg-black py-16 flex justify-between">
      <div className="flex flex-col items-center text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Get For Free Now
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold leading-relaxed">
          Available on iOS and Android
        </p>

        {/* Buttons */}
        <div className="flex  relative flex-col md:flex-row mt-10 gap-6">
          {/* Apple Button */}
          <Button
            variant="outline"
            className="bg-white text-black flex hover:scale-95 items-center justify-center gap-3 rounded-xl p-[30px] w-full md:w-auto"
          >
            <Image
              src="/apple.svg"
              alt="Apple"
              width={40}
              height={40}
              className="text-white fill-current"
            />
            <div className="text-left">
              <p className="text-lg sm:text-xl text-center font-bold">
                App Store
              </p>
            </div>
          </Button>

          {/* Play Store Button */}
          <Button
            variant="outline"
            className="btn-dark-green flex hover:scale-95 items-center justify-center gap-3 rounded-xl p-[30px] w-full md:w-auto"
          >
            <Image
              src="/android.svg"
              alt="Google Play"
              width={40}
              height={40}
            />
            <div className="text-left">
              <p className="text-lg sm:text-xl font-bold">Google Play</p>
            </div>
          </Button>
        </div>
      </div>
      <Image
        src={"/phones.png"}
        alt="phones"
        width={1440}
        height={1440}
        className="object-contain h-[750px] relative bottom-[200px]"
      ></Image>
    </div>
  );
};

export default GetApp;
