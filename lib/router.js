Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {

    this.route('basic', {
        path: '/'
    });
    this.route('views_GridLayout', {
        path: '/grid'
    });
    this.route('photo', {
        path: '/photo'
    });
    this.route('waitAMinute');
});