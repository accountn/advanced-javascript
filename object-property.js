const students = [
    {id : 21, name: "karim"},
    {id : 41, name: "rahim"},
    {id : 51, name: "kamrul"},
    {id : 61, name: "salam"},
];
const names = students.map(s => s.name);
const bigger = students.filter(s => s.id>40);
console.log(bigger);

// const students = [
//          {id : 21, name: "karim"},
//          {id : 41, name: "rahim"},
//          {id : 51, name: "kamrul"},
//          {id : 61, name: "salam"},
//      ];
//      const output = [];

//      for(i = 0; i<students.length; i++){
//          const element = students[i];
//          const result = students.name;
//          console.log(result);
//      }