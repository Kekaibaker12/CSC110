function menuClick(choice, newshow){

  thisid = choice.id;

  alldivs = document.getElementsByClassName('main show')

  for (let data of alldivs){

    console.log(data.id)
    document.getElementById(data.id).className="main noshow";

  }

  document.getElementById(newshow).className="main show";

}

function onClick() {


  var1 = document.getElementsByName("animals")[0].checked;
  var2 = document.getElementsByName("animals")[1].checked;
  var3 = document.getElementsByName("animals")[2].checked;
  var4 = document.getElementsByName("animals")[3].checked;
  var5 = document.getElementsByName("animals")[4].checked;

  document.getElementById("output1").textContent = var1;
  document.getElementById("output2").textContent = var2;
  document.getElementById("output3").textContent = var3;
  document.getElementById("output4").textContent = var4;
  document.getElementById("output5").textContent = var5;
}

function myFunction() {

var1 = document.getElementById("idfood1").checked
var2 = document.getElementById("idfood2").checked
var3 = document.getElementById("idfood3").checked
var4 = document.getElementById("idfood4").checked
var5 = document.getElementById("idfood5").checked

document.getElementById("div1a").textContent = var1
document.getElementById("div2a").textContent = var2
document.getElementById("div3a").textContent = var3
document.getElementById("div4a").textContent = var4
document.getElementById("div5a").textContent = var5


}

function getValue() {
  var myValue = document.getElementById("input1a").value
  document.getElementById("div3p").textContent = myValue


}
