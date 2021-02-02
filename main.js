function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("form.html");
    }
    email1 = localStorage.getItem("email1");
  document.getElementById("user_name").innerHTML= "<h1>Welcome "+email1+"!</h1>";