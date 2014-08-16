///**
// * Created by cleliodpaula on 16/8/14.
// */

var StateModifier = require('famous/modifiers/StateModifier');

var Transform = require('famous/core/Transform');
var Easing = require('famous/transitions/Easing');


famousCmp.ready(function(require) {

    famousCmp.registerView('ImageSurface',  famous.surfaces.ImageSurface);
    famousCmp.registerView('Surface',  famous.core.Surface);

});


Template.Back.rendered = function() {

    var boo = famousCmp.dataFromTemplate(this);
    _modifierBack.call(boo);


};

function _modifierBack() {
    this.surface.setProperties(
        {
        backgroundColor: '#FFFFF5',
            boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'
    }
    );
    this.surface.setSize([400, 450]);
}


Template.Film.rendered = function() {

     goo = famousCmp.dataFromTemplate(this);
    _modifierFilm.call(goo);

};

function _modifierFilm() {

    this.parent.viewNode.options.filmSize = this.parent.viewNode.options.size[0] - 2 * this.parent.viewNode.options.filmBorder;

    this.surface.setProperties(
        {
        backgroundColor: '#222',
            zIndex: 1
    }
    );

     var modifier = this.modifier;
        modifier.setOrigin([0.5, 0]);
        modifier.setAlign([0.5, 0]);
        modifier.setTransform(
        Transform.translate(0, this.parent.viewNode.options.filmBorder, 1)
    );

    this.surface.setSize([this.parent.viewNode.options.filmSize, this.parent.viewNode.options.filmSize]);
}


Template.Pic.rendered = function() {

    soo = famousCmp.dataFromTemplate(this);
    _modifierPic.call(soo);

};

function _modifierPic() {


    var photoSize = this.parent.viewNode.options.filmSize - 2 * this.parent.viewNode.options.photoBorder;

    this.viewNode.setProperties(
        {
            zIndex: 2
        }
    );

    var modifier = this.modifier;
    modifier.setOrigin([0.5, 0]);
    modifier.setAlign([0.5, 0]);
    modifier.setTransform(
        Transform.translate(0, this.parent.viewNode.options.filmBorder + this.parent.viewNode.options.photoBorder, 2)
    );
    this.viewNode.setContent(this.parent.viewNode.options.photoUrl);
    this.viewNode.setSize([photoSize, photoSize]);
}

Template.SlideView.rendered = function() {

//    hoo.viewNode.options.photoUrl = SlideData.defaultImage;

}

