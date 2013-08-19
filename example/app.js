// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white',
	layout: "vertical"
});

var label1 = Ti.UI.createLabel({
	text: "lakdsjflkajsdlfkja;lskdjfdlkfjalskdjflkasjdlfkjlakdsjflkja",
	font: {fontSize: "15sp"},
	width: "40dp",
});
var view1 = Ti.UI.createView({
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
})
view1.add(label1);
win.add(view1);

var label2 = Ti.UI.createLabel({
	text: "This is a test value",
	font: {fontSize: "15sp"},
});

var view2 = Ti.UI.createView({
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
})
view2.add(label2);
win.add(view2);

win.open();

// TODO: write your module tests here
var paint = require('com.oxgcp.measureText');
Ti.API.info("module is => " + paint);

if (Ti.Platform.name == "android") {
	Ti.API.info("module width => " + require('com.oxgcp.measureText').measureTextWidth("This is a test value", 15, "sp"));
	Ti.API.info("module height => " + require('com.oxgcp.measureText').measureTextHeight("lakdsjflkajsdlfkja;lskdjfdlkfjalskdjflkasjdlfkjlakdsjflkja", 15, "sp", 40));
}

