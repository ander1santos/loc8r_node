var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
	author: String,
	rating: {type: Number, required: true, min:0, max: 5},
	texto: String,
	data: {type: Date, default: Date.now}
});

var horarioFuncSchema = new mongoose.Schema({
	dias: {type: String, required: true},
	abre: String,
	fecha: String,
	fechado: {type: Boolean, required: true}
});

var locationSchema = new mongoose.Schema({
	nome: {type: String, required: true},
    endereco: String,
    rating: {type: Number, "default": 0, min: 0, max: 5},
    facilities: [String],
    coords: {type: [Number], index: '2dsphere'},
    horarioFunc: [horarioFuncSchema],
    reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema);