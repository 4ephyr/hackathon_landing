"use client";
import { Icon } from "@iconify-icon/react";

export default function Registration() {
  return (
    <main
      id="register"
      className="w-full sm:h-screen bg-secondary flex flex-col items-center py-8 sm:p-0"
    >
      <div className="text-center py-8 w-full">
        <h1 className="sm:text-6xl text-3xl text-primary font-bold font-primary">
          Registration
        </h1>
      </div>

      <div className="sm:flex justify-center items-center w-full sm:max-w-5xl gap-12 px-8 h-[50%]">
        <div className="sm:flex flex-col gap-8 text-center md:text-left sm:w-1/2">
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
            <h1 className="font-semibold mt-8 sm:mt-0 text-primary text-2xl italic font-primary">
              Venue :-
            </h1>
            <p className="text-primary text-xl font-primary italic font-light mt-2">
              Seminar Hall <br />A Block and B Block
            </p>
          </div>
        </div>

        <div className="h-[200px] w-[2px] bg-primary hidden sm:block"></div>

        <div className="flex flex-col gap-14 sm:pl-16 p-0 text-center md:text-left sm:w-1/2 mt-8 sm:m-0">
          <div className="sm:flex gap-4 items-center">
            <Icon
              className="text-secondary bg-primary p-3 rounded-full"
              icon="material-symbols:call"
              width="32"
              height="32"
            />
            <p className="text-primary font-semibold text-xl italic">
              <a href="tel:+91 94977 97015">+91 94977 97015</a> <br /> <a href="tel:+91 80865 85030">+91 80865 85030</a>
            </p>
          </div>
          <div className="sm:flex gap-4 items-center">
            <Icon
              className="text-secondary bg-primary p-3 rounded-full"
              icon="material-symbols:mail-rounded"
              width="32"
              height="32"
            />
            <p className="text-primary font-semibold text-xl italic">
              <a href="mailto:takedown.cse@uec.ac.in">takedown.cse@uec.ac.in</a>
            </p>
          </div>
          <div className="sm:flex gap-4 items-center">
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
          <h1 className="text-primary sm:text-3xl text-2xl text-center font-bold font-primary">
            Registration Fee : 200 INR (Per Head)
          </h1>
        </div>
        <a
          href="https://unstop.com/o/fByRjAH?lb=TIEWVrwbr"
          target="_blank"
          className="text-secondary block max-w-fit font-semibold rounded-lg text-xl bg-primary sm:px-8 sm:py-4 p-3 hover:opacity-90 border-2 border-primary"
        >
          Register Now!
        </a>
      </div>
    </main>
  );
}
