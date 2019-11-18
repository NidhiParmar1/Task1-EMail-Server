const con=require('./DBConnection')
const mysql=require('mysql')
const readline=require('readline-sync');
var sid=readline.question('Enter SenderID:');
var Spassword=readline.question('Enter Sender Password:');

var sql="select * from Account where eid=? and pasword=?";
var data=[sid,Spassword];
var sql=mysql.format(sql,data);
con.query(sql,(err,result)=>{
  if(err) throw err;
  else
{
    if(result.length>0){
   console.log("*Login Success...*");
var rid=readline.question('Enter ReceiverID: ');
var subject= readline.question('Enter Mail Subject: ');
var message= readline.question ('Enter Message: ');

var sql1= "insert into email(SenderId, ReceiverID, Subject, Message) values(?,?,?,?)";
var data =[sid, rid, subject, message];
var sql= mysql.format(sql1, data);

con.query(sql,(err)=>{
  if(err) throw err;
  else
   console.log("Mail Send Successfully...");
})
}
else
    console.log("*Login Fail*");  
}
})

