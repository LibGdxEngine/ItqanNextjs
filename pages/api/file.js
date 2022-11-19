import formidable from "formidable";
import fs from "fs";

export const config = {
    api: {
        bodyParser: true
    }
};

const post = async (req, res) => {
    console.log("s")
    const form = new formidable.IncomingForm();
    console.log(form);
    form.parse(req, async function (err, fields, files) {
        await saveFile(files.file);
        return res.status(201).send("Hello world");
    });
};

const saveFile = async (file) => {
    const data = fs.readFileSync(file.filepath);

    fs.writeFileSync(`./public/${file.name}`, data);
    await fs.unlinkSync(file.path);
    return;
};

export default (req, res) => {
    req.method === "POST"
        ? post(req, res)
        : req.method === "PUT"
            ? console.log("PUT")
            : req.method === "DELETE"
                ? console.log("DELETE")
                : req.method === "GET"
                    ? console.log("GET")
                    : res.status(404).send("");
};
