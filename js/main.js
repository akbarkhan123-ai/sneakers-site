// CART OPEN / CLOSE

const cartIcon = document.querySelector('.cart__icon');
const cartBox = document.querySelector('.cart__box');

cartIcon.addEventListener('click', () => {
	cartBox.style.display = cartBox.style.display === 'block' ? 'none' : 'block';
});

// MENU

const menuBtn = document.querySelector('.menu__btn');
const closeBtn = document.querySelector('.close__btn');
const nav = document.querySelector('.header__nav');

menuBtn.addEventListener('click', () => {
	nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
	nav.classList.remove('active');
});

// COUNTER

const plus = document.querySelector('.plus-img');
const minus = document.querySelector('.minus-img');
const zero = document.querySelector('.zero');

let counter = 0;

plus.addEventListener('click', () => {
	counter++;
	zero.textContent = counter;
});

minus.addEventListener('click', () => {
	if (counter > 0) {
		counter--;
		zero.textContent = counter;
	}
});

// IMAGES

const images = ['images/hero/Recsneaker big img.png', 'images/hero/shoe2.png', 'images/hero/shoe3.png', 'images/hero/shoe4.png'];

const mainImg = document.querySelector('.main-shoe-img');
const thumbs = document.querySelectorAll('.hero__item img');

let currentIndex = 0;
let selectedImage = images[0];

thumbs.forEach((img, index) => {
	img.addEventListener('click', () => {
		currentIndex = index;

		mainImg.src = images[index];
		selectedImage = images[index];

		document.querySelectorAll('.hero__item').forEach(item => {
			item.classList.remove('active');
		});

		img.parentElement.classList.add('active');
	});
});

// MOBILE SLIDER

const beforeBtn = document.querySelector('.before-btn');
const afterBtn = document.querySelector('.after-btn');

afterBtn.addEventListener('click', () => {
	currentIndex++;

	if (currentIndex >= images.length) {
		currentIndex = 0;
	}

	mainImg.src = images[currentIndex];
	selectedImage = images[currentIndex];
});

beforeBtn.addEventListener('click', () => {
	currentIndex--;

	if (currentIndex < 0) {
		currentIndex = images.length - 1;
	}

	mainImg.src = images[currentIndex];
	selectedImage = images[currentIndex];
});

// CART

const addToCartBtn = document.querySelector('.btn2');
const cartContent = document.querySelector('.cart__content');
const badge = document.querySelector('.cart__badge');

addToCartBtn.addEventListener('click', () => {
	if (counter === 0) return;

	const total = counter * 125;

	badge.style.display = 'block';
	badge.textContent = counter;

	cartContent.innerHTML = `
		<div class="cart-product">
			<img
				class="cart-product-img"
				src="${selectedImage}"
				alt="shoe"
			>

			<div class="cart-product-info">
				<p>Fall Limited Edition Sneakers</p>

				<span>
					$125.00 x ${counter}
					<b>$${total}.00</b>
				</span>
			</div>

			<img
				class="delete-btn"
				src="images/header/trash.svg"
				alt="delete"
			>
		</div>
		<button class="checkout-btn">
			Checkout
		</button>
	`;

	const deleteBtn = document.querySelector('.delete-btn');
	deleteBtn.addEventListener('click', () => {
		cartContent.innerHTML = `
			<div class="cart__empty">
				Your cart is empty.
			</div>
		`;
		counter = 0;
		zero.textContent = 0;
		badge.style.display = 'none';
	});
});

// POPUP

const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.big-img');
const closePopup = document.querySelector('.close');
const popupLeft = document.querySelector('.popup__left');
const popupRight = document.querySelector('.popup__right');
const popupImgs = document.querySelectorAll('.small__list img');

// OPEN

mainImg.addEventListener('click', () => {
	if (window.innerWidth > 768) {
		popup.style.display = 'flex';
		popupImg.src = images[currentIndex];
	}
});

// CLOSE

closePopup.addEventListener('click', () => {
	popup.style.display = 'none';
});

// NEXT

popupRight.addEventListener('click', () => {
	currentIndex++;
	if (currentIndex >= images.length) {
		currentIndex = 0;
	}
	popupImg.src = images[currentIndex];
	mainImg.src = images[currentIndex];
	selectedImage = images[currentIndex];
});

// PREV

popupLeft.addEventListener('click', () => {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = images.length - 1;
	}
	popupImg.src = images[currentIndex];
	mainImg.src = images[currentIndex];
	selectedImage = images[currentIndex];
});

// SMALL IMAGES

popupImgs.forEach((img, index) => {
	img.addEventListener('click', () => {
		currentIndex = index;
		popupImg.src = images[index];
		mainImg.src = images[index];
		selectedImage = images[index];
	});
});
