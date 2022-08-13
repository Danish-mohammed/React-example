import React from "react";
import {Link} from 'react-router-dom'

function About() {
  return (
    <div>
      <h3>About</h3>
      <Link to="/"><button>Back to Home</button></Link>
      <Link to="/contact"><button>Back to Contact</button></Link>
    </div>
  );
}

export default About;
