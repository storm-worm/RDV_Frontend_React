import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import AuthUser from './AuthUser';

export default function Login(){
    const { http } = AuthUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitForm = () => {
        console.log(email, password);
    }
    return(

        <div className="row justify-content-center py-5 m-4">
            <div className="col-sm-6">
                <div className="card p-4 mt-2 bg-light">
                    <h4 className="text-center text-dark ">Connexion</h4>
                   {/* <div className='alert alert-danger mt-3'></div> */}
                    <div className="form-group mb-3">
                        <label htmlFor="email" className='fs-6'>Adresse email </label>
                        <input type="email" className="form-control" id="email" placeholder="Entrez votre email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="password" className='fs-6'>Mot de passe </label>
                        <input type="password" className="form-control" id="password" placeholder="Entrez votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <a href="/register" className="link-secondary link-primary:focus">Pas encore inscrit ?</a>
                    <button type="submit" className="btn btn-success mt-4" onClick={submitForm}>Se connecter</button>
                </div>
            </div>
        </div>
        
    )
}
        