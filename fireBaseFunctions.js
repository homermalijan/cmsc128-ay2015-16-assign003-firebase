//data repo from demo
var myDataRef = new Firebase('https://ju4u40r2xpf.firebaseio-demo.com/');

myDataRef.on('child_added', function(snap) {
	var entry = snap.val();
	//display all text
	displayTasks(entry.title, entry.note, entry.done);
});

function displayTasks(title, note, done) {
	//append data to appropriate div
	if(done) $('<div/>').text(title + ": " + note).appendTo($('#doneDiv'));
	else $('<div/>').text(title + ": " + note).appendTo($('#notDoneDiv'));
};

function add(done){
    var note = $('#note').val();
    var title = $('#title').val();
    
    //if one field is empty, return
    if(note.length ==0 || title.length==0) return;

    //reset input fields
    $('#note').val("");
    $('#title').val("");

    //push dependeing on done or not done
	if(done) myDataRef.push({title: title, note: note, done: true});
	else myDataRef.push({title: title, note: note, done: false});
};