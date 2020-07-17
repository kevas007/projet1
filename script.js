var Accueil = {template: "<div class='row'><div class='col-12' id='im1'><h1>Voici la page d'accueil !</h1><div><h2 class='test1 text-white' id='test2'>Bienvenue sur le site de ghibili</h2></div></div></div>"};

var Films = {template:  `<div class='row'><div class='col-12' id='impage2'><h1>Voici la liste des films </h1>
<p  v-for="film in films" :key="film.title"> {{film.title}}</p></div></div>`,
data: function(){
return {films: []}},
created: function(){
fetch("https://ghibliapi.herokuapp.com/films")
.then((response) => {return response.json()})
.then((data) => {this.films = data })
.then((data) => {console.log(data)})
.catch((error) => { console.log(error)});

}                       
};


var Synopsis = {
     template: `<div id="imgbd">Synopsis {{ $route.params.id }}
    <p  v-for="specie in species" :key="specie.id"> {{specie.id}}</p></div>`,
data: function(){
return {species: []}},
created: function(){
fetch("https://ghibliapi.herokuapp.com/species")
.then((response) => {return response.json()})
.then((data) => {this.species = data })
.then((data) => {console.log(data)})
.catch((error) => { console.log(error)});
}
  };
  
  var Router = new VueRouter({
    routes: [
      { path: '/Synopsis/:id', component: Synopsis }
    ]
  });

var Personnages ={
    template:`<div id="imagep"><h1>Voici la liste des personnages</h1>
    <p v-for="personne in people" :key="personne.title">{{personne.name}}</p></div>`,
    data: function(){
    return {people: []}},
    created: function(){
    fetch("https://ghibliapi.herokuapp.com/people")
    .then((response) => {return response.json()})
    .then((data) => {this.people = data })
    .then((data) => {console.log(data)})
    .catch((error) => { console.log(error)});
    
    } 
   };
var Contact ={template:`<div id="couleur"class="align-self-cente"><h1>Voici la page de contact</h1><div>
<img src="https://sites.google.com/site/lestudioghibli/_/rsrc/1461953759710/prsentation-du-studio-ghibli/Studio_Ghibli_logo.svg.png" id="imc" alt="logo">
<div class="container">
<div class="row h-100">

    <div class="col-12 col-md-4 align-self-center">
        <form>
            <div class="form-group bg-dark">
                <div class="col">

                    <label for="inputtext">Nom:</label>
                    <input type="text" class="form-control" placeholder="Nom">

                </div><br>
                <div class="col">
                    <label for="inputtext">Prénom:</label>
                    <input type="text" class="form-control" placeholder="Prénom">
                </div>

                <div class="form-group">
                    <div class="col">
                        <label for="note">Laissez un message :</label>
                        <textarea id="note" rows="5" class="form-control" required></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col">
                        <label for="exampleInputEmail1"> Adresse mail: </label>
                        <input type="email" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="votre email">
                    </div>
                </div>


                <div class="col">
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </div>
            </div>
        </form>
    </div>
</div> </div></div>`};

routes= [
    {path:"/accueil",component: Accueil},
    {path:"/films",component: Films},
    {path:"/personnages",component: Personnages},
    {path:"/contact",component: Contact},
    { path: '/synopsis/:id', component: Synopsis },
];
var router = new VueRouter({routes});

var app = new Vue({router}).$mount("#app");
