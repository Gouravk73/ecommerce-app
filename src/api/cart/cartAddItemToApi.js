export async function CartAddItemToApi (cartItem, email) {
    try{
        const res=await fetch(`https://ecommerce-app-4fc3c-default-rtdb.firebaseio.com/${email}/cartItem.json`,{
            method: "PUT",
            body: JSON.stringify(cartItem),
            headers: { 'Content-Type': 'application/json'}
        })
        if(!res.ok){
            throw new Error("Cant Fetch")
        }
        const data =await res.json();
        return data;
    }
    catch(e){
        console.log(e);
    }
}