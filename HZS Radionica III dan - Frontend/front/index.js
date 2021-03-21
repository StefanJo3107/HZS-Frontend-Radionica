GetData();

async function GetData() {
    try {
        let timovi = await axios.get("/api/timovi");
        RenderCards(timovi.data.timovi);
        AddEventListeners();
    } catch (err) {
        console.log(err);
    }
}

function AddEventListeners() {
    let moreInfoBtn = [...document.querySelectorAll(".user-button")];
    moreInfoBtn.forEach((btn) =>
        btn.addEventListener("click", () => {
            window.location.href = `tim.html?id=${getId(btn)}`;
        })
    );

    let deleteBtns = [...document.querySelectorAll(".delete-button")];
    deleteBtns.forEach((btn) =>
        btn.addEventListener("click", () => DeleteData(btn))
    );
}

function RenderCards(timovi) {
    const cardsDiv = document.querySelector(".cards");
    let cards = "";
    timovi.forEach((tim) => {
        cards += CreateCard(tim);
    });

    cardsDiv.innerHTML = cards;
}

function CreateCard(tim) {
    const imeTima = tim.ime;
    const tehn = tim.omiljeneTehnologije.toString();
    if (tehn.length == 0) tehn = "Nisu unete tehnologije!";

    let card = `
    <div class="card-container" tim-id=${tim._id}>
        <img class="user-icon" src="Slike/user.png" />
        <h2 class="username">${imeTima}</h2>
        <div class="user-info">
            <p><strong>TEHNOLOGIJE:</strong></p>
            <p>${tehn}</p>
        </div>
        <button class="user-button">PRIKAZI VISE</button>
        <button class="delete-button">🗑️</button>
    </div>`;

    return card;
}

async function DeleteData(btn) {
    let id = getId(btn);
    try {
        await axios.delete(`api/timovi/${id}`);
        window.location.href = "index.html";
    } catch (err) {
        console.log(err);
    }
}

function getId(btn) {
    let parent = btn.parentElement;
    let id = parent.getAttribute("tim-id");
    return id;
}
