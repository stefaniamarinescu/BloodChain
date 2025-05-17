import React from "react";
import Donarel from "./Donarel";

const Featured = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 lg:px-[100px] py-10">
      {/* Secțiunea text */}
      <div className="bg-gray-200 rounded-lg shadow-md p-6 max-w-[500px] w-full">
        <h1 className="text-[22px] font-semibold mb-4">
          De ce este importantă donarea de sânge?
        </h1>
        <hr className="bg-red-500 w-[120px] h-[3px] mb-4" />
        <span>
          Donarea de sânge este vitală pentru menținerea stocurilor de sânge și face o diferență semnificativă în viețile celor care au nevoie de acesta.
        </span>
        <ul className="mt-4 list-decimal list-inside space-y-2 text-sm">
          <li>Nevoia de sânge este una urgentă și continuă.</li>
          <li>Lipsa de sânge poate pune viețile pacienților în pericol.</li>
          <li>Țara se confruntă cu o criză de donatori.</li>
          <li>Are beneficii pentru sănătatea ta.</li>
          <li>Are impact pozitiv asupra sănătății mintale.</li>
        </ul>
      </div>

      {/* Video */}
      <div className="max-w-[420px] w-full">
        <video
          src="/video.mp4"
          className="w-full h-[240px] object-cover rounded-xl shadow-md"
          loop
          muted
          autoPlay
        ></video>
      </div>

      {/* Donărel */}
      <Donarel />
    </div>
  );
};

export default Featured;
