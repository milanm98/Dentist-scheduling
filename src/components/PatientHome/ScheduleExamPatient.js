export default function ScheduleExam(){
    return (
        <div className="flex w-full h-screen justify-center items-center text-center bg-green-100  text-black text-4xl flex flex-col">
            <input type="time" step="00:30"
            min="09:00" max="17:00" required></input>

            <small>Office hours are 9am to 5pm</small>
        </div>
    )
}