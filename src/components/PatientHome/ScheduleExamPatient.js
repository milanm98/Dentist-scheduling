export default function ScheduleExam(){
    return (
        <div className="flex w-full h-screen justify-center items-center text-center bg-green-100  text-black text-4xl flex flex-col gap-12">
            <input type="date"></input>
            <input type="time"></input>
            <button className="bg-green-100 p-5 border-4 border-black shadow-2xl" type="button">Proveri da li je termin dostupan</button>
        </div>
    )
}