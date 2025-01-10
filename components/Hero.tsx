import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Hero = () => {
  return (
    <div className="max-container padding-container py-10 sm:py-22 md:py-30 lg:py-[100px] relative">
      <Card className="absolute hidden sm:block sm:bottom-10 sm:right-10 md:right-20 lg:bottom-[200px] lg:right-[200px] xl:right-[400px] bgabdou text-white shadow-lg z-10 transition-all duration-300 hover:shadow-xl hover:scale-105">
        <CardFooter className="flex py-5 min-w-[270px] items-start flex-col">
          <div className="mb-6 sm:mb-10">
            <p className="font-bold text-sm text-slate-300">Location</p>
            <h3 className="font-bold text-lg sm:text-xl text-white mt-1">
              Plaza Mimouni
            </h3>
          </div>

          <div className="flex min-w-[100%] justify-between">
            <div className="flex flex-col">
              <p className="font-bold text-sm text-slate-300">Distance</p>
              <h3 className="font-bold text-base sm:text-lg text-white mt-1">
                17.28 ml
              </h3>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-sm text-slate-300">Elevation</p>
              <h3 className="font-bold text-base sm:text-lg text-white mt-1">
                2.040 km
              </h3>
            </div>
          </div>
        </CardFooter>
      </Card>
      <div className="hero-map -z-30"></div>
      <div className="padding-container max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[500px] relative py-6 sm:py-8 md:py-10 lg:py-12">
        <Image
          src={"/camp.svg"}
          alt="camp"
          width={50}
          height={50}
          className="absolute py-2 -top-5  left-0"
        />
        <h1 className="lead medium-14 py-2 bold-40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Discover the Enchanting Beauty of Marrakech Camping{" "}
        </h1>
        <p className="regular-16 py-2 font-bold text-slate-500 text-sm sm:text-base">
          Step into a city where tradition meets modernity, and every corner
          tells a story. Marrakech invites you to explore its vibrant souks,
          marvel at its ancient architecture, and unwind in serene riads. Let us
          be your guide to uncover the magic of the Red City—from the bustling
          Jemaa el-Fna square to the tranquility of the Majorelle Garden.
          Adventure, culture, and unforgettable memories await you, all in one
          seamless app.
        </p>
      </div>

      <div className="padding-container max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[500px] flex flex-wrap items-center">
        <div className="flex px-2 mb-2 sm:mb-0">
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              src={"/star.svg"}
              alt="stars"
              width={25}
              height={25}
            />
          ))}
        </div>
        <div className="font-bold px-2 underline box-shadow mb-2 sm:mb-0">
          198k
        </div>
        <div className="px-2">
          <p className="font-semibold text-slate-500 lead underline">
            Good Reviews
          </p>
        </div>
      </div>
      <div className="padding-container py-5 max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[500px]">
        <Button
          variant="outline"
          className="btn_green w-full bold-20 rounded-2xl font-mono text-sm sm:text-base"
        >
          Download Now
        </Button>
      </div>
      <div className="px-2 padding-container max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[500px] mt-5 flex justify-center sm:justify-start">
        <div className="flex items-center">
          <Image
            src={"/play.svg"}
            alt="play"
            width={30}
            height={30}
            className="mr-5"
          />
          <p className="font-semibold text-black text-sm sm:text-base">
            How we work?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
