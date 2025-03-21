import "./SignUtils/CSS/Sign.css";
import "./SignUtils/CSS/style.css.map";
import "./SignUtils/fonts/material-icon/css/material-design-iconic-font.min.css";
import signinimage from "./SignUtils/images/adminbanner.png";
import { useState } from 'react';
import Nav_bar from "../Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const loginSuccess = () => toast.success("Login Success", {
        className: "toast-message",
    });

    const loginFailed = () => toast.error("Invalid Details \n Please Try Again!", {
        className: "toast-message",
    });

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            if (username === "Sudeeksha" && password === "online") {
                loginSuccess();
                setTimeout(() => navigate('/Admin'), 2000);
            } else {
                loginFailed();
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <div>
            <Nav_bar />
            <section className="sign-in">
                <div className="container">
                    <p>Use Sudeeksha as username and online as password</p>
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src={signinimage} alt="sign up" /></figure>
                        </div>
                        <div className="signin-form">
                            <h2 className="form-title">Admin Login</h2>
                            <ToastContainer />
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" id="email" placeholder="Enter Admin Username" onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" id="pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-group form-button">
                                <button onClick={handleLogin} disabled={loading}>
                                    {loading ? <div className="spinner"></div> : 'Login'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminLogin;
