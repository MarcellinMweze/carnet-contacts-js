let btnAjout = document.querySelector('.btn');
let ajoutelements = document.querySelector('.ajoutelements');
let ajoutContact = document.querySelector('.ajout-contact')
let btnannuler = document.querySelector('#btnannuler');
let paraListe = document.querySelector('.paraListe');


let contacts = [];

btnAjout.addEventListener('click', (e) => {
    btnAjout.classList.toggle('ajout-contact');
    ajoutContact.classList.toggle('ajout-contact');

})

btnannuler.addEventListener('click', (e) => {
    btnAjout.classList.toggle('ajout-contact');
    ajoutContact.classList.toggle('ajout-contact');
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let donnees = new FormData(e.target);
    let temps = Date.parse(donnees.get('datenaiss'));
    let datenaiss = new Date(temps);

    let contact = {
        'nom': donnees.get('nom'),
        'prenom': donnees.get('prenom'),
        'pays': donnees.get('pays'),
        'genre': donnees.get('genre'),
        'email': donnees.get('email'),
        'tel': donnees.get('tel'),
        'datenaiss': donnees.get('datenaiss'),
        'age': (new Date().getFullYear()) - (datenaiss.getFullYear())
        // 'fichier': donnees.get('fichier')
    }

    contacts.push(contact);
    paraListe.style.display = "none";
    afficher();

})


function afficher() {
    ajoutelements.innerHTML = '';

    for (let i = 0; i < contacts.length; i++) {

        let affiche = `
        <div class="elements-bloc">
            <div class="phototext-icones" onclick="voirplus(this)">
            <div class="photo-contact">
          <img src="photos/imgcontact.png" alt="" />
        </div>
        <div class="nom-contact">
        <h4>${contacts[i].nom}  ${contacts[i].prenom}</h4>
        <h5>${contacts[i].pays}</h5>
        <p>${contacts[i].tel}</p>
        <p class="masquer">${contacts[i].email}</p>
        <p class="masquer">${contacts[i].genre}  ${contacts[i].age} ans</p>
        </div>
        </div>
      <div class="icones">
        <div class="iconemodif">
          <button class="btnic edit" type="submit">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <div class="iconesupp">
          <button class="btnic sup" type="submit" onclick="supprimer(${i})">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
      </div>      
        `

        ajoutelements.innerHTML += affiche;
    }
}


afficher();

function supprimer(i) {
    contacts.splice(i, 1);
    afficher();

}


function voirplus(e) {
    let plus = e.getElementsByClassName('masquer');
    for (const pl of plus) {
        pl.classList.toggle('masquer');
    }

}

