famousCmp.ready(function(require) {
    famousCmp.registerView('GridLayout', famous.views.GridLayout);
    famousCmp.registerView('ContainerSurface', famous.surfaces.ContainerSurface);
});

famousCmp.registerView('View', require("famous/core/View"));

famousCmp.ready(function(require) {
    
//    var SpringTransition = famous.transitions.SpringTransition;
//    var Transitionable = famous.transitions.Transitionable;
    var Transform = famous.core.Transform;
    var Easing = famous.transitions.Easing;
    var StateModifier = famous.modifiers.StateModifier;


});

var springTransition = {
    method: "spring",
    period: 100,
    dampingRatio: .1,
    velocity: 0.005
}


Template.es_surface11.events({
    "click": function(event, tpl) {
        uhaa = tpl;
        var famousData = famousCmp.dataFromTemplate(tpl);
        famousData.parent.modifier.setTransform(
            famous.core.Transform.translate(100, 300, 0),
            { duration : 800, curve: famous.transitions.Easing.outElastic },
            function() {
//                famousData.parent.setContent('finished');
            }
        );
    }
});

Session.setDefault('showCode', false);
UI.registerHelper('showCode', function() {
    return Session.get('showCode');
});
Template.codeButton.events({
    'click button': function() {
        Session.set('showCode', !Session.get('showCode'));
    }
});


// TODO, put flipper in it's own context
function perspectiveZero() {
    famousCmp.mainCtx.setPerspective(0);
}

Template.views_Flipper_front.events({
    'click': function(event, tpl) {
        var famousData = famousCmp.dataFromTemplate(tpl);
        famousCmp.mainCtx.setPerspective(500);
        famousData.parent.viewNode
            .setAngle(Math.PI, { curve : 'easeOutBounce', duration : 500},
            perspectiveZero);
    }
});

Template.views_Flipper_back.events({
    'click': function(event, tpl) {
        var famousData = famousCmp.dataFromTemplate(tpl);
        famousCmp.mainCtx.setPerspective(500);
        famousData.parent.viewNode
            .setAngle(0, { curve : 'easeOutBounce', duration : 500},
            perspectiveZero);
    }
});
