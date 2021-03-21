GetData();

async function GetData() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    let tim;
    try {
        tim = await axios.get(`/api/tim?id=${id}`);
        console.log(tim);
    } catch (err) {
        console.log(err);
        window.location.href = "index.html";
    }

    RenderInfo(tim.data.timovi);
    const deleteBtn = document.querySelector(".delete-tim-button");
    deleteBtn.addEventListener("click", () => DeleteData(id));
}

function RenderInfo(tim) {
    const timInfoDiv = document.querySelector(".tim");
    let tehnologije = "";
    tim.omiljeneTehnologije.forEach((teh) => {
        tehnologije += `<li>${teh}</li>`;
    });

    let clanovi = "";
    if (tim.clanovi.length > 0) {
        clanovi += "<ul>";
        tim.clanovi.forEach((c) => {
            clanovi += `<li>${c.ime} ${c.prezime}</li>`;
        });
        clanovi += "</ul>";
    } else {
        clanovi = "Nisu uneti clanovi!";
    }

    let timDiv = `
    <div class="tim-header">
        <h1 class="ime-title">${tim.ime}</h1>
        <button class="delete-tim-button">🗑️</button>
    </div>
    <div class="tehnologije-text">
        TEHNOLOGIJE:
        <ul>
            ${tehnologije}
        </ul>
    </div>
    <div class="clanovi-text">
        CLANOVI: 
        ${clanovi}
    </div>`;

    timInfoDiv.innerHTML = timDiv;
}

async function DeleteData(id) {
    try {
        await axios.delete(`api/timovi/${id}`);
        window.location.href = "index.html";
    } catch (err) {
        console.log(err);
    }
}
