
//****creating server usign the express code */
const express = require('express');
const chalk = require('chalk');
const path = require('path');
const bodyparser = require('body-parser')
const cors = require('cors');
//***requring chalk module */


//****require path */



//*****requiring body parser* */

var app = new express();// creating a consructor for the obect for express newwly created


//****for books page****/
var nav =[
    {link:'/', title:'HOME'},
    {link:'/login', title:'Login'},
    {link:'/signup', title:'Sign-Up'},
    {link:'/aboutus', title:'About Us'},
    {link:'/books', title:'Books'},
    {link:'/authors', title:'Authors'},
    {link:'/books/addbook', title:'Add New Book'}
]

//****creating path to new folder for books */ 
const booksRouter = require('./src/routes/bookRoutes')(nav);// &passing nav to book router
const authorsRouter = require('./src/routes/authorRoutes')(nav);

app.use(express.static(path.join(__dirname,"/public")));// to receive css file from the public folder
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended : true}));
///******creating routers using express */
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);



//changing view engine html to Ejs format ,in Rendering format into app set,and app get
app.set('views','./src/views');
app.set('view engine','ejs');





//***for index page */
app.get('/', function(req,res){
    res.render('index',
    ///*****changing navigational bar from HTML to Ejs */
    {nav,title:"Library"
    });                        //render is using instead of sendFile in the above code and passing the data through a Jsonn obeject
});



//*********page will work only this http://localhost:3000/books/single*** */
// booksRouter.route('/single')
// .get((req,res)=>{
//     res.send("sendeddd");
// })

app.listen(3000, function(){
    console.log('listening the port number 3000'+chalk.green('3000'));
});                             //setting the port&callback function for running server and showing some message

//****installing new package chalk usgin sudo install command in terminal */
