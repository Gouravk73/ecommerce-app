export async function SignUpUser(email, password) {
    const id={
        email,
        password,
        returnSecureToken:true,
    }
        const res= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJdvMNmrQvLhia1izyKqXsNOaYLgx7xCg',{
            method:"POST",
            body:JSON.stringify(id),
            headers:{
                'content-type':'application/json'
            }
        })
        if(!res.ok){
            const err= await res.json();
            throw new Error(err.error.message)
        }
        const data= await res.json();

        return data;

}