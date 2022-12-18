

let tiles = document.querySelectorAll('.box');
function glowTiles() {
    let arr = [];
    while (arr.length < 8) {
        var r = Math.floor(Math.random() * 16) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    localStorage.setItem("index", JSON.stringify(arr));

    for (let i in arr) {
        tiles[arr[i] - 1].style.backgroundColor = "black";
    }

    setTimeout(function () {
        tiles.forEach(function (tile) {
            tile.style.backgroundColor = "deeppink";
        })


    }, 1000);


}
let restartBtn = document.getElementById('restartBtn');
restartBtn.style.background = "#4CAF50";
restartBtn.addEventListener('click', function () {
    let tiles = document.querySelectorAll('.box');
    tiles.forEach(function (tile) {
        tile.style.backgroundColor = "deeppink";
    })

    

    setTimeout(() => {
        document.getElementById('restartBtn').innerHTML = "<b>Restart and Show Score</b>";

    }, 2000);

    glowTiles();
    clicktiles();
    // yourScore();





}) 



let s = null;
function clicktiles() {

    let arrObj = JSON.parse(localStorage.getItem('index'));

    let counter = 0;



    let getAlldiv = document.querySelectorAll('.box');
    getAlldiv.forEach(function (item, index) {



        (function (item) {
            item.disabled = false;

            item.addEventListener('click', function () {



                if (counter < 8) {

                    

                    if (arrObj.includes(parseInt(item.id))) {

                        item.style.backgroundColor = 'green';
                        counter++;
                        s++;


                    }
                    else {

                        item.style.backgroundColor = 'red';
                        counter++;

                    }


                }
                
                else {
                    // localStorage.setItem("score", s);

                    return false;
                }
                item.disabled = true;




            }); 
            yourScore(s); 
            

        }(item, index))

    }) 
   


    s = 0;
}


function yourScore(s) {
    let scoreCard = document.getElementById("scoreCard");
    let html = '';  
    
  

    if (s == null) {
        scoreCard.style.display = 'flex';
        html = `<div class="card" style="width: 18rem;background-color:rgb(147, 196, 236);">
        <div class="card-body">
        <h5 class="card-title" style="color:rgb(0,0,0)">Game is started</h5>
        <h6 class="card-subtitle mb-2 text-muted" style="color:rgb(255, 255, 255);">Description about game is here!</h6> 
        <h6 class="card-subtitle mb-2 text-muted" style="color:rgb(255, 255, 255);">Choose the  tiles</h6> 
        <h6 class="card-subtitle mb-2 text-muted" style="color:rgb(255, 255, 255);" ><b>+1</b> for correct tile</h6> 
        <h6 class="card-subtitle mb-2 text-muted" style="color:rgb(255, 255, 255);"><b>-1</b> for wronge tile!</h6>
        
        </div>
        </div>`;
        scoreCard.innerHTML = html;

    }

    else if (s == 8) {
        scoreCard.style.display = 'flex';
        html = `<div class="card" style="width: 18rem;background-color:rgb(147, 196, 236);">
        <div class="card-body">
        <h5 class="card-title" style="color:rgb(0,0,0)">You Win</h5>
        <h6 class="card-subtitle mb-2 " style="color:rgb(0,0,0)">Your Score</h6>
        <p class="card-text"><b>Correct choosen tiles are:</b>${s}</p> 
        <p class="card-text"><b>Inorrect choosen tiles are:</b>${8 - (s)}</p>
        
        </div>
        </div>`;
        scoreCard.innerHTML = html;
        setTimeout(() => {
            scoreCard.style.display = 'none';

        }, 4000);


    }
    else {
        scoreCard.style.display = 'flex';
        html = `<div class="card" style="width: 18rem;background-color:rgb(147, 196, 236);">
        <div class="card-body">
        <h5 class="card-title" style="color:rgb(0,0,0)">You Lose</h5>
        <h6 class="card-subtitle mb-2 " style="color:rgb(0,0,0)">Your Score</h6>
        <p class="card-text"><b>Correct choosen tiles are:</b>${s}</p> 
        <p class="card-text"><b>Inorrect choosen tiles are:</b>${8 - parseInt(s)}</p>
        
        </div>
        </div>`;
        scoreCard.innerHTML = html;
        setTimeout(() => {
            scoreCard.style.display = 'none';

        }, 4000);

    }



}
