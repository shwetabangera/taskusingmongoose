const mongoose = require("mongoose");
const Task = require("./models/taskSchema");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
mongoose.connect(process.env.DATABASE_URL, (err, connection) => {
	if (err) {
		console.log(err);
		return console.log("Error in connecting to database");
	}
	//console.log(connection);
	console.log("Successfully connected to database");
	let newTask = new Task({ taskName: "Added using save 3 with Promise",status:"Complete" });
	newTask
		.save()
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
        });
    });
);
/* 	let newTask = {
		taskName: "Added using create",
	}; */
	/*Task.create(newTask)
		.then((data) => {
			console.log("document", data);
		})
		.catch((err) => {
			console.log(err);
        }); */
  /*       Task.find({status:"Completed"}).then((allTasks)=>{
            console.log("All Tasks");
            console.log(allTasks);
        })
        .catch((err)=>{
            console.log(err);
        }); */
   // },


