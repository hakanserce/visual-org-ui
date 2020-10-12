declare module "mindmup-mapjs" {
    type Id = number
    type Source = string
    type LayoutCalculator = any
    type ThemeSource = any

    let DOMRender: any

    /** From https://raw.githubusercontent.com/mindmup/mapjs/master/src/core/map-model.js */
    class MapModel {
        constructor(selectAllTitles: any, defaultReordermargin: any, optional?: any)
        pause(): void
        resume(): void
        getIdea(): Idea
        isEditingEnabled(): boolean
        getEditingEnabled(): boolean
        setEditingEnabled(value: boolean): void
        getCurrentLayout(): Layout
        getCurrentlySelectedIdeaId(): any
        rebuildRequired(): void
        setIdea(anIdea: Idea, tryKeepingContext?: boolean): void
        setInputEnabled(value: boolean, holdFocus: boolean): void
        getInputEnabled(): boolean
        selectNode(id: Id, force: boolean, appendToActive: boolean): void
        clickNode(id: Id, event: any): void
        findIdeaById(id: Id): Idea
        toggleCollapse(source: Source): void
        collapse(source: Source, doCollapse: boolean): void
        addSubIdea(source: Source, parentId: Id, initialTitle?: string): void
        addSiblingIdeaBefore(source: Source): void
        addSiblingIdea(source: Source, nodeId?: Id, initialText?: string): void
        removeSubIdea(): Idea
        updateTitle(ideaId: Id, title: string, isNew: boolean): void
        editNode(source: Source, shouldSelectAll: boolean, editingNew: boolean): void
        editIcon(source: Source): void
        scaleUp(source: Source): void
        scaleDown(source: Source): void
        scale(source: Source, scaleMultiplier: number, zoomPoint: any): void
        move(source: Source, deltaX: number, deltaY: number): void
        resetView(source: Source): void
        insertUp(source: Source): void
        insertDown(source: Source): void
        insertLeft(source: Source): void
        insertRight(source: Source): void
        moveUp(source: Source): void
        moveDown(source: Source): void
        moveLeft(source: Source): void
        moveRight(source: Source): void
        getSelectedNodeId(): Id
        centerOnNode(id: Id): void
        setLayoutCalculator(calculator: LayoutCalculator): void
        setThemeSource(source: ThemeSource): void



        //link and style methods are not defined yet
        // groupSubIdea methods are not defined yet
        // flip method is not defined
        // attachment methods are not defined
        // icon methods are not defined
        // search method is not defined
        // activated methods are not defined
        // drag/drop methods not defined
        // label generator not defined
        // reorder bounary related methods not defined


    }


    interface Attributes {
        position: any
        style: any
    }

    class Idea {
        id: Id
        title: string
        attr: Attributes
        ideas: Array<Idea>

        setConfiguration(config: any): any
        getSessionKey(): any
        setSessionKey(newSessionKey: any): any
        nextSiblingId(subIdeaId: Id): any
        sameSideSiblingIds(subIdeaId: Id): any
        getAttrById(ideaId: Id, attrName: string): any
        previousSiblingId(subIdeaId: Id): any
        clone(subIdeaId: Id): any
        cloneMultiple(subIdeaIdArray: Array<Id>): any
        calculatePath(ideaId: Id, currentPath: any, potentialParent: any): any
        getSubTreeIds(rootIdeaId: Id): any
        findParent(subIdeaId: Id, parentIdea?: Idea): Idea
        isBatchActive(originSession: any): any
        startBatch(originSession: any): any
        discardBatch(originSession: any): any
        endBatch(originSession: any): any
        execCommand(cmd: any, args: any, originSession: any): any
        batch(batchOp: any): any
        pasteMultiple(parentIdeaId: Id, jsonArrayToPaste: any): any
        paste(/*parentIdeaId, jsonToPaste, initialId*/): any
        flip(/*ideaId*/): any
        initialiseTitle(/*ideaId, title*/): any
        updateTitle(/*ideaId, title*/): any
        addSubIdea(/*parentId, ideaTitle, optionalNewId, optionalAttr*/): any
        removeMultiple(subIdeaIdArray: any): any
        removeSubIdea(/*subIdeaId*/): any
        insertIntermediateMultiple(idArray: any, ideaOptions: any): any
        insertIntermediate(/*inFrontOfIdeaId, title, optionalNewId, optionalAttr*/): any
        changeParent(/*ideaId, newParentId*/): any
        mergeAttrProperty(ideaId: Id, attrName: string, attrPropertyName: string, attrPropertyValue: any): any
        updateAttr(/*ideaId, attrName, attrValue*/): any
        getOrderedSiblingRanks(ideaId: Id, options: any): any
        moveRelative(ideaId: Id, relativeMovement: any, options: any): any
        positionBefore(/*ideaId, positionBeforeIdeaId, parentIdea*/): any
        addLink(/*ideaIdFrom, ideaIdTo*/): any
        removeLink(/*ideaIdOne, ideaIdTwo*/): any
        getLinkAttr(ideaIdFrom: Id, ideaIdTo: Id, name: string): any
        updateLinkAttr(/*ideaIdFrom, ideaIdTo, attrName, attrValue*/): any
        canUndo(): boolean
        canRedo(): boolean
        undo(): void
        redo(): void
        storeResource(/*resourceBody, optionalKey*/): void
        getResource(id: Id): any
        hasSiblings(id: Id): boolean
        isRootNode(id: Id): boolean
        getDefaultRootId(): Id
    }

    type Layout = any
    
}

declare module "mindmup-mapjs-model"
declare module "mindmup-mapjs-layout"
