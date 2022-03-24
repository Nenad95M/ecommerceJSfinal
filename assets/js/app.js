const cartBtn=document.querySelector('.cart-btn');
const closeCartBtn=document.querySelector('.close-cart');
const clearCartBtn=document.querySelector('close-cart');
const cartDOM=document.querySelector('cart');
const cartOverlay=document.querySelector('cart-overlay');
const cartItems=document.querySelector('cart-items');
const cartTotal=document.querySelector('cart-total');
const cartContent=document.querySelector('cart-content');
const productsDOM=document.querySelector('products');

//korpa
class Products{
    async getProducts(){
        try{
           let result=await fetch('assets/Products.json');
           let products=data.items;
          products=products.map(item=>{
              const {product_name, product_price, product_id, product_image}=item;
              return {product_name, product_price, product_id, product_image};
          });
          return products;
           
        }
        catch(error){
            console.log(error);
        }
    }
}
class UI{
    displayProducts(products){
     let result='';
     products.forEach(product => {
         result+=`
         <!--Jedan proizvod-->
        <article class="products">
         <div class="img-container">

         </div>
         </article>
         `
     });
    }
}