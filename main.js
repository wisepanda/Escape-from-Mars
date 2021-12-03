// GETGet logs
// https://task-escape-api.herokuapp.com/api/logs

// const { json } = require("stream/consumers");

// Retrieve all of the logs of our mission so far


async function getLogs(){
    Response = await fetch("https://task-escape-api.herokuapp.com/api/logs/"); //{method: "GET",redirect:"follow"});
    let data = await Response.json();
    console.log(data[0].date)
}
getLogs()





// Example Request
// Get logs
// curl --location --request GET 'https://task-escape-api.herokuapp.com/api/logs'
// GETGet personnel
// https://task-escape-api.herokuapp.com/api/personnel/1
// Retrieves the relevant personnel record matching the id provided in the path







// Example Request
// Get personnel
// curl --location --request GET 'https://task-escape-api.herokuapp.com/api/personnel/1'

async function getPerson(){
    let Response = await fetch("https://task-escape-api.herokuapp.com/api/personnel/9");
        data = await Response.json();
        console.log(data)
        return data
}
getPerson()




// GETGet messages
// https://task-escape-api.herokuapp.com/api/messages?to=1
// Retrieves a list of messages filtered by recipient, where the recipient id matches the to value

async function getMessage(){
    let response = await fetch("https://task-escape-api.herokuapp.com/api/messages?to=1");
        data = await response .json()
        console.log(data)
}
getMessage()


// PARAMS
// to
// 1


// Example Request
// Get messages
// curl --location --request GET 'https://task-escape-api.herokuapp.com/api/messages?to=1'
// GETGet hint
// https://task-escape-api.herokuapp.com/api/hint
// Returns some information to help understand what is required from a launch code
async function getHint(){
    let response = await fetch("https://task-escape-api.herokuapp.com/api/hint");
        data = await response.json();
        console.log(data)
}
getHint()


// Example Request
// Get hint
// curl --location --request GET 'https://task-escape-api.herokuapp.com/api/hint'
// POSTSubmit launch codes
// https://task-escape-api.herokuapp.com/api/codes
// Allows the submission of launch codes to the system via a JSON object as the body of the request

// BODYraw
// {
//     "enter": "LAUNCH"
// }