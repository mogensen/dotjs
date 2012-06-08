$(function() {
	// Auto click on the "Click here to play"-button
	if (window.location.pathname.substr(0,11) == "/open/cale/") {
		document.location.href = jQuery("#popup2-middle .myButton").attr('href');
		return;
	}

	// Gray out the pages i dont like
	if (window.location.pathname.substr(0,9) == "/episode/") {
		$('.site').each(function (i) {
			if (this.innerText.substr(-3) != ".in") {
				this.style.color = "gray";
			}
		})
	}
});
