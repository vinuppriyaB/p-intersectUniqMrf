const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
 
  // Task 1
  // Print the name list - As an array
  // Expected Output
  // ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
  //  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]
  
 console.log(scores.map((e)=>e.name));
  

  
  // Task 2
  // >=40 pass.. find those student that passed (Use array method)
  // Expected Output
  // [{
  //     marks: 57,
  //     name: "Lillian Ellis"
  //   },
  //     {
  //     marks: 91,
  //     name: "Debra Beard"
  //   },
  //   {
  //     marks: 75,
  //     name: "Nettie Hancock"
  //   }]

  console.log(scores.filter((e)=> e.marks>=40));




  
  // Task 3
  //  Find all the names who failed the exams (Array methods)
  // Expected Output
  //   ["Yvette Merritt",
  //   "Mccall Carter",
  //   "Pate Collier",
  //   "Hatfield Hodge"
  // ];


  console.log(scores.filter((e)=> e.marks<40).map((e)=> e.name))
  
  // Task 4
  // Find the Average marks

  console.log(scores.reduce((a,{marks})=> (a+marks),0)/scores.length);
  
  // Task 5
  // Find the topper's name
  // Expected Output
  // "Debra Beard"
  function topper(){
     return scores.reduce((a,b)=> (b.marks > a.marks? b:a),scores[0]).name;
  }
  console.log(topper());
  
  
  // Only use
  // map, reduce, filter & destructuring
  
  // Task 6 - use es6
  // Build -  intersection, uniq, without, groupBy
  // https://lodash.com/docs/4.17.15#groupBy

  let array1=[2,1,7,3,6,2,4];
  let array2=[3,4,5,6,1,2];

//intersection
  function intersection(a,b)
  {
        return a.filter((e)=> parseInt(b.filter((e1)=> e==e1)))
  }
  console.log(intersection(array1,array2))

  //uniq
  function uniq(a)
  {
        return a.filter((data,index)=> a.indexOf(data)===index) 
  }
  console.log(uniq(array1))


  //without
  function without(a,...b)
  {
      return a.filter((data)=>(!b.includes(data)));
  }
  console.log(without(array1,1,2))



 //groupby Length
 let array3=["one","two","three","four","six","seven"]

 function groupbyLength(array)
 {
     let obj={};
    let lengtharray=array.map(e=>e.length)
    let result= lengtharray.filter((data,index)=> lengtharray.indexOf(data)===index) 
    for(let i=0;i<result.length;i++)
    {
        obj[result[i]]=array.filter(e=> result[i]==e.length);
    }
    return obj;

 } 
 console.log(groupbyLength(array3));

 
 //groupby MathFloor
 let array4=[3.4,3.5,6.7,6.8,1.2,2.3]

 function groupbyMathFloor(array)
 {
    let obj={};
    let floorarray=array.map(e=> Math.floor(e))
    let result= floorarray.filter((data,index)=> floorarray.indexOf(data)===index) 
    
    for(let i=0;i<result.length;i++)
    {
        obj[result[i]]=array.filter(e=> ((e>=result[i])&&(e<result[i]+1)));
    }
    return obj;

 }
 console.log(groupbyMathFloor(array4));




  // Submission on monday with source code in github 

   