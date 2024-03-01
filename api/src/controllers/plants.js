import { pool } from '../../db.js'

// const executeQuery = pool.query

// async function executeQuery(sentence) {
//     try {
//         const result = await DB.request()
//         query(sentence);
//         return result;
//     }
//     catch (err) {
//         console.log('Error querying database', err);
//         return err;
//     }
// }

export const getAllPlants = async (req, res) => {
    const [result] = await pool.query('Select * from CosmeticsProducts')
    res.send(result)
}