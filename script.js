function updateClock(){
    const now = new Date();
//convert to string then add padStat to get 06:05 like result
  //  const hours = now.getHours().toString().padStart(2,0);
//   12hr timing
let hours = now.getHours();
const maridiem = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;
hours = hours.toString().padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);

    const timeString = `${hours}:${minutes}:${seconds} ${maridiem}`;
    document.getElementById(`clock`).textContent = timeString;
}
updateClock();
// to update the clock every seconds
setInterval(updateClock,1000);