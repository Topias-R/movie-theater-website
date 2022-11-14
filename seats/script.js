function toggleSelection(e) {
  const seatsList = document.querySelector(".seats-list");
  e.target.classList.toggle("chosen-seat");
  const chosenSeats = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((seat) => {
    const seatListItem = document.createElement("li");
    seatListItem.textContent = `Rivi ${
      Math.floor(seat.value / 6) + 1
    }, Paikka ${(seat.value % 6) + 1}`;
    return seatListItem;
  });
  seatsList.replaceChildren(...chosenSeats);
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
