const loader = document.querySelector('.load');

document.querySelectorAll('.menu .nav-link').forEach(function(link){
   link.addEventListener('click',function(){
     document.querySelector('.menu .active').classList.remove("active");
     link.classList.add('active');
     const category =link.getAttribute('data-category');
     getGames(category);
   })
})

async function getGames(category){
   loader.classList.remove("d-none");
   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': 'd892ade162mshf66e0117374b330p140e2bjsn9631ab87989a',
         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
   };

   const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
   const response = await api.json();
   console.log(response);
   displayData(response)
   loader.classList.add("d-none");
}

function displayData(gameData){

   let gamesBox =``;
   for(let i=0 ; i<gameData.length ; i++){
      gamesBox += `<div class="col">
      <div class="card h-100 p-2" onclick="getDetails(${gameData[i].id})">
        <img src="${gameData[i].thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="card-title small h-6 text-white">${gameData[i].title}</h3>
            <span class="badge text-bg-primary p-2">Free</span>
          </div>
          <p class="card-text text-center text-white-50">${gameData[i].short_description}</p>  
        </div>
       <div class="card-footer d-flex justify-content-between">
        <span class="badge text-bg-secondary">${gameData[i].genre}</span>
        <span class="badge text-bg-secondary">${gameData[i].platform}</span>

        </div>
      </div>
      </div>`
   }
   document.getElementById('gameData').innerHTML = gamesBox
}

let category = "mmorpg";
getGames(category);

async function getDetails(idDetails){
   location.href = `./details.html?id=${idDetails }`
   // const options = {
   //    method: 'GET',
   //    headers: {
   //       'X-RapidAPI-Key': 'd892ade162mshf66e0117374b330p140e2bjsn9631ab87989a',
   //       'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
   //    }
   // };
   
   // const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idDetails}`, options)
   // const response = await api.json();
   // console.log(response);
}

// let idDetails = 452;
// getDetails(idDetails);