import Image from "next/image";

export default function Hero() {
  return (
    <main className="h-screen flex-col flex justify-center items-center px-8 container">
      <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
        <div className="flex justify-center">
          <Image
            src="/hackathon_landing/assets/sysimg.svg"
            className="shrink-0 p-5"
            width={400}
            height={400}
            alt="Image"
          />
        </div>
        <div className="max-w-[50vw]">
          <h1 className="text-2xl font-primary tracking-[.5rem] text-secondary font-[500]">
            TAKE DOWN
          </h1>
          <h1 className="text-6xl md:text-8xl font-secondary font-bold text-secondary">
            Hackathon
          </h1>
          <p className="font-secondary text-lg md:text-xl tracking-wide ml-1 my-4 text-secondary w-[90%]">
            Push the limits of innovation, Take Down the challenge in just 24
            hours, code your dreams, and unlock new heights!
          </p>
          <a
            href="#register"
            className="text-primary block max-w-fit font-semibold rounded-lg text-lg bg-secondary px-6 py-3 hover:opacity-95"
          >
            Register Here !
          </a>
        </div>
      </div>
      <div className="text-center py-5">
        <h2 className="underline font-secondary italic text-xl">
          In partnership with:
        </h2>
        <Image
          src="/hackathon_landing/assets/partners.png"
          width={500}
          height={200}
          alt="Partner"
          className="
          mt-7"
        />
      </div>
    </main>
  );
}
