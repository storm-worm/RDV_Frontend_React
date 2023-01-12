import { useState } from "react";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const submitForm = () => {
        console.log(email, password, username);
    }
    return(
        <div className="row justify-content-center py-5 m-4">
            <div className="col-sm-6">
                <div className="card p-4 mt-2 bg-light">
                    <h4 className="text-center text-dark ">Créer Nouveau Compte</h4>
                    <div className="form-group mb-3">
                        <label htmlFor="username" className='fs-6'>Nom d'utilisateur </label>
                        <input type="text" className="form-control" id="username" placeholder="Entrez votre nom" value={username} onChange={(e) => setUserName(e.target.value)}/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="email" className='fs-6'>Adresse email </label>
                        <input type="email" className="form-control" id="email" placeholder="Entrez votre email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="password" cla
                        ssName='fs-6'>Mot de passe </label>
                        <input type="password" className="form-control" id="password" placeholder="Entrez votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {/* <div className="form-group mb-3">
                        <label htmlFor="confirmedpassword" className='fs-6'>Mot de passe </label>
                        <input type="password" className="form-control" id="confirmedpassword" placeholder="Confirmez votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div> */}
                    {/* <a href="/register" className="link-secondary link-primary:focus">Pas encore inscrit ?</a> */}
                    <button type="submit" className="btn btn-success mt-4" onClick={submitForm}>Enregistrer</button>
                </div>
            </div>
        </div>
        
        
    )
}