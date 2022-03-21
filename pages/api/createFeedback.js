import { table } from "./utils/Airtable";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).send({ message: "Only POST requests allowed" })
    }
    // array destructuring
    const { data } = req.body;
    try {
        const createdRecords = await table.create([
            { fields: { rating: Number(data.rating), comments: data.comments, name: data.name, email: data.email, date: data.createdOn } },
        ]);
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields,
        };
        res.statusCode = 200;
        res.json(createdRecord);
    } catch (err) {
        console.log(err);
        res.statusCode = 500;
        res.json({ msg: "Whoops, something went wrong." });
    }
};
