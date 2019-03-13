var mongoose = require('mongoose');

var Loc = mongoose.model('Location');

/* funcao resposta Json */
var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
}

/* POST - cria review */
module.exports.reviewsCreate = function(req, res, next) {
	sendJsonResponse(res, 200, {"status" : "Sucesso"});
};

/* GET - busca por reviewid */
module.exports.reviewsReadOne = function(req, res) {
	if(req.params && req.params.locationid && req.params.reviewid){
		Loc
	     .findById(req.params.locationid)
	     .select('name reviews')
	     .exec(function(err, location) {
	    	 var response, review;
	    	 if(!location){
	    		 sendJsonResponse(res, 404, {"message" : "locationid nao encontrado"});
	    		 return;
	    	 }
	    	 else if(err){
	    		 sendJsonResponse(res, 200, err);
	    		 return;
	    	 }
	    	 else{
	    		 if(location.reviews && location.reviews.length > 0){
	    			 review = location.reviews.id(req.params.reviewid);
	    			 
	    			 if(!review){
	    				 sendJsonResponse(res, 404, {"message" : "reviewid nao encontrado"});
	    			 }
	    			 else{
	    				 response = {
	    						 location : {nome: location.nome, id: req.params.locationid},review: review
	    				 };
	    				 sendJsonResponse(res, 200, response);
	    			 }
	    		 }
	    		 else{
	    			 sendJsonResponse(res, 404, {"message" : "Sem comentarios encontrado"});
	    		 }
	    		  
	    	 }    	 
	     });
	  }
	  else{
		  sendJsonResponse(res, 404, {"message" : "Sem locationid no request"});
	  }
};

/* PUT - altera por reviewid */
module.exports.reviewsUpdateOne = function(req, res, next) {
	sendJsonResponse(res, 200, {"status" : "Sucesso"});
};

/* DELETE - deleta pr reviewid */
module.exports.reviewsDeleteOne = function(req, res, next) {
	sendJsonResponse(res, 200, {"status" : "Sucesso"});
};