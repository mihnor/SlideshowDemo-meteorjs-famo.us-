/**
 * Created by cleliodpaula on 16/8/14.
 */

var currentIndex = 0;


var Utility = require('famous/utilities/Utility');
Utility.loadURL(SlideData.getUrl(), initApp);
//currentIndex = 1;




function initApp(data) {

//    alert("hohoho");
    // parses out reponse data and retrieves array of urls
    data = SlideData.parse(data);
//        alert(data.length);
//    Session.setDefault('dataApp', data);
    Session.setDefault('currentIndex',0);

    if(Pics.findOne() == null) {
        for (var i = 0; i < data.length; i++) {
            Pics.insert({url: data[i], id: i});
        console.log("inserindo: " + i);
        }
    }
}


//Reactivity

Template.AppView.getData = function() { return Session.get('dataApp') };
Template.SlideshowView.getData = function() { return Session.get('dataApp') };




//Reactivity
Session.setDefault('defaultImage', 'https://lh4.googleusercontent.com/-HbYp2q1BZfQ/U3LXxmWoy7I/AAAAAAAAAJk/VqI5bGooDaA/s1178-no/1.jpg');
//Template.SlideshowView.getImg = function() { return Session.get('defaultImage'); };

Template.SlideshowView.getIndex = function() {
//    return Session.get('dataApp')[Session.get('currentIndex')];

    return Pics.findOne({id: currentIndex}).url;
};