export async function WishlistDataPost(wishitem,email){
    try {
        const res=await fetch(`https://ecommerce-app-4fc3c-default-rtdb.firebaseio.com/${email}/wishList.json`,{
            method: "PUT",
            body: JSON.stringify(wishitem),
            headers: {'Content-Type': 'application/json'}
      });
      if(!res.ok){
        const data=await res.json();
        console.log(data);
        throw new Error("Error");
      }
      const data=await res.json();
      return data
    } catch (error) {
        console.log(error);
      }
}