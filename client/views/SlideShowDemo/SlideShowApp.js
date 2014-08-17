/**
 * Created by cleliodpaula on 16/8/14.
 */
var Utility = require('famous/utilities/Utility');
Utility.loadURL(SlideData.getUrl(), initApp);

function initApp(data) {

    // parses out reponse data and retrieves array of urls
    data = SlideData.parse(data);

    Session.setDefault('dataApp', data);

    for(var i; i< Session.get('dataApp').lenght ; i++){
        Pics.insert({url: Session.get('dataApp')[i]})
    }
}


//Reactivity

Template.AppView.getData = function() { return Session.get('dataApp') };
Template.SlideshowView.getData = function() { return Session.get('dataApp') };

//Reactivity
Session.setDefault('defaultImage', 'https://lh4.googleusercontent.com/-HbYp2q1BZfQ/U3LXxmWoy7I/AAAAAAAAAJk/VqI5bGooDaA/s1178-no/1.jpg');
Template.SlideshowView.getImg = function() { return Session.get('defaultImage'); };
