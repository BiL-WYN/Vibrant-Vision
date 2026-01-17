import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firestore/config';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
//import SignInWithGoogle from './signInWithGoogle';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Logged in successfully');
        //after logining in successfully the user will be taken to the dashboard
        navigate('/home');

    }catch (error) {
        console.log(error);
        toast.error('Login failed');
    }
}


return (
    <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        
        <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        
        <button type='submit'>Login</button>

      <p> New user? <Link to='/signup'>Register</Link> </p>

      {/*<SignInWithGoogle />*/}
    </form>
  );
}

export default Login;