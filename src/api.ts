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
    console.log(`Server started on Port 8080`);
});
