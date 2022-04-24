let client = require("../dbConnect");
let projectCollection;

setTimeout(() => {
    projectCollection = client.mongoClient.db().collection("pets");
}, 2000)

const insertProject = (project, callback) => {
    projectCollection.insert(project, callback);
}
const getProject = (callback) => {
    projectCollection.find({}).toArray(callback);
}

const createProject = (req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    insertProject(newProject, (err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err })
        }
        else {
            res.json({ statusCode: 200, message: "Project Successfully added", data: result })
        }
    })
}

const retrieveProject = (req,res) => {
    getProject((err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err })
        }
        else {
            res.json({ statusCode: 200, message: "Success", data: result })
        }
    })
}

module.exports = {createProject, retrieveProject};