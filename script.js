// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      console.log(response);
      let output;
      response.json().then( function(json) {

      for(i = 0; i < json.length; i++){
         let fullName = (json[i].firstName + ' ' + json[i].lastName);
         let hoursInSpace = (json[i].hoursInSpace);
         let active = (json[i].active);
         let skills = (json[i].skills);
         let picture = (json[i].picture);
        console.log(json);
        const div = document.getElementById("container");
        div.innerHTML += `
        <ul>
        <div class="astronaut">
        <div class="bio">

           <h3>Name ${fullName}</h3>
           <ul>
              <li>Hours in space: ${hoursInSpace}</li>
              <li>Active: ${active}</li>
              <li>Skills: ${skills}</li>
           </ul>
        </div>
        <img class="avatar" src="${picture}">
     </div>
        `
        ;
      };
      return {"type": "text", "text": output};
    });

  });
  
});
