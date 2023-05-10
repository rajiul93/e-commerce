// manage stored data
const addToDB = id =>{
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if(storeCart){
        cart = JSON.parse(storeCart);
    }
// add quantity 
     if(cart[id]){
            cart[id]= cart[id]+1;
        }
     else{
            cart[id]=1;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    
}
// get cart
const getStoredCart = ()=>{
    let cart= {};
    const storedCart = localStorage.getItem('cart');

    if(storedCart){
     cart= JSON.parse(storedCart);
    }

    return{cart};
    
}
// remove single item
const removeSingleItem = id => {
    let saveStore = localStorage.getItem('cart');
    let cart ={};
    if(saveStore){
        cart = JSON.parse(saveStore);
    }
    delete cart[id];
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();

}
// remove card item
const removeCartItem = ()=>{
    localStorage.removeItem('cart');
    window.location.reload();
};


export {
    addToDB,
    getStoredCart,
    removeCartItem,
    removeSingleItem
};

