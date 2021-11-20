let team = [
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "img": "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "img": "img/angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "img": "img/walter-gordon-office-manager.jpg"
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "img": "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "img": "img/scott-estrada-developer.jpg"
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "img": "img/barbara-ramos-graphic-designer.jpg"
    }
];
const teamHTML = document.querySelector(".team-container");
let items = '';
for (let i = 0; i < team.length; i++) {
    const imgHTML = team[i].img
    const nameHTML = team[i].name
    const roleHTML = team[i].role
    items += 
    `<div class="team-card">
    <div class="card-image">
      <img
        src="${imgHTML}"
        alt="${nameHTML}"
      />
    </div>
    <div class="card-text">
      <h3>${nameHTML}</h3>
      <p>${roleHTML}</p>
    </div>
    </div>`;
}
teamHTML.innerHTML = items;