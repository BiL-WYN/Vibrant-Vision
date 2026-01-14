import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firestore/config';
import { setDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      await setDoc(doc(db, 'Users', user.uid), {
        email: user.email,
        firstName: '',
        lastName: '',
        photo: '',
        createdAt: new Date(),
      });

      toast.success('Account created');
      navigate('/home');
    } catch (error) {
        console.log(error);
        toast.error('Failed to create an account');
    }
  };

  return (
    <form onSubmit={handleSignUp}>
        
      <h1>SignUp</h1>
      <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>

      <button type='submit'>SignUp </button>
      <Link to='/login'>Back to Login</Link>
    </form>
  );
}

export default SignUp;
