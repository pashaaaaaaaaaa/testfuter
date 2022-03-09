import './App.css';
import Select  from './Select';
function App() {
  const data = require('./data.json');


const task11Result = (animals) => {
  const result = {"dogs": 0, "cats": 0, "avgage": 0};
  let avgage = null
  animals.forEach(element => {
    avgage = Math.floor(animals.reduce((a, element) => a + element.age, 0) / animals.length)
    if(element.type === "dog" && element.age){
        result.dogs++
      }else{
        result.cats++
      }
    });
    result.avgage = avgage

    return result;
};

console.log(task11Result(data));

const task12Result = (animals) => {
    const result = 0;
    animals.forEach(element => {
      if(element.type === "dog" && element.features === "black"){
      
        result++
        
      }
    });
    return result;
};

console.log(task12Result(data));

const task13Result = (animals) => {
    const result = [];
    animals.forEach(elem =>{
      if(elem.type === "cat" && elem.features === "black"){
        result.push(elem)
      }else if(elem.type === "dog" && elem.features === "white"){
        result.push(elem)
      }
    })
    return result;
};

console.log(task13Result(data));

const task14Result = (animals) => {
    animals.sort(function(a,b){
      if(a.type === "cat"){
        return b.age - a.age 
      }else if(a.type === "dog"){
        return a.age - b.age
      }
    })
    return animals;
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
    let result = number;
    for(let i = 1; i < n ; i++){
      result = result * number
    }
    return result;
};

console.log(myPowFunc(3, 4));

const myFlatFunc = (inputArray) => {
    const result = [...inputArray];
      const res = [];
      while (result.length) {
        const next = result.pop();
        if (Array.isArray(next)) {
          result.push(...next);
        } else {
          res.push(next);
        }
      }
      return res.reverse();
};

console.log(myFlatFunc([1, 3, 5, [1, [4,5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
  return (
    <div className="App">
      <Select data = {data}></Select>
    </div>
  );
}

export default App;
