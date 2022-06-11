import { useEffect } from 'react';
import { useState } from 'react';

const useToken = user => {
    const [token, setToken ] = useState(''); //for token state
    useEffect(()=>{
        const email = user?.email; //get user email from user

        const currentUser = { email : email};

        if(email){
            fetch(`http://localhost:5000//user/${email}`,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                const accessToken = data.token;
                localStorage.setItem('accessToken',accessToken);

                setToken(accessToken);
            })
        }
    },[user])
    return [token];
};

export default useToken;