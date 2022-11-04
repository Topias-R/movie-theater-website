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
