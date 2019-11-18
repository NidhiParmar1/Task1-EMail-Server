const con=require('./DBConnection')
const mysql=require('mysql')
const readline=require('readline-sync');
var eid=readline.question('Enter Email ID:');
var password=readline.question('Enter Password:');
var newpassword=readline.question('Enter New Password: ');

var sql="update Account set pasword=? where eid=? and pasword=?";
var data=[newpassword, eid, password];
var sql=mysql.format(sql,data);
con.query(sql,(err,result)=>{
  if(err) throw err;
  else {
  if(result.changedRows>0)
  {
  	console.log("Password Updated Successfully..");
}else console.log("Wrong EmailId/ Password ");
}
})