const endDate = "30 April 2024 00:00 PM"
const input = document.querySelectorAll("input")

document.getElementById("date").textContent = endDate

clock = () => {
    const end = new Date(endDate)
    const start = new Date()
    const diff =( end - start)/1000
    if (diff<0) return;
    input[0].value = Math.floor(diff/3600/24)
    input[1].value = Math.floor((diff/3600) % 24)
    input[2].value = Math.floor((diff/60) % 60)
    input[3].value = Math.floor((diff)% 60)

}

clock()

setInterval(
    () => {
        clock()
    },1000
)

// min 