const express = require('express');
const app = express();
const knex = require('knex');

const cors = require('cors');

app.use(express.json());
app.use(cors());
// HTTP GET http://localhost:8000/ping => pong

const db = knex({
    client: 'mysql',
    connection : {
        host: "localhost",
        user: "root",
        password: "0217",
        database: "movie_server_db"
    }
})
app.get('/ping', (req, res) => {
    res.send('pong');
})

app.post('/movie', (req,res) => {
    const name = req.body.name;
    const price = req.body.price;

    console.log(`이름 : ${name} 가격 : ${price}`);
    
    db.raw(`INSERT INTO MOVIE(name, price) VALUES("${name}", ${price})`)
    .then((response) => { //콜백 ㅋㅋㅋ
        // 성공했을때
        res.status(200).send("ok");
    }).catch((error) => {
        //에러 발생시
        console.log(error);
        res.status(500).end("에러 발생")
    })

    // Request (POST http://localhost:8000/movie)

    // res.send({
    //     "name": name,
    //     "price": price
    // });

});


//전체 영화를 조회하는 API
app.get("/movie", (req, res) => {
    db.raw(`SELECT * FROM MOVIE`)
    .then((response) => {
        console.log(response[0])
        res.status(200).send(response[0])
    })
})
app.listen(8000, () => {
    console.log("Server is running now");
});
