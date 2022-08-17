import { promises as fs } from "fs";
import { thumbpath } from "./index";

const Delete = async (imageName: string, exceptionimag: string) => {
  const Files = await fs.readdir(thumbpath);
  Files.forEach(async (file) => {
    if (file.includes(imageName) && file !== `${exceptionimag}.jpg`) {
      console.log(file);
      console.log(exceptionimag);
      await fs.unlink(`${thumbpath}${file}`);
    }
  });
};

export default Delete;
