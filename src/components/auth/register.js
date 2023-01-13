import { useState } from "react";
import AuthUser from "./AuthUser";
import {useNavigate} from "react-router-dom";


export default function Register(){
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUserName] = useState();
    const submitForm = () => {
        http.post('/register', {email:email, password:password, name:username}).then((res) => {
            console.log(res.data);
            setToken(res.data.user, res.data.access_token);
            navigate("/login");
        });
    }
    return(
        <div className="row justify-content-center py-5 m-4">
            <div className="col-sm-6">
                <div className="card p-4 mt-2 bg-light">
                    <h4 className="text-center text-dark ">Créer Nouveau Compte</h4>
                    <div className="form-group mb-3">
                        <label htmlFor="username" className='fs-6'>Username </label>
                        <input type="text" className="form-control" id="username" placeholder="Enter your username" value={username} onChange={(e) => setUserName(e.target.value)}/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="email" className='fs-6'>Adress email </label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="password" cla
                        ssName='fs-6'>Password </label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {/* <div className="form-group mb-3">
                        <label htmlFor="confirmedpassword" className='fs-6'>Mot de passe </label>
                        <input type="password" className="form-control" id="confirmedpassword" placeholder="Confirmez votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div> */}
                    {/* <a href="/register" className="link-secondary link-primary:focus">Pas encore inscrit ?</a> */}
                    <button type="submit" className="btn btn-success mt-4" onClick={submitForm}>Submit</button>
                </div>
            </div>
        </div>
        
        
    )
}