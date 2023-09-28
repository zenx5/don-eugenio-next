import Image from 'next/image'

import logo from "../../public/Don Eugenio.png"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10 bg-black">
      <Image src={logo} alt="Don Eugenio" className="w-2/12 h-auto"/>
      <div className="flex flex-row gap-5">
        <Link href="/graphic" className="text-red-900 border-red-900 border px-10 py-2 rounded-md font-bold hover:bg-red-900 hover:text-white hover:shadow-xl hover:shadow-red-900">Chart</Link>
        <Link href="/register-pay" className="text-red-900 border-red-900 border px-10 py-2 rounded-md font-bold hover:bg-red-900 hover:text-white hover:shadow-xl hover:shadow-red-900">Register Pay</Link>
      </div>
    </main>
  )
}
