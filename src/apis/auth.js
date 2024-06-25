const URL = 'http://localhost:7000'
// user register 
const usersignup = async (userdata) =>{
    try{
        const res = await fetch(`${URL}/register`,{
            method: "POST",
                body: JSON.stringify(userdata),
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
        })
        return await res.json();
    }catch(e){
        console.log(e.message);
    }
}

const userlogin = async (logindata)=>{
    try{
        const res= await fetch(`${URL}/login`,{
            method: "POST",
                body: JSON.stringify(logindata),
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
        })
        return await res.json();
       
    }catch(e){
        console.log(e.message)
    }
}

const shorturl = async (url)=>{
    try{
        const res= await fetch(`${URL}/shorten-url`,{
            method: "POST",
                body: JSON.stringify({url}),
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
        })
        return await res.json();
    }catch(e){
        console.log(e.message)
    }
}

const redirecturl = async(url_id)=>{
    try{
        const res = await fetch(`${URL}/redirect`,{
            method: "POST",
            body: JSON.stringify({url_id}),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        return await res.json();
    }catch(e){
        console.log(e.message)
    }
}

export {usersignup , userlogin, shorturl, redirecturl};