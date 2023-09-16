// alert("Hello");

let resultAdd=document.getElementById("btnAdd");
let resultSub=document.getElementById("btnSub");
let resultMultiply=document.getElementById("btnMultiply");
let resultDiv=document.getElementById("btnDiv");
// let input1=Number(document.getElementById('inp1').value);
//     let input2=Number(document.getElementById('inp2').value);
function add(){
    // let p=document.getElementById("para").value;
    let input1=Number(document.getElementById('inp1').value);
    let input2=Number(document.getElementById('inp2').value);
    let add=input1+input2;
document.getElementById("outputAdd").innerHTML=add;


}
function sub(){
    // let p=document.getElementById("para").value;
    let input1=Number(document.getElementById('inp1').value);
    let input2=Number(document.getElementById('inp2').value);
    let add=input1-input2;
document.getElementById("outputSub").innerHTML=add;

}
function multipy(){
    // let p=document.getElementById("para").value;
    let input1=Number(document.getElementById('inp1').value);
    let input2=Number(document.getElementById('inp2').value);
    let add=input1*input2;
document.getElementById("outputMultiply").innerHTML=add;

}
function divide(){
    // let p=document.getElementById("para").value;
    let input1=Number(document.getElementById('inp1').value);
    let input2=Number(document.getElementById('inp2').value);
    let add=input1/input2;
document.getElementById("outputDiv").innerHTML=add;

}


resultAdd.addEventListener("click",add);
resultSub.addEventListener("click",sub);
resultMultiply.addEventListener("click",multipy);
resultDiv.addEventListener("click",divide);