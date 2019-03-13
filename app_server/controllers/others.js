/* GET 'about' page */
module.exports.about = function(req, res, next) {
  res.render('about-text', { 
	  title: 'Sobre Loc8r',
	  conteudo: 'Loc8r foi criado para ajudar pessoas encontrar lugares para sentar, usar o WiFi e degustar do que estes tem a oferecer.\n\n Isto faz parte de um estudo sobre MEAN, que oferece a integracao entre o banco de dados NoSQL MongoDB, framework Express do Node.js, framework Angular e o proprio Node.js, utilizando CSS com Bootstrap e templates Jade.\n\nEsse estudo foi criado por Simon Holmes no seu livro MEAN Definitivo com Mongo, Express, Angular e Node.'
  });
};