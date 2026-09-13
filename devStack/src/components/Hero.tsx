import './Hero.css'
import stacklogo from '../assets/banner-stack.png'
export default function Hero() {
  return (
    <section>
      <div className="leftside">
      <div className="text">
        <h2 className='h2first'>Build Your Ideal</h2>
        <h2 className='h2sec'>Development Stack</h2>
        <p>Explore frontend, backend, database, and tooling options,  
        compare them side by side, and put together the stack that fits your   
        next project</p>
      </div>
      <div className="Herobuttons">
        <button className='Herobtn1'>Explore technologies</button>
        <button className='Herobtn2'>Learn More</button>
      </div>
      </div>
      <div className="rightside">
        <img src={stacklogo} alt="" />
      </div>
    </section>
  );
}