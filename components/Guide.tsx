import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Guide = () => {
  return (
    <div className="max-container h-auto flex flex-col justify-between items-center">
      <div className="py-10 px-5 relative w-full">
        <div className="flex flex-col sm:flex-row justify-between mb-10 items-center">
          <div className="w-full sm:w-[30%] mb-6 sm:mb-0">
            <Image
              src={"/camp.svg"}
              alt="camp"
              width={50}
              height={50}
              className="absolute top-0"
            />
            <p className="font-semibold text-lg text-emerald-400">
              We are here for you
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 text-black font-bold">
              Guide You to Easy Path
            </h1>
          </div>

          <div className="w-full sm:w-[50%]">
            <p className="font-semibold text-xs sm:text-xl md:text-2xl lg:text-lg text-slate-400">
              Only with Marrakech Camp app, you will no longer get lost and get
              lost again, because we already support offline maps when there is
              no internet connection in the field. Invite your friends,
              relatives, and friends to have fun in the wilderness through the
              valley and reach the top of the mountain.
            </p>
          </div>
        </div>

        <div className="relative h-auto flex flex-col items-center">
          <Image
            src={"/boat.png"}
            alt="boat"
            width={1440}
            height={1}
            className="object-contain rounded-5xl w-full"
          />

          <div className="relative flex justify-center items-center">
            {/* Wrapper for positioning */}
            <div className="absolute flex bottom-[100px] sm:bottom-[150px] md:bottom-[200px] lg:bottom-[250px] right-[100px] sm:right-[150px] md:right-[250px] lg:right-[300px] flex-col items-center">
              <Image
                src={"/meter.svg"}
                alt="meter"
                height={30}
                width={30}
                className="absolute left-0 z-40"
              />

              <Card className="relative px-5 py-5 bg-white text-black shadow-lg z-10 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <CardFooter className="flex py-5 min-w-[270px] items-start flex-col">
                  <div className="mb-6 sm:mb-10">
                    <p className="font-bold text-lg sm:text-xl text-black">
                      Location
                    </p>
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-black mt-1">
                      Plaza Mimouni
                    </h3>
                  </div>

                  <div className="flex min-w-[100%] justify-between">
                    <div className="flex flex-col">
                      <p className="font-bold text-sm sm:text-base text-black">
                        Distance
                      </p>
                      <h3 className="font-bold text-base sm:text-lg md:text-xl text-black mt-1">
                        17.28 ml
                      </h3>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold text-sm sm:text-base text-black">
                        Elevation
                      </p>
                      <h3 className="font-bold text-base sm:text-lg md:text-xl text-black mt-1">
                        2.040 km
                      </h3>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
