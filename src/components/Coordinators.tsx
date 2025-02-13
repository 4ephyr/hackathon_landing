import Image from "next/image";

export default function Coordinators() {
  return (
    <div
      id="coordinators"
      className="w-full sm:h-full flex flex-col items-center"
    >
      <div className="text-center py-16">
        <h1 className="text-secondary font-bold sm:text-6xl text-4xl font-primary">
          Chief <br /> Coordinators
        </h1>
      </div>
      <div className="w-full max-w-[70%]">
        <div className="w-full py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-content-center">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/hackathon_landing/assets/nighila.jpeg"
                width={300}
                height={250}
                alt="nighila"
                className="rounded-xl shadow-image grayscale h-[400px] w-[400px] object-cover"
                priority
              />
              <div className="text-center">
                <h1 className="text-secondary font-bold font-primary text-2xl">
                  Nighila Ashok
                </h1>
                <p className="text-secondary font-primary italic text-lg">
                  Head Of Department
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/hackathon_landing/assets/shinoj.jpg"
                width={300}
                height={250}
                quality={50}
                alt="shinoj"
                className="rounded-xl shadow-image grayscale h-[400px] w-[400px] object-cover"
                priority
              />
              <div className="text-center">
                <h1 className="text-secondary font-bold font-primary text-2xl">
                  Shinoj E M
                </h1>
                <p className="text-secondary font-primary italic text-lg">
                  Chief Coordinator
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 sm:col-span-2 md:col-span-1">
              <Image
                src="/hackathon_landing/assets/diya.jpg"
                width={300}
                height={250}
                alt="diya"
                quality={50}
                className="rounded-xl shadow-image grayscale h-[400px] w-[400px] object-cover"
                priority
              />
              <div className="text-center">
                <h1 className="text-secondary font-bold font-primary text-2xl">
                  Diya El Fadhil
                </h1>
                <p className="text-secondary font-primary italic text-lg">
                  Chief Coordinator
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 sm:col-span-2 md:col-span-5">
              <Image
                src="/hackathon_landing/assets/muneebha.jpg"
                width={300}
                height={300}
                alt="diya"
                quality={50}
                className="rounded-xl shadow-image grayscale h-[400px] w-[400px] object-contain max-w-fit"
                priority
              />
              <div className="text-center">
                <h1 className="text-secondary font-bold font-primary text-2xl">
                  Muneebha
                </h1>
                <p className="text-secondary font-primary italic text-lg">
                  IEDC Faculty Coordinator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
