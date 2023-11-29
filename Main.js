const month = document.querySelector("#month")
const day = document.querySelector("#day")
const year = document.querySelector("#year")

const hours = document.querySelector("#hrs")
const mins = document.querySelector("#mins")
const secs = document.querySelector("#secs")

const dayNames = ["var Date : DateConstructor   /", 
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"]

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May ", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const morA = document.querySelector("#MorningorAfternoon")


function clock() {
    const dateTime = new Date()

day.innerHTML = monthNames[dateTime.getMonth()]
month.innerHTML = dateTime.getDate()
year.innerHTML = dateTime.getFullYear()
if(dateTime.getHours() > 12){
    morA.innerHTML = "PM"
 }
 else {
     morA.innerHTML = "AM"
 
 }



if(dateTime.getHours()<10){
    hours.innerHTML = `0${dateTime.getHours()}:`
}
else{
    hours.innerHTML = dateTime.getHours() + ":"
}
mins.innerHTML = dateTime.getMinutes() + ":"
secs.innerHTML = dateTime.getSeconds() 



}
setInterval(clock)



