// https://github.com/Famous/examples/blob/master/src/examples/views/GridLayout/

var Transform = require('famous/core/Transform');


famousCmp.ready(function(require) {
    famousCmp.registerView('GridLayout', famous.views.GridLayout);
    famousCmp.registerView('ContainerSurface', famous.surfaces.ContainerSurface);
});

Template.views_GridLayout.items = function() {
    return Items.find({}, {sort: {name: 1}, limit: 8});
}

var queue = [];
Template.gridItem.rendered = function() {
    var modifier = famousCmp.dataFromTemplate(this).modifier;

    modifier.setTransform(
        Transform.translate(500,500)
    );

    queue.push(function() {
        modifier.setTransform(
            Transform.translate(0,0),
            //springTransition
            { duration : 1000, curve: 'easeInOut' }
        );
    });
}

Meteor.setInterval(function() {
    if (queue.length)
        queue.shift()();
},100);

var springTransition = {
    method: "spring",
    period: 100,
    dampingRatio: .1,
    velocity: 0.005
}
