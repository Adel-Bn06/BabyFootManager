const url = "http://localhost:3000/api/BabyFoot";
const socket = io("http://localhost:3000");

socket.on("update", ()=>{ load()});
window.onload = load ;


function load(){
    fetch(url).then(r=>r.json()).then(data => RecupererToutesLesParties(data))
}

function CreerUnePartie(){
    const nom = document.getElementById("nominput").value;
    fetch(url,{method : 'POST', headers : {"Content-Type" : "application/json"}, body : JSON.stringify({nom})})
    .then(()=>{document.getElementById("nominput").value = "";});
    
};

function RecupererToutesLesParties(BabyFoot){
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "" ;
    let compteur = 0 ;
    BabyFoot.forEach(i => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${i.id}</td>
        <td>${i.nom}</td>
        <td>${i.status ? "terminé" : "n'est pas terminé"}</td>
        <td>${i.date_de_creation}</td>
        <td>
        <button onclick = "ModifierLeStatusDuPartie(${i.id})">Modifier</button>
        <button onclick = "SupprimerPartie(${i.id})">Supprimer</button>
        </td>
        `;
        tbody.appendChild(tr);
        if(!i.status) compteur++;
        document.getElementById("compteur").textContent = compteur ;
    });

};

function ModifierLeStatusDuPartie(id){
    fetch((`${url}/${id}`),{method : "PUT" }).then(()=>{load()});
};

function SupprimerPartie(id){
    fetch((`${url}/${id}`), {method : "DELETE"}).then(()=>{load()});
};