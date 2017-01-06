<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html data-ng-app="ech">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Register</title>
<style>
html, body {
	width: 100%;
	height: 100%;
	margin: 0;
}

body {
	display: flex;
	justify-content: center;
	flex-direction: column;
}

form {
	margin: 0 auto;
}

input {
	border: 1px solid #EEE;
	margin-top: 5px;
	width: 250px;
	height: 30px;
}
</style>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
	<script src="./static/js/app.js"></script>
</head>
<body>
	<form data-ng-controller="registration" name="registerForm">
		
		<input type="text" placeholder="Display Name" name="displayName" data-ng-model="userForm.displayName" required> 
		<span style="color: red;" data-ng-show="registerForm.displayName.$dirty && registerForm.displayName.$invalid">
			<span data-ng-show="registerForm.displayName.$error.required">DisplayName is required.</span>
		</span>
		<br />
		
		<input type="text" placeholder="User ID" name="userID" data-ng-model='userForm.userID' required>
		<span style="color: red;" data-ng-show="registerForm.userID.$dirty && registerForm.userID.$invalid">
			<span data-ng-show="registerForm.userID.$error.required">UserID is required.</span>
		</span>
		<br />
		
		<input type="email" name="email" placeholder="Email" data-ng-model="userForm.email" required> 
		<span style="color: red;" data-ng-show="registerForm.email.$dirty && registerForm.email.$invalid">
			<span data-ng-show="registerForm.email.$error.required">Email is required.</span>
			<span data-ng-show="registerForm.email.$error.email">Invalid email address.</span>
		</span> 
		<br /> 
		
		<input type="text" name="age" placeholder="Age" data-ng-model="userForm.age">
		<br /> 
		<input type="text" name="country" placeholder="Country" data-ng-model="userForm.country">
		<br />
		<input type="password" name="password" placeholder="Password" data-ng-model="userForm.password">
		<br /> 
		<input type="password" name="confirmPassword" placeholder="Password">
		<br />
		<input type="file" name="file" data-ng-model="userForm.file" file-model="upload"><br />
		<button data-ng-click="_register()">Register</button>
	</form>

</body>
</html>