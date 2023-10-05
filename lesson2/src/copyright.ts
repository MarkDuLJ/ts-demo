// 1st solution
// const year =  document.getElementById("year")
// const thisYear = new Date().getFullYear()

// if(year){
    //    year.setAttribute("datetime", thisYear.toString())
    //        year.textContent = thisYear.toString();
    // }
    
    // 2nd solution
    const year  = document.getElementById("year") as HTMLSpanElement
    const thisYear = new Date().getFullYear()
    year.setAttribute("datetime", thisYear.toString())
    year.textContent = thisYear.toString();
