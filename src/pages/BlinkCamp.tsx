import NavBar from "../components/NavBar";

function BlinkCamp() {
  

  return (
    <div className='fullpage'>
      <NavBar />
      <div style={{ width: '100%', height: 'calc(100vh - 60px)' }}>
        <iframe 
          src="/BlinkCamp/public/index.html"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Vision Therapy Tools"
        />
        </div>

      </div>
      


    
  );
}

export default BlinkCamp;