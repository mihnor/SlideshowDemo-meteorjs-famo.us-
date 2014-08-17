///**
// * Created by cleliodpaula on 16/8/14.
// */
//var Lightbox = require('famous/views/Lightbox');

famousCmp.ready(function(require) {
    famousCmp.registerView('LightBox',  famous.views.Lightbox);

});

Template.SlideshowView.rendered = function() {
    doo = famousCmp.dataFromTemplate(this);

};



Template.Lightbox.rendered = function() {
//    var boo = famousCmp.dataFromTemplate(this);

};

function _modifierBack() {
    this.surface.setProperties({
        backgroundColor: '#FFFFF5',
        boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'});
    this.surface.setSize([400, 450]);
}