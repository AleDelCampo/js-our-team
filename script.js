const teamMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Carol',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scot Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
];

const images = 'img/';

const teamInformations = document.getElementById("team");

for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];

    const showMember = document.createElement("div");
    showMember.classList.add("member-card");

    const imageUrl = images + member.foto;

    const memberInformations = `
        <img src="${imageUrl}" alt="${member.nome}" />
        <p class="member-name">Nome: ${member.nome}</p>
        <p class="member-role">Ruolo: ${member.ruolo}</p>
    `;

    showMember.innerHTML = memberInformations;

    teamInformations.appendChild(showMember);
}