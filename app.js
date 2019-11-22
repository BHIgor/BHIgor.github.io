let productCountEl = document.getElementById("product-count")
let addToCartButtons = document.querySelectorAll(".add-to-cart")

for (let i = 0; i < addToCartButtons.length; i++){
	addToCartButtons[i].addEventListener("click", function () {
		let prevProductCount = +productCountEl.textContent
		productCountEl.textContent = prevProductCount + 1
	})
}

//---------------------------------------------------------

let productsLikeButton = document.querySelectorAll(".like")

for (let i = 0; i < productsLikeButton.length; i++){

	productsLikeButton[i].addEventListener("click", function () {
  		productsLikeButton[i].classList.toggle('likeactive')
	})
}

//---------------------------------------------------------