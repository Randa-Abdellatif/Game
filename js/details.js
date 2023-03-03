const searchId = location.search;
const idParams = new URLSearchParams(searchId);
const id = idParams.get('id');
console.log(id);
document.querySelector("#closeButton").addEventListener("click",function(){
    location.href = './index.html';
});

(async function(){
     const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': 'd892ade162mshf66e0117374b330p140e2bjsn9631ab87989a',
         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
   };
   
   const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
   const response = await api.json();
   console.log(response);
   displayDetails(response);

})();

function displayDetails(details)
{
    let detailsBox=`<div class="col-md-4">
    <img src="${details.thumbnail}" class="img-fluid" alt="">
</div>
<div class="col-md-8">
    <h3>Title: ${details.title}</h3>
    <p>Category: <span class="badge text-bg-info">${details.genre}</span></p>
    <p>Platform: <span class="badge text-bg-info">${details.platform}</span></p>
    <p>Status: <span class="badge text-bg-info">${details.status}</span></p>
    <p class="small">${details.description}</p>
    <a class="btn btn-outline-warning" href="">Show Game</a>
</div>
</div>`;

document.getElementById('details').innerHTML = detailsBox;
}