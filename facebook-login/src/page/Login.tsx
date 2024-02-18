import facebookLogo from '../assets/facebookLogo.svg'
import '../page/Login.css'

function Login() {
    return (
        <div className="container maindiv">
            <div className="row">
                <div className='col-lg-6'>
                    <div className='left-side-second-div'>
                        <div >
                            <img src={facebookLogo} className='facebookLogo'></img></div>
                        <div className='pragraph'>
                            Facebook helps you connect and share with the people in your life.
                        </div>

                    </div>
                </div>

                <div className='col-lg-6'>

                    <div className='login-box'>
                        <div className="inputField"><br />
                            <input type="text" className="form-control" placeholder="Email address or Username" aria-label="Username" aria-describedby="addon-wrapping" /><br />
                            <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
                            <button type="button" className="btn btn-primary">Log in</button> <br /><br />
                            <a href="">Forget Password?</a>
                            <hr className='hr' />
                            <button type="button" className="btn btn-success">Create new account</button> <br />
                        </div>
                    </div>

                    <div className='login-box-under-p'>
                        <a id="h" href="">Create a Page</a> for a celebrity, brand or business.
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Login;