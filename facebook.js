var x=document.getElementById("btn");
x.addEventListener("click", cal);
	function cal(event){
		event.preventDefault();
		var input1=document.getElementById("email").value;
		// console.log(input1);
		var input2=document.getElementById("psw").value;
		// console.log(input2);
		var error=document.getElementById("empty");
		var wrong=document.getElementById("number");
		if((input1==="")&&(input2==="")){
			error.innerHTML="email cannot be blank";
			wrong.innerHTML="password cannot be blank";
		}
		else if(input1==""){
			error.innerHTML="Enter cannot be blank";
			}
		else if(input2==""){
			wrong.innerHTML="enter cannot be blank";
			}
		}
		
		
		function myFunction(){
			var log=document.getElementById ("email").value;
			var correct=document.getElementById("psw").value;
			if(log!==""&& correct!==""){
			window.location.href="file:///D:/fabevy/practice/facebook-login-/facebook%20login.html?#"
			}
		}