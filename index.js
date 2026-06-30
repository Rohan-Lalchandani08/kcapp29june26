const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sr", (req, res)=>{
	let url="mongodb+srv://lalchandanirohan8_db_user:H9BqRcIFpzDsmBNW@cluster0.xte8xby.mongodb.net/?appName=Cluster0";
	let con = new MongoClient(url);
	let db = con.db("kc29june26");
	let coll = db.collection("reviews");
	let doc={"food":req.body.food, "rating":req.body.rating, "review":req.body.review};
	coll.insertOne(doc)
	.then(response=>{
		res.send(response);
	})
	.catch(error=>{
		res.send(error);	
	});
});

app.get("/gr", (req, res)=>{
	let url="mongodb://0.0.0.0:27017";
	let con = new MongoClient(url);
	let db = con.db("kc29june26");
	let coll = db.collection("reviews");
	coll.find().toArray()
	.then(response=>{
		res.send(response);
	})
	.catch(error=>{
		res.send(error);	
	});
});



app.listen(9000, ()=>{
	console.log("ready @ 9000");
});