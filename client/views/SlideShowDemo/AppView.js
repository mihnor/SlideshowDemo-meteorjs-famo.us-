/**
 * Created by cleliodpaula on 16/8/14.
 */
var dataApp;


Template.AppView.rendered = function() {
    joo = famousCmp.dataFromTemplate(this);

//    _modifierBack.call(boo);
};

function _modifierBack() {
    this.surface.setProperties({
        backgroundColor: '#FFFFF5',
        boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'});
    this.surface.setSize([400, 450]);
}