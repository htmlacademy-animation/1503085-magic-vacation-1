export default () => {
  let socialBlock = document.querySelector(`.js-social-block`);
  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(`social-block--active`);
  });
  socialBlock.addEventListener(`mouseleave`, function () {
    socialBlock.classList.remove(`social-block--active`);
  });
  const socialList = document.querySelector('.social-block__list');
	socialList.addEventListener('mouseover', function() {
		socialBlock.classList.add('socialBlock--active-color');
		console.log('color')
	});
	socialList.addEventListener('mouseleave', function() {
		socialBlock.classList.remove('socialBlock--active-color');
		console.log('color')
	});
};
