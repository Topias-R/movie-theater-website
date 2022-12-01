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
  window.location.href =
    "/purchase/?" +
    new URLSearchParams({
      movie: document.querySelector(".movie-title > h1").textContent,
      time: document.querySelector(".seat-info > h3").textContent,
      seats: [...document.querySelector(".seats-list").children]
        .map((node) => node.textContent)
        .join(";"),
    });
}

function openTrailer() {
  document.getElementById("trailer1").style.display = "block";
  document.getElementById("button1").style.display = "none";
  document.getElementById("buttonClose1").style.display = "block";
}

function closeTrailer() {
  document.getElementById("trailer1").style.display = "none";
  document.getElementById("button1").style.display = "block";
  document.getElementById("buttonClose1").style.display = "none";
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
