import NavBar from "../components/NavBar";
import './AboutUs.css';

function AboutUs() {
  return (
    <div className='fullpage'>
      <NavBar />
      <h1 className='title'>Vibrant Vision</h1>
      <h2 className='moto'>Improve How You See The World, Now</h2>

      <div className='impact'>
        <h1 className='impactTitle'>The Impact of Limited Access to Vision Care</h1>
        <p className='impactD'> Many children from low-income families don’t get the early vision support they need. Vision therapy is often expensive and not covered by insurance, leaving families with few options. As a result, care is delayed—or never happens at all.
        When vision challenges go untreated, simple issues like eye strain or trouble focusing can grow worse over time. These difficulties can make reading harder, affect school performance, and lower a child’s confidence in the classroom.
        The impact doesn’t stop at academics. Children who struggle to see clearly may feel frustrated, fall behind their classmates, or pull away socially. Over time, this can affect their self-esteem, learning opportunities, and future educational success.
        Vibrant Vision is working to change that. By providing accessible, self-guided exercises, we help children build visual comfort early—before small challenges turn into bigger, more costly problems.</p>
        
      </div>

      <div className='relevance'>
        <h1 className='relevanceTitle'>Our Social Impact</h1>
        <p className='relevanceD'> No child should have to struggle to see clearly just because of the cost. Unfortunately, many families can’t afford traditional vision therapy, leaving children at a disadvantage in school and everyday life. That’s why Vibrant Vision provides free, simple eye exercises that anyone can use at home—tools that make taking care of your child’s vision easier and more accessible than ever.
        When we support children’s visual health early, it can change everything. Clear vision helps kids stay focused in class, feel confident participating in activities, and build a strong foundation for learning and growth. Even small, everyday exercises can create meaningful, lasting improvements—not just for a child, but for their family and community too.
        At Vibrant Vision, we believe every child deserves the chance to see the world clearly. When kids can see well, they can explore, play, learn, and dream without limits. It’s not just about vision—it’s about confidence, curiosity, and giving every child the tools they need to thrive every single day.</p> 
      </div>

    </div>
  );
}

export default AboutUs;