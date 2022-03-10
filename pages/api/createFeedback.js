import { table } from "./utils/Airtable";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    // array destructuring
    const { Rating, Comments, Email, Date } = req.body;

    try {
        const createdRecords = await table.create([
            { fields: { Rating, Comments, Email, Date } },
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
