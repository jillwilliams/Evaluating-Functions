const answerOne = ( ) => {
    var answ1 = document.getElementById("input1").value;
        if  (answ1 == "13" )  {
            return "Good Job!";
        } else
            return "Try again!";
}
const myCalc = ( ) => {
    document.getElementById("demo").innerHTML = answerOne( );
};
// Second Example
const answerTwo = ( ) => {
    var answ2 = document.getElementById("input2").value;
        if  (answ2 == "53" )  {
            return "Good Job!";
        } else
            return "Try again!";
}
const myCalc2 = ( ) => {
    document.getElementById("demo2").innerHTML = answerTwo( );
};
// Third example
const answerThree = ( ) => {
    var answ3 = document.getElementById("input3").value;
        if  (answ3 == "-4" )  {
            return "Good Job!";
        } else
            return "Try again!";
}
const myCalc3 = ( ) => {
    document.getElementById("demo3").innerHTML = answerThree( );
};
// Fourth example
const answerFour = ( ) => {
    var answ4 = document.getElementById("input4").value;
        if  (answ4 == "22" )  {
            return "Good Job!";
        } else
            return "Try again!";
}
const myCalc4 = ( ) => {
    document.getElementById("demo4").innerHTML = answerFour( );
};