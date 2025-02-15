; (function (bili) {
	"use strict";
	var converts = [
		{ // Video
			from: /<a href="(?:https?:\/\/)?(?:www\.)?bilibili\.(?:tv|com)\/video\/av(\d+).*?">.+<\/a>/g,
			to: '<div class="embed-responsive embed-responsive-16by9">' +
				'<iframe allowfullscreen="" scrolling="no" src="//player.bilibili.com/player.html?aid=$1&as_wide=1" ' +
				'style="border:0;height:100%;left:0;position:absolute;width:100%"></iframe></div>'
		},
		{ // Video
			from: /<a href="(?:https?:\/\/)?(?:www\.)?bilibili\.(?:tv|com)\/video\/BV(\S+).*?">.+<\/a>/g,
			to: '<div class="embed-responsive embed-responsive-16by9">' +
				'<iframe allowfullscreen="" scrolling="no" src="//player.bilibili.com/player.html?bvid=$1&as_wide=1" ' +
				'style="border:0;height:100%;left:0;position:absolute;width:100%"></iframe></div>'
		},
		{ // Video
			from: /<a href="(?:https?:\/\/)?(?:www\.)?bilibili\.(?:tv|com)\/video\/bv(\S+).*?">.+<\/a>/g,
			to: '<div class="embed-responsive embed-responsive-16by9">' +
				'<iframe allowfullscreen="" scrolling="no" src="//player.bilibili.com/player.html?bvid=$1&as_wide=1" ' +
				'style="border:0;height:100%;left:0;position:absolute;width:100%"></iframe></div>'
		},
		{
			// b23 video (short url)
			// eg: https://b23.tv/av*****
			from: /<a href="(?:https?:\/\/)?(?:www\.)?b23\.(?:tv|com)\/av(\d+).*?">.+<\/a>/g,
			to: '<div class="embed-responsive embed-responsive-16by9">' +
				'<iframe allowfullscreen="" scrolling="no" src="//player.bilibili.com/player.html?aid=$1&as_wide=1" ' +
				'style="border:0;height:100%;left:0;position:absolute;width:100%"></iframe></div>'
		},
		{
			// b23 video (short url)
			// eg: https://b23.tv/bv*****
			from: /<a href="(?:https?:\/\/)?(?:www\.)?b23\.(?:tv|com)\/BV(\S+).*">.+<\/a>/g,
			to: '<div class="embed-responsive embed-responsive-16by9">' +
				'<iframe allowfullscreen="" scrolling="no" src="//player.bilibili.com/player.html?bvid=$1&as_wide=1" ' +
				'style="border:0;height:100%;left:0;position:absolute;width:100%"></iframe></div>'
		},
		{
			// b23 video (short url)
			// eg: https://b23.tv/bv*****
			from: /<a href="(?:https?:\/\/)?(?:www\.)?b23\.(?:tv|com)\/bv(\S+).*">.+<\/a>/g,
			to: '<div class="embed-responsive embed-responsive-16by9">' +
				'<iframe allowfullscreen="" scrolling="no" src="//player.bilibili.com/player.html?bvid=$1&as_wide=1" ' +
				'style="border:0;height:100%;left:0;position:absolute;width:100%"></iframe></div>'
		}
	];

	bili.parse = function (data, callback) {
		try {
			for (var i = 0; i < converts.length; i++)
				data.postData.content = data.postData.content.replace(converts[i].from, converts[i].to);
			callback(null, data);
		} catch (ex) {
			callback(ex, data);
		}
	};

	bili.addScripts = function (scripts, callback) {
		scripts.push('/plugins/nodebb-plugin-bilibili-bv/lib/bilibili.js');
		callback(null, scripts);
	}
})(module.exports);
