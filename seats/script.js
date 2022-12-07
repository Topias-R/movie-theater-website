const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const movie = movies[params.movie];

document.querySelector(".movie-title > h1").textContent = movie.title;
document.querySelector(".seat-info > h3").textContent =
  getNextAvailableShow(movie.time) + " • klo " + movie.time;
document.querySelector(".movie-info-item").innerHTML = movie.info;
document.querySelector(".movie-image").src = movie.src;
document.querySelector(".video").innerHTML = movie.trailer;

function getNextAvailableShow(time) {
  const d = new Date();
  const c = new Date();
  c.setHours(time.split(":")[0] - 1, 0, 0, 0);
  if (d.getTime() < c.getTime()) return d.toLocaleDateString();
  else {
    d.setDate(d.getDate() + 1);
    return d.toLocaleDateString();
  }
}

document.querySelectorAll('input[type="checkbox"]').forEach((seat) => {
  if (Math.random() > 0.8) seat.disabled = true;
});

function toggleSelection(e) {
  const seatsList = document.querySelector(".seats-list");
  const chosenSeats = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((seat) => {
    const seatListItem = document.createElement("li");
    seatListItem.textContent = `Rivi ${
      Math.floor(seat.value / 9) + 1
    }, Paikka ${(seat.value % 9) + 1}`;
    return seatListItem;
  });
  seatsList.replaceChildren(...chosenSeats);
}

function buyTicket(e) {
  const seats = [...document.querySelector(".seats-list").children].map(
    (node) => node.textContent
  );
  if (seats.length === 0) return;
  window.location.href =
    "/purchase/?" +
    new URLSearchParams({
      movie: params.movie,
      seats: seats.join(";"),
    });
}

function openTrailer() {
  document.getElementById("trailer").style.display = "block";
  document.getElementById("button").style.display = "none";
  document.getElementById("buttonClose").style.display = "block";
}

function closeTrailer() {
  document.getElementById("trailer").style.display = "none";
  document.getElementById("button").style.display = "block";
  document.getElementById("buttonClose").style.display = "none";
}

let clickmäärä = 0;
function ShowMenu() {
  if (window.screen.width > 426) {
    document.getElementById("menu").style.display = "flex";
    document.getElementById("header").style.display = "flex";
  }

  if (window.screen.width <= 426) {
    clickmäärä++;
    if (clickmäärä % 2 != 0) {
      document.getElementById("menu").style.display = "block";
      document.getElementById("header").style.display = "block";
      document.getElementById("header").style.textAlign = "center";
    } else {
      document.getElementById("menu").style.display = "none";
    }
  }
}
