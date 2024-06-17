console.log("Let's write a js");

let a;
let b;
let c;
let Pa;
let d;
let e;
let f;
let g;
let C0;
let d2l;
let l;


function getValues() {
    a = parseFloat(Poutval.value)
    b = parseFloat(Bav.value)
    c = q.value === '' ? 35000 :  parseFloat(q.value);

    //console.log(c)
    if (source.value === "gen") {
        Pa = a * 1.05
        //console.log(Pa)
    }
    else {
        Pa = a * 0.95
       // console.log(Pa)
    }
    d = parseFloat(speed.value)
    e = parseFloat(poles.value)
    f = parseFloat(volt.value)
    g = polepitch.value===""?0.7:parseFloat(polepitch.value)
    
    // console.log(typeof(e))
}

function calculatePower() {
    C0=0.16449*b*c;
    console.log("c0 is "+C0)
     d2l=Pa/(C0*d);
    console.log("d2l is "+d2l)
    // let x = (1/C0)*(e/d);
    let x = (g*3.14)/e;
    let y=d2l/x;
    let z = Math.pow(y,1/3);

    console.log("d is "+z);
    // console.log(z);
    let s=z*z;
    l = d2l/s;
    console.log("l is "+l);
    let perispeed =(3.14*z*d)/60;
    // document.body.getElementsByClassName("info")[0].innerHTML = "your machine is ready to design";
    D.innerHTML=`your D is ${z}`
    L.innerHTML=`your L is ${l}`
    state.innerHTML= "your machine is ready to design";

    
    if(perispeed>20){
        D.innerHTML=`your D is ${z}`
        L.innerHTML=`your L is ${l}`
        state.innerHTML= "your machine is not ready to design";
    }
    

}

submit.addEventListener("click", () => {
    getValues();
    calculatePower();
});