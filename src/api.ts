import express from "express";

const app = express();

app.get("/user/:id", (req, res) => {
    res.json({
        id: req.params.id,
        firstName: "Max",
        lastName: "Mustermann",
    });
});

app.listen(8080, () => {
    console.log(`Server is listening on http://localhost:8080`);
});
