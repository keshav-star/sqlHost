const pool = require("../database/index")
const postsController = {

    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from api_data")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from api_data where T_ID = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {

        }
    }
}

module.exports = postsController