import React from 'react';
const Login=()=>{
	return(
		<form>
			<input type="text" name="user" placeholder="User Name" />
			<input type="password" name="password" placeholder="Password" />
			<input type="submit" value="Login" />
		</form>
		)
};

export default Login;