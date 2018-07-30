function goButton() {
    let inputValues = [];

    let inputTags = $('#myform :input');

    inputTags.each(function () {
        inputValues.push($(this).val());
    });

    let magicNumber = generateAndDisplayMagicNum();

    makeOverlayVisible(0);

    $('html,body').animate({scrollTop: $(".scrollHere").offset().top}, 'slow');

    printAllCategoryOptions(inputValues, magicNumber);

    disableAllButtons();

    let usersSpeed = getUsersAnimationSpeed();

    executeAnimationArray(buildAnimationArray(magicNumber), usersSpeed);

    return false;
}

function generateAndDisplayMagicNum() {
    let magicNumber = Math.floor(Math.random() * 8 + 2).toString();
    document.getElementById("generate").innerHTML = magicNumber;
    return magicNumber;
}

function printAllCategoryOptions(allInput, magicNumber) {
    $('#header0').html("HOME");
    $('#cat0').html("<li class='active'>Mansion</li>" +
        "<li class='active'>Apartment</li> " +
        "<li class='active'>Shack</li>" +
        "<li class='active'>House</li>");

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

    $('#headerMagicNum').html(magicNumber.toString());

}

function disableAllButtons() {
    document.getElementById("generate").disabled = true;
    document.getElementById("randomAllButton").disabled = true;
    $('.randomOneButton').each(function () {
        $(this).prop("onclick", null);
    });

}

function formatOneCategory(oneCategoryArray) {
    var myString = "";

    for (i = 0; i < oneCategoryArray.length; i++) {
        myString += `<li class="active">${oneCategoryArray[i]}</li>`;
    }

    return myString;
}

function sliceArray(allInput, start, end) {
    return allInput.slice(start, end);
}

function makeOverlayVisible(index) {
    document.getElementsByClassName('bodyOverlay')[index].style.display = "grid";
}

var dict = {
    colleges: ["University of Washington", "Washington State University", "Cal Poly SLO", "Chapman",
        "Harvard University", "University of Georgia", "Stanford University", "Gonzaga University",
        "Johns Hopkins University", "New York University", "Boston University", "University of Arizona",
        "Brown University"],
    careers: ["Software Developer", "Nurse", "Janitor", "Construction Worker", "Kindergarten Teacher",
        "McDonald's Manager", "Lawyer", "Architect", "CEO", "Bartender", "Zookeeper",
        "Pro Athlete", "Yoga Instructor"],
    salaries: ["10K", "500K", "1M", "50K", "30K", "75K", "200K", "100K", "0", "90K", "12K", "60K", "120K"],
    pets: ["Bunny", "Cat", "Dog", "Hamster", "Turtle", "Mouse", "Guinea Pig", "Snake", "Lizard",
        "Fish", "Parrot", "Horse", "Ladybug"],
    spouses: ["Beyoncé", "Ellen DeGeneres", "Lindsay Lohan", "Queen Elizabeth II", "Rob Kardashian", "Bill Nye The Science Guy",
        "Young Leonardo DiCaprio", "Dumbledore", "Zac Efron", "Donald Trump", "Edward Cullen", "Drake", "Chris Hemsworth"],
    kids: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    cars: ["Tesla", "Ford", "Vespa Scooter", "Ferrari", "Honda", "Bentley", "Mercedes",
        "Golf Cart", "Metro Bus", "BMW", "Limebike", "Uber", "Hearse"],
    cities: ["New York", "Seattle", "Portland", "San Diego", "New Orleans", "Boise", "Salt Lake City",
        "Los Angeles", "Houston", "Spokane", "Honolulu", "Minneapolis", "Chicago"],
};

function fillOneFieldRandomly(key) {
    let randomNumsArray = getIndices(4);

    for (i = 0; i < 4; i++) {
        $('.' + key)[i].setAttribute("value", dict[key][randomNumsArray[i]]);
    }
}

function fillAllFieldsRandomly() {
    fillOneFieldRandomly("colleges");
    fillOneFieldRandomly("careers");
    fillOneFieldRandomly("salaries");
    fillOneFieldRandomly("pets");
    fillOneFieldRandomly("spouses");
    fillOneFieldRandomly("kids");
    fillOneFieldRandomly("cars");
    fillOneFieldRandomly("cities");
    makeIsClickedTrue();
    return false;
}

var randomButtonWasClicked = false;

function makeIsClickedTrue(){
    randomButtonWasClicked = true;
}

function getIndices(count) {
    let indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let selected = [];

    for (count; count > 0; count--) {
        let randomNum = Math.floor(Math.random() * indices.length);

        selected.push(indices[randomNum]);
        indices.splice(randomNum, 1);
    }

    return selected;
}

function displayPlayerName() {
    document.getElementById('putUserNameHere').innerHTML = document.cookie;
}

function buildAnimationArray(magicNumber) {
    let optionsLeft = true;
    let activeNumber = 1;
    let tasks = [];
    let categoryGroups = [];

    $("ol").each(function (index, element) {
        categoryGroups.push(element);
    });

    while (optionsLeft) {
        $.each(categoryGroups, function (index, element) {
            let activeElements = element.getElementsByClassName("active");

            if (activeElements.length > 1) {

                $.each(activeElements, function (index, listItem) {
                    if (listItem) {
                        tasks.push({
                            el: $(this),
                            action: "addCurrentClass"
                        });

                        tasks.push({
                            el: $(this),
                            action: "removeCurrentClass"
                        });
                    }

                    if (activeNumber % magicNumber === 0) {
                        tasks.push({
                            el: $(this),
                            action: "addnthElementClass"
                        });
                        $(this).removeClass("active");

                        // activeNumber = 1;
                    }

                    activeNumber++;
                });
            }
        });
        optionsLeft = checkIfOptionsLeft(categoryGroups);
    }

    return tasks;
}

function getUsersAnimationSpeed(){
    let usersSpeed;
    let radioButtons = document.getElementsByClassName("animationSpeed");

    for(i = 0; i < radioButtons.length; i++){
        if (radioButtons[i].checked){
            usersSpeed = radioButtons[i].value;
        }
    }
    return usersSpeed;
}

function executeAnimationArray(taskArray, usersSpeed) {
    setTimeout(function next() {
        let current = taskArray.shift();
        element = current.el;
        action = current.action;

        if (action === "addCurrentClass") {
            element.addClass("currentElement");
        }

        if (action === "removeCurrentClass") {
            element.removeClass("currentElement");
        }

        if (action === "addnthElementClass") {
            element.addClass("nthElement");
        }

        if (taskArray.length > 0) {
            setTimeout(next, usersSpeed);
        }

        if (taskArray.length === 0) {
            getResults();
        }
    }, usersSpeed);
}

function checkIfOptionsLeft(categoryGroups) {
    var optionsLeft = false;

    $.each(categoryGroups, function (index, element) {
        var activeEl = element.getElementsByClassName("active");

        if (activeEl.length > 1) {
            optionsLeft = true;
        }
    });

    return optionsLeft;
}

function getResults() {
    makeOverlayVisible(1);

    $('html,body').animate({scrollTop: $(".scrollHere2").offset().top}, 'slow');

    playerName = $('#myform :input');

    let resultsArr = $('.active');

    let picOnlyResultsArr = [resultsArr[0], resultsArr[1], resultsArr[2], resultsArr[4], resultsArr[5], resultsArr[7]];

    document.getElementById('displayPlayerName').innerHTML = playerName[32].value + "'s Future";
    document.getElementById('displayResults').innerHTML = "In the future, you will attend " + resultsArr[1].innerHTML +
                            " and later spend your days as a " + resultsArr[2].innerHTML + " with a yearly salary of $" +
                            resultsArr[3].innerHTML + ". You will marry " + resultsArr[5].innerHTML + " and have " +
                            resultsArr[6].innerHTML + " kid(s).\n" + "You and " + resultsArr[5].innerHTML + " will move to " +
                            resultsArr[8].innerHTML + " where you will live in a beautiful " + resultsArr[0].innerHTML +
                            " and have a pet " + resultsArr[4].innerHTML + ". You will cruise around + " +
                            resultsArr[8].innerHTML + " in an awesome " + resultsArr[7].innerHTML + " and live happily ever after!";

    if( randomButtonWasClicked ){ getImagesFromDefaults(resultsArr); }

    else{ getImagesFromGoogle(picOnlyResultsArr); }
}

function getImagesFromDefaults(activeElArr) {
    let homePic = new Image();
        homePic.src = "Images/" + activeElArr[0].innerHTML + ".png";
    let collegePic = new Image();
        collegePic.src = "Images/COLLEGES/" + activeElArr[1].innerHTML + ".png";
    let careerPic = new Image();
        careerPic.src = "Images/CAREERS/" + activeElArr[2].innerHTML + ".png";
    let petPic = new Image();
        petPic.src = "Images/PETS/" + activeElArr[4].innerHTML + ".png";
    let spousePic = new Image();
        spousePic.src = "Images/SPOUSES/" + activeElArr[5].innerHTML + ".png";
    let carPic = new Image();
        carPic.src = "Images/CARS/" + activeElArr[7].innerHTML + ".png";


    document.getElementById('resultsPicsHere').appendChild(homePic);
    document.getElementById('resultsPicsHere').appendChild(collegePic);
    document.getElementById('resultsPicsHere').appendChild(careerPic);
    document.getElementById('resultsPicsHere').appendChild(petPic);
    document.getElementById('resultsPicsHere').appendChild(spousePic);
    document.getElementById('resultsPicsHere').appendChild(carPic);
}

function getImagesFromGoogle(activeElArr) {
    let homePic = new Image();
    homePic.src = "Images/" + activeElArr[0].innerHTML + ".png";
    document.getElementById('resultsPicsHere').appendChild(homePic);

    for(i = 0; i < activeElArr.length; i++){
        let pic = new Image();

        if(i === 1){
            fetch(googleSearchAPICollege(activeElArr[i].innerHTML))
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    pic.src = myJson.items[0].link;
                });
        }

        else{
        fetch(googleSearchAPI(activeElArr[i].innerHTML))
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                pic.src = myJson.items[0].link;
            });
        }

        document.getElementById('resultsPicsHere').appendChild(pic);
    }
}

//HOMEPAGE FUNCTION
function playButton() {
    location.href = 'gamepage.html';
}
