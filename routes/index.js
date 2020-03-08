export default routes=(app,Book)=>{
    app.get('/api/books/author/:author',(req,res)=>res.end())
    app.post('/api/books',(req,res)=>{
        const book = new Book()
        book.title = req.body.name
        book.author = req.body.author
        book.published_date = new Date(req.body.published_date)

        book.save((err)=>{
            if(err){
                console.error(err)
                res.json({result:0})
                return
            }
            res.json({result:1})
        })
        res.end()})
    app.put('/api/books/:book_id',(req,res)=>res.end())
    app.delete('/api/books/:book_id',(req,res)=>res.end())
}