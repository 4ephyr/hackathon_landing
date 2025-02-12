"use client";
import { Icon } from "@iconify-icon/react";

export default function Registration() {
  return (
    <main
      id="register"
      className="w-full h-screen bg-secondary flex flex-col items-center"
    >
      <div className="text-center py-8 w-full">
        <h1 className="text-6xl text-primary font-bold font-primary">
          Registration
        </h1>
      </div>

      <div className="flex justify-center items-center w-full max-w-5xl gap-12 px-8 h-[50%]">
        <div className="flex flex-col gap-8 text-center md:text-left w-1/2">
          <div>
            <h1 className="font-semibold text-primary text-2xl italic font-primary">
              Date and Timing :-
            </h1>
            <p className="text-primary text-xl font-primary italic font-light mt-2">
              February 24, 25 2025 <br />
              Day I - 1 PM <br />
              to <br />
              Day II - 3 PM
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-primary text-2xl italic font-primary">
              Venue :-
            </h1>
            <p className="text-primary text-xl font-primary italic font-light mt-2">
              Seminar Hall <br />A Block and B Block
            </p>
          </div>
        </div>

        <div className="h-[200px] w-[2px] bg-primary"></div>

        <div className="flex flex-col gap-14 pl-16 text-center md:text-left w-1/2">
          <div className="flex gap-4 items-center">
            <Icon
              className="text-secondary bg-primary p-3 rounded-full"
              icon="material-symbols:call"
              width="32"
              height="32"
            />
            <p className="text-primary font-semibold text-xl italic">
              +91 94977 97015 <br /> +91 80865 85030
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Icon
              className="text-secondary bg-primary p-3 rounded-full"
              icon="material-symbols:mail-rounded"
              width="32"
              height="32"
            />
            <p className="text-primary font-semibold text-xl italic">
              takedown.cse@uec.ac.in
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Icon
              className="text-secondary bg-primary p-3 rounded-full"
              icon="material-symbols:location-on-rounded"
              width="32"
              height="32"
            />
            <p className="text-primary font-semibold text-xl italic">
              Universal Engineering College <br />
              Vallivattom, Thrissur
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 justify-center w-full mt-8">
        <div>
          <h1 className="text-primary text-3xl font-bold font-primary">
          Registration Fee : 200 INR (Per Head)
          </h1>
        </div>
        <a
          href="#register"
          className="text-secondary block max-w-fit font-semibold rounded-lg text-xl bg-primary px-8 py-4 hover:opacity-90 border-2 border-primary"
        >
          Register Now!
        </a>
      </div>
    </main>
  );
}
