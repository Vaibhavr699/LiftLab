import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET FIT WITH</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Lift<span className="text-red-600">Lab</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
      I’m fully aware that my gym journey might just make me{" "}
        <span className="text-red-400 font-medium">
        ridiculously swole
        </span>{" "}
        , turning me into the neighborhood beast who can barely squeeze through doorways.I’m cool with the risks of becoming the resident massive unit and maybe even dealing with a little mirror-checking obsession along the way.{" "}
        <span className="text-red-400 font-medium">Challenge accepted!</span>
        
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      ></Button>
    </div>
  );
}
