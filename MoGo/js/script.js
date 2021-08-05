'use strict'



//Прилипающий header
window.onscroll = function showHeader() {
	const header = document.querySelector('.header');
	const about = document.querySelector('.about');
	const heigtIntro = about.getBoundingClientRect().top + window.pageYOffset;

	if (window.pageYOffset > 80 && window.pageYOffset < heigtIntro) {
		header.classList.add("header__fixed");
		header.classList.remove("header__fixed-red");
		//console.log(heigtIntro);
	} else if (window.pageYOffset > heigtIntro) {
		header.classList.add("header__fixed");
		header.classList.add("header__fixed-red");
		//console.log(heigtIntro);
	} else if (window.pageYOffset < 80) {
		header.classList.remove("header__fixed-red");
		header.classList.remove("header__fixed");
		//console.log(heigtIntro);
	}

}

//Бургер-меню
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger__item');

if (nav) {
	burger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		burger.classList.toggle('_active');
		nav.classList.toggle('_active');
	});
}

//Прокрутка при клике
const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

			if (nav.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				burger.classList.remove('_active');
				nav.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

//Learn More
const learnMore = document.querySelectorAll('.intro__button[data-goto]');
if (learnMore.length > 0) {
	learnMore.forEach(more => {
		more.addEventListener("click", onLearnMoreClick);
	});

	function onLearnMoreClick(e) {
		const more = e.target;
		if (more.dataset.goto && document.querySelector(more.dataset.goto)) {
			const moreBlock = document.querySelector(more.dataset.goto);
			const moreBlockValue = moreBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

			window.scrollTo({
				top: moreBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

//Works
const worksTitle = document.querySelectorAll(".works__title[data-spoiler]");
if (worksTitle) {

	worksTitle.forEach(title => {
		title.addEventListener("click", showSpoiler)
		//console.log(worksTitle);
	});

	function showSpoiler(e) {
		const more = e.target;



		if (more.dataset.spoiler && document.querySelector(more.dataset.spoiler)) {

			const moreBlock = document.querySelector(more.dataset.spoiler);
			const moreArrow = more.querySelector(more.dataset.arrow);
			//console.log(moreArrow);
			//console.log(moreBlock);
			const worksAbout = document.querySelectorAll(".works__about");

			worksAbout.forEach(about => {
				if (about != moreBlock)
					about.classList.remove("_active");




			});

			const worksArrow = document.querySelectorAll(".works__arrow");
			worksArrow.forEach(arrow => {
				if (arrow != moreArrow)
					arrow.classList.remove("_active");

			});



			moreBlock.classList.toggle("_active");
			moreArrow.classList.toggle("_active");

			moreBlock.style.height = 0 + "px";
			setTimeout(() => {

				moreBlock.style.height = 185 + "px";

			}, 0);

		}



	}
}