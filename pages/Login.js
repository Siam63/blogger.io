import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {
    const {data: session} = useSession();

    if (session) {
        return(
            <div>
                <p>
                    Welcome, {session.user.email}
                </p>
                <img src={session.user.image} alt="" style={{borderRadius: '50px'}}></img>
                <button onClick={()=> signOut()}>Sign Out</button>
                <a className="ml-5" href="/">Go Back</a>
            </div>
        )
    }else{
        return(
            <div>
                <p>You are not signed in.</p>
                <button onClick={() => signIn()}>Sign In</button>
                <a className="ml-5" href="/">Go Back</a>
            </div>
            
        )
    }
}

export default Login