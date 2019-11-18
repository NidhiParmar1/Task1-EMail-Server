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
  if(result.length>0)
  {
  	console.log("Login Sucessful");
  	var sql="select * from email where ReceiverId=?";
  	var data=[eid];
  	var sql =mysql.format(sql, data);
  	con.query(sql,(err,result)=>{
  		if(err) throw err
  			else
  			{	
  				console.log(result);
  				var command =readline.question('Do you really want to delete all mails from inbox(Y/N):');
                if(command=='y')
                {
  				      var sql="delete from email where ReceiverId=?";
                var data=[eid]
					      var sql=mysql.format(sql,data);
							   con.query(sql,(err)=>{
  								if(err) throw err;
  									else
  									console.log("Mail Deleted...");
  								})
  				}
  				 else {
  					console.log("Mail Not Deleted");
  				}
            }

  		})  
  	}
     else console.log("Login Fail");
})