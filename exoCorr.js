//1)
export function find_random_number(guess) {
    let randomNumber = Math.floor(Math.random() * (11 - 1) + 1);
    if (guess === randomNumber) {
      return "Good Work";
    }
    return "Not Matched";
  }
  
  //2)
  export function dateline() {
    const christmas = new Date("2021-12-27");
    let currentDate = new Date();
    let deadline = christmas - currentDate;
    return Math.floor(deadline / (24 * 3600000));
  }
  
  //3)
  export function multiplication_and_division_calculator(
    firstNumber,
    secondNumber
  ) {
    if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
      return `expected numbers, but given ${firstNumber} and ${secondNumber}`;
    }
    let multiplicate = firstNumber * secondNumber;
    if (secondNumber === 0) {
      return `cannot do the division with divisor equal to zero
            but multiplication has returned ${multiplicate}`;
    } else {
      let division = firstNumber / secondNumber;
      return `Multiplication: ${multiplicate} - Division: ${division}`;
    }
  }
  
  //4)
  export function find_longer_string(arr) {
    return arr.reduce((acc, ind) => {
      if (ind.length > acc.length) {
        acc = ind;
      }
      return acc;
    });
  }
  
  //5)
  export function find_largest_number(arr) {
    arr.reduce((acc, ind) => {
      if (ind > acc) {
        acc = ind;
      }
      return acc;
    });
  }
  
  //6)
  export function remove_more_than_once_character(word) {
    let arr = word.split("");
    let once = [],
      twice = [];
    arr.forEach((item) => {
      if (twice.indexOf(item) === -1) {
        twice.push(item);
        once.push(item);
      } else {
        once.splice(once.indexOf(item), 1);
      }
    });
    return once.join("");
  }
  
  //7)
  export function calculate_sum_of_cube(guess) {
    return guess.reduce((acc, ind) => {
      acc = Math.pow(acc, 3) + Math.pow(ind, 3);
      return acc;
    });
  }
  
  //8)
  export function compare_object(obj1, obj2) {
    for (let prop in obj1) {
      if (obj2.hasOwnProperty && obj2[prop] === obj1[prop]) {
        return "twice objets are equals";
      }
    }
    return "twice object are not equals";
  }
  
  //9)
  export function filter_array(arr, func) {
    return arr.filter(func);
  }
  
  //10)
  export function get_item_value(arr, ...index) {
    let values = "";
    let queries = index.map((item) => arr[item]);
    for (let query in queries) {
      values += ` ${queries[query]} `;
    }
    return values;
  }
  
  //11)
  export function remove_property(obj) {
    if (obj.hasOwnProperty("rollno")) {
      delete obj["rollno"];
    }
    return obj;
  }
  
  //12)
  export function get_volume_of_cylinder(Ray, Height) {
    let volume = Math.PI * Math.pow(Ray, 2) * Height;
    return parseFloat(volume).toFixed(4);
  }
  
  //13)
  setInterval(function () {
    let time = new Date();
    console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
  }, 1000);
  
  //14)
  export function check_lower_case(guesString) {
    if (guesString === guesString.toLowerCase()) {
      return `${guesString} was given in lower case `;
    }
    return `${guesString} is not in lower case format`;
  }
  
  //15
  export function add(number1, number2) {
    return new Promise((resolve, reject) => {
      if (typeof number1 === "number" && typeof number2 === "number") {
        const total = number1 + number2;
        return resolve(total);
      }
      return reject("are not the numbers");
    });
  }
  // add(2,3).then(result=>console.log(result)).catch(error=>console.log(error));