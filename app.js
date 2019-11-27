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
//---------------------------------------------------------
$(".slider-block").slick({
	dots:true
})

let productQuantity = document.querySelectorAll('.quantity')
let minusButton = document.querySelectorAll('.minusButton')	
let plusButton = document.querySelectorAll('.plusButton')	

for (let i = 0; i < plusButton.length; i++){

	plusButton[i].addEventListener("click", function(){
		let prodCount = +productQuantity[i].value
		productQuantity[i].value = prodCount + 1
		if (productQuantity[i].value > 1)  {
				minusButton[i].disabled = false;
		}
	})
	
}
for (let i = 0; i < minusButton.length; i++){

	minusButton[i].addEventListener("click", function(){
		let prodCount = +productQuantity[i].value
		productQuantity[i].value = prodCount - 1

		if (productQuantity[i].value < 2) {
				minusButton[i].disabled = true;
			
		} 
	})
	
}