import express from "express";

const healthcheck = express.Router()

healthcheck.get("/" , (req , res)=> {
    if (res.statusCode == 200 ){
        res.send(`Connected to the server successuflly , </br> Please insert resize image Link with the width and height </br>
        Example :<a href=http://localhost:3000/image?filename=fjord&width=180&height=100 > Click Here </a>`);
    }
    
})


export default healthcheck;