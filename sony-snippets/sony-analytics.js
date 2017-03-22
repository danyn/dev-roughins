<script type="text/javascript">
		var s_pagename = "Sony Homepage";
		var s_template = "usa:Sony Homepage";
		if (typeof window.SonyAnalytics === 'undefined') {
			window.SonyAnalytics = function () {
				this.build = function () {
					var dataLayer = {};
					dataLayer.analytics = {};
					dataLayer.analytics.version = '1';
					dataLayer.analytics.page = {};
					dataLayer.analytics.page.brand = 'US';
					dataLayer.analytics.page.country = 'US';
					dataLayer.analytics.page.language = 'en';
					dataLayer.analytics.page.name = s_pagename;
					dataLayer.analytics.page.omniture_rsid = 'sonygwt-us-prod';
					dataLayer.analytics.page.name = s_pagename;
					dataLayer.analytics.page.section = 'usa';
					dataLayer.analytics.page.template = s_template;
					dataLayer.analytics.page.template_revision = s_template;
					return dataLayer;
				};
			};
		}
		var es_boot = '<script type="text/javascript" async src="//nexus.ensighten.com/sonyglobal/stage/Bootstrap.js"><\/script>';
		if (window.location.hostname.indexOf('sony.com') > -1) {
			es_boot = '<script type="text/javascript" async src="//nexus.ensighten.com/sonyglobal/Bootstrap.js"><\/script>';
		}
		document.write(es_boot);
	</script>