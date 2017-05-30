/**
 * Created by Anton on 30.05.17.
 */
(function () {
	window.onload = function () {
		// mafia.core.run();
		console.log('loaded');
		var buttons = document.getElementsByClassName('b-download-game-item');
		for (var i = 0; i < buttons.length; i++) {
			var btn = buttons[i];
			btn.className += " active";
			btn.addEventListener('click', function () {
				var type = btn.getAttribute("ga-id");
				if(window.ga) {
					window.ga('send', 'event', 'link', 'click', type);
				}
				if(type !== "download-android") mafia.core.run();
			});
		}
	}
})();