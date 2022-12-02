document.querySelectorAll(".show-time").forEach((time) => {
  time.textContent =
    getNextAvailableShow(time.textContent) + " • klo " + time.textContent;
});

function getNextAvailableShow(time) {
  const d = new Date();
  const c = new Date();
  c.setHours(time.split(":")[0] - 1, 0, 0, 0);
  if (d.getTime() < c.getTime())
    return d.toLocaleDateString().replaceAll("/", ".");
  else {
    d.setDate(d.getDate() + 1);
    return d.toLocaleDateString().replaceAll("/", ".");
  }
}

function ShowMenu() {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
