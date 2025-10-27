import './Login.css'
import Button from './Button';

export default function Login() {
  function callName(name){
        alert('olá '+name);
  }

  return (
    <form>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
          />
        </div>
       <br />
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input  
            id="password" type="password" name="password"/>
        </div>
 
      </div>

      <p className="form-actions">
        <Button functionForClick={() =>callName('Sara')}>Login</Button>
      </p>
    </form>
  );
}