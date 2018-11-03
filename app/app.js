const local_app = function () {};
local_app.prototype.init = function (app) {
   app.get('/page/example', function (req, res) {
      res.redirect('/');
   })
}
module.exports = new local_app();
