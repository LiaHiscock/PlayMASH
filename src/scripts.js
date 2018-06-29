function goButton()
{
    let allInput = [];

    inputs = $('#myform :input');

    inputs.each(function() {
        allInput.push($(this).val());
    });

    //generates and displays the magic number
    let magicNumber = Math.floor(Math.random()*8 + 2).toString();
    $('#generate').html(magicNumber);

    //prints MASH header
    document.getElementById("mashHeader").innerHTML = "M.A.S.H";

    //document.getElementById("popupText").innerHTML = formatAllInput(allInput);     //prints ALL categories

    //prints each category list to an OL in a 2nd grid-container
    $('#outputCat1').html(formatOneCategory(sliceArray(allInput, 0, 4), "COLLEGES"));
    $('#outputCat2').html(formatOneCategory(sliceArray(allInput, 4, 8), "CAREERS"));
    $('#outputCat3').html(formatOneCategory(sliceArray(allInput, 8, 12), "SALARIES"));
    $('#outputCat4').html(formatOneCategory(sliceArray(allInput, 12, 16), "PETS"));
    $('#outputCat5').html(formatOneCategory(sliceArray(allInput, 16, 20), "SPOUSES"));
    $('#outputCat6').html(formatOneCategory(sliceArray(allInput, 20, 24), "NUMBER OF KIDS"));
    $('#outputCat7').html(formatOneCategory(sliceArray(allInput, 24, 28), "CARS"));
    $('#outputCat8').html(formatOneCategory(sliceArray(allInput, 28, 32), "CITIES"));

    //disables button after first click
    document.getElementById("generate").disabled = true;


    //uses magic number to iterate through <li>'s and eliminate them
    $("li").each(function(magicNumber){
        alert(this.text());
    });
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



