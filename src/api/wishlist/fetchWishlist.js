export async function fetchWishlist(email,dispatch,WishlistSliceActions){
    try{
        const res = await fetch(`https://ecommerce-app-4fc3c-default-rtdb.firebaseio.com/${email}/wishList.json`)
        if(!res.ok){
            const data=res.json();
            console.log(data)
            throw new Error('error');
        }
        const data =  await res.json();
        console.log(data);
        console.log(data);
        if(data===null)dispatch(WishlistSliceActions.setWishlistItems([]));
        else dispatch(WishlistSliceActions.setWishlistItems(data));
    }
    catch(e){
        console.log(e);
    }
}