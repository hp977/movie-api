const express = require('express');
const PORT = process.env.PORT || 8000;
const cors = require('cors')

const app = express()
app.use(cors())

let movies = {
    "id": 1,
            "title": "Beetlejuice",
            "year": "1988",
            "runtime": "92",
}




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get("/api/rappers/:rapperName", (request, response) => {
    const rapName = request.params.rapperName.toLowerCase();
    console.log(rapName);
    if (rappers[rapName]) {
      response.json(rappers[rapName]);
    } else {
      response.json(rappers["unknown"]);
    }
  });


app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})