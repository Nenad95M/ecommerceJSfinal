const cartBtn=document.querySelector('.cart-btn');
const closeCartBtn=document.querySelector('.close-cart');
const clearCartBtn=document.querySelector('close-cart');
const cartDOM=document.querySelector('cart');
const cartOverlay=document.querySelector('cart-overlay');
const cartItems=document.querySelector('cart-items');
const cartTotal=document.querySelector('cart-total');
const cartContent=document.querySelector('cart-content');
const productsDOM=document.querySelector('products-center');

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
             <img src=${product.product_image} alt="product" class="product-img"/>
             <button class="bag-btn" data-id=${product.product_id}>
             <i class="fas fa-shoping-cart"></i>
             Add to cart
             </button>
         </div>
         <h3>${product.product_name}</h3>
         <h4>${product.product_price}</h4>
         </article>
         `
     });
     productsDOM.innerHTML=result;
    }
}