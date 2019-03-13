var mongoose = require('mongoose');

var Loc = mongoose.model('Location');


/* funcao resposta Json */
var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
}


/* GET busca de estabelecimentos */
module.exports.locationsListByDistance = function(req, res, next) {
  sendJsonResponse(res, 200, {"status" : "Sucesso"});
};

/* POST criacao  de estabelecimento */
module.exports.locationsCreate = function(req, res, next) {
  sendJsonResponse(res, 200, {"status" : "Sucesso"});
};

/* GET busca por locationid */
module.exports.locationsReadOne = function(req, res) {
  if(req.params && req.params.locationid){
	Loc
     .findById(req.params.locationid)
     .exec(function(err, location) {
    	 if(!location){
    		 sendJsonResponse(res, 404, {"message" : "locationid nao encontrado"});
    		 return;
    	 }
    	 else if(err){
    		 sendJsonResponse(res, 200, err);
    		 return;
    	 }
    	 else{
    		 sendJsonResponse(res, 200, location); 
    	 }    	 
     });
  }
  else{
	  sendJsonResponse(res, 404, {"message" : "Sem locationid no request"});
  }
};

/* PUT alteracao por locationid */
module.exports.locationsUpdateOne = function(req, res, next) {
  sendJsonResponse(res, 200, {"status" : "Sucesso"});
};

/* DELETE exclusao por locationid */
module.exports.locationsDeleteOne = function(req, res, next) {
  sendJsonResponse(res, 200, {"status" : "Sucesso"});
};