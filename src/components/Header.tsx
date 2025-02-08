export default function Header() {
  return (
    <div>
        <div className="flex justify-center items-center border-y-4 border-black my-4">
          <div className="relative ">
              <h1 className="font-secondary text-6xl p-5">TakeDown</h1>
              <img className="absolute top-[-24px] right-[5px]" src="/assets/curl4.svg" alt="Curvy Line" height={100} width={100} />
          </div>
        </div>
    </div>
  )
}
