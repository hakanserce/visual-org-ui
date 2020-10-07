/*global require, document, window, console */
const MAPJS = require('mindmup-mapjs'),
	  jQuery = require('jquery'),
	  themeProvider = require('./theme'),
	  ThemeProcessor = require('mindmup-mapjs-layout').ThemeProcessor,
	  initialMap = require('./initial-map'),
	  content = require('mindmup-mapjs-model').content,
	  mapModel = new MAPJS.MapModel(MAPJS.DOMRender.layoutCalculator, []),
	  init = function () {
		  'use strict';
		  const container = jQuery('#container'),
				idea = content(initialMap);

		  window.onerror = window.alert;


		  jQuery('#themecss').themeCssWidget(themeProvider, new ThemeProcessor(), mapModel);
		  container.domMapWidget(console, mapModel, false);
		  jQuery('body').mapToolbarWidget(mapModel);
		  mapModel.setIdea(idea);

		  jQuery('body').keypress(function(event){
			  if (event.ctrlKey == true && event.which == 13) {
				  mapModel.addSubIdea();
			  } else if (event.ctrlKey == true && event.which == 37) { // left arrow
				  mapModel.moveLeft();
			  } else if (event.ctrlKey == true && event.which == 39) { // right arrow
				  mapModel.moveRight();
			  }
		  })


		  jQuery('#linkEditWidget').linkEditWidget(mapModel);
		  window.mapModel = mapModel;
		  jQuery('.arrow').click(function () {
			  jQuery(this).toggleClass('active');
		  });
	  };

document.addEventListener('DOMContentLoaded', init);
