/*
/!* GET home page. *!/
/!*exports.index = function(req, res){
  // res.render('index');
};*!/
module.exports=function (app) {
    var users={};
    app.get('/', function (req,res) {
      /!*  if(req.cookies.user==null)
        {
            res.redirect('/signin');
        }
        else
        {
            res.redirect('/client');
        }*!/
      res.redirect('/client');
    });
    app.get('/client',function (req,res) {
        res.sendfile('views/index.html');
    })
    app.post('/client',function (req,res) {
        res.sendfile('views/index.html');
    })


}*/
