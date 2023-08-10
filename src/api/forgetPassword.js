export async function ForgetUserPassword(email){
    const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDJdvMNmrQvLhia1izyKqXsNOaYLgx7xCg',{
        method: "POST",
        body: JSON.stringify({
            requestType:'PASSWORD_RESET',
            email,
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
    if(!res.ok){
        const err=await res.json();
         throw new Error('EMAIL_NOT_FOUND');

    }
    const data=await res.json();
    return data;

}