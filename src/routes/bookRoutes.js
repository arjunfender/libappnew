const express = require('express');
var booksRouter = express.Router();

//*******listing books********* */
function router(nav){
var books = [
    {
        title:"book1",
        genere:"classic",
        author:"akhil",
        image:"img_author1.png",
        content:"The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog "
    },
    {
        title:"book2",
        genere:"action",
        author:"arjun",
        image:"img_author1.png",
        content:"If you’re using Word 95 or lower (or if you’re tired of that quick brown fox), you can use the traditional Latin “Lorem ipsum dolor . . . ,” which has been used as placeholder text for centuries:"

    },
    {
        title:"book3",
        genere:"science ficition",
        author:"shilson",
        image:"img_author1.png",
        content:"The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog "
    },
    {
        title:"book4",
        genere:"industrial",
        author:"unnimukundhan",
        image:"img_author1.png",
        content:"If you’re using Word 95 or lower (or if you’re tired of that quick brown fox), you can use the traditional Latin “Lorem ipsum dolor . . . ,” which has been used as placeholder text for centuries:"
    },
    {
        title:"book5",
        genere:"sdfsdf",
        author:"sadfsdf",
        image:"img_author1.png",
        content:"The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog "

    },
]
//******creating path to /Books page*****   */
booksRouter.route('/')
.get(function(req,res){
    res.render('books',
        {nav:nav,title:"Books",books
        }
    )
});

//****creating routes for single book**_---- */
booksRouter.route('/save')
.post((req,res)=>{
 res.header("Addess-control-Allow-origin", "*");
 res.header('Access-control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    
    console.log(req.body);
})

booksRouter.route('/addbook')
.get((req,res)=>{
    const id = req.params.id;

    res.render(
        'addbook',
        {
            nav,
            title:"Adding New Book"
        }
    )
})
booksRouter.route('/:id')
.get((req,res)=>{
    const id = req.params.id;   //const {id} = req.param;

    res.render(
        'book',
        {
            nav,
            title:"Books",
            book: books[id]
        }
    )   
})

return booksRouter;
}
module.exports =  router;   