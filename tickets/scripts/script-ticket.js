/*Countdown timer*/
var timeLeft;
var mins;
var sec;
var r;
var start=Date.now();
var myTime=setInterval(function () {
    timeLeft=600000-(Date.now()-start);
	if (timeLeft<=0) {
		clearInterval(myTime);
		alert("Huomio! Et täyttänyt ostostapahtumaa 10 minuutissa. \n Kokeile uudelleen jos tarvitset liput.");
		window.location.href="index.html";
	}
	mins = timeLeft / 60000;
	r = mins % 1;
	sec = Math.floor(r * 60);
	if (sec < 10) {
    	sec = '0'+sec;
	}
	mins = Math.floor(mins);
    document.getElementById("timer").innerHTML = mins+':'+sec;
	timeLeft=timeLeft-1000;


}, 1000);



/**
  * Minus and Plus buttons to NUMBER type INPUTS
  */
    
// Select all INPUTS with type NUMBER
const inputNumber = document.querySelectorAll("input[type='number']");
inputNumber.forEach(function(item){
  // create wrapper container
  let wrapper = document.createElement('div');
  // add class to wrapper div
  wrapper.classList.add("quantity-buttons")
  // insert wrapper before item in the DOM tree
  item.parentNode.insertBefore(wrapper, item);
  // move item into wrapper
  wrapper.appendChild(item);
  
  // Inser plus and minus buttons
  item.insertAdjacentHTML('beforebegin', '<button type="button" class="minus-button"><img src="../svg/svg-minus.svg"></button>');
  item.insertAdjacentHTML('afterend', '<button type="button" class="plus-button"><img src="../svg/svg-plus.svg"></button>');
});
// Plus Button
const plusButton = document.querySelectorAll(".plus-button");
plusButton.forEach(function(btn) {
  btn.addEventListener('click', function(element){
    let inputNumber = this.previousElementSibling;
    inputNumber.stepUp();
    // trigger change event
    let change = new Event("change");
    inputNumber.dispatchEvent(change);
  })
})

// Minus Button
const minusButton = document.querySelectorAll(".minus-button");
minusButton.forEach(function(btn) {
  btn.addEventListener('click', function(element){
    let inputNumber = this.nextElementSibling;
    inputNumber.stepDown();
    // trigger change event
    let change = new Event("change");
    inputNumber.dispatchEvent(change);
  })




})

function FuncTotal() {
  var x = document.getElementById("lippucount");
  var currentVal = x.value;
  document.getElementById("output").innerHTML = "Olet ostamassa: " + currentVal
  + " kappaletta lippuja." + " Lippusi maksavat yhteensä: " + currentVal * 15 + " euroa.";
      }

  // LIITY KANTA_ASIAKKAAKSI
 
  function myFunction() {
    var lomake = document.getElementById("kantisLomake");
    if (lomake.style.display === "block") {
      lomake.style.display = "none";
    } else {
      lomake.style.display = "block";
    }
  }

  function FuncJoin() {

    var kiitos = document.getElementById("kiitosVastaus"); 

    if (kiitos.style.display === "block") {
      kiitos.style.display = "none";
    } else {
      kiitos.style.display = "block";
    }
  

    /*
    if (empt == "")
    {
    alert("Please input a Value");
    return false;
    }
    else 
    {
    alert('Olemme lisänneet teidät kanta-asiakkaaksi!');
    return true; 
    }
    */


  }


/*
  function required()
  {
  var empt = document.forms["form1"]["firstname"].value;
  if (empt == "")
  {
  alert("Please input a Value");
  return false;
  }
  else 
  {
  alert('Code has accepted : you can try another');
  return true; 
  }
  }
*/
