// compute function calculates the interest rate given user input:
//  - initial amount
//  - interest rate
//  - period of accumulation

function compute(){
    principal = document.getElementById("principal").value; // get value of initial amount

    // check if amount is positive, if not alert user and focus on amount input
    if(principal <= 0){
        alert("Enter a positive number: ")
        document.getElementById("principal").focus();
    }
    else{
        rate = document.getElementById("rate").value; // get values of interest rate
        years = document.getElementById("years").value; // and period of accumulation
        years = parseInt(years, 10); // convert string of years to number

        interest = (principal * years * rate) / 100; // calculate the final interest
        //alert(interest) statement used for rapid troubleshooting


        finalyear = new Date().getFullYear() + years; // calculate the year the accumulation will end

        // convert all numbers to strings to be printed
        finalyear = finalyear.toString();
        finalprincipal = principal.toString();
        finalrate = rate.toString();
        finalinterest = interest.toString();

        // final statement that contains all necessary information
        statement = "If you deposit " + finalprincipal.bold() + ",\n at an interest rate of " + finalrate.bold() + "%.\n You will receive an amount of " + finalinterest.bold() + ",\n in the year " + finalyear.bold();
        document.getElementById("result"). innerHTML = statement;
    }

}
   
// function used to display chosen interest rate on slider
function display(){
    rate = document.getElementById("rate").value;
    document.getElementById("slider").innerHTML = rate;

}