module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('pages/index');
  });

  app.get('/portfolio', function (req, res) {
    res.render('pages/portfolio');
  });

  app.get('/contact', function (req, res) {
    res.render('pages/contact');
  });

  app.get('/gotta-go-2', function (req, res) {
    res.render('pages/gottago2');
  });
};
