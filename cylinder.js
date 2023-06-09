function Calculate(){
    // alert("Button Test");
    let radius= parseFloat(document.getElementById("txtR").value);
    let h= parseFloat(document.getElementById("txtH").value); 
    let result= (22/7)*radius*radius*h;
    document.getElementById("txtResult").value= result.toFixed(3);
}