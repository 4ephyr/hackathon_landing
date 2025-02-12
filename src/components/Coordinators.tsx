import Image from "next/image";

export default function Coordinators() {
  return (
    <div
      id="coordinators"
      className="w-full h-screen flex flex-col items-center"
    >
      <div className="text-center py-16">
        <h1 className="text-secondary font-bold text-6xl font-primary">
          Chief <br /> Coordinators
        </h1>
      </div>
      <div className="w-full max-w-[70%]">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col gap-4">
            <Image
              src="/hackathon_landing/"
              width={300}
              height={300}
              alt=""
              className="rounded-xl shadow-image"
            />
            <div>
              <h1 className="text-secondary font-bold font-primary text-2xl">
                Nighila Ashok
              </h1>
              <p className="text-secondary font-primary italic text-lg">
                Head Of Department
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/hackathon_landing/assets/shinoj.jpg"
              width={300}
              height={300}
              alt="shinoj"
              className="rounded-xl shadow-image grayscale"
            />
            <div>
              <h1 className="text-secondary font-bold font-primary text-2xl">
                Shinoj
              </h1>
              <p className="text-secondary font-primary italic text-lg">
                Chief Coordinator
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/hackathon_landing/assets/diya.jpg"
              width={300}
              height={300}
              alt="nighila"
              className="rounded-xl shadow-image"
            />
            <div>
              <h1 className="text-secondary font-bold font-primary text-2xl">
                Diya
              </h1>
              <p className="text-secondary font-primary italic text-lg">
                Chief Coordinator
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
