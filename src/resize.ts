import SharpInstance from 'sharp';
import {promises as fs , constants } from 'fs';


const resizeFunc  = async (srcimagepath:string , thumbpath :string , srcimageName :string ,width : number , height : number) :Promise<string> => {
    let resimagname : string =`${srcimageName}_${width}_${height}`;
    try {
        await fs.access(`${thumbpath}${resimagname}.jpg`, constants.F_OK );
        console.log("Already Exists");
    } catch (error) {
        const save = await SharpInstance(`${srcimagepath}${srcimageName}.jpg`).resize(width,height);
        await save.toFile(`${thumbpath}${resimagname}.jpg`); 
    } 
    return `/.${thumbpath}${resimagname}.jpg`;
};

export default resizeFunc;