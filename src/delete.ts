import { promises as fs } from "fs";
import { thumbpath } from "./index";

const Delete = async (imageName: string) => {
  const Files = await fs.readdir(thumbpath);
  Files.forEach(async (file) => {
    if (file.includes(imageName)) {
      await fs.unlink(`${thumbpath}${file}`);
    }
  });
};

export default Delete;
