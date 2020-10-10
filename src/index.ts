import "./static/css/mapjs-default-styles.css"
import * as $ from 'jquery'
import {initMindMap, MindMap, MindMapNode} from './mindmap'

let init = function () {

	window.onerror = window.alert;

	let mindMap: MindMap = initMindMap()


	$('body').keypress(function(event: any){
		if (event.ctrlKey == true && event.which == 13) { // return
			let currentNode = mindMap.currentNode
			if (currentNode.isRoot) {
				currentNode.addSubNode()
			} else {
				let parent = currentNode.parent
				parent.addSubNode()
			}
		} else if (event.ctrlKey == true && event.which == 37) { // left arrow
			//TODO move to parent
		} else if (event.ctrlKey == true && event.which == 39) { // right arrow
			//TODO move to previous siblings childs
		}
	})


};

document.addEventListener('DOMContentLoaded', init);
