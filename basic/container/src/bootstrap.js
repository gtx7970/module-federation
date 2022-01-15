import { mount as mountProduct } from 'products/ProductsIndex'
import { mount as mountCart } from 'carts/CartShow'

mountProduct(document.querySelector('#product'))
mountCart(document.querySelector('#cart'))

console.log('container.....')