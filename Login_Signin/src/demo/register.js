import React from 'react';
//import PropTypes from 'prop-types';

const Register=()=>{
	return(
		<form>
		<input type="text" name="user" placeholder="User Name" />
			<input type="text" name="first" placeholder="First Name" />
			<input type="text" name="last" placeholder="Last Name" />
			<input type="password" name="password" placeholder="Password" />
			<input type="password" name="passwordagain" placeholder="Password Again" />
			<input type="number" name="phone" placeholder="Phone Number" />
			<label>
				<span>I am not a robot</span>
				<input type="checkbox" name="robot"  />
			</label>						
			<input type="submit" value="Register" />
		</form>
		)
};

export default Register;