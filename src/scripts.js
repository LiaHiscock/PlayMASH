function goButton()
{
    let allInput = [];

    inputs = $('#myform :input');

    inputs.each(function() {
        allInput.push($(this).val());
    });

    //generates and displays the magic number
    let magicNumber = Math.floor(Math.random()* 8 + 2).toString();
    $('#generate').html(magicNumber);

    //document.getElementById("popupText").innerHTML = formatAllInput(allInput);     //prints ALL categories

    //scrolls to the printed results
    $('html,body').animate( {scrollTop: $(".scrollHere").offset().top} , 'slow');


    //prints each category list to an OL in a 2nd grid-container
    $('#header0').html("HOME");
    $('#cat0').html("<li class='active'>MANSION</li>" +
                    "<li class='active'>APARTMENT</li> " +
                    "<li class='active'>SHACK</li>" +
                    "<li class='active'>HOUSE</li>");

    $('#header1').html("COLLEGES");
    $('#outputCat1').html(formatOneCategory(sliceArray(allInput, 0, 4)));

    $('#header2').html("CAREERS");
    $('#outputCat2').html(formatOneCategory(sliceArray(allInput, 4, 8)));

    $('#header3').html("SALARIES");
    $('#outputCat3').html(formatOneCategory(sliceArray(allInput, 8, 12)));

    $('#header4').html("PETS");
    $('#outputCat4').html(formatOneCategory(sliceArray(allInput, 12, 16)));

    $('#header5').html("SPOUSES");
    $('#outputCat5').html(formatOneCategory(sliceArray(allInput, 16, 20)));

    $('#header6').html("NUMBER OF KIDS");
    $('#outputCat6').html(formatOneCategory(sliceArray(allInput, 20, 24)));

    $('#header7').html("CARS");
    $('#outputCat7').html(formatOneCategory(sliceArray(allInput, 24, 28)));

    $('#header8').html("CITIES");
    $('#outputCat8').html(formatOneCategory(sliceArray(allInput, 28, 32)));

    //disables button after first click
    document.getElementById("generate").disabled = true;

    eliminateAllButOnePerCat(magicNumber);
}

function formatOneCategory(oneCategoryArray)
{
    var myString = "";

    for(i = 0; i < oneCategoryArray.length; i++)
    {
        myString += `<li class="active">${oneCategoryArray[i]}</li>`;
    }

    return myString;
}

function sliceArray(allInput, start, end)
{
    return allInput.slice(start, end);
}

var dict = {
    colleges: ["University of Washington", "Washington State University", "Cal Poly SLO", "Chapman",
        "Harvard University", "University of Georgia", "Stanford University", "Gonzaga University",
        "Johns Hopkins University", "New York University", "Boston University", "University of Arizona",
        "Brown University"],
    careers: ["Software Developer", "Nurse", "Janitor", "Unemployed", "Kindergarten Teacher",
        "McDonald's Manager", "Lawyer", "Architect", "CEO", "Bartender", "Zookeeper",
        "Pro Athlete", "Yoga Instructor"],
    salaries: ["10K", "500K", "1M", "50K", "30K", "75K", "200K", "100K", "0", "90K", "12K", "60K", "120K"],
    salary: ["$10K", "$500K", "$1M", "$50K", "$30K", "$75K", "$200K", "$100K", "$0", "$90K", "$12K", "$60K", "$120K"],
    pets: ["Bunny", "Cat", "Dog", "Hamster", "Turtle", "Mouse", "Guinea Pig", "Snake", "Lizard",
        "Fish", "Parrot", "Ferret", "Ladybug"],
    spouses: ["Beyoncé", "Zac Efron", "Madonna", "Bill Nye The Science Guy", "Prince Harry",
        "Young Leonardo DiCaprio", "Ellen DeGeneres", "Dumbledore", "Jacob Black", "Bella Swan", "Edward Cullen", "Drake", "Oprah"],
    kids: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
    cars: ["No car", "Ford", "Vespa Scooter", "Ferrari", "Honda", "Bentley", "Mercedes",
        "Golf Cart", "Metro Bus", "BMW", "Limebike", "Uber", "Skateboard"],
    cities: ["New York", "Seattle", "Portland", "San Diego", "New Orleans", "Boise", "Salt Lake City",
        "Los Angeles", "Houston", "Spokane", "Honolulu", "Minneapolis", "Chicago"],
};

function fillFieldsRandomly(key){
    let randomNumsArray = getIndices(4);

    for(i = 0; i < 4; i++){
        document.getElementsByClassName(key)[i].setAttribute("value", dict[key][randomNumsArray[i]]);
    }
}

function getIndices(count) {
    let indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let selected = [];

    for (count; count > 0; count--) {
        let randomNum = Math.floor(Math.random() * indices.length);

        /*
        if(indices[randomNum] === "used"){
            randomNum = Math.floor(Math.random() * indices.length);
        }
        */

        selected.push(indices[randomNum]);
        indices.splice(randomNum, 1);
        //indices[randomNum] = "used";
    }

    return selected;
}



function displayPlayerName(){
    var playerName = document.getElementById("pName").value;
    window.alert(displayPlayerName);
    /*playerName = $('#playerName :input');
    "storypage.html?name=" + playerName;*/
}



//document.getElementById("displayName").innerHTML = playerName;

var myCollege, myCareer, mySalary, myPet, mySpouse, myKids, myCar, myCity;

function eliminateAllButOnePerCat(magicNumber)
{
    var categoryGroups = [];
    var optionsLeft = true;

    $("ol").each(function (index, element)
    {
        categoryGroups.push(element);
    });

    while( optionsLeft )
    {
        var activeNumber = 1;

        $.each(categoryGroups, function (index, element){
            var activeElements = element.getElementsByClassName("active");

            if( activeElements.length > 1 ){

                $.each(activeElements, function(index, listItem){
                    if (listItem){
                        setTimeout(function(){
                            listItem.classList.remove("current");
                        }, 500);
                    }

                    if(magicNumber % activeNumber === 0 && listItem){
                        listItem.classList = "nthElement";

                        activeNumber = 1;
                    }
                    else {
                        activeNumber++;
                    }

                });



                // if( activeElements.length >= activeNumber){
                //     // activeElements[magicNumber - 1].removeClass("active");
                //     // activeElements[magicNumber - 1].addClass("nthElement");
                //
                // }
                //
                // else{
                //     activeNumber -= activeElements.length;
                // }
            }
        });

        optionsLeft = checkIfOptionsLeft(categoryGroups);
    }
}

function checkIfOptionsLeft(categoryGroups){
    var optionsLeft = false;

    $.each(categoryGroups, function (index, element){
        var activeEl = element.getElementsByClassName("active");

        if(activeEl.length > 1){
            optionsLeft = true;
        }
    });

    return optionsLeft;
}

function currentElement(listItem){
    listItem.classList = "current";
    setTimeout()
}
// function finalOptionChosen(index){
//   if (index >= && index <= 3)
//     {

//     }
// }

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