import express from 'express';
// import {promises as fs} from 'fs';
import SharpInstance from 'sharp';
import path from 'path';

let imgsrc = './images/full/';
let thumbpath = './images/thumb/'
const app = express();
const port = 3000;

const resizeFunc  = async (srcimagepath:string , thumbpath :string , imageName :string ,width : number , height : number) :Promise<string> => {
    const save = await SharpInstance(`${srcimagepath}${imageName}.jpg`).resize(width,height);
    await save.toFile(`${thumbpath}${imageName}.jpg`);
    return `/.${thumbpath}${imageName}.jpg`;
};

app.get('/image' , async(req, res) => {
try {
     let  width : number = parseInt((req.query.width)  as string);
     let  height : number = parseInt((req.query.height)  as string);
     let imageName  = req.query.filename as string;
    const retpath = await resizeFunc(imgsrc,thumbpath,imageName, width ,height);
    await res.sendFile(path.join(__dirname+retpath));
    console.log("Resize Done ");
} catch (Error : any) {
    res.send(Error.message);
    console.log(Error.message);
}
});

app.listen(port ,(() => { console.log(`Listento Port ${port}`)}));

 export {app , resizeFunc};