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

for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    console.log("Nome: " + member.nome);
    console.log("Ruolo: " + member.ruolo);
    console.log("Foto: " + member.foto);
}

const teamInformations = document.getElementById("team");

for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];

    const showMember = document.createElement("div");

    const imageUrl = images + member.foto;

    const memberInformations = `
        <p>Nome: ${member.nome}</p>
        <p>Ruolo: ${member.ruolo}</p>
        <img src="${imageUrl}" alt="${member.nome}" />
    `;

    showMember.innerHTML = memberInformations;

    teamInformations.appendChild(showMember);
}