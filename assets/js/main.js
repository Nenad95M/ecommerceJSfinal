const orderData=async()=>{
//api za ordere
let orderUrl="https://extendsclass.com/api/json-storage/bin/addcdbf";
//odgovor na obecanje
const response=await fetch(orderUrl);
//pretvorimo response u objekat iz json-a
const data=await response.json();
//napravimo niz narudzbina
const arrayOfOrders=data.Results;
//uzimamo vrednost kljuca sesije
const c=sessionStorage.getItem("keyPassword");
//iz njegovog kljuca brisemo zadnji znak, jer je potrebno zbok sifre
const customer=c.substring(0, c.length-1); //od BONAPI pravi BONAP
for(let i=0; i<arrayOfOrders.length;i++){
    if(customer==arrayOfOrders[i].order.customerId){
        showOrders(arrayOfOrders[i])
    }
}
}
//kada se ucita, poziva se ova asinhrona funkcija
window.onload=function(){
    orderData();
}
//funkcija koja prikazuje narudzbine, parametar joj je objekat unutar niza elemenata kroz koji se prolazi u for petlji iznad
const showOrders=e=>{
    let resultOrder=e.order;
    let resultOrderDetails=e.orderDetails;
    let suma=0; 
    let ukupnaSuma=0;

    const ordersDiv=document.getElementById('orders');
    
    //pretvaramo datum u format citljiv coveku
    const parseJsonDate=jsonString=>{
        return new Date(parseInt(jsonString.replace('/Date(','')))
    }
    let datum=parseJsonDate(resultOrder.orderDate)
    console.log(datum);
           
       //menjamo malo format zapisa da se prikazuje samo godina
    let konacanDatum=datum.toJSON(resultOrder.orderDate);
    console.log(konacanDatum.slice(0,10))

    ordersDiv.innerHTML=`<div class="thumbnail col-md-12 box"> 
    <p>OrderID ${resultOrder.id}</p> <br> <br>
      ${resultOrderDetails.map(x=>{
          suma+=x.quantity*x.unitPrice*(1-x.discount);
          ukupnaSuma+=suma;
          return `
          <p>
          ProductId: ${x.product}
          </p>
          <p>
          Quantity: ${x.quantity}
          </p>
          <p>
          Unit price: ${x.unitPrice}
          </p>
          <p>
          Konacan datum ${konacanDatum.slice(0,10)}
          </p>
          <hr>
          <p>
          Suma: ${suma.toFixed(2)}
          </p>
          <hr>
          `
      }).join('')}    
    <p>Ukupna suma: ${ukupnaSuma.toFixed(2)}<br><p>
    </div> </div> `;
}
const username=sessionStorage.getItem("keyUsername");

$("#logout").text(username);

$("#logout").on({
    mouseover:function(){
       $(this).text('Logout')
        $(this).css({
            "background":"gray",
            "color":"white",
            "border-radius":"10px"
        })
    },
    mouseot:()=>{
        $(this).text(username)
    },
    click: ()=>{
        sessionStorage.removeItem("keyUsername");
        sessionStorage.removeItem('keyPassword');
        location.href="login.html";
        
    }
})