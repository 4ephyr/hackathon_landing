import Image from 'next/image'

export default function Header() {
  return (
    <div>
        <div className="flex justify-between items-center border-y-4 border-primary my-4">
          <Image src="/hackathon_landing/assets/curl1.svg" alt="Logo" height={100} width={100} />
          <div className="relative ">
              <h1 className="font-secondary text-6xl p-5">TakeDown</h1>
              <Image className="absolute top-[-24px] right-[5px]" src="/hackathon_landing/assets/curl4.svg" alt="Curvy Line" height={100} width={100} />
          </div>
          <Image className='rotate-180' src="/hackathon_landing/assets/curl1.svg" alt="Logo" height={100} width={100} />
          </div>
    </div>
  )
}
