

import CanvasView from 'demoPage/views/CanvasView';

export default function() {
    const model = new Backbone.Model({
        DatalistValue: {
            id: 'task.1',
            text: 'Test Reference 1'
        }
    });

    const view = new Core.form.editors.DatalistEditor({
        model,
        key: 'DatalistValue',
        autocommit: true,
        showEditButton: true,
        showAddNewButton: true,
        showCheckboxes: true,
        maxQuantitySelected: 1,
        collection: new Core.form.editors.reference.collections.DemoReferenceCollection(),
        fetchFiltered: true
    });

    return new CanvasView({
        view,
        presentation: "{ id: '{{DatalistValue.id}}', text: '{{DatalistValue.text}}' }",
        isEditor: true
    });
}
