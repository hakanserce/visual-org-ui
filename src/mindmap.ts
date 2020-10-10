import * as MAPJS from  'mindmup-mapjs'
import * as $ from 'jquery'
import * as themeProvider from './theme'
import {ThemeProcessor} from 'mindmup-mapjs-layout'
import {content} from 'mindmup-mapjs-model'


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


export interface MindMap {
    readonly currentNode: MindMapNode
}

export interface MindMapNode {
    readonly mindMap: MindMap
    readonly isRoot: boolean
    readonly parent: MindMapNode
    addSubNode(): void
}

const SOURCE = 'visal-org-ui'

class MindMupMindMapImpl implements MindMap {
    private mapModel: any
    private idea: any

    constructor() {
        let container = $('#container')
        let initialMap = require('./initial-map.json')
        this.mapModel = new MAPJS.MapModel(MAPJS.DOMRender.layoutCalculator, [])
        this.idea = content(initialMap)
        $('#themecss').themeCssWidget(themeProvider, new ThemeProcessor(), this.mapModel);
        container.domMapWidget(console, this.mapModel, false);
        $('body').mapToolbarWidget(this.mapModel);
        this.mapModel.setIdea(this.idea);
        $('#linkEditWidget').linkEditWidget(this.mapModel);
        window.mapModel = this.mapModel;
        $('.arrow').click(function () {
            $(this).toggleClass('active');
        });
    }

    get currentNode(): MindMapNode {
        return new MindMupMindMapNodeImpl(this, this.idea, this.mapModel, this.mapModel.getCurrentlySelectedIdeaId())
    }

}

class MindMupMindMapNodeImpl implements MindMapNode {
    readonly mindMap: MindMupMindMapImpl

    private nodeId: any
    private idea: any
    private mapModel: any


    constructor(mindMap: MindMupMindMapImpl, idea: any, mapModel: any, nodeId: any) {
        this.mindMap = mindMap
        this.idea = idea
        this.mapModel = mapModel
        this.nodeId = nodeId
    }

    addSubNode(): void {
       this.mapModel.addSubIdea(SOURCE, this.nodeId);
    }

    get isRoot(): boolean {
       return this.idea.isRootNode(this.nodeId)
    }

    get parent(): MindMapNode {
        return new MindMupMindMapNodeImpl(this.mindMap, this.idea, this.mapModel,  this.idea.findParent(this.nodeId).id)
    }
}

export function initMindMap(): MindMap {
    return new MindMupMindMapImpl();
}
