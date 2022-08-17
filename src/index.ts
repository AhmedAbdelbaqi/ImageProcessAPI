import express from 'express';
import resizeFunc from './resize';



import path from 'path';
import healthcheck from "./healthCheck";
import { Console } from 'console';

let imgsrc = './images/full/';
let thumbpath = './images/thumb/';
const app = express();
const port = 3000;



app.get('/image' , async(req, res) => {
try {
     let  width : number = parseInt((req.query.width)  as string);
     let  height : number = parseInt((req.query.height)  as string);
     let imageName  = req.query.filename as string;
    const retpath = await resizeFunc(imgsrc,thumbpath,imageName, width ,height);
    await res.sendFile(path.join(__dirname+retpath)); 

} catch (Error : any) {
    res.send(Error.message);
    console.log(Error.message);
}
});


// Healthcheck endpoint 
app.use("/" , healthcheck);



app.listen(port ,(() => { console.log(`Listento Port ${port}`)}));

 export {app , resizeFunc};