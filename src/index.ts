import "./static/css/mapjs-default-styles.css"
import * as $ from 'jquery'
import {initMindMap, MindMap, MindMapNode} from './mindmap'

let init = function () {

	window.onerror = window.alert;

	let mindMap: MindMap = initMindMap()


	$('body').keypress(function(event: any){
		let currentNode = mindMap.currentNode
		if (event.ctrlKey == true && event.which == 13) { // return
			currentNode.addSiblingNode()
		} else if (event.ctrlKey == true && event.which == 37) { // left arrow
			currentNode.promote()
		} else if (event.ctrlKey == true && event.which == 39) { // right arrow
			currentNode.demote()
		}
	})


};

document.addEventListener('DOMContentLoaded', init);
