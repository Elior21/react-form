import { useState } from "react";

const API_URL = "https://fsa-jwt-practice.herokuapp.com/signup" 

const SignUpForm = (props) => {
    
    const handleSubmit = async (event) => {
        event.preventDefault();
     
        try{
            const response =  await fetch(API_URL, {
                method:"post",
                body: JSON.stringify({
                    username,
                    password
                }),
                headers : {
                    "content-Type":"application/json"
                }
            });
            const data =  await response.json(); 
            
            props.setToken(data.token)
        }
        catch(err){
            setError(err.message)
        } 
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    return (
        <>
        <h2>signup</h2>

        {error && <p>Error:  {error}</p>}

        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value) }/>
            </label>
            <label>
                Password:
                <input type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value) }/>
            </label>
            <button>submit</button>
        </form>
        </>
    );
}

export default SignUpForm  