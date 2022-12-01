const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

document.getElementById("movie-title").textContent = params.movie;
document.getElementById("movie-time").textContent = params.time;

const chosenSeats = params.seats.split(";").map((seat) => {
  const seatListItem = document.createElement("li");
  seatListItem.textContent = seat;
  return seatListItem;
});

document.querySelector(".seats-list").replaceChildren(...chosenSeats);
