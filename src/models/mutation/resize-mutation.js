import Mutation from './mutation';

export default class ResizeMutation extends Mutation {
    constructor({ type = 'Resize', target }) {
        super(type, target);
        this.oldStyle = target.getAttribute('style');
    }

    onResizeEnd() {
        this.newStyle = this.target.getAttribute('style');
    }

    redo() {
        this.target.setAttribute('style', this.newStyle);
    }

    undo() {
        this.target.setAttribute('style', this.oldStyle);
    }
}