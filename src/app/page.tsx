import Image from 'next/image'

import logo from "../../public/Don Eugenio.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image src={logo} alt="Don Eugenio" className="w-2/12 h-auto"/>
    </main>
  )
}
