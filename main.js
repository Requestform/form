// Firebase database reference
var memoRef = firebase.database().ref("memos");

// Get memo list element
var memoList = document.getElementById("memo-list");

// Submit button event listener
document.getElementById("memo-submit").addEventListener("click", function() {
	// Get memo input value
	var memoInput = document.getElementById("memo-input").value;

	// Create new memo object
	var newMemo = memoRef.push();
	newMemo.set({
		content: memoInput
	});

	// Clear memo input field
	document.getElementById("memo-input").value = "";
});

// Listen for new memos added to Firebase database
memoRef.on("child_added", function(data) {
	// Get memo content
	var memoContent = data.val().content;

	// Create memo element
	var memoElement = document.createElement("li");
	memoElement.innerHTML = memoContent;

	// Add memo element to memo list
    memoList.appendChild(memoElement);
});