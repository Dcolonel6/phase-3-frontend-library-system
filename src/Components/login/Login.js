import React, { useState } from "react";
import{useNavigate} from 'react-router-dom';
import {FactoryServerCommunication} from '../Utilities/server';

import './login.css';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const submit = (e) => {
		e.preventDefault();
		FactoryServerCommunication('/login', 'POST', {username, password})((data) => {
			if (data.error) {
				setError(data.error);
			} else {
				sessionStorage.setItem('user', JSON.stringify(data));
				navigate('/books')
			}
		}
)
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-2"></div>
				<div className="col-lg-6 col-md-8 login-box">
					<div className="col-lg-12 login-key">
						<i className="fa fa-key" aria-hidden="true"></i>
					</div>
					<div className="col-lg-12 login-title">LIB LOGIN</div>

					<div className="col-lg-12 login-form">
						<div className="col-lg-12 login-form">
							<form>
								<div className="form-group">
									<label className="form-control-label">USERNAME</label>
									<input type="text" className="form-control" required={true} value={username} onChange={e=>setUsername(e.target.value)} />
								</div>
								<div className="form-group">
									<label className="form-control-label">PASSWORD</label>
									<input type="password" className="form-control" required={true} value={password} onChange={e=>setPassword(e.target.value)} />
								</div>

								<div className="col-lg-12 loginbttm">
									<div className="col-lg-6 login-btm login-text">
										{/* <!-- Error Message --> */}
										{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
									</div>
									<div className="col-lg-6 login-btm login-button">
										<button type="submit" className="btn btn-outline-primary" onClick={submit}>
											LOGIN
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-3 col-md-2"></div>
				</div>
			</div>
		</div>
	);
};

export default Login;
