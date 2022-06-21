let url = "json/degrees.json";
fetch(url)
.then( async (response) => {  
  if(response.status === 200){
  let data = await response.json();
   console.log("Response code "+response.status+": Success!");
   const target = document.getElementById("target");
    for (let el of data) {
      target.innerHTML += `<h2>${el.School}</h2><h3>${el.Major}</h3><h3>${el.Type}</h3><h3>${el.Yearconferred}</h3>`
    }
  }else{
   console.log("Fetch unsuccessful. Response code: "+response.status);
  }
})
.catch((err) => {
    console.log("ERROR: "+err);
})
