const fastify = require("fastify")({ logger: true });
const axios = require("axios");
const path = require("path");
const fs = require("fs").promises;
const externalApiBaseUrl = "https://reqres.in/api/users";

fastify.get("/api/user/:userId", async (req, reply) => {
  const userId = req.params.userId;
  try {
    const response = await axios.get(`${externalApiBaseUrl}/${userId}`);
    const userData = response.data.data;
    console.log("userData", userData);
    reply
      .status(200)
      .send({ responseMessage: "Success", responseData: userData });
  } catch (error) {
    reply.status(500).send({ responseMessage: "Internal Server Error" });
  }
});

fastify.get("/api/user/:userId/avatar", async (req, reply) => {
  const userId = req.params.userId;

  const folderPpath = path.join(__dirname, "images");

  fs.stat(folderPpath)
    .then((stats) => {
      if (stats.isDirectory()) {
        console.log(`The folder ${folderPath} exists.`);
      } else {
        console.log(`${folderPath} is not a directory.`);
      }
    })
    .catch((err) => {
      if (err.code === "ENOENT") {
        fs.mkdir(folderPpath);
      }
    });

  const filePath = path.join(__dirname, "images", `${userId}-image.jpg`);

  try {
    const fileExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);

    if (fileExists) {
      const fileContent = await fs.readFile(filePath, "utf-8");
      return { responseMessage: "Success", base64: fileContent };
    } else {
      const response = await axios.get(
        `https://reqres.in/img/faces/${userId}-image.jpg`,
        {
          responseType: "arraybuffer",
        }
      );
      const imageBuffer = Buffer.from(response.data, "binary");
      const base64Image = imageBuffer.toString("base64");
      await fs.writeFile(filePath, base64Image, "utf-8");
      reply
        .status(200)
        .send({ responseMessage: "Success", responseData: base64Image });
    }
  } catch (error) {
    reply.status(500).send({ responseMessage: "Internal Server Error" });
  }
});

fastify.delete("/api/user/:userId/avatar", async (req, reply) => {
  const userId = req.params.userId;
  const filePath = path.join(__dirname, "images", `${userId}-image.jpg`);

  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
    reply.status(200).send({ responseMessage: "Avatar deleted successfully" });
  } catch (error) {
    if (error.code === "ENOENT") {
      reply.status(404).send({ responseMessage: "File not found" });
    } else {
      reply.status(500).send({ responseMessage: "Internal Server Error" });
    }
  }
});

fastify.listen({ port: 3000, host: "127.0.0.1" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
