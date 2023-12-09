var mysql = require('mysql'); 

var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'cpe202_lab6_abalos',
});


connection.connect(function (error) {
if (!!error) {
console.log(error);
} else {
console.log('MySQL Database Connected..!');
}
});

module.exports = connection;
