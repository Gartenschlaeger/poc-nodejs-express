import express from "express";

const api = express();

api.get("/user/:id", (req, res) => {
    res.json({
        id: req.params.id,
        firstName: "Max",
        lastName: "Mustermann",
    });
});

function start(port: number) {
    api.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`);
    });
}

export { start };
