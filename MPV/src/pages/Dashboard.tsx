import NavBar from "../components/NavBar";
import './Dashboard.css';
import ChildExerciseImg from '../assets/childDoingVisionExercise.jpg';
import {Link} from 'react-router-dom';

function Dashboard() {
  return (
    <div className='fullpage'>
      <NavBar />
      <h1 className='title'>Vibrant Vision</h1>
      <h2 className='moto'>Improve How You See The World, Now</h2>
      <div className='welcome'>
        <img className='welcomeImg' src={ChildExerciseImg} alt='Child covering her left eye' />
        <div className='welcomeD'>
          <h2 className='welcomeToVV'>Welcome To Vibrant Vision</h2>
          <p className='committment'>At Vibrant Vision, we are committed to helping individuals of all ages reduce eye strain and improve visual comfort through easy, self-guided exercises. Our platform was created for people who face barriers to traditional vision therapy—whether due to cost, insurance, or access—so that everyone can take steps toward healthier vision.</p>
          <h3 className='welcome2020'>Vision Is More Than “20/20”</h3>
          <p>Comfortable vision isn’t just about 20/20 eyesight. Many children and adults struggle with focus, reading, and learning because their eyes are strained or visual skills are underdeveloped. By practicing simple, science-informed exercises, you can strengthen visual comfort and support better learning and daily functioning.</p>
          <p>Ready to get started? <Link to='search' className='explore'>Explore our exercises today.</Link></p>
          </div>
      </div>
      


    
    </div>
  );
}

export default Dashboard;