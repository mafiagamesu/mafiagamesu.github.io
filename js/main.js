/**
 * Created by Anton on 30.05.17.
 */
(function () {
	window.onload = function () {
		var gameIsRun = false;
		for(const item in window.localStorage) {
			if(item.indexOf('prefs') !== -1 && window.localStorage[item].match("game-screen-data")) {
				gameIsRun = true;
				console.log(window.localStorage[item])
			}
		}

		if(!gameIsRun) {
			const loader = document.querySelector('.popup-loader');
			const parentLoader =loader.parentNode;
			parentLoader.removeChild(loader);
			const desc = document.querySelector('.b-description-overlay');
			const parentDesc = desc.parentNode;
			desc.addEventListener('click', function () {
				parentDesc.removeChild(this);
				var buttons = document.getElementsByClassName('b-download-game-item');
				for (var i = 0; i < buttons.length; i++) {
					const btn = buttons[i];
					setTimeout(function () {
						btn.className += " active";
						btn.addEventListener('click', function () {
							var type = btn.getAttribute("ga-id");
							if(window.ga) {
								window.ga('send', 'event', 'link', 'click', type);
							}
							if(type !== "download-android") window.mafia.core.run();
						});
					}, i * 400);
				}
			});


		} else {
			window.mafia.core.run();
		}
	};
})();