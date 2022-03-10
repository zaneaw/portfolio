const Airtable = require("airtable");

const api_key = process.env.AIRTABLE_API_KEY;
const base_id = process.env.AIRTABLE_BASE_ID;
const table_name = process.env.AIRTABLE_TABLE_NAME;

const base = new Airtable({ apiKey: api_key }).base(base_id);

const table = base(table_name);

export { table };
