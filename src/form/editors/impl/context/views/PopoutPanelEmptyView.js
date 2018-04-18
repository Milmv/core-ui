import template from '../templates/popoutPanelEmpty.html';

export default Marionette.View.extend({
    template: Handlebars.compile(template),

    className: 'popout-panel-empty',

    templateHelpers() {
        return {
            text: Localizer.get('PROCESS.COMMON.VIEW.GRID.EMPTY')
        };
    }
});
