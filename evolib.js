var evolib_spec = {"load":function(){
    console.log("evolib loading...");

    this.genome_funcs = require('./modules/genome.js');
    this.circuit_funcs = require("./modules/circuit.js");
    this.dsp_funcs = require("./modules/dsp.js");


    try {
    var context = new (window.AudioContext || window.webkitAudioContext)();
    this.dsp_funcs.setContext(context);
	} catch(error){
		console.log("Error initialisting audio context. Evollib will not work...");
	}


	// define the top level functions:

	/** create new population of sounds. 
	* size is how many circuits to generate
	* synthesis model is the type of synthesis. Available models: 'modular', 'fm', 'physical_tube'
	*/
	this.newPopulation = function(size, synthesis_model){}
	/** listen to a particular sound */
	this.listen = function(ind){}
	/** listen at a particular x, y position in the circuit, where x, y are in the range 0-1*/
	this.setListeningPosition = function(x, y){}
	/** play the first circuit then interpolate the parameters to the second circuit in time seconds*/
	this.listenInterpolate = function(ind1, ind2, time){}
	/** stop playing the sound */
	this.stopListening = function(){}
	/** select an individual for breeding */
	this.select = function(ind){}
	/** unselect an individual for breeding */
	this.unselect = function(ind){}
	/** breed from the currently selected individuals. the modes object specifies how the breeding should work
	* {'point', 'grow', 'shrink', 'cross'}. If not specified, does a bit of everything
	*/
	this.breed = function(modes){}
	/** returns a nodes and edges description of the circuit, suitable foe visualisation 
	* e.g. {nodes:[{id:10, type:'sin', x:0.1, y:0.6}, ... ], 
	*       edges:[{from:10, to:2, bias:0.4}, ...]}
	*/
	this.getSynthGraph = function(){}

	/** attempt to match the sent sound which is an audio file
	*/
	this.matchSound = function(audio_file){}


    return this;
}}
// put Evolib singleton into global scope
window.Evolib = evolib_spec.load();
