import Image from "next/image";

export default function Hero() {
  return (
    <main className="sm:h-screen h-[120vh] flex flex-col justify-center items-center px-8 container mx-auto sm:pt-32 pt-32">
      <div className="flex flex-col">
        <section className="flex flex-col md:flex-row sm:items-center text-center md:text-left gap-8 w-full justify-center">
          <div className="flex justify-center">
            <Image
              src="/hackathon_landing/assets/sysimg.svg"
              className="shrink-0 p-5 sm:mr-10 mb:w-[80%] "
              width={400}
              height={400}
              alt="Hackathon Illustration"
              priority
            />
          </div>

          <div className="max-w-[90%] md:max-w-[50%] lg:max-w-[40%] text-left">
            <h1 className="sm:text-2xl font-primary tracking-[.5rem] text-secondary font-medium">
              TAKE DOWN
            </h1>
            <h1 className="sm:text-6xl text-5xl xl:text-8xl font-secondary font-bold text-secondary">
              Hackathon
            </h1>
            <p className="font-secondary italic text-lg md:text-xl tracking-wide ml-1 my-4 text-secondary w-full">
              Push the limits of innovation, take down the challenge in just 24
              hours, code your dreams, and unlock new heights!
            </p>
            <a
              href="#register"
              className="text-primary block max-w-fit font-semibold rounded-lg text-lg bg-secondary px-6 py-3 hover:opacity-95"
            >
              Register Here!
            </a>
          </div>
        </section>
      </div>
      <section className="flex flex-col items-center justify-center text-center py-5">
        <h2 className="underline font-secondary italic text-xl">
          In partnership with:
        </h2>
        <div className="py-8 flex justify-center w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-lg md:max-w-3xl place-items-center">
            <Image
              src="/hackathon_landing/assets/spinx.png"
              width={150}
              height={150}
              alt="Partner Logos"
              className="invert"
            />
            <Image
              src="/hackathon_landing/assets/cloud.png"
              width={150}
              height={150}
              alt="Partner Logos"
              className="invert"
            />
            <div className="col-span-2 md:col-span-1 flex justify-center">
              <Image
                src="/hackathon_landing/assets/lazeez.png"
                width={150}
                height={150}
                alt="Partner Logos"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
