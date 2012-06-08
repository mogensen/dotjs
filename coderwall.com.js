// How to use this:
// // 1. Go to the desired profile page on coderwall, like http://coderwall.com/marcinbunsch
// // 2. Paste this gist in the JS console 
// //
// // You can also probably use this in greasemonkey and dot.js
// //
// // Also, it was tested in Chrome, Firefox and Safari, it probably will 
// // not work in IE, but I just don't care about it ;)
// //
// // UPDATE: Coderwall made changes to the site and I cannot retrieve the achievements, so they are hardcoded, taken from a cached version of the achievements page
//
$(function() {

	var achievements = [{"title":"Epidexipteryx 3","image":"http://cdn.coderwall.com/assets/badges/epidexipteryx3-293437c5cdc96a1fabc5e4ba1be6269d.png","desc":"Have at least three original repo where C++ is the dominant language","alt":"Epidexipteryx3"},{"title":"Epidexipteryx","image":"http://cdn.coderwall.com/assets/badges/epidexipteryx-b17dbd159b5baf18b871b5af71370dd5.png","desc":"Have at least one original repo where C++ is the dominant language","alt":"Epidexipteryx"},{"title":"Desert Locust 3","image":"http://cdn.coderwall.com/assets/badges/desertlocust3-95106c1a364f524127a6c2e30cd707fb.png","desc":"Have at least three original repos where Erlang is the dominant language","alt":"Desertlocust3"},{"title":"Desert Locust","image":"http://cdn.coderwall.com/assets/badges/desertlocust-3775b4b31a7a766036f88014e737106e.png","desc":"Have at least one original repo where Erlang is the dominant language","alt":"Desertlocust"},{"title":"Narwhal 3","image":"http://cdn.coderwall.com/assets/badges/narwhal3-3a1b9493a5dc3575952340f0b740c9ea.png","desc":"Have at least three original repos where Clojure is the dominant language","alt":"Narwhal3"},{"title":"Narwhal","image":"http://cdn.coderwall.com/assets/badges/narwhal-616b7bf500194350a2063483a2533b5e.png","desc":"Have at least one original repo where Clojure is the dominant language","alt":"Narwhal"},{"title":"Honey Badger 3","image":"http://cdn.coderwall.com/assets/badges/honeybadger3-9543efffb6d734c7e427f6d1009e07d0.png","desc":"Have at least three Node.js specific repos","alt":"Honeybadger3"},{"title":"Honey Badger","image":"http://cdn.coderwall.com/assets/badges/honeybadger-50a63231a612832eef6757fabcc01f67.png","desc":"Have at least one original Node.js-specific repo","alt":"Honeybadger"},{"title":"Cub","image":"http://cdn.coderwall.com/assets/badges/cub-c9d9f3ab0e4c3db389283fda90f1d9c6.png","desc":"Have at least one original jQuery or Prototype open source repo","alt":"Cub"},{"title":"Kona","image":"http://cdn.coderwall.com/assets/badges/coffee-b103909e5482307eb1ddab29a94e09ca.png","desc":"Have at least one original repo where CoffeeScript is the dominant language","alt":"Coffee"},{"title":"Raven","image":"http://cdn.coderwall.com/assets/badges/raven-ecddc7a6d0c5f8709a61367e66d95c5f.png","desc":"Have at least one original repo where some form of shell script is the dominant language","alt":"Raven"},{"title":"Walrus","image":"http://cdn.coderwall.com/assets/badges/walrus-afb03ee2081181fd46740fe41cf6a254.png","desc":"The walrus is no stranger to variety. Use at least 4 different languages throughout all your repos","alt":"Walrus"},{"title":"Nephila Komaci 3","image":"http://cdn.coderwall.com/assets/badges/nephilakomaci3-a4a50c011742453b47043012ab798020.png","desc":"Have at least three original repos where PHP is the dominant language","alt":"Nephilakomaci3"},{"title":"Nephila Komaci","image":"http://cdn.coderwall.com/assets/badges/nephilakomaci-7c8d8561f6189feb101ef2c6f61b08c1.png","desc":"Have at least one original repos where PHP is the dominant language","alt":"Nephilakomaci"},{"title":"Mongoose 3","image":"http://cdn.coderwall.com/assets/badges/mongoose3-1f528030af8b46bf174a1a7e3a7db782.png","desc":"Have at least three original repos where Ruby is the dominant language","alt":"Mongoose3"},{"title":"Mongoose","image":"http://cdn.coderwall.com/assets/badges/mongoose-58cc728c2fc9af62e48c81a03029b23d.png","desc":"Have at least one original repo where Ruby is the dominant language","alt":"Mongoose"},{"title":"Python 3","image":"http://cdn.coderwall.com/assets/badges/python3-6293182f14dcc759727cf49c016e27be.png","desc":"Have at least three original repos where Python is the dominant language","alt":"Python3"},{"title":"Python","image":"http://cdn.coderwall.com/assets/badges/python-4a05de054fc216dd278d4c45717e5d41.png","desc":"Would you expect anything less? Have at least one original repo where Python is the dominant language","alt":"Python"},{"title":"Velociraptor 3","image":"http://cdn.coderwall.com/assets/badges/velociraptor3-337f3c7a6eb63a08c3744c8fefa6a3ae.png","desc":"Have at least three original repos where Perl is the dominant language","alt":"Velociraptor3"},{"title":"Velociraptor","image":"http://cdn.coderwall.com/assets/badges/velociraptor-39f93e4fea64b9958048f760937023b6.png","desc":"Have at least one original repo where Perl is the dominant language","alt":"Velociraptor"},{"title":"T-Rex 3","image":"http://cdn.coderwall.com/assets/badges/trex3-fa9d74cb59dccbe19778ebdd209e9854.png","desc":"Have at least three original repos where C is the dominant language","alt":"Trex3"},{"title":"T-Rex","image":"http://cdn.coderwall.com/assets/badges/trex-cadf07336428935edcb2f5fbc3684576.png","desc":"Have at least one original repo where C is the dominant language","alt":"Trex"},{"title":"Lab 3","image":"http://cdn.coderwall.com/assets/badges/labrador3-a8e9ddd1876f0dce7e7bf449b711252f.png","desc":"Have at least three original repos where C# is the dominant language","alt":"Labrador3"},{"title":"Lab","image":"http://cdn.coderwall.com/assets/badges/labrador-551fdb411d1d193c62ebd37010df0322.png","desc":"Have at least one original repo where C# is the dominant language","alt":"Labrador"},{"title":"Komodo Dragon","image":"http://cdn.coderwall.com/assets/badges/komododragon3-5dd0897120f882137ed8c0e8d72715b3.png","desc":"Have at least three original repos where Java is the dominant language","alt":"Komododragon3"},{"title":"Komodo Dragon","image":"http://cdn.coderwall.com/assets/badges/komododragon-a3c9e164e154f3b09f5f2efac009cd51.png","desc":"Have at least one original repo where Java is the dominant language","alt":"Komododragon"},{"title":"Bear 3","image":"http://cdn.coderwall.com/assets/badges/bear3-4bbef340bc1e95b3efc66469e83cb1f2.png","desc":"Have at least three original repos where Objective-C is the dominant language","alt":"Bear3"},{"title":"Bear","image":"http://cdn.coderwall.com/assets/badges/bear-77297682d72716ea4cf2f0789ba9a522.png","desc":"Have at least one original repo where Objective-C is the dominant language","alt":"Bear"},{"title":"Ashcat","image":"http://cdn.coderwall.com/assets/badges/moongoose-rails-130b5242d366fd51dfc261a736aa5a91.png","desc":"Make Ruby on Rails better for everyone by getting a commit accepted","alt":"Moongoose-rails"},{"title":"Philanthropist","image":"http://cdn.coderwall.com/assets/badges/philanthropist-afa79d00c9f723f3e386cd5c5b23ecb1.png","desc":"Truly improve developer quality of life by sharing at least 50 individual open source projects","alt":"Philanthropist"},{"title":"Altruist","image":"http://cdn.coderwall.com/assets/badges/altrustic-6a10927092c4aca33a4800f57659f25f.png","desc":"Increase developer well-being by sharing at least 20 open source projects","alt":"Altrustic"},{"title":"Kilo of Lemmings","image":"http://cdn.coderwall.com/assets/badges/1000lemming-52159c2987c65ed9df43e7ba78d2c5d3.png","desc":"Establish a space in the open source hall of fame by getting at least 1000 devs to watch a project","alt":"1000lemming"},{"title":"Lemmings 100","image":"http://cdn.coderwall.com/assets/badges/100lemming-97f23f9b1269ea8bc314e2bcdcdd5970.png","desc":"Write something great enough to have at least 100 watchers of the project","alt":"100lemming"},{"title":"Forked 100","image":"http://cdn.coderwall.com/assets/badges/forked100-5db2b04147dbb4d1e8a56a72113a747d.png","desc":"Have a seriously badass project that's been forked at least 100 times","alt":"Forked100"},{"title":"Forked 50","image":"http://cdn.coderwall.com/assets/badges/forked50-7a70c1970d41e14cebc9253b20e3c961.png","desc":"having a project with a thriving community of users that's been forked at least 50 times.","alt":"Forked50"},{"title":"Forked 20","image":"http://cdn.coderwall.com/assets/badges/forked20-edee6b24f90d970382e4933977315693.png","desc":"having an established project that's been forked at least 20 times.","alt":"Forked20"},{"title":"Forked","image":"http://cdn.coderwall.com/assets/badges/forked1-3ab7151a48c89d99a36cf68e0b569a14.png","desc":"Have a project valued enough to be forked by someone else","alt":"Forked1"},{"title":"Charity","image":"http://cdn.coderwall.com/assets/badges/charity-bf61e713137d910534ff805f389bcffb.png","desc":"Fork and commit to someone's open source project in need","alt":"Charity"},{"title":"Octopussy","image":"http://cdn.coderwall.com/assets/badges/octopussy-5caf47b53fcd4921b08a51f18286799b.png","desc":"Have a repo followed by a member of the GitHub team","alt":"Octopussy"},{"title":"Changelog'd","image":"http://cdn.coderwall.com/assets/badges/changelogd-44069c3514055d0bb318afb0aba1ebd5.png","desc":"Have an original repo featured on the Changelog show","alt":"Changelogd"},{"title":"Opabinia","image":"http://cdn.coderwall.com/assets/badges/earlyadopter-68e5cd058ab435d1c41459c1971a811c.png","desc":"Started social coding on GitHub within 6 months of its first signs of life","alt":"Earlyadopter"}]

	achievements.push({"title":"Castor","desc":'Create an accomplishment using the words "created", "coded", "built", or "developed" to earn Castor, the first personal accomplishment achievement.', "image":"http://cdn.coderwall.com/assets/badges/beaver-bc8ed52cb6a4f143516b0a287de90f88.png",alt:"Beaver"})

	$.each(achievements, function(index, item) {
		if ($('.your-achievements ul img[alt="'+item.alt+'"]').length > 0) return;
		var li = $('<li />')
		var img = $('<img />').attr('src', item.image).attr('title', item.desc).addClass('tip').css({opacity:0.2});
	li.append(img)
		$('.your-achievements ul').append(li)
	});
$(".tip").tipTip({maxWidth: "auto", edgeOffset: 10});

});