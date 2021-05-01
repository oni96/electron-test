const buttons = document.querySelectorAll(".operation")
console.log(buttons);

const operate = (target) => {
    let x = document.querySelector("#num1").value;
    let y = document.querySelector("#num2").value;
    console.log(target.target);
  
    let result = 0;
  
    switch (target.target.innerText) {
      case "Add":
        result = Number.parseFloat(x) + Number.parseFloat(y);
  
        break;
  
      case "Subtract":
        result = Number.parseFloat(x) - Number.parseFloat(y);
  
        break;
      case "Multiply":
        result = Number.parseFloat(x) * Number.parseFloat(y);
  
        break;
      case "Divide":
        result = Number.parseFloat(x) / Number.parseFloat(y);
  
        break;
  
      default:
        break;
    }
  
    document.querySelector("#output").innerText = result;
  };
  

buttons.forEach(element => {
    element.addEventListener('click',operate)
});

