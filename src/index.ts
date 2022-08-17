import express from "express";
import resizeFunc from "./resize";
import path from "path";
import healthcheck from "./healthCheck";

const imgsrc = "./images/full/";
const thumbpath = "./images/thumb/";
const app = express();
const port = 3000;

app.get("/image", async (req, res) => {
  try {
    const width: number = parseInt(req.query.width as string);
    const height: number = parseInt(req.query.height as string);
    const imageName = req.query.filename as string;
    const deletecheck = req.query.delete as unknown as boolean;
    const retpath = await resizeFunc(
      imgsrc,
      thumbpath,
      imageName,
      width,
      height,
      deletecheck
    );
    await res.sendFile(path.join(__dirname + retpath));
  } catch (e) {
    const errorMessage = "Error";
    res.send(errorMessage);
    console.log(errorMessage);
  }
});

// Healthcheck endpoint
app.use("/", healthcheck);

app.listen(port, () => {
  console.log(`Listento Port ${port}`);
});

export { app, resizeFunc, thumbpath };
