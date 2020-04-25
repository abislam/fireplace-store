Task: As your final Project, you will be creating a multi-page react shopping website.

Your web app should be three pages. Provide a nav at the top of your page with links to each page. Should highlight the current link of the page you are on

Store Page '/store'
	Lists a least 9 products.
		Default 9 products need to have images
		Products have name, image, stock and price values
		Each product's image is only shown
			If there is no image, let the users know there is no image
		If an item's stock is higher than 100, its background color should be red
		If its stock is lower than 10, its background color should be blue
	When I click on a product, it should open a dialog window that only shows that product and its specific information. When I click off the dialog box, it should close the dialog window.
		Image
		Name
		Stock
		Price (numerical value)
		A button that adds this item to the cart.
			Users should be able to place an item into their cart if the stock is not 0
			If the stock is 0, the button should not appear

Cart Page '/cart'
	Shows all items in users cart
		Each item should be shown having its image, name, and price 
		If the item has a stock below 10, write to the store item saying (Low Stock!!!)
		Users should be able to delete the item from their cart
	All of the item's prices should be added up and show the users their total price
	A purchase button
		When clicked, a message should appear saying items purchased. Then return to the store page
		Each item's stock that was in the cart is reduced by 1
		Each item that was in the user's cart is emptied from the cart

Admin Page '/admin'
	Allow the administrator to add an item to the store
	Make sure that when editing or adding a product, the user cannot have any input value set to nothing when attempting to submit
		If one of these values is set to nothing, let the user know they must fill in THAT particular value
