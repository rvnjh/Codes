var express = require('express');

var router = express.Router();

var databaseConn = require ('../../config/database.js');

//insert
//routes POST api/temperature/add
//@desc use to add data privately
//@access PRIVATE
router.post('/add', (req, res) => {
   console.log(req.body);
   sqlQuery = `INSERT INTO temp (temperature, date, device_id) VALUES (${req.body.temperature}, '${req.body.date}', '${req.body.device_id}')`;

   databaseConn.query(sqlQuery, function (error, results, fields) {
       if (error) throw error;
       res.status(200).json(results);
   })
});

//select / view
//routes get api/temperature/view
//@desc can view data
//@access PUBLIC
router.get('/view',(req,res) => {
   sqlQuery = `SELECT * FROM temp`;
   databaseConn.query (sqlQuery, function(error,results,fields){
      if(error) throw error;
      res.status(200).json(results)
   })
})
//update
//routes PUT api/temperature/update/:id
//@desc Update temperature data by ID
//@access PRIVATE
router.put('/update/:id', (req, res) => {
   const { temperature, date, device_id } = req.body;
   const temperatureId = req.params.id;

   if (!temperature || !date || !device_id) {
       return res.status(400).json({ msg: 'Please provide temperature, date, and device_id' });
   }

   const sqlQuery = `UPDATE temp SET temperature = ${temperature}, date = '${date}', device_id = '${device_id}' WHERE id = ${temperatureId}`;

   databaseConn.query(sqlQuery, function (error, results, fields) {
       if (error) throw error;
       res.status(200).json(results);
   });
});

// delete
// route: DELETE api/temperature/delete/:id
// @desc: Delete data by ID
// @access: PRIVATE
router.delete('/delete/:id', (req, res) => {
   const id = req.params.id;
   sqlQuery = `DELETE FROM temp WHERE id = ${id}`;

   databaseConn.query(sqlQuery, function (error, results, fields) {
       if (error) throw error;
       res.status(200).json(results);
   });
});

