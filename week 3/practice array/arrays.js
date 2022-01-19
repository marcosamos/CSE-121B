// Activity 1
const array1 = ["one", "two", "three"];
const array1Html = array1.map(function (array) {
  return `<li>${array}</li>`;
});
document.getElementById("myList").innerHTML = array1Html.join();


// Activity 2
const grade = ["A", "B", "C"];

function gpa(grade){
    let points = 0;
    if (grade === "A"){
        points = 4;
    }
    else if(grade === "B"){
        points = 3
    }
    return points;
}

const gpaPoints =  grade.map(gpa);


// Activity 3
const pointsTotal = gpaPoints.reduce(function(total, item){
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;


// Activity 4
const array3 = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

const fruit6Caracters = array3.filter((fruit) => fruit.length < 6);

// Activity 5

const array4 = [12, 34, 21, 54];
luckyNumber = 21;
let searchNumber = array4.indexOf(luckyNumber);