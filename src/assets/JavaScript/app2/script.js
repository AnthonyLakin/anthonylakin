document.getElementsByTagName("form")[0].addEventListener("change", checkForm);

function checkForm() {
  let input1 = document.getElementsByTagName("input")[0].value;
  let input2 = document.getElementsByTagName("input")[1].value;
  let input3 = document.getElementsByTagName("input")[2].value;
  let allVar = document.querySelectorAll(".variables");
  let input1Empty;
  let input2Empty;
  let input3Empty;
  let allVariables = ["variable1", "variable2", "variable3"]

  //Checks if any inputs are empty
  input1Empty = input1.length <= 0;
  input2Empty = input2.length <= 0;
  input3Empty = input3.length <= 0;
  let allInputsEmpty = [input1Empty, input2Empty, input3Empty];
  let twoOfThree = 0;

  for (let x = 0; x <= 2; x++) {
    if (!allInputsEmpty[x]) {
      twoOfThree++
    }
  }

  if (twoOfThree === 2) {
    for (let i = 0; i <= 2; i++) {
      if (allInputsEmpty[i]) {
        document.getElementById(allVariables[i]).style.opacity = "0";
        setTimeout(function () {
          document.getElementById(allVariables[i]).style.display = "none";
        }, 900)

        setTimeout(function(){
          allVar.forEach(allVar => {
            allVar.style.width = '50%';
          });
        }, 1000);
      }
    }


  } else {
    for (let b = 0; b <= 2; b++) {
      document.getElementById(allVariables[b]).style.display = "block";
      setTimeout(function () {
        document.getElementById(allVariables[b]).style.opacity = "1";
      },200);

    }
  }


}
