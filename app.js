

document.getElementById("suggest-activity").addEventListener("click", newActivity)


function newActivity() {fetch("http://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.getElementById("activity-name").innerHTML = `<p>${data.activity}</p>`

})}
