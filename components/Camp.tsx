"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const Camp = () => {
  const campImages = [
    { src: "/img-1.png", alt: "Marrakech Camping Scene 1" },
    { src: "/img-2.png", alt: "Marrakech Camping Scene 2" },
    { src: "/img-3.png", alt: "Marrakech Camping Scene 3" },
    { src: "/img-4.png", alt: "Marrakech Camping Scene 4" },
    { src: "/img-5.jpg", alt: "Marrakech Camping Scene 5" },
    { src: "/img-6.jpg", alt: "Marrakech Camping Scene 6" },
    { src: "/img-7.jpg", alt: "Marrakech Camping Scene 7" },
  ];

  const userImages = [
    { src: "/person-1.png", alt: "Marrakech Camping Scene 1" },
    { src: "/person-2.png", alt: "Marrakech Camping Scene 1" },
    { src: "/person-3.png", alt: "Marrakech Camping Scene 1" },
    { src: "/person-4.png", alt: "Marrakech Camping Scene 1" },
  ];

  return (
    <section className="max-container py-10 lg:py-20 relative overflow-hidden">
      <div className=" lg:mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black bold-52">
          Experience the Magic of Marrakech Camping
        </h1>
      </div>
      <div className="relative z-10">
        <Carousel className="w-[2500px] ">
          <CarouselContent>
            {campImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                {/* Framer Motion for animation */}
                <motion.div
                  className="flex flex-col h-full rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bgabdou"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <div className="relative h-80  sm:h-80 md:h-80">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform  duration-300 hover:scale-105"
                    />
                    <Avatar className="absolute top-5 right-10">
                      <AvatarImage src={userImages[0].src} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow p-6 relative z-10">
                      <div className="flex flex-1 items-center">
                        <Image
                          src={"/folded-map.svg"}
                          alt="map"
                          width={50}
                          height={50}
                          className=""
                        ></Image>
                        <h4 className="text-2xl    font-bold  text-white">
                          Lake Massmoudi{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-10 lg:mt-20 text-center">
          <p className="text-black font-bold max-w-3xl mx-auto mb-8">
            Step into a world where tradition meets adventure. Marrakech invites
            you to explore its vibrant souks, marvel at ancient architecture,
            and unwind in serene desert camps. Let us guide you through the
            magic of the Red City—from the bustling Jemaa el-Fna square to the
            tranquility of the starlit Sahara. Unforgettable memories await in
            this seamless blend of culture and nature.
          </p>
          <Button variant="outline" className="btn_black_green hover:btn_green">
            Plan Your Adventure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Camp;
