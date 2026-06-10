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

// IMAGE SWITCHER

const mainImg = document.querySelector('.main-shoe-img');
const thumbnails = document.querySelectorAll('.hero__item img');

let selectedImage = mainImg.src;

thumbnails.forEach(img => {
	img.addEventListener('click', () => {
		mainImg.src = img.src;
		selectedImage = img.src;

		document.querySelectorAll('.hero__item').forEach(item => {
			item.classList.remove('active');
		});

		img.parentElement.classList.add('active');
	});
});

// CART

const addToCartBtn = document.querySelector('.btn2');
const cartContent = document.querySelector('.cart__content');
const badge = document.querySelector('.cart-badge');

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
