const daycontrol = () => {
  const inputday = document.getElementById("day");
  const resultday = inputday.value;
  if(isNaN(resultday) == false && resultday != "" && resultday <= 31 && resultday > 0){
    document.getElementById("numberdays").innerHTML = resultday;
    document.getElementById("errorday").style.display = "none"
    document.getElementById("errorday2").style.display = "none"
    document.getElementById("textday").style.display = "flex"
    document.getElementById("texterrorday").style.display = "none"
    document.getElementById("day").style.borderColor = ""
  } else if (isNaN(resultday) == false && resultday != "" && resultday > 31){
    document.getElementById("errorday2").style.display = "flex"
    document.getElementById("errorday").style.display = "none"
    document.getElementById("textday").style.display = "none"
    document.getElementById("texterrorday").style.display = "flex"
    document.getElementById("day").style.borderColor = "red"
  } else {
    document.getElementById("numberdays").innerHTML = "--"
    document.getElementById("errorday").style.display = "flex"
    document.getElementById("errorday2").style.display = "none"
    document.getElementById("textday").style.display = "none"
    document.getElementById("texterrorday").style.display = "flex"
    document.getElementById("day").style.borderColor = "red"
  }
};

const monthControl = () => {
  const inputMonth = document.getElementById("month");
  const resultMonth = inputMonth.value;
  if (isNaN(resultMonth) == false && resultMonth != "" && resultMonth <= 12 && resultMonth > 0){
    document.getElementById("numberMonth").innerHTML = resultMonth;
    document.getElementById("errorMonth3").style.display = "none"
    document.getElementById("errorMonth").style.display = "none"
    document.getElementById("textMonth").style.display = "flex"
    document.getElementById("textErrorMonth").style.display = "none"
    document.getElementById("month").style.borderColor = ""
  } else if (isNaN(resultMonth) == false && resultMonth != "" && resultMonth > 12){
    document.getElementById("errorMonth3").style.display = "flex"
    document.getElementById("errorMonth").style.display = "none"
    document.getElementById("textMonth").style.display = "none"
    document.getElementById("textErrorMonth").style.display = "flex"
    document.getElementById("month").style.borderColor = "red"
  }
  else {
    document.getElementById("numberMonth").innerHTML = "--"
    document.getElementById("errorMonth").style.display = "flex"
    document.getElementById("errorMonth3").style.display = "none"
    document.getElementById("textMonth").style.display = "none"
    document.getElementById("textErrorMonth").style.display = "flex"
    document.getElementById("month").style.borderColor = "red"
  } 
};

const yearControl = () => {
  const inputYear = document.getElementById("year");
  const resultYear = inputYear.value;
  if (isNaN(resultYear) == false && resultYear != "" && resultYear <= 2023 && resultYear >= 1999){
    document.getElementById("numberYear").innerHTML = resultYear;
    document.getElementById("textErrorYear").style.display = "none"
    document.getElementById("textYear").style.display = "flex"
    document.getElementById("year").style.borderColor = ""
    document.getElementById("errorYear3").style.display = "none"
    document.getElementById("errorYear").style.display = "none"
  } else if (isNaN(resultYear) == false && resultYear != "" && resultYear > 2023 || resultYear < 1999){
    document.getElementById("errorYear3").style.display = "flex"
    document.getElementById("errorYear").style.display = "none"
    document.getElementById("textYear").style.display = "none"
    document.getElementById("textErrorYear").style.display = "flex"
    document.getElementById("year").style.borderColor = "red"
  }
  else {
    document.getElementById("numberYear").innerHTML = "--"
    document.getElementById("errorYear3").style.display = "none"
    document.getElementById("errorYear").style.display = "flex"
    document.getElementById("textYear").style.display = "none"
    document.getElementById("textErrorYear").style.display = "flex"
    document.getElementById("year").style.borderColor = "red"
  } 
};