		<script>
					var deviceType = (window.innerWidth > 480 && window.innerWidth < 769) ? {
						isTablet: true
					} : (window.innerWidth > 768 ? {
						isDesktop: true
					} : {
						isPhone: true
					});
					var loadSSTFontForMobile = true
						, loadSSTFontForTablet = true
						, loadSSTFontForDesktop = true;
					window.shouldLoadSSTFonts = (deviceType.isTablet && loadSSTFontForTablet) || (deviceType.isPhone && loadSSTFontForMobile) || (deviceType.isDesktop && loadSSTFontForDesktop);
					var fontType = (function () {
						var supportsWoff2 = (function (win) {
							if (!("FontFace" in win)) return false;
							var f = new win.FontFace('t', 'url(data:application/font-woff2;charset=utf-8;base64,) format("woff2")', {});
							f.load().catch(function () {});
							return f.status == 'loading';
						})(this);

						function requiresTTF() {
							return navigator.userAgent.toLowerCase().match(/android|vita|playstation/g) !== null;
						}
						if (supportsWoff2) {
							return ".woff2";
						}
						else if (requiresTTF()) {
							return ".ttf";
						}
						else {
							return ".woff";
						}
					})();

					function loadFont(fontFamily, url) {
						var font = new FontFace(fontFamily, "url('" + url + fontType + "')");
						font.load();
						document.fonts.add(font);
					}
					if ("FontFace" in window) {
						if (window.shouldLoadSSTFonts) {
							loadFont("SST W01 Roman", "//fonts.sony.net/shf/v31/latinextended/fonts/SSTW02Roman");
							loadFont("SST W01 Medium", "//fonts.sony.net/shf/v31/latinextended/fonts/SSTW02Medium");
						}
						loadFont('Sony-System-Icons', '//fonts.sony.net/shf/icons/system/v20/Sony-System-Icons');
					}
					else {
						var str = [];
						if (window.shouldLoadSSTFonts) {
							str.push("%3Clink rel='stylesheet' href='//fonts.sony.net/shf/v31/latinextended/base.css'%3E");
						}
						str.push("%3Clink rel='stylesheet' href='" + '//fonts.sony.net/shf/icons/system/v20/Sony-System-Icons.css' + "'%3E");
						document.write(decodeURIComponent(str.join('')));
					}
				</script>
				<script>
					if (window.shouldLoadSSTFonts) {
						document.write("<meta class='deferred-css' data-href='//fonts.sony.net/shf/v31/latinextended/extra.css'>");
					}
				</script>