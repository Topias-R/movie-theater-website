const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const movie = movies[params.movie];

document.getElementById("movie-title").textContent = movie.title;
document.getElementById("movie-time").textContent = movie.time;
document.getElementById("price").textContent =
  params.seats.split(";").length * 15 + "€";

const chosenSeats = params.seats.split(";").map((seat) => {
  const seatListItem = document.createElement("li");
  seatListItem.textContent = seat;
  return seatListItem;
});

document.querySelector(".seats-list").replaceChildren(...chosenSeats);
