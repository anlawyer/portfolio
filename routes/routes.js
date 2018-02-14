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

  app.get('/gottago', function (req, res) {
    res.render('pages/gottago2');
  });

  app.get('/timeline', function (req, res) {
    res.render('pages/timeline');
  });

  app.get('/games', function (req, res) {
    res.render('pages/games');
  });
};
