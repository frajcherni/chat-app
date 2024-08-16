import PlanetImg from "/images/dark.png";
import PlanetOverlayImg from "/images/planet-overlay.svg";
import PlanetTagImg01 from "/images/t.png";
import PlanetTagImg02 from "/images/t.png";
import PlanetTagImg03 from "/images/t.png";
import PlanetTagImg04 from "/images/t.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

export default function FeaturesPlanet() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: 'ease-in',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900 mt-1">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-4 md:py-4"> {/* Adjusted padding */}
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16"> {/* Adjusted padding */}
            <h2 className="text-3xl font-bold text-gray-200 md:text-5xl">
              3 Billion+ people are on messaging apps
              <br />
              Your business
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-8 md:pb-16" data-aos="zoom-y-out"> {/* Adjusted padding */}
            <div className="text-center">
              <div className="mb-24 relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                <img
                  className="w-full"
                  src={PlanetImg}
                  width={700}
                  height={700}
                  alt=""
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <div>
                    <img
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] rounded-full animate-zoom hidden md:block"
                      src={PlanetTagImg01}
                      width={300}
                      height={400}
                      alt="Tag 01"
                    />
                    <img
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] rounded-full animate-zoom hidden md:block"
                      src={PlanetTagImg02}
                      width={300}
                      height={400}
                      alt="Tag 02"
                    />
                    <img
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] rounded-full animate-zoom hidden md:block"
                      src={PlanetTagImg03}
                      width={300}
                      height={400}
                      alt="Tag 03"
                    />
                    <img
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] rounded-full animate-zoom hidden md:block"
                      src={PlanetTagImg04}
                      width={300}
                      height={400}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
