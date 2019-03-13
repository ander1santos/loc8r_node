/* GET 'home' page */
module.exports.homelist = function(req, res, next) {
  res.render('locations-list', { 
	  title: 'Loc8r - Encontre um local para usar wifi',
	  pageHeader: {
		  title: 'Loc8r',
		  strapline: 'Encontre lugares para usar wifi perto de voc&ecirc;!'
	  },
	  painelLateral: "Procurando por wifi e uma cadeira? Loc8r te ajuda a encontrar lugares quando sair. Possivelmente com caf&eacute;, bolo ou snacks? Deixe o Loc8r te ajudar a encontrar o lugar que voc&ecirc; est&aacute; procurando.",
	  locations: [{
		nome: 'Starbucks',
		endereco: 'Rua Haddock Lobo, 586, Sao Paulo, SP',
		rating: 3,
		facilities: ['Bebidas','Comida','Wi-fi Premium'],
		distance: '100m'
	  },{
		  nome: 'Restaurante America',
		  endereco: 'Avenida Paulista, 2295, Sao Paulo, SP',
		  rating: 5,
		  facilities: ['Hamburguer','Shakes','Comida tarde da noite','Wi-fi Premium'],
		  distance: '200m'
	  },{
		  nome: 'Padaria Bella Paulista',
		  endereco: 'Rua Haddock Lobo, 354, Sao Paulo, SP',
		  rating: 4,
		  facilities: ['Padaria','Lanches','Sorvete','Wi-fi Premium'],
		  distance: '350m'
	  }]
  });
};

/* GET 'location info' page */
module.exports.locationInfo = function(req, res, next) {
  res.render('location-info', { 
	  title: 'Loc8r - Detalhes do Local',
	  pageHeader: {title: 'Starbucks'},
	  painelLateral: {
		  context: 'est&aacute; no Loc8r porque tem wifi acess&iacute;vel e espa&ccedil;o para sentar com seu laptop e fazer algum trabalho.',
		  callToAction: 'Se voc&ecirc; gostou de l&aacute; - ou se n&atilde;o gostou - por favor deixe um coment&aacute;rio para ajudar outras pessoas.'
	  },
	  location: {
		  nome: 'Starbucks',
		  endereco: 'Rua Haddock Lobo, 586, Sao Paulo, SP',
		  rating: 3,
		  facilities: ['Bebidas','Comidas','Wi-Fi Premium'],
		  coords: {lat: -23.5579678, lng: -46.6615357},
		  horarioFunc: [{
			  dias: 'Segunda - Sexta',
			  abre: '07:00',
			  fecha: '19:00',
			  fechado: false
		  },{
			  dias: 'Sabado',
			  abre: '08:00',
			  fecha: '17:00',
			  fechado: false
		  },{
			  dias: 'Domingo',
			  fechado: true
		  }],
		  reviews: [{
			  author: 'Simon Holmes',
			  rating: 5,
			  data: '16 Julho 2017',
			  texto: 'Otimo lugar. Nao consigo dizer o suficiente sobre coisas boas de la.'
		  },{
			  author: 'Sid Vicius',
			  rating: 3,
			  data: '16 Junho 2017',
			  texto: 'Estava ok. O cafe nao estava tao bom, mas o wifi estava rapido.'
		  }]
	  }
  });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res, next) {
  res.render('location-review-form', { 
	  title: 'Comentario Franz Cafe no Loc8r',
	  pageHeader: { title: 'Comentario Franz Cafe' }
  });
};