// lec1 -- not returning anything basic -- setting up express server 
// npm init     in contact_list folder
// npm install express

// it adds node modules folder and package -load json for dependencies



// const express= require('express');
// const port = 8000;
// const app = express();


// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('my express server is running on port:',port);
// });


// on running -> nodemon index.js --> and opening browser localhost:8000
//  we get "cannot get/ " error handles of not returning anything by express


// lec2  -- content -- text then html 

// const express= require('express');
// const port = 8000;
// const app = express();

// app.get('/',function(req,res){
//     console.log(req.url);
//     // res.send('cool, this is a text !!')      //text 
//     res.send('<h1>cool, this is a text !!</h1>')   //html content 
// });

// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('my express server is running on port:',port);
// });

// --------------------------------lec3  adding template engine or view engine ejs
// install --> npm install ejs



// const express= require('express');
// const port = 8000;
// const app = express();
// const path = require('path');

// app.set('view engine', 'ejs');

// app.set('views',path.join(__dirname,'views'))


// app.get('/',function(req,res){
//     console.log(req.url);
//     console.log(__dirname)
//     // res.send('cool, this is a text !!')      //text 
//     // res.send('<h1>cool, this is a text !!</h1>')   //html content 

//     return res.render('home',{
//         title:"My Contact List"
//     });
// });
// app.get('/profile',function(req,res){
//     console.log(req.url);
//     console.log(__dirname)
//     // res.send('cool, this is a text !!')      //text 
//     // res.send('<h1>cool, this is a text !!</h1>')   //html content 

//     return res.render('profile',{
//         title:"My Profile"
//     });
// });



// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('my express server is running on port:',port);
// });

// ==============lec4 adding manual list for contacts  then adding form for user filling


// const express= require('express');
// const port = 8000;
// const app = express();
// const path = require('path');


// app.set('view engine', 'ejs');

// app.set('views',path.join(__dirname,'views'))

// // it is used for form filling and showing result in contactList
// app.use(express.urlencoded());  //this is a built in express middleware for returning key value objects

// var contactList = [
//     {name:"abc",
//     phone:"10001"},
//     {name:"vvvvvvbc",
//     phone:"10002"},
//     {name:"abcssss",
//     phone:"10004"},
//     {name:"abcddfff",
//     phone:"10005"}

// ];



// app.get('/',function(req,res){
//     console.log(req.url);
//     console.log(__dirname)
//     // res.send('cool, this is a text !!')      //text 
//     // res.send('<h1>cool, this is a text !!</h1>')   //html content 

//     return res.render('home',{
//         title:"My Contact List",
//         contact_list : contactList      // ye contact_list use hua hai html mai for loop used to diplay list
//     });
// });
// app.get('/profile',function(req,res){
//     console.log(req.url);
//     console.log(__dirname)
//     // res.send('cool, this is a text !!')      //text 
//     // res.send('<h1>cool, this is a text !!</h1>')   //html content 

//     return res.render('profile',{
//         title:"My Profile"
//     });
// });

// // for form filling

// app.post('/create-contact', function(req,res){

//     console.log(req.body);
//     contactList.push(req.body);

//     return res.redirect('back');

// });

// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('my express server is running on port:',port);
// });

// --------------lec 5 adding static files  css js images----
// create folder asset -> css, js , image folder inside it 
// create home.css, home.js in respective folders



// const express= require('express');
// const port = 8000;
// const app = express();
// const path = require('path');


// app.set('view engine', 'ejs');

// app.set('views',path.join(__dirname,'views'))

// // it is used for form filling and showing result in contactList
// app.use(express.urlencoded());  //this is a built in express middleware for returning key value objects

// // for static files
// app.use(express.static('assets'));

// var contactList = [
//     {name:"abc",
//     phone:"10001"},
//     {name:"vvvvvvbc",
//     phone:"10002"},
//     {name:"abcssss",
//     phone:"10004"},
//     {name:"abcddfff",
//     phone:"10005"}

// ];



// app.get('/',function(req,res){
//     console.log(req.url);
//     console.log(__dirname)
//     // res.send('cool, this is a text !!')      //text 
//     // res.send('<h1>cool, this is a text !!</h1>')   //html content 

//     return res.render('home',{
//         title:"My Contact List",
//         contact_list : contactList      // ye contact_list use hua hai html mai for loop used to diplay list
//     });
// });
// app.get('/profile',function(req,res){
//     console.log(req.url);
//     console.log(__dirname)
//     // res.send('cool, this is a text !!')      //text 
//     // res.send('<h1>cool, this is a text !!</h1>')   //html content 

//     return res.render('profile',{
//         title:"My Profile"
//     });
// });

// // for form filling

// app.post('/create-contact', function(req,res){

//     console.log(req.body);
//     contactList.push(req.body);

//     return res.redirect('back');

// });



// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('my express server is running on port:',port);
// });


// lec 6 --- deleting contacts



// const express= require('express');
// const port = 8000;
// const app = express();
// const path = require('path');


// app.set('view engine', 'ejs');

// app.set('views',path.join(__dirname,'views'))

// // it is used for form filling and showing result in contactList
// app.use(express.urlencoded());  //this is a built in express middleware for returning key value objects

// // for static files
// app.use(express.static('assets'));

// var contactList = [
//     {name:"abc",
//     phone:"10001"},
//     {name:"vvvvvvbc",
//     phone:"10002"},
//     {name:"abcssss",
//     phone:"10004"},
//     {name:"abcddfff",
//     phone:"10005"}

// ];



// app.get('/',function(req,res){
//     console.log(req.url);
//     console.log(__dirname)
//     // res.send('cool, this is a text !!')      //text 
//     // res.send('<h1>cool, this is a text !!</h1>')   //html content 

//     return res.render('home',{
//         title:"My Contact List",
//         contact_list : contactList      // ye contact_list use hua hai html mai for loop used to diplay list
//     });
// });
// app.get('/profile',function(req,res){
//     console.log(req.url);
//     console.log(__dirname)
//     // res.send('cool, this is a text !!')      //text 
//     // res.send('<h1>cool, this is a text !!</h1>')   //html content 

//     return res.render('profile',{
//         title:"My Profile"
//     });
// });

// // for form filling

// app.post('/create-contact', function(req,res){

//     console.log(req.body);
//     contactList.push(req.body);

//     return res.redirect('back');

// });

// app.get('/delete-contact', function(req,res){
//     console.log(req.query);
//     let phone = req.query.phone;

//     let contactIdx = contactList.findIndex(contact => contact.phone==phone);
//     if(contactIdx!=-1){
//         contactList.splice(contactIdx,1);
//     }

//     return res.redirect('back');
// });


// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('my express server is running on port:',port);
// });


//  =================================lec7   DATABASE ADDITION

// MONGODB  ROBO3T  MONGOOSE INSTALLED  
// contact_lits-> config -> mongoose.js  created and setup done

// connecting mongoose i.e layer between mongodb and express 




// const express= require('express');
// const port = 8000;
// const path = require('path');
// const db = require('./config/mongoose'); // added--------------------------


// const app = express();



// app.set('view engine', 'ejs');

// app.set('views',path.join(__dirname,'views'))

// // it is used for form filling and showing result in contactList
// app.use(express.urlencoded());  //this is a built in express middleware for returning key value objects

// // for static files
// app.use(express.static('assets'));

// var contactList = [
//     {name:"abc",
//     phone:"10001"},
//     {name:"vvvvvvbc",
//     phone:"10002"},
//     {name:"abcssss",
//     phone:"10004"},
//     {name:"abcddfff",
//     phone:"10005"}

// ];



// app.get('/',function(req,res){
//     console.log(req.url);
//     console.log(__dirname)
//     // res.send('cool, this is a text !!')      //text 
//     // res.send('<h1>cool, this is a text !!</h1>')   //html content 

//     return res.render('home',{
//         title:"My Contact List",
//         contact_list : contactList      // ye contact_list use hua hai html mai for loop used to diplay list
//     });
// });
// app.get('/profile',function(req,res){
//     console.log(req.url);
//     console.log(__dirname)
//     // res.send('cool, this is a text !!')      //text 
//     // res.send('<h1>cool, this is a text !!</h1>')   //html content 

//     return res.render('profile',{
//         title:"My Profile"
//     });
// });

// // for form filling

// app.post('/create-contact', function(req,res){

//     console.log(req.body);
//     contactList.push(req.body);

//     return res.redirect('back');

// });

// app.get('/delete-contact', function(req,res){
//     console.log(req.query);
//     let phone = req.query.phone;

//     let contactIdx = contactList.findIndex(contact => contact.phone==phone);
//     if(contactIdx!=-1){
//         contactList.splice(contactIdx,1);
//     }

//     return res.redirect('back');
// });


// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('my express server is running on port:',port);
// });


// ========================lec 8 database continued 
// create schema use robo 3t 

// contact_list-> models-> contact.js



// const express= require('express');
// const port = 8000;
// const path = require('path');
// const db = require('./config/mongoose'); 

// // ------------------added
// const Contact = require('./models/contact');



// const app = express();



// app.set('view engine', 'ejs');

// app.set('views',path.join(__dirname,'views'))

// // it is used for form filling and showing result in contactList
// app.use(express.urlencoded());  //this is a built in express middleware for returning key value objects

// // for static files
// app.use(express.static('assets'));

// var contactList = [
//     {name:"abc",
//     phone:"10001"},
//     {name:"vvvvvvbc",
//     phone:"10002"},
//     {name:"abcssss",
//     phone:"10004"},
//     {name:"abcddfff",
//     phone:"10005"}

// ];



// app.get('/',function(req,res){
//     // console.log(req.url);
//     // console.log(__dirname)
//     // res.send('cool, this is a text !!')      //text 
//     // res.send('<h1>cool, this is a text !!</h1>')   //html content 

//     Contact.find({},function(err,contacts){
        

//         if(err){
//             console.log("error in fetching data from db");
//             return;
//         }

//         return res.render('home',{
//             title:"My Contact List",
//             contact_list : contacts      // ye contact_list use hua hai html mai for loop used to diplay list
//         });
//     })
   
// });
// app.get('/profile',function(req,res){
//     console.log(req.url);
//     console.log(__dirname)
//     // res.send('cool, this is a text !!')      //text 
//     // res.send('<h1>cool, this is a text !!</h1>')   //html content 

//     return res.render('profile',{
//         title:"My Profile"
//     });
// });

// // for form filling

// app.post('/create-contact', function(req,res){

//     // console.log(req.body);
//     // contactList.push(req.body);
//     // ----------------------------------------added
//     Contact.create({
//         name: req.body.name,
//         phone:req.body.phone
//     },function(err,ContactObj){
//         if(err){
//             console.log("error");
//             return;
//         }
//         console.log('----------',ContactObj);
//         return res.redirect('back');

//     });

 
//     // return res.redirect('back');
// });

// app.get('/delete-contact', function(req,res){
//     console.log(req.query);
//     let phone = req.query.phone;

//     let contactIdx = contactList.findIndex(contact => contact.phone==phone);
//     if(contactIdx!=-1){
//         contactList.splice(contactIdx,1);
//     }

//     return res.redirect('back');
// });


// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('my express server is running on port:',port);
// });


// ==================lec 9 =======
// delete from databse on cross

// chnge in home.ejs --> deletcontact url query to id


const express= require('express');
const port = 8000;
const path = require('path');
const db = require('./config/mongoose'); 

// ------------------added
const Contact = require('./models/contact');



const app = express();



app.set('view engine', 'ejs');

app.set('views',path.join(__dirname,'views'))

// it is used for form filling and showing result in contactList
app.use(express.urlencoded());  //this is a built in express middleware for returning key value objects

// for static files
app.use(express.static('assets'));

var contactList = [
    {name:"abc",
    phone:"10001"},
    {name:"vvvvvvbc",
    phone:"10002"},
    {name:"abcssss",
    phone:"10004"},
    {name:"abcddfff",
    phone:"10005"}

];



app.get('/',function(req,res){
    // console.log(req.url);
    // console.log(__dirname)
    // res.send('cool, this is a text !!')      //text 
    // res.send('<h1>cool, this is a text !!</h1>')   //html content 

    Contact.find({},function(err,contacts){
        

        if(err){
            console.log("error in fetching data from db");
            return;
        }

        return res.render('home',{
            title:"My Contact List",
            contact_list : contacts      // ye contact_list use hua hai html mai for loop used to diplay list
        });
    })
   
});
app.get('/profile',function(req,res){
    console.log(req.url);
    console.log(__dirname)
    // res.send('cool, this is a text !!')      //text 
    // res.send('<h1>cool, this is a text !!</h1>')   //html content 

    return res.render('profile',{
        title:"My Profile"
    });
});

// for form filling

app.post('/create-contact', function(req,res){

    // console.log(req.body);
    // contactList.push(req.body);
    // ----------------------------------------added
    Contact.create({
        name: req.body.name,
        phone:req.body.phone
    },function(err,ContactObj){
        if(err){
            console.log("error");
            return;
        }
        console.log('----------',ContactObj);
        return res.redirect('back');

    });

 
    // return res.redirect('back');
});

app.get('/delete-contact', function(req,res){
    // console.log(req.query);
    // let phone = req.query.phone;

    // let contactIdx = contactList.findIndex(contact => contact.phone==phone);
    // if(contactIdx!=-1){
    //     contactList.splice(contactIdx,1);
    // }

    // return res.redirect('back');
    let id= req.query.id;
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log("error");
            return;
        }
        console.log("deleted id",req.query.id)
        return res.redirect('back');
    })




});


app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    console.log('my express server is running on port:',port);
});
