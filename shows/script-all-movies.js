document.getElementById('filter').addEventListener('change', function () {
    let value = this.value;
    let CollectionMovies=document.getElementsByClassName("sarja-item");
    let ArrayMovies=Array.from(CollectionMovies);
    ArrayMovies.forEach(element => {
        element.style.opacity="0.2";
    });
    switch (value) {
        case "Comedy":
            let CollectionComedyMovies=document.getElementsByClassName("Comedy");
            let ArrayComedyMovies=Array.from(CollectionComedyMovies);
            ArrayComedyMovies.forEach(element => {
                element.style.opacity="1";
            });
            break;
        case "Drama":
            let CollectionDramaMovies=document.getElementsByClassName("Drama");
            let ArrayDramaMovies=Array.from(CollectionDramaMovies);
            ArrayDramaMovies.forEach(element => {
                element.style.opacity="1";
            });
            break;
        case "Fantasy":
            let CollectionFantasyMovies=document.getElementsByClassName("Fantasy");
            let ArrayFantasyMovies=Array.from(CollectionFantasyMovies);
            ArrayFantasyMovies.forEach(element => {
                element.style.opacity="1";
            });    
            break;
        case "Adventure":
            let CollectionAdventureMovies=document.getElementsByClassName("Adventure");
            let ArrayAdventureMovies=Array.from(CollectionAdventureMovies);
            ArrayAdventureMovies.forEach(element => {
                element.style.opacity="1";
            });
            break;    
        case "All":
            let CollectionAllMovies=document.getElementsByClassName("sarja-item");
            let ArrayAllMovies=Array.from(CollectionAllMovies);
            ArrayAllMovies.forEach(element => {
                element.style.opacity="1";
            });
            break;        
        default:
            break;
    }
});


function ShowSarjaBox(whichSarja) {
    let idSarja=whichSarja.getAttribute("id");
    let collectionSarja=document.getElementsByClassName("sarja-box");
    let arraySarja=Array.from(collectionSarja);
    arraySarja.forEach(element => {
        element.style.display="none";
    });
    document.getElementsByClassName("sarjat")[0].style.opacity="0.1";

    if (idSarja=="sarja-item-1") {
        document.getElementById("sarja-box-1").style.display="block";
    }
    if (idSarja=="sarja-item-2") {
        document.getElementById("sarja-box-2").style.display="block";
    }
    if (idSarja=="sarja-item-3") {
        document.getElementById("sarja-box-3").style.display="block";
    }
    if (idSarja=="sarja-item-4") {
        document.getElementById("sarja-box-4").style.display="block";
    }
    if (idSarja=="sarja-item-5") {
        document.getElementById("sarja-box-5").style.display="block";
    }
    if (idSarja=="sarja-item-6") {
        document.getElementById("sarja-box-6").style.display="block";
    }
    if (idSarja=="sarja-item-7") {
        document.getElementById("sarja-box-7").style.display="block";
    }
    if (idSarja=="sarja-item-8") {
        document.getElementById("sarja-box-8").style.display="block";
    }
    if (idSarja=="sarja-item-9") {
        document.getElementById("sarja-box-9").style.display="block";
    }
    if (idSarja=="sarja-item-10") {
        document.getElementById("sarja-box-10").style.display="block";
    }
    if (idSarja=="sarja-item-11") {
        document.getElementById("sarja-box-11").style.display="block";
    }
    if (idSarja=="sarja-item-12") {
        document.getElementById("sarja-box-12").style.display="block";
    }

}

function CloseSarja() {
    let collectionSarja=document.getElementsByClassName("sarja-box");
    let arraySarja=Array.from(collectionSarja);
    arraySarja.forEach(element => {
        element.style.display="none";
    });
    document.getElementsByClassName("sarjat")[0].style.opacity="1"; 
}


let clickmäärä=0;
function ShowMenu() {
    if (window.screen.width>426) {
        document.getElementById("menu").style.display="flex";
        document.getElementById("header").style.display="flex";    
    }
   
    if (window.screen.width<=426) {
        clickmäärä++;
        if (clickmäärä%2!=0) {
            document.getElementById("menu").style.display="block";
            document.getElementById("header").style.display="block";
            document.getElementById("header").style.textAlign="center";
        }
        else{
            document.getElementById("menu").style.display="none";
        }
    
    }

}


