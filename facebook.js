var x=document.getElementById("btn");
x.addEventListener("click", cal);
	function cal(event){
		event.preventDefault();
		var input1=document.getElementById("email").value;
		// console.log(input1);
		var input2=document.getElementById("pass").value;
		// console.log(input2);
		var a=document.getElementById("empty");
		var b=document.getElementById("number");
		if((input1==="")&&(input2==="")){
			a.innerHTML=" please enter emil or phone ";
			b.innerHTML="please enter Password";
		}
		else if(input1==""){
			a.innerHTML="Enter cannot be blank";
			}
		else if(input2==""){
			b.innerHTML="enter password";
			}
		}
		
		
		function myFunction(){
			var c=document.getElementById ("email").value;
			var d=document.getElementById("pass").value;
			if(c!==""&& d!==""){
			window.location.href="file:///D:/fabevy/practice/facebook-login-/facebook%20login.html?#"
			}
		}