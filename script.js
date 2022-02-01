document.querySelector(".menu-button").onclick = function() {
  document.querySelector(".sidebar").style.display = "block";
}


document.querySelector(".close-button").onclick = function() {
  document.querySelector(".sidebar").style.display = "none";
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.querySelector(".sidebar").style.display = "none";
  } else {
    document.querySelector(".sidebar").style.display = "block";
  }
}

var x = window.matchMedia("(max-width: 750px)")
myFunction(x)
x.addListener(myFunction)

document.querySelectorAll(".show-more").forEach(b => {
  console.log(b.className)
  var user = b.className.split(" ")[1]
  console.log(user)
  b.onclick = function() {
    document.querySelectorAll(`.work-hidden-${user}`).forEach(div => {
      div.style.display = "block"
    })
    b.style.display = "none"
  }
})
