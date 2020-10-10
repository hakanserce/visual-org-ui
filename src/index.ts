import "./static/css/mapjs-default-styles.css"
import * as MAPJS from  'mindmup-mapjs'
import * as $ from 'jquery'
import * as themeProvider from './theme'
import {ThemeProcessor} from 'mindmup-mapjs-layout'
import {content} from 'mindmup-mapjs-model'

let initialMap = require('./initial-map.json')
let mapModel = new MAPJS.MapModel(MAPJS.DOMRender.layoutCalculator, [])
let container = $('#container')
let idea = content(initialMap)
const SOURCE = 'visal-org-ui'


declare global {
	interface Window {
		mapModel: any
	}
}

declare global {
	interface JQuery {
		domMapWidget: any
		themeCssWidget: any
		mapToolbarWidget: any
		linkEditWidget: any
	}
}

let isRootNode = function () {
	let currentId = mapModel.getCurrentlySelectedIdeaId();
	return idea.isRootNode(currentId);
}

let getParentNode = function (){
	let currentId = mapModel.getCurrentlySelectedIdeaId();
	return idea.findParent(currentId);

}

let init = function () {

	window.onerror = window.alert;


	$('#themecss').themeCssWidget(themeProvider, new ThemeProcessor(), mapModel);
	container.domMapWidget(console, mapModel, false);
	$('body').mapToolbarWidget(mapModel);
	mapModel.setIdea(idea);

	$('body').keypress(function(event: any){
		if (event.ctrlKey == true && event.which == 13) { // return
			if (isRootNode()) {
				mapModel.addSubIdea(SOURCE);
			} else {
				let parent = getParentNode()
				mapModel.addSubIdea(SOURCE, parent.id);
			}
		} else if (event.ctrlKey == true && event.which == 37) { // left arrow
			if (idea)
				mapModel.moveLeft();
		} else if (event.ctrlKey == true && event.which == 39) { // right arrow
			mapModel.moveRight();
		}
	})


	$('#linkEditWidget').linkEditWidget(mapModel);
	window.mapModel = mapModel;
	$('.arrow').click(function () {
		$(this).toggleClass('active');
	});
};

document.addEventListener('DOMContentLoaded', init);
