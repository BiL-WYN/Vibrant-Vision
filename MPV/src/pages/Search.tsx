import NavBar from "../components/NavBar";

//import html from '../visiontherapy.github.io/index/html';



//I made a search page for once we have a working api

function Search() {
  

  return (
    <div className='fullpage'>
      <NavBar />
      <div style={{ width: '100%', height: 'calc(100vh - 60px)' }}>
        <iframe 
          src="/visiontherapy.github.io/index.html"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Vision Therapy Tools"
        />
        </div>

      </div>
      


    
  );
}

export default Search;