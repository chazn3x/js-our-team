let team = [
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "img": "angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "img": "walter-gordon-office-manager.jpg"
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "img": "angela-lopez-social-media-manager.jpg"
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "img": "scott-estrada-developer.jpg"
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "img": "barbara-ramos-graphic-designer.jpg"
    }
];

createCards(); // richiamo della funzione per creare le card

// aggiunta nuova card +++++++++
document.getElementById("addMemberButton").addEventListener("click", function () {
    const newName = document.getElementById("name").value; // input nome
    const newRole = document.getElementById("role").value; // input ruolo
    const newImg = document.getElementById("image").value; // input immagine.jpg
    const newMember = { // nuovo oggetto con gli input inseriti
        "name": newName,
        "role": newRole,
        "img": newImg
    }
    team.push(newMember); // inserimento nell'array
    createCards(); // richiamo della funzione per creare le cards con il nuovo membro
});

// funzioni ++++++++

// funzione per creare le cards
function createCards() {
    const teamHTML = document.querySelector(".team-container");
    let items = '';
    for (let i = 0; i < team.length; i++) {
        const imgHTML = team[i].img;
        const nameHTML = team[i].name;
        const roleHTML = team[i].role;
        items += 
        `<div class="team-card">
        <div class="delete">X</div>
        <div class="card-image">
          <img
            src="img/${imgHTML}"
            alt="${nameHTML}"/>
        </div>
        <div class="card-text">
          <h3>${nameHTML}</h3>
          <p>${roleHTML}</p>
        </div>
        </div>`;
    };
    teamHTML.innerHTML = items;
    deleteCard(); // richiamo funzione per poter eliminare le cards
}
// funzione per cancellare una card (elimina anche l'oggetto dall'array)
function deleteCard() {
    const deleteBtn = document.getElementsByClassName("delete");
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", function () {
            team.splice(i, 1); // rimuove l'oggetto dall'array
            createCards(); // ricrea le cards senza quella cancellata
        });
    }
}
