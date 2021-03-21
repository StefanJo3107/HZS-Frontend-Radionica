const express = require("express");
const app = express();
const konektujBazu = require("./baza/baza");
const Tim = require("./baza/Tim");

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server slusa na portu: ${PORT}`);
});

// Konekcija sa bazom
konektujBazu();

// Rad sa json podacima
app.use(express.json());

// Povezi frontend
app.use(express.static("front"));

app.get("/api/timovi", async (req, res) => {
    try {
        const sviTimovi = await Tim.find();

        res.json({
            uspesno: true,
            timovi: sviTimovi,
        });
    } catch (err) {
        res.status(404).json({
            uspesno: false,
            poruka: err.message,
        });
    }
});

app.post("/api/timovi", async (req, res) => {
    try {
        const ime = req.body.ime;

        const noviTim = new Tim({
            ime: ime,
        });

        const sacuvanTim = await noviTim.save();

        res.json({
            uspesno: true,
            tim: sacuvanTim,
        });
    } catch (err) {
        res.status(404).json({
            uspesno: false,
            poruka: err.message,
        });
    }
});

app.get("/api/tim", async (req, res) => {
    try {
        const id = req.query.id;
        const sviTimovi = await Tim.findById(id);

        res.json({
            uspesno: true,
            timovi: sviTimovi,
        });
    } catch (err) {
        res.status(404).json({
            uspesno: false,
            poruka: err.message,
        });
    }
});

app.delete("/api/timovi/:id", async (req, res) => {
    try {
        const timId = req.params.id;

        const tim = await Tim.findById(timId);

        const obrisanTim = await tim.delete();

        res.json({
            uspesno: true,
            tim: obrisanTim,
        });
    } catch (err) {
        res.status(404).json({
            uspesno: false,
            poruka: err.message,
        });
    }
});

app.post("/api/clan", async (req, res) => {
    try {
        const timId = req.body.idTima;

        const tim = await Tim.findById(timId);

        const noviClan = {
            ime: req.body.ime,
            prezime: req.body.prezime,
            mail: req.body.mail,
            skola: req.body.skola,
        };

        tim.clanovi.push(noviClan);

        const sacuvanTim = await tim.save();

        res.json({
            uspesno: true,
            tim: sacuvanTim,
        });
    } catch (err) {
        res.status(404).json({
            uspesno: false,
            poruka: err.message,
        });
    }
});

app.post("/api/tehnologija", async (req, res) => {
    try {
        const timId = req.body.timId;
        const tehnologija = req.body.tehnologija;

        const tim = await Tim.findById(timId);

        tim.omiljeneTehnologije.push(tehnologija);

        const sacuvanTim = await tim.save();

        res.json({
            uspesno: true,
            tim: sacuvanTim,
        });
    } catch (err) {
        res.status(404).json({
            uspesno: false,
            poruka: err.message,
        });
    }
});

app.get("/api/proba", async (req, res) => {
    try {
        const timovi = await Tim.find({
            omiljeneTehnologije: {
                $all: ["Javascript", "PHP"],
            },
        });

        res.json({
            uspesno: true,
            timovi: timovi,
        });
    } catch (err) {
        res.status(404).json({
            uspesno: false,
            poruka: err.message,
        });
    }
});
