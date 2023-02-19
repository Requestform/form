// Firebase Realtime Databaseに接続する
var database = firebase.database();

// メッセージを読み込んで表示する
database.ref("messages").on("child_added", function(snapshot) {
	var message = snapshot.val();
	var name = message.name;
	var text = message.text;
	var messageElement = document.createElement("div");
	messageElement.innerText = name + ": " + text;
	document.getElementById("messagesDiv").appendChild(messageElement);
});

// メッセージを送信する
document.getElementById("messageForm").addEventListener("submit", function(event) {
	event.preventDefault();
	var nameInput = document.getElementById("nameInput");
	var messageInput = document.getElementById("messageInput");
	var name = nameInput.value;
	var text = messageInput.value;
	if (name === "" || text === "") {
		alert("名前とメッセージを入力してください。");
	} else {
		database.ref("messages").push({
			name: name,
			text: text
		});
		nameInput.value = "";
		messageInput.value = "";
	}
});