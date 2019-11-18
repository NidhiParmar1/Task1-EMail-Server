const con=require('./DBConnection')
const mysql=require('mysql')
const readline=require('readline-sync');
var eid=readline.question('Enter Email ID:');
var password=readline.question('Enter Password:');

var sql="select * from Account where eid=? and pasword=?";
var data=[eid,password];
var sql=mysql.format(sql,data);
con.query(sql,(err,result)=>{
  if(err) throw err;
  else
  {
    if(result.length>0){
   console.log("*Login Success...*");
   var sql1="select * from email where ReceiverId=?";
   var data=[eid,password];
    sql1=mysql.format(sql1,data);
	con.query(sql1,(err, result)=>{
  if(err) throw err;
  else
   console.log(result);
  
})
}
   else
    console.log("*Login Fail*");
  }
})

