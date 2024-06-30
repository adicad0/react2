//import logo from './logo.svg';
import './App.css';
import pixiepeg from './assets/pixie.jpeg' ;

function App() {
  return (
    <div>

      {/* for inner whitebox */}
      <div className="outerDiv"> 

        <div>

        <h2>Get Started Now</h2>
        <h6>Enter your credentials to access your account</h6>
      
        {/* button */}
        <div className="SideBySide"> 
          <button className="topbutton">Login With Google</button>
          <button className="topbutton">Login with Apple</button>
        </div>

        {/*-----------------------------*/}
        {/* Line */}
        <div className="lineflex"> 

          <div className="line"> 
          </div>

          <span>or</span>

          <div className="line">
          </div>

        </div>
        {/*-----------------------------*/}


        <form>
          <label className>Name</label> <br/>
          <input type="text" id="name" placeholder="Enter your Name"></input>  <br/>

          <label>Email Address</label> <br/>
          <input type="text" id="email" placeholder="Enter your Email Address"></input>    <br/>  
          
          <label>Email Address</label> <br/>
          <input type="text" id="email" placeholder="Enter your Email Address"></input> <br/>     
          
          <label>Password</label>   <span className="forgotpass">Forgot Password?</span><br/>
          <input type="text" id="password" placeholder="Password"></input>  <br/><br/>    

          {/* terms cond wali checkbox */}
          <input type = "checkbox" id="agree" /><label for = "agree" >I agree to the Terms and Policy</label> <br/><br/>

          {/* login button */}
          <button className="loginBtn"><h2>Login</h2></button> <br/><br/>
            
          {/* sign in */}
          <label>Have an Account?    <span className="signIn">Sign In</span>  </label> 
          
        </form>

        </div>{/* form ka div khatam */}


        <div>{/* image div */}
        <img src={pixiepeg} alt="pixiepeg" />      
        </div>

        

      
      
      </div> 



      
      
    </div>
  );
}

export default App;
