"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMindMap = void 0;
var MAPJS = require("mindmup-mapjs");
var $ = require("jquery");
var themeProvider = require("./theme");
var mindmup_mapjs_layout_1 = require("mindmup-mapjs-layout");
var mindmup_mapjs_model_1 = require("mindmup-mapjs-model");
var SOURCE = 'visal-org-ui';
var MindMupMindMapImpl = /** @class */ (function () {
    function MindMupMindMapImpl() {
        var container = $('#container');
        var initialMap = require('./initial-map.json');
        this.mapModel = new MAPJS.MapModel(MAPJS.DOMRender.layoutCalculator, []);
        this.idea = mindmup_mapjs_model_1.content(initialMap);
        $('#themecss').themeCssWidget(themeProvider, new mindmup_mapjs_layout_1.ThemeProcessor(), this.mapModel);
        container.domMapWidget(console, this.mapModel, false);
        $('body').mapToolbarWidget(this.mapModel);
        this.mapModel.setIdea(this.idea);
        $('#linkEditWidget').linkEditWidget(this.mapModel);
        window.mapModel = this.mapModel;
        $('.arrow').click(function () {
            $(this).toggleClass('active');
        });
    }
    Object.defineProperty(MindMupMindMapImpl.prototype, "currentNode", {
        get: function () {
            return new MindMupMindMapNodeImpl(this, this.idea, this.mapModel, this.mapModel.getCurrentlySelectedIdeaId());
        },
        enumerable: false,
        configurable: true
    });
    return MindMupMindMapImpl;
}());
var MindMupMindMapNodeImpl = /** @class */ (function () {
    function MindMupMindMapNodeImpl(mindMap, idea, mapModel, nodeId) {
        this.mindMap = mindMap;
        this.idea = idea;
        this.mapModel = mapModel;
        this.nodeId = nodeId;
    }
    MindMupMindMapNodeImpl.prototype.addSubNode = function () {
        this.mapModel.addSubIdea(SOURCE, this.nodeId);
    };
    Object.defineProperty(MindMupMindMapNodeImpl.prototype, "isRoot", {
        get: function () {
            return this.idea.isRootNode(this.nodeId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MindMupMindMapNodeImpl.prototype, "parent", {
        get: function () {
            return new MindMupMindMapNodeImpl(this.mindMap, this.idea, this.mapModel, this.idea.findParent(this.nodeId).id);
        },
        enumerable: false,
        configurable: true
    });
    return MindMupMindMapNodeImpl;
}());
function initMindMap() {
    return new MindMupMindMapImpl();
}
exports.initMindMap = initMindMap;
