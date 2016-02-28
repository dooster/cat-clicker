var initialCats = [
	{
		name: 'Bubba Kiss',
		imgSrc: 'img/Bubba-kiss.jpg',
		nicknames: [{nickname: 'Bubba-kiss'}],
		clickCount: 0
	}, {
		name: 'Bubba Insta',
		imgSrc: 'img/Bubba.jpg',
		nicknames: [{nickname: 'bubba-insta'}],
		clickCount: 0
	}, {
		name: 'Cat Hugs',
		imgSrc: 'img/cathug.jpg',
		nicknames: [{nickname: 'cathug'}],
		clickCount: 0
	}, {
		name: 'Kitten Eyes',
		imgSrc: 'img/eyes.jpg',
		nicknames: [{nickname: 'kitten-eyes'}],
		clickCount: 0
	}, {
		name: 'Grumpy Cat',
		imgSrc: 'img/grumpy-cat.jpeg',
		nicknames: [{nickname: 'grumpy-cat'}],
		clickCount: 0
	}, {
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		clickCount: 0,
		nicknames: [
		{nickname: "Tabster"},
		{nickname: "Puke Monster"},
		{nickname: "Fur Face"}
		]
	}
];

var Cat = function(data) {

	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);

	this.title = ko.observableArray([
		"infant", "kitten", "tween", "teen", "adult"
	]);
	this.titles = ko.computed(function() {
		if (this.clickCount() < 10) {
			return this.title()[0];
		}
		else if (this.clickCount() <=19) {
			return this.title()[1];
		}
		else if (this.clickCount() <= 29) {
			return this.title()[2];
		}
		else if (this.clickCount() <= 39) {
			return this.title()[3];
		}
		else {
			return this.title()[4];
		}
	}, this);

};

var ViewModel = function() {
	var self = this;
	//self allows this to reference the view model context

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem))
	});

	this.currentCat = ko.observable( this.catList()[0]);

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
		//says var count=0; count++;
	};
};

ko.applyBindings(new ViewModel());