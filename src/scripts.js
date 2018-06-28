function goButton()
{
    let allInput = [];

    inputs = $('#myform :input');

    inputs.each(function() {
        allInput.push($(this).val());
    });

    console.log(allInput);

    //generates and displays the magic number
    let magicNumber = Math.floor(Math.random()*8 + 2).toString();
    $('#generate').html(magicNumber);

    //prints MASH header
    document.getElementById("popupHeader").innerHTML = "M.A.S.H";

    //document.getElementById("popupText").innerHTML = formatAllInput(allInput);     //prints ALL categories

    //prints each category list as individual element in 2nd grid-container
    $('#popupCat1').html(formatOneCategory(sliceArray(allInput, 0, 4), "COLLEGES"));
    $('#popupCat2').html(formatOneCategory(sliceArray(allInput, 4, 8), "CAREERS"));
    $('#popupCat3').html(formatOneCategory(sliceArray(allInput, 8, 12), "SALARIES"));
    $('#popupCat4').html(formatOneCategory(sliceArray(allInput, 12, 16), "PETS"));
    $('#popupCat5').html(formatOneCategory(sliceArray(allInput, 16, 20), "SPOUSES"));
    $('#popupCat6').html(formatOneCategory(sliceArray(allInput, 20, 24), "NUMBER OF KIDS"));
    $('#popupCat7').html(formatOneCategory(sliceArray(allInput, 24, 28), "CARS"));
    $('#popupCat8').html(formatOneCategory(sliceArray(allInput, 28, 32), "CITIES"));

    //makes answers visible
    //$('.answers').css("visibility: visible");

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



