const express=require('express');
const path=require('path');
const port=8000;
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var contactlist=[
    {
        name:"praveen",
        phone:"12345"
    },
    {
        name:"tony",
        phone:"876543"
    },
    {
        name:"iron",
        phone:"19036"
    }
]
app.get('/',function(req,res){
return res.render('home',{title:"my contact list 1",
contact_list:contactlist
});    

});

app.get('/practice',function(req,res){
    return res.render('practice',{title:"my contact list 2"});    
    
    });
    app.post('/create-contact',function(req,res){
        contactlist.push({
            name:req.body.name,
            phone:req.body.phone
        
        });
        return res.redirect('/');
      });
      
      app.get('/delete-contact',function(req,res){
       console.log(req.query);
       let phone=req.query.phone;
       let contactindex=contactlist.findIndex(contact => contact.phone==phone);
       if (contactindex!=-1)
       {
           contactlist.splice(contactindex,1);
       }
       return res.redirect('back');
      });

app.listen(port,function(err){
    if(err)
    {
        console.log('error in running',err);
        return;
    }
    console.log("server run on port ",port);

});

