import React, { useState, useEffect } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (username.trim() && password.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [username, password]);

    const handleLogin = () => {
        // console.log(username, password);
        if (username === 'abc' && password === 'abc') {
            setError(false);
            setHelperText('Login Success');
        } else {
            setError(true);
            setHelperText('Incorrect username or password');
        }
    };

    const handleKeyPress = (e:any) => {
        if (e.keyCode === 13 || e.which === 13) {
            isButtonDisabled || handleLogin();
        }
    };

    return (
        <form action=''>
            <input type='text'
                    id='username'
                    placeholder='username'
                    onChange={(e)=>setUsername(e.target.value)}
            />
            <input type='password'
                    id='password'
                    placeholder='password'
                    onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={()=>handleLogin()}/>
        </form>

    );
}

export default Login;