/* Anthony Lakin, 7-24-20 */


//This grabs the first elemnt with the header tag(getElementsByTagName) and changes its text to the prompt
let yourName = prompt("Hello what's your name?", "Bot");



//Modal Box, alert

// Get the modal

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
window.onload = function () {
  modal.style.display = "block";
  document.querySelector("h1").textContent = "Hello " + yourName + " Here are some memes";
}

span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Meme Button
document.querySelector(".newImg").addEventListener("click", function () {
  let imgArray = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.png", "img/img5.jpg", "img/img6.jpg", "img/img7.jpg", "img/img8.jpg", "img/img9.jpg", "img/img10.jpg", "img/img11.jpg", "img/img12.jpg"]
  let rand = Math.floor(Math.random() * 13);
  console.log("Random Img: " + rand);
  document.querySelector("img").src = imgArray[rand];
});



//This function is the word game. It will make a quick story based on the 3 inputs of the user
document.querySelector("#bt1").addEventListener("click", function () {

  document.querySelector(".span1").innerHTML = "The <b class='adj'></b> <b class='noun'></b> <b class='verb'></b> to greet the dog. The dog was also <b class='adj'></b> but was feeling really sad. The dog was sad because he was <b class='adj'></b>. Cheer up, just be yourself said the <b class='noun'></b>. I am happy to be <b class='adj'></b>. Embrace the good and bad, said the <b class='noun'></b>. The <b class='noun'></b> and the dog walked to a drive thru to grab a bite and became really good friends. The end!";

  //Grabs the value (value) of id (getElementById) and asigns them to variables
  let noun = document.getElementById("inputNoun").value;
  let verb = document.getElementById("inputVerb").value;
  let adj = document.getElementById("inputAdj").value;

  //Determines how many objects there are of each variable
  let nounLength = document.querySelectorAll(".noun").length
  let verbLength = document.querySelectorAll(".verb").length
  let adjLength = document.querySelectorAll(".adj").length

  //These loops run through all the objects in the variables (querySelectorAll) and assigns them to the imput fields

  //I used a while (while) loop since the total iteration count was known. The lenth of the querySelectorAll determines how many times it iterates
  let a = 0;
  while (a < nounLength) {
    event.preventDefault();
    document.querySelectorAll(".noun")[a].textContent = noun;
    a++;
  }

  let b = 0;
  while (b < verbLength) {
    event.preventDefault();
    document.querySelectorAll(".verb")[b].textContent = verb;
    b++;
  }

  let c = 0;
  while (c < adjLength) {
    event.preventDefault();
    document.querySelectorAll(".adj")[c].textContent = adj;
    c++;
  }

});

var d = 1;
document.querySelector("#guessPi").addEventListener("keyup", function (event) {
  document.getElementById("piTitle").innerHTML = "Can You Remember Pi?";
  document.getElementById("piTitle").style.backgroundColor = "var(--dark-blue)";

  //Since PI cant chaneg you constant (const);
  const pie = Math.PI;
  let checkPi = document.getElementById("guessPi").value.toString();
  let string = [];
  string.push(checkPi);
  newSlice = pie.toString().slice(0, d);

  if (string.toString() === newSlice.toString() || event.keyCode == 190) {
    document.getElementById("piInput").innerHTML = string;
    d++
  } else {
    document.getElementById("piTitle").innerHTML = "Start Over";
    document.getElementById("piInput").innerHTML = "";
    document.getElementById("guessPi").value = "";
    string.splice(0, string.length);
    d = 1;
    document.getElementById("piTitle").style.backgroundColor = "red";
  }

});


let arr1 = ['3', '-0.4', '0.5', '123', '8/9', '17/15', '7', '3.14', '289/289'];
let arr2 = ['-21', '35/34', '1', '3/9', '-2', '6/7', ' 9/8', '3.7', '1'];

//Random number between 0 and 7 (*)
let random1 = Math.floor(Math.random() * 8);
let random2 = Math.floor(Math.random() * 8);


//This is the start button to start the game when click
document.querySelector("#compStart").addEventListener("click", function () {
  document.querySelector("select").style.backgroundColor = "var(--light-blue)";
  document.querySelector("select").disabled = false;
  document.getElementById("left").textContent = arr1[random1];
  document.getElementById("right").textContent = arr2[random2];
  console.log("arr1: " + arr1[random1]);
  console.log("arr2: " + arr1[random2]);
});



//Checks for basic inequality signs and if match escuctes switch (>=, <=)
document.querySelector("select").addEventListener('change', (event) => {
  disableSelc();
  sign = event.target.value;
  switch (sign) {
    case ">":
      if (arr1[random1] > arr2[random2]) {
        document.getElementById("comp").style.backgroundColor = "green";
        document.getElementById("comp").textContent = "Correct";
        enableSelc();
      } else {
        document.getElementById("comp").style.backgroundColor = "red";
        document.getElementById("comp").textContent = "Wrong";
        enableSelc();
      }
      break;
    case "<":
      if (arr1[random1] < arr2[random2]) {
        document.getElementById("comp").style.backgroundColor = "green";
        document.getElementById("comp").textContent = "Correct";
        enableSelc();
      } else {
        document.getElementById("comp").style.backgroundColor = "red";
        document.getElementById("comp").textContent = "Wrong";
        enableSelc();
      }
      break;
    case ">=":
      if (arr1[random1] >= arr2[random2]) {
        document.getElementById("comp").style.backgroundColor = "green";
        document.getElementById("comp").textContent = "Correct";
        enableSelc();
      } else {
        document.getElementById("comp").style.backgroundColor = "red";
        document.getElementById("comp").textContent = "Wrong";
        enableSelc();
      }
      break;
    case "<=":
      if (arr1[random1] <= arr2[random2]) {
        document.getElementById("comp").style.backgroundColor = "green";
        document.getElementById("comp").textContent = "Correct";
        enableSelc();
      } else {
        document.getElementById("comp").style.backgroundColor = "red";
        document.getElementById("comp").textContent = "Wrong";
        enableSelc();
      }
      break;
    case "=":
      if (arr1[random1] == arr2[random2]) {
        document.getElementById("comp").style.backgroundColor = "green";
        document.getElementById("comp").textContent = "Correct";
        enableSelc();
      } else {
        document.getElementById("comp").style.backgroundColor = "red";
        document.getElementById("comp").textContent = "Wrong";
        enableSelc();
      }
      break;
  }

});

function disableSelc() {
  document.querySelector(".firstSelect").disabled = true;
}

function enableSelc() {
  setTimeout(function () {
    document.querySelector(".firstSelect").disabled = false;
    document.querySelector("select").selectedIndex = 0;
    document.getElementById("comp").style.backgroundColor = "var(--light-blue)";
    document.getElementById("comp").textContent = "Whats Greater?";
  }, 1000);

}

let loop = 0;
let numbers = [];
document.querySelector("#myForm").addEventListener("submit", function () {
  event.preventDefault(); //stop form from submitting
  let num = document.getElementById("num").value;

  //chekcs if its not an infinite number (i);
  if (num == "" || num == null || !isFinite(num)) {

    //If the user does not type a number or if its infinite it will not procsess and send message to user (alert)
    alert("Please type a number");
  } else {

    //Add digits to numbers array (+num)
    numbers.push(+num);
    loop++;

    console.log(loop);

    document.getElementById("myAv").textContent = "Your numbers: " + num;
    setTimeout(function () {
      let num = document.getElementById("num").value = "";
    }, 300);
  }

});

document.querySelector("#avg").addEventListener("click", function () {
  let sum = 0;

  //loops index of array and asigns it to sum
  for (let number of numbers) {

    //Adds and asigns sum to numbers (+-)
    sum += number;
  }
  answ = sum / loop
  document.getElementById("myAv").textContent = "Your average is " + answ.toFixed(2);
  numbers = [];

  console.log(answ);

});




//Math Operand

//This applies the basics of javascript math operators (**) (-) (%)
document.querySelector(".radio").addEventListener("click", modFunction);

function modFunction() {
  let add = document.getElementById("add");
  let sub = document.getElementById("sub");
  let mult = document.getElementById("mult");
  let div = document.getElementById("div");
  let perc = document.getElementById("perc");
  let exp = document.getElementById("exp");
  //alert(document.querySelector(".operand").textContent);
  switch (true) {
    case add.checked:
      document.querySelector(".operand").textContent = "+";
      return "+";
      break;
    case sub.checked:
      document.querySelector(".operand").textContent = "-";
      return "-";
      break;
    case mult.checked:
      document.querySelector(".operand").textContent = "*";
      return "*";
      break;
    case div.checked:
      document.querySelector(".operand").textContent = "/";
      return "/";
      break;
    case perc.checked:
      document.querySelector(".operand").textContent = "%";
      return "%";
      break;
    case exp.checked:
      document.querySelector(".operand").textContent = "**";
      return "**";
      break;
  }

}


document.querySelector(".submit").addEventListener("click", function () {
  event.preventDefault();
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;
  operand = modFunction();
  let answer = eval(first + operand + second);
  document.getElementById("Ogame").innerHTML = "The answer is: " + answer.toFixed(2);
  setTimeout(function () {
    document.getElementById("Ogame").innerHTML = "Operator Game";
  }, 3000);

});


let e = 0;
let f = 0;
let g = 0;
let h = 0;
let j = 0;
let k = 0;
//will remove and add classes to elements (className) (classList)
//Dark Mode
document.querySelector("#onOff").addEventListener("click", function () {

  let darkLabelLen = document.querySelectorAll("label").length;
  let darkPanLen = document.querySelectorAll(".panel").length;
  let darkSpanLen = document.querySelectorAll("span").length;
  let darkTitleLen = document.querySelectorAll(".title").length;
  let darkNumLen = document.querySelectorAll(".numbers").length;
  let darkInputLen = document.querySelectorAll("input").length;

  let button = document.querySelector("#onOff");
  if (button.textContent !== "On") {
    button.textContent = "On";

    document.querySelector("main").className = "";
    document.querySelector("body").className = "";
    document.querySelector("header").className = "";

    //Label
    while (e > 0) {
      //console.log(e);
      document.querySelectorAll("label")[e - 1].className = "";
      e--;

    }

    //Item
    while (f > 0) {
      document.querySelectorAll(".panel")[f - 1].classList.remove("darkItem");
      f--;
      //console.log(f);
    }

    //Span
    while (g > 0) {
      document.querySelectorAll("span")[g - 1].classList.remove("darkSpan");
      g--;
      //console.log(f);
    }

    //Title
    while (h > 0) {
      document.querySelectorAll(".title")[h - 1].classList.remove("darkTitle");
      h--;
      //console.log(f);
    }


    //Numbers
    while (j > 0) {
      document.querySelectorAll(".numbers")[j - 1].classList.remove("darkNumbers");
      j--;
      //console.log(f);
    }


    //Input
    while (k > 0) {
      document.querySelectorAll("input")[k - 1].classList.remove("darkInput");
      k--;
      //console.log(f);
    }

  } else {
    button.textContent = "Off";
    document.querySelector("main").className = "darkMain";
    document.querySelector("body").className = "darkBody";
    document.querySelector("header").className = "darkHeader";

    //Label
    while (e < darkLabelLen) {
      document.querySelectorAll("label")[e].className = "darkLabel";
      e++;
      //console.log(e);
    }

    //Item
    while (f < darkPanLen) {
      document.querySelectorAll(".panel")[f].classList.add("darkItem");
      f++;
      //console.log(f);
    }


    //Span
    while (g < darkSpanLen) {
      document.querySelectorAll("span")[g].classList.add("darkSpan");
      g++;
      //console.log(g);
    }


    //Title
    while (h < darkTitleLen) {
      document.querySelectorAll(".title")[h].classList.add("darkTitle");
      h++;
      //console.log(g);
    }

    //Numbers
    while (j < darkNumLen) {
      document.querySelectorAll(".numbers")[j].classList.add("darkNumbers");
      j++;
      //console.log(g);
    }

    //Input
    while (k < darkInputLen) {
      document.querySelectorAll("input")[k].classList.add("darkInput");
      k++;
      //console.log(g);
    }
  }
});
