const con= require('./DBConnection');
const mysql=require('mysql');
const readline= require('readline-sync');

var name= readline.question("Enter User name: ");
var eid= readline.question("Enter User Id: ");
var password= readline.question("Enter User Password: ");

var sql="select * from Account where eid=? ";
var data=[eid];
var sql=mysql.format(sql,data);
con.query(sql,(err,result)=>{
  if(err) throw err;
  else {
  	if(result.length=0){
  		var sql= "insert into Account(ename, eid, pasword) values(?,?,?)";
		var data= [name, eid, password];
		sql= mysql.format(sql, data);

		con.query(sql,(err, result)=> {
			if(err) throw err;
					else
  					console.log("Welcome your Account Created Successfully...");
  				})
			}
  	else
		console.log("Account already exists...");
}
})
