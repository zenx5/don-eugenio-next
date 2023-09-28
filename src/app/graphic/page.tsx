import ChartRender from "./ChartRender";

export default function Page() {


    return <main className="flex flex-col items-center justify-center w-screen h-screen">
        <section className="p-5 rounded-xl shadow-lg">
            <div>
                <h2>Titulo</h2>
            </div>
            <div>
                <ChartRender />
            </div>
        </section>
    </main>
}