//mongoose Schema
const uniqid = require("uniqid");
const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
	taskId: {
		type: String,
		default: uniqid(),
	},
	taskName: {
        type: String,
        required:(true,"Please enter task details");
        validate:{
        validator:function(){
        console.log("This is task validator",this);
        return this.taskName.trim().length;
        //return true;
        },
        message:"Task name should be a non empty string",
      },
	},
	status: {
		type: String,
    default: "Pending",
    enum:["Not Started","In Progress" "Completed"]
  },
  startedAt:{
    type:Date,
  },
  createAt:{
    type:Date,
    default:Date.now(),
  },
  completedAt:{
    type:Date,
  },
});
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
