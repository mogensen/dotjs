$(function() {
	// I dont wanna wait while they do nothing..
	if (head_title.innerText.substring(0,11).toLowerCase() == "please wait") {
			document.forms[1].submit();
	}

	// Remove the ugly "Download"-button
	$('#downloadbar').remove();
});
