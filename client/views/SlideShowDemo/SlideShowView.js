///**
// * Created by cleliodpaula on 16/8/14.
// */
//var Lightbox = require('famous/views/Lightbox');

famousCmp.ready(function(require) {
    famousCmp.registerView('LightBox',  famous.views.Lightbox);
    famousCmp.registerView('ContainerSurface', famous.surfaces.ContainerSurface);
});


Template.SlideshowView.showCurrentSlide = function() {
    var slide = Session.get('currentIndex');
//    this.lightbox.show(slide);
};

Template.SlideshowView.rendered = function() {
    doo = famousCmp.dataFromTemplate(this);

};

Template.SlideshowView.pics = function() {
    return Pics.find({}, {sort: {url: 1}, limit: 8});
}
Template.SlideshowView.items = function() {
    return Items.find({}, {sort: {name: 1}, limit: 8});
}

Template.AppView.items = function() {
    return Items.find({}, {sort: {name: 1}, limit: 8});
}


Template.Lightbox.rendered = function() {
//    var boo = famousCmp.dataFromTemplate(this);

};

function _modifierBack() {
    this.surface.setProperties({
        backgroundColor: '#FFFFF5',
        boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'});
    this.surface.setSize([400, 450]);
}