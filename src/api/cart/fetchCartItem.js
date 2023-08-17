export async function FetchCartItem(email,dispatch,CartSliceActions){
    try{
        const res = await fetch(`https://ecommerce-app-4fc3c-default-rtdb.firebaseio.com/${email}/cartItem.json`)
        if(!res.ok){
            const data=res.json();
            console.log(data)
            throw new Error('error');
        }
        const data = await res.json();
        console.log(data);
        if(data===null) dispatch(CartSliceActions.setCartItems([]))
        else dispatch(CartSliceActions.setCartItems(data))
    }
    catch(e){
        console.log(e);
    }
}