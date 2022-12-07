document.addEventListener("DOMContentLoaded", function () {
  let sliderPosition = 0;
  const sliderTrack = document.getElementById("slider-track");
  const sliderButtonPrev = document.getElementById("Prev");
  const sliderButtonNext = document.getElementById("Next");
  let sliderImgWidth = 250;
  let sliderTrackWidthStop = 500;

  if (window.screen.width <= 1024) {
    sliderImgWidth = 235;
    sliderTrackWidthStop = 705;
  }
  if (window.screen.width <= 768) {
    sliderImgWidth = 203;
    sliderTrackWidthStop = 609;
  }
  if (window.screen.width <= 768) {
    sliderImgWidth = 203;
    sliderTrackWidthStop = 609;
  }
  if (window.screen.width <= 425) {
    sliderImgWidth = 170;
    sliderTrackWidthStop = 680;
  }

  sliderButtonPrev.addEventListener("click", () => {
    sliderPosition += sliderImgWidth;
    sliderTrack.style.marginLeft = sliderPosition + "px";
    sliderButtons();
  });

  sliderButtonNext.addEventListener("click", () => {
    sliderPosition -= sliderImgWidth;
    sliderTrack.style.marginLeft = sliderPosition + "px";
    sliderButtons();
  });

  const sliderButtons = () => {
    if (sliderPosition == -sliderTrackWidthStop) {
      sliderButtonNext.style.display = "none";
    } else {
      sliderButtonNext.style.display = "block";
    }
    if (sliderPosition == 0) {
      sliderButtonPrev.style.display = "none";
    } else {
      sliderButtonPrev.style.display = "block";
    }
  };
  sliderButtons();
});

function showInfo(whichmovie) {
  let numberMovie = whichmovie.getAttribute("id");
  document.getElementById("movie-info-1").style.display = "none";
  document.getElementById("movie-info-2").style.display = "none";
  document.getElementById("movie-info-3").style.display = "none";
  document.getElementById("movie-info-4").style.display = "none";
  document.getElementById("movie-info-5").style.display = "none";
  document.getElementById("movie-info-6").style.display = "none";

  document.getElementById("trailer1").style.display = "none";
  document.getElementById("trailer2").style.display = "none";
  document.getElementById("trailer3").style.display = "none";
  document.getElementById("trailer4").style.display = "none";
  document.getElementById("trailer5").style.display = "none";
  document.getElementById("trailer6").style.display = "none";

  document.getElementById("buttonClose1").style.display = "none";
  document.getElementById("buttonClose2").style.display = "none";
  document.getElementById("buttonClose3").style.display = "none";
  document.getElementById("buttonClose4").style.display = "none";
  document.getElementById("buttonClose5").style.display = "none";
  document.getElementById("buttonClose6").style.display = "none";

  document.getElementById("button1").style.display = "block";
  document.getElementById("button2").style.display = "block";
  document.getElementById("button3").style.display = "block";
  document.getElementById("button4").style.display = "block";
  document.getElementById("button5").style.display = "block";
  document.getElementById("button6").style.display = "block";

  if (numberMovie == 1) {
    document.getElementById("movie-info-1").style.display = "block";
  }
  if (numberMovie == 2) {
    document.getElementById("movie-info-2").style.display = "block";
  }
  if (numberMovie == 3) {
    document.getElementById("movie-info-3").style.display = "block";
  }
  if (numberMovie == 4) {
    document.getElementById("movie-info-4").style.display = "block";
  }
  if (numberMovie == 5) {
    document.getElementById("movie-info-5").style.display = "block";
  }
  if (numberMovie == 6) {
    document.getElementById("movie-info-6").style.display = "block";
  }
}

function Trailer(whichTrailer) {
  let number = whichTrailer.getAttribute("id");

  if (number == "button1") {
    document.getElementById("trailer1").style.display = "block";
    document.getElementById("button1").style.display = "none";
    document.getElementById("buttonClose1").style.display = "block";
  }
  if (number == "button2") {
    document.getElementById("trailer2").style.display = "block";
    document.getElementById("button2").style.display = "none";
    document.getElementById("buttonClose2").style.display = "block";
  }
  if (number == "button3") {
    document.getElementById("trailer3").style.display = "block";
    document.getElementById("button3").style.display = "none";
    document.getElementById("buttonClose3").style.display = "block";
  }
  if (number == "button4") {
    document.getElementById("trailer4").style.display = "block";
    document.getElementById("button4").style.display = "none";
    document.getElementById("buttonClose4").style.display = "block";
  }
  if (number == "button5") {
    document.getElementById("trailer5").style.display = "block";
    document.getElementById("button5").style.display = "none";
    document.getElementById("buttonClose5").style.display = "block";
  }
  if (number == "button6") {
    document.getElementById("trailer6").style.display = "block";
    document.getElementById("button6").style.display = "none";
    document.getElementById("buttonClose6").style.display = "block";
  }
}

function CloseTrailer() {
  document.getElementById("trailer1").style.display = "none";
  document.getElementById("button1").style.display = "block";
  document.getElementById("buttonClose1").style.display = "none";

  document.getElementById("trailer2").style.display = "none";
  document.getElementById("button2").style.display = "block";
  document.getElementById("buttonClose2").style.display = "none";

  document.getElementById("trailer3").style.display = "none";
  document.getElementById("button3").style.display = "block";
  document.getElementById("buttonClose3").style.display = "none";

  document.getElementById("trailer4").style.display = "none";
  document.getElementById("button4").style.display = "block";
  document.getElementById("buttonClose4").style.display = "none";

  document.getElementById("trailer5").style.display = "none";
  document.getElementById("button5").style.display = "block";
  document.getElementById("buttonClose5").style.display = "none";

  document.getElementById("trailer6").style.display = "none";
  document.getElementById("button6").style.display = "block";
  document.getElementById("buttonClose6").style.display = "none";
}

let arrayMainosImg = [
  "../img/mainos2.jpg",
  "../img/mainos1.jpg",
  "../img/mainos3.jpg",
  "../img/mainos4.jpg",
  "../img/mainos5.jpg",
  "../img/mainos6.jpg",
];
let index = 0;
function VaindaMainosImg() {
  document
    .getElementById("mainosImg")
    .setAttribute("src", arrayMainosImg[index]);
  index++;
  if (index == arrayMainosImg.length) {
    index = 0;
  }
  setTimeout(VaindaMainosImg, 7000);
}
VaindaMainosImg();

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

function buyTicket(e) {
  const movieInfo = e.target.closest('[id^="movie-info"]');
  const title = movieInfo.querySelector("h1").textContent;
  const time = movieInfo.querySelector(".movie-taulu > a").textContent;
  const src = document.querySelector(
    `[id="${movieInfo.id.split("-").at(-1)}"]`
  ).src;
  const info = movieInfo.querySelector(".movie-info-item").innerHTML;
  const trailer = movieInfo.querySelector(".video").innerHTML;
  window.location.href =
    "/seats/?" +
    new URLSearchParams({
      title,
      time,
      src,
      info,
      trailer,
    });

}


