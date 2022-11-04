function toggleSelection(e) {
  if (
    !e.target.classList.contains("seat") ||
    e.target.classList.contains("reserved-seat")
  )
    return;
  const seatsList = document.querySelector(".seats-list");
  e.target.classList.toggle("chosen-seat");
  const chosenSeats = [...document.querySelectorAll(".chosen-seat")].map(
    (seat) => {
      const seatListItem = document.createElement("li");
      seatListItem.textContent = `Rivi ${seat.dataset.row}, Paikka ${seat.dataset.column}`;
      return seatListItem;
    }
  );
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
