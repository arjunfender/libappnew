const express = require('express');
var authorsRouter = express.Router();
function router(nav){
var authors =
[
    {
        name:"M. Mukundan",
        genre:"classic",
        era:"classic Era",
        description:"kerala famous writer",
        country:"India",
    },
    {
        name:"M. M. Sukumaran ",
        genre:"classic",
        era:"classic Era",
        description:"kerala famous writer",
        country:"India",
    },
    {
        name:"O. Chandhu Menon ",
        genre:"classic",
        era:"classic Era",
        description:"kerala famous writer",
        country:"India",
    },
    {
        name:"Thakazhi Sivasankara Pillai ",
        genre:"classic",
        era:"classic Era",
        description:"kerala famous writer",
        country:"India",
    },
    {
        name:"C. V. Sreeraman",
        genre:"classic",
        era:"classic Era",
        description:"kerala famous writer",
        country:"India",
    },

]

authorsRouter.route('/')
.get(function(req,res){
    res.render('authors',
        {nav,
        title:"Authors",
        authors
    }
)
});


authorsRouter.route('/:id')
.get((req,res)=>{
    const id = req.params.id;

    res.render(
        'author',
        {
            nav,
            title: "Author Details",
            author: authors[id]
        }
    )
    
});

return authorsRouter;
}
module.exports =  router;