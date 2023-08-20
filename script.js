// set end-date to endDate const at which date the timer will stope
const endDate = "30 April 2024 00:00 PM"

//all input tag will selected in input const
const input = document.querySelectorAll("input")

//set end-date on html dom
document.getElementById("date").textContent = endDate

//funtion which count down time
const clock = () => {
    const end = new Date(endDate)
    const start = new Date()
    const diff =( end - start)/1000
    if (diff<0) return;
    input[0].value = Math.floor(diff/3600/24)
    input[1].value = Math.floor((diff/3600) % 24)
    input[2].value = Math.floor((diff/60) % 60)
    input[3].value = Math.floor((diff)% 60)

}

//initial clock function call
clock()

// time interval for dicrement the time at 1 second
setInterval(
    () => {
        clock()
    },1000
)