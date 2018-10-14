let InfoProfile = function (picture, name, age, location){
 this.picture = picture;
 this.name = name;
 this.age = age;
 this.location = location;
}

//variabele voor tellers aanmaken
let profileCounter = 0;
let teller = 0;

function fetchProfile(){
    fetch('https://randomuser.me/api/?results=10')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for (let i = 0; i < data.results.length; i++){
            //nieuw profiel maken
            let newProfile =  new InfoProfile (data.results[i].picture.large, data.results[i].name.first, data.results[i].dob.age, data.results[i].location.city);
            //aangemaakt profiel in localstorage steken
            localStorage.setItem('profile' + profileCounter, JSON.stringify(newProfile));

            //profiel teller 1tje omhoog doen
            profileCounter++;
        }

        //functie runProfile aanroepen
    })
    .catch(function(error) {
        console.log(error);
    })
}
window.onload = fetchProfile();

function runProfile (){
    //juiste profiel uit de localstorage halen

    //op scherm zetten

    //
}

