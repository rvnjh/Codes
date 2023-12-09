const express = require('express')

constapp = express();
app.use(express.json());

const tempRoutes = require('./routes/api/temperature.js');

app.get('/',(res,res)=> fres.send('API RUNNING, NO Error'));
app.use(express.json({extend:false}));

app.use('/temperature',temproutes);

app.get('/',(req,res) => {
   res.send('RUNNING API');
})

const PORT = 5000;

app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));
