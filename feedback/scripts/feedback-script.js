
// tämä ei käytössä
function store(){
    var inputFirstName = document.getElementById("fname");
    localStorage.setItem("fname", inputFirstName.value);
    document.getElementById("testeri").innerHTML = localStorage.getItem("fname");
   }

   
// save ja clear_inputs kutsufunctio
function save_and_clearInputs() {
    save(), clearInput()
}


   function save(){

    // data stringinä määrittely, huom kaikki menee string sisään arrayhin
   var new_data = ' ' + "Nimi: " + document.getElementById('fname').value + " >> Antoi asiakaspalauteen: " 
    + document.getElementById('subject').value + " ••• " ;

   // arrayhin vienti
   if(localStorage.getItem('data') == null) {
    localStorage.setItem('data', '[]');
   }

   var old_data = JSON.parse(localStorage.getItem('data'));
   old_data.push(new_data);

   localStorage.setItem('data', JSON.stringify(old_data));
}

// get data storagesta ja tulostetaan sivulle (output id:seen)
function view() {
    if(localStorage.getItem('data') != null){
        document.getElementById('output').innerHTML = JSON.parse(localStorage.getItem('data'));
    }

}

// pyyhkii koko localstoragen tyhjäksi!
function resetNappi() {
    localStorage.clear();
}





function clearInput() {
    // clear input fields kun tiedot lähetetään, lisää tänne kaikki kentät jotka putsataan
    var inputFirstName = document.getElementById("fname");
    inputFirstName.value = "";

    var inputLastName = document.getElementById("lname");
    inputLastName.value = "";

    const textarea = document.getElementById('subject');
    textarea.value = '';
 }
 

