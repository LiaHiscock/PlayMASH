function goButton()
{

    var allInput = [];

    inputs = $('#myform :input');

    inputs.each(function() {
        allInput.push($(this).val());
    });

    console.log(allInput);

    //generates and displays the magic number
    var magicNumber = Math.floor(Math.random()*8 + 2).toString();
    document.getElementById("generate").innerHTML =  magicNumber;

    //prints MASH header
    document.getElementById("popupHeader").innerHTML = "M.A.S.H";

    // document.getElementById("popupText").innerHTML = formatAllInput(allInput);     //prints ALL categories

    //prints each category as individual element in 2nd grid-container
    document.getElementById("popupCat1").innerHTML = formatOneCategory(sliceArray(allInput, 0, 4), "COLLEGES");
    document.getElementById("popupCat2").innerHTML = formatOneCategory(sliceArray(allInput, 4, 8), "CAREERS");
    document.getElementById("popupCat3").innerHTML = formatOneCategory(sliceArray(allInput, 8, 12), "SALARIES");
    document.getElementById("popupCat4").innerHTML = formatOneCategory(sliceArray(allInput, 12, 16), "PETS");
    document.getElementById("popupCat5").innerHTML = formatOneCategory(sliceArray(allInput, 16, 20), "SPOUSES");
    document.getElementById("popupCat6").innerHTML = formatOneCategory(sliceArray(allInput, 20, 24), "NUMBER OF KIDS");
    document.getElementById("popupCat7").innerHTML = formatOneCategory(sliceArray(allInput, 24, 28), "CARS");
    document.getElementById("popupCat8").innerHTML = formatOneCategory(sliceArray(allInput, 28, 32), "CITIES");


    document.getElementById("generate").disabled = true;        //disables button after first click
}

function formatOneCategory(oneCategoryArray, catName)
{
    var myString = catName + "<br>";

    for(i = 0; i < oneCategoryArray.length; i++)
    {
        myString += i + 1 + ". " + oneCategoryArray[i] + "<br>";
    }

    return myString;
}

function sliceArray(allInput, start, end)
{
    return allInput.slice(start, end);
}

function countDown(magicNumber){sc

}

// function formatAllInput(allInputArray)
// {
//     let myString = "";
//
//     for(i = 0; i < allInputArray.length; i++)
//     {
//         if(i < 4)
//         {
//             if(i == 0)
//             {
//                 myString += "COLLEGES";
//                 myString += "<br>";
//             }
//
//             myString += (i + 1) + ". " + allInputArray[i] + "<br>";
//         }
//
//         if(i >= 4 && i < 8)
//         {
//             if(i == 4)
//             {
//                 myString += "CAREERS" + "<br>";
//             }
//
//             myString += (i + 1) + ". " + allInputArray[i] + "<br>";
//         }
//
//         if(i >= 8 && i < 12)
//         {
//             if(i == 8)
//             {
//                 myString += "SALARIES" + "<br>";
//             }
//
//             myString += (i + 1) + ". " + allInputArray[i] + "<br>";
//         }
//
//         if(i >= 12 && i < 16)
//         {
//             if(i == 12)
//             {
//                 myString += "PETS <br>";
//             }
//
//             myString += (i + 1) + ". " + allInputArray[i] + "<br>";
//         }
//
//         if(i >= 16 && i < 20)
//         {
//             if(i == 16)
//             {
//                 myString += "SPOUSES <br>";
//             }
//
//             myString += i + 1 + ". " + allInputArray[i] + "<br>";
//         }
//
//         if(i >= 20 && i < 24)
//         {
//             if(i == 20)
//             {
//                 myString += "NUMBER OF KIDS <br>";
//             }
//
//             myString += i + 1 + ". " + allInputArray[i] + "<br>";
//         }
//
//         if(i >= 24 && i < 28)
//         {
//             if(i == 24)
//             {
//                 myString += "CARS <br>";
//             }
//
//             myString += i + 1 + ". " + allInputArray[i] + "<br>";
//         }
//
//         if(i >= 28 && i < 32)
//         {
//             if(i == 28)
//             {
//                 myString += "CITIES <br>";
//             }
//
//             myString += i + 1 + ". " + allInputArray[i] + "<br>";
//         }
//     }
//
//     return myString;
// }



