function myFunction() {
    const message = document.getElementById("mess");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
      if(x == "") throw "Please, enter the student's level ";
      if(isNaN (x) ) throw "Enter Level 1, 2, 3 or 4";
      x = Number(x);
      if(x >=1&&x<3) throw "The student must be at the 3rd or 4th level to assign a department";
      if(x >4) throw "There are no levels after the fourth";
    }
    catch(err) {
      message.innerHTML = err;
    }
  }



