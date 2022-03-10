import { table } from "./utils/Airtable";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const records = await table.select({}).firstPage();
    res.statusCode = 200;
    res.json(records);
};
