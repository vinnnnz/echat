<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html data-ng-app="chat">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<style type="text/css">
html {
	height: 100%;
}
* {
	outline: none;
}

.search-bar input {
	height: 100%;
	width: 80%;
	border: none;
	border-bottom: 1px solid #EEE;
}

.search-bar {
	width: 100%;
	height: 2em;
	display: flex;
	justify-content: center;
}
</style>
<link rel="stylesheet" type="text/css"
	href="./static/css/font-awesome.min.css">
<style type="text/css">
</style>
</head>
<body style="height: 100%; width: 100%; margin: 0;">

	<%@ include file="./layout/sidebar.jsp"%>
	<%@ include file="./layout/fragment.jsp"%>


<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
<script src="./static/js/chat.js"></script>
</body>
</html>