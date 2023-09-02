const pool = require("../database/index");

const postsController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from weighing_api")
            const formattedResult = [];

            for (const item of rows) {
                const { T_ID, WB_Location_ID, ...rest } = item;
                const formattedItem = {};
                for (const key in rest) {
                    formattedItem[key] = String(rest[key]); // Convert the value to a string
                }
                formattedResult.push(formattedItem);
            }
            
            res.json(   )
        } catch (error) {
            console.log(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { location } = req.params
            let query = "SELECT * FROM weighing_api where WB_Location_ID = ?";
            const params = [];
            params.push(location)
            if (req.query.TRNo) {
                query += " AND TRNo = ?";
                params.push(req.query.TRNo);
            }
            if (req.query.VehicleNo) {
                query += " AND VehicleNo = ?";
                params.push(req.query.VehicleNo);
            }
            // console.log(query, params)
            const [rows, fields] = await pool.query(query, params);

            const formattedResult = [];

            for (const item of rows) {
                const { T_ID, WB_Location_ID, ...rest } = item;
                const formattedItem = {};
                for (const key in rest) {
                    formattedItem[key] = String(rest[key]); // Convert the value to a string
                }
                formattedResult.push(formattedItem);
            }
            res.json(formattedResult)
        } catch (error) {
            console.log(error)
        }
    }


};

module.exports = postsController;
