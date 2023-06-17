let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const developers=arr
    .filter(arr => arr.profession === "developer")
    .map(arr => {
        return {
            id: arr.id,
            name: arr.name,
            age: arr.age,
            profession: arr.profession
        };
    });
    console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(arr =>{
        if(arr.profession === "developer"){
            console.log(arr);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newarr ={
        id: 4,
        name:"susan",
        age: "20",
        profession: "intern"
    };
    arr.push(newarr);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr=arr.filter(arr => arr.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newEmployes =[
            {id:5, name:"saikumar", age:"22",profession:"developer"},
            {id:6, name:"sraven", age:"21",profession:"manager"},
            {id:7, name:"gopi", age:"25",profession:"developer"}
    ];
    const concatenateArray =arr.concat(newEmployes);
    console.log(concatenateArray);
  }