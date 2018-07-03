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

    //document.getElementById("popupText").innerHTML = formatAllInput(allInput);     //prints ALL categories

    //prints each category list to an OL in a 2nd grid-container
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


    //uses magic number to iterate through <li>'s and eliminate them
    // $("li").each(function(magicNumber){
    //     alert(this.text());
    // });
}

function formatOneCategory(oneCategoryArray)
{
    //var myString = catName + "<br>";

    var myString = "";

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
        "Young Leonardo DiCaprio", "Katy Perry", "Dumbledore", "Jacob Black", "Bella Swan", "Edward Cullen", "Drake", "Oprah"],
    kids: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
    cars: ["No car", "Ford", "Vespa Scooter", "Ferrari", "Honda", "Bentley", "Mercedes",
        "Golf Cart", "Metro Bus", "BMW", "Limebike", "Uber", "Skateboard"],
    cities: ["New York", "Seattle", "Portland", "San Diego", "New Orleans", "Boise", "Salt Lake City",
        "Los Angeles", "Houston", "Spokane", "Honolulu", "Minneapolis", "Chicago"],
};

function fillRandomColleges(key){
    let [index1, index2, index3, index4] = getIndices(4);
    document.getElementsByClassName(key)[0].setAttribute("value",dict.colleges[index1]);
    document.getElementsByClassName(key)[1].setAttribute("value",dict.colleges[index2]);
    document.getElementsByClassName(key)[2].setAttribute("value",dict.colleges[index3]);
    document.getElementsByClassName(key)[3].setAttribute("value",dict.colleges[index4]);

//     $('input.key')[0].setAttribute("value",dict.colleges[index1]);
//     $('.key')[1].setAttribute("value",dict.colleges[index2]);
//     $('.key')[2].setAttribute("value",dict.colleges[index3]);
//     $('.key')[3].setAttribute("value",dict.colleges[index4]);
}

function fillRandomCareer(key){
    let [index1, index2, index3, index4] = getIndices(4);
    document.getElementsByClassName(key)[0].setAttribute("value",dict.careers[index1]);
    document.getElementsByClassName(key)[1].setAttribute("value",dict.careers[index2]);
    document.getElementsByClassName(key)[2].setAttribute("value",dict.careers[index3]);
    document.getElementsByClassName(key)[3].setAttribute("value",dict.careers[index4]);
}

function fillRandomSalary(key){
    let [index1, index2, index3, index4] = getIndices(4);
    document.getElementsByClassName(key)[0].setAttribute("value",dict.salaries[index1]);
    document.getElementsByClassName(key)[1].setAttribute("value",dict.salaries[index2]);
    document.getElementsByClassName(key)[2].setAttribute("value",dict.salaries[index3]);
    document.getElementsByClassName(key)[3].setAttribute("value",dict.salaries[index4]);
}

function fillRandomPet(key){
    let [index1, index2, index3, index4] = getIndices(4);
    document.getElementsByClassName(key)[0].setAttribute("value",dict.pets[index1]);
    document.getElementsByClassName(key)[1].setAttribute("value",dict.pets[index2]);
    document.getElementsByClassName(key)[2].setAttribute("value",dict.pets[index3]);
    document.getElementsByClassName(key)[3].setAttribute("value",dict.pets[index4]);
}

function fillRandomSpouse(key){
    let [index1, index2, index3, index4] = getIndices(4);
    document.getElementsByClassName(key)[0].setAttribute("value",dict.spouses[index1]);
    document.getElementsByClassName(key)[1].setAttribute("value",dict.spouses[index2]);
    document.getElementsByClassName(key)[2].setAttribute("value",dict.spouses[index3]);
    document.getElementsByClassName(key)[3].setAttribute("value",dict.spouses[index4]);
}

function fillRandomNumKids(key){
    let [index1, index2, index3, index4] = getIndices(4);
    document.getElementsByClassName(key)[0].setAttribute("value",dict.kids[index1]);
    document.getElementsByClassName(key)[1].setAttribute("value",dict.kids[index2]);
    document.getElementsByClassName(key)[2].setAttribute("value",dict.kids[index3]);
    document.getElementsByClassName(key)[3].setAttribute("value",dict.kids[index4]);
}

function fillRandomCar(key){
    let [index1, index2, index3, index4] = getIndices(4);
    document.getElementsByClassName(key)[0].setAttribute("value",dict.cars[index1]);
    document.getElementsByClassName(key)[1].setAttribute("value",dict.cars[index2]);
    document.getElementsByClassName(key)[2].setAttribute("value",dict.cars[index3]);
    document.getElementsByClassName(key)[3].setAttribute("value",dict.cars[index4]);
}

function fillRandomCity(key){
    let [index1, index2, index3, index4] = getIndices(4);
    document.getElementsByClassName(key)[0].setAttribute("value",dict.cities[index1]);
    document.getElementsByClassName(key)[1].setAttribute("value",dict.cities[index2]);
    document.getElementsByClassName(key)[2].setAttribute("value",dict.cities[index3]);
    document.getElementsByClassName(key)[3].setAttribute("value",dict.cities[index4]);
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

var myCollege, myCareer, mySalary, myPet, mySpouse, myKids, myCar, myCity;



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



