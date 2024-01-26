// create a function named calculateAge 
function calculateAge(){

    var date = document.getElementById('date').value ;
    // 2023-10-23
    var yearInput = date.split('-')[0];
    console.log(yearInput , "year input")
    console.log(date,"date person has selected")

    var currentDate = new Date();
    console.log(currentDate,"current date") 
    var currentYear = currentDate.getFullYear();
    console.log(currentYear,"current year")


    var ageInYears = currentYear - yearInput ;
    console.log(ageInYears)

    const monthInput = date.split('-')[1]
    const currentMonth = currentDate.getMonth()

    var ageInMonths = currentMonth - monthInput ;


if(ageInMonths <= 0){
    ageInYears = ageInYears - 1;
    ageInMonths = ageInMonths +12
}



    document.getElementById('show-data').innerHTML= `${ageInYears} year(s) ${ageInMonths} months`

}

