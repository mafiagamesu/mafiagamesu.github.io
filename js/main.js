/**
 * Created by Anton on 30.05.17.
 */
(function () {
	window.onload = function () {
		var gameIsRun = false;
		for(var item in window.localStorage) {
			if(item.indexOf('prefs') !== -1 && window.localStorage[item].match("game-screen-data")) {
				gameIsRun = true;
				// console.log(window.localStorage[item])
			}
		}

		if(!gameIsRun) {
			var loader = document.querySelector('.popup-loader');
			var parentLoader =loader.parentNode;
			parentLoader.removeChild(loader);
			var desc = document.querySelector('.b-description-overlay');
			desc.classList += ' active';
			var parentDesc = desc.parentNode;
			desc.addEventListener('click', function () {
				parentDesc.removeChild(this);
				var buttons = document.getElementsByClassName('b-download-game-item');
				for (var i = 0; i < buttons.length; i++) {
					var btn = buttons[i];
					showButton(btn, i);
				}
			});


		} else {
			window.mafia.core.run();
		}
	};

	function showButton(btn, index) {
		setTimeout(function () {
			btn.className += " active";
			btn.addEventListener('click', function () {
				var type = btn.getAttribute("ga-id");
				if(window.ga) {
					window.ga('send', 'event', 'link', 'click', type);
				}
				if(type !== "download-android") window.mafia.core.run();
			});
		}, index * 200);
	};

})();