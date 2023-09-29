import Image from "next/image"
import logo from "../../../public/Don Eugenio.png"

export default function Page() {

  const services = [
    {
      id:1,
      label:'Oro',
      value:'oro'
    },
    {
      id:2,
      label:'Dolares',
      value:'dolares'
    }
  ]

  return <main className="flex flex-col items-center justify-center w-screen h-screen">
    <Image src={logo} alt="Don Eugenio" className="w-1/12 h-auto mb-20"/>
    <h1 className="mb-10 font-bold text-2xl">Registro de Ingresos</h1>
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Nombre
          </label>
          <input className="appearance-none block w-full bg-white text-gray-700 border border-green-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="grid-last-name" type="text" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Apellido
          </label>
          <input className="appearance-none block w-full bg-white text-gray-700 border border-green-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="grid-last-name" type="text" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 ">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
            Servicio
          </label>
          <div className="relative">
            <select className="block appearance-none w-full bg-white border border-green-900 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="grid-state">
              { services.map( service => <option key={service.id} value={service.value}>{service.label}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Monto
          </label>
          <input className="appearance-none block w-full bg-white text-gray-700 border border-green-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="grid-last-name" type="text" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Atendido Por
          </label>
          <input className="appearance-none block w-full bg-white text-gray-700 border border-green-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="grid-last-name" type="text" />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Descripción</label>
        <textarea id="message" rows={4} className="appearance-none block w-full bg-white text-gray-700 border border-green-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500"></textarea>
      </div>
      <div className="flex items-center justify-center py-5">
        <a className="text-green-900 border-green-900 border px-10 py-2 rounded-md font-bold hover:bg-green-900 hover:text-white hover:shadow-xl hover:shadow-green-900" href="#">Enviar</a>
      </div>
    </form>
  </main>
}