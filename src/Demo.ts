// let myName: string;
// myName="Dnyanesh";
// let FatherName: string="Vijay";
// let Surname: string="Raut";
// //console.log(myName);
// //console.log(`My name is ${myName} & Father Name is ${FatherName} & Surname is ${Surname}`);
// //console.log(`My name is ${myName} ${FatherName} ${Surname}`);


// let age:number=27;
// //console.log("My age is" + age);
// //console.log(`My age is ${age}`);
// let salary:number=92000;
// //console.log("My salary is" + salary +" & My age is " + age );
// //console.log(`My salary is ${salary}`);

// let sub1:String="Physics";
// let sub2:String="Chemistry";
// let sub3:String="Maths";
// let marks1:number=90;
// let marks2:number=80;
// let marks3:number=85;
// //console.log(`My marks in ${sub1} are ${marks1} & ${sub2} are ${marks2} & ${sub3} are ${marks3} `); 

// //-------------------------------Boolean data type------------//

// let isLoggedIn:boolean=true;
// //console.log(`The user is logged in : ${isLoggedIn}`);

// let myCity:String="Satara";
// let myStatus:boolean=false;

// //console.log(`My name is ${myName} My city is ${myCity} 100 KM from Pune and currently i am bILLIONAIRE, NO,  ${myStatus}`);
// //console.log(`"My name is ${myName} "& Father Name is" + Fathername + & Surname is ${Surname}"`);

    
// // let null: number = null;
// // let undefined: string|undefined;
// // console.log(`The value of null is ${null} & The value of undefined is ${undefined}`);
// let physicsmarks:number=100;
// let chemistrymarks:number=90;
// let sociologymarks:number|undefined;
// let sociologymarks1:number=null;

// // console.log(`My name is ${  myName} & My Age is ${age} & My Marks in Physics are ${physicsmarks} & My Marks in Chemistry are ${chemistrymarks} & My Marks in Sociology are ${sociologymarks}`);
// // console.log(`My name is ${  myName} & My Age is ${age} & My Marks in Physics are ${physicsmarks} & My Marks in Chemistry are ${chemistrymarks} & My Marks in Sociology are ${sociologymarks1}`);


// // Biomarks=100;

// // let BioMarks:number|undefined;

// // console.log(`Biomarks: ${Biomarks}`);

// let myMobileNumber:number=9595418815;
// let myAccountbalance:bigint=10000084654135165465435135131n;
// //console.log(`My Mobile Number is ${myMobileNumber} & My Account Balance is ${myAccountbalance}`);

// // let name: unknown=27;
// // let age1: unknown="Dnyanesh";
// // let isLoggedIn1: unknown=true;  
// // //console.log(`My name is ${name} & My age is ${age1} & My login status is ${isLoggedIn1}`);

// // let nname: any= 79532222225;
// // let status:any=false;
// // //console.log(`My name is ${nname} & My login status is ${status}`);

// // function sayHello():void {
// //     console.log("Hello, World!");
// // }
// // sayHello();

// // let studentDetails: number[] = [27, 90, 80, 85];
// // console.log(studentDetails);
// // let studentDetails1: [number,string,boolean] = [27, "Dnyanesh", true];
// // console.log(studentDetails1);

// let person:{name:string[];age:number;hobbies:string[];myMobileNumber:number}={
//     name:["Dnyanesh","Vijay","Raut"],
//     age:27,
//     hobbies:["Reading","Gaming","Travelling"],
//     myMobileNumber:9595418815,
// }
// console.log(person);

///////STUDENT PROFILE

let studentName: string="Dnyanesh";
let studentAge: number=27;
let courseFee: number=25000;
let isCourseCompleted: boolean=false;
let date: number|undefined;
let placementCompany: null= null;
let studentId: bigint= 12345678988888887654231n;
let studentPercentage: any;
let studentAttendance: unknown=100;

//console.log("The student name is:"+studentName+"\n Age is:" +studentAge+"\n my course fee is:"+courseFee+"\n is course completed:"+isCourseCompleted+"\n course date:"+date+"\n placement company is:" +placementCompany + "\n Student ID is:" +studentId +"\n Student Percentage is:" +studentPercentage + "\n Student Attendance is:" +studentAttendance )


// let a:number=10;
// let b:number=25;
// let c:number=2;
// let result1:boolean;

// result1=(a>b);
// //console.log(result1);

// let result2:boolean;
// result2=(a>c);
// //console.log(result2);

// if (result1 && result2) {
//     console.log("First number is bigger than second number and third number");
// }
// else{
//     console.log("First number is not bigger than second number and third number");
// }

// if(result1 || result2){
//     console.log("First number is bigger than second number or third number");   
// }
// else{
//     console.log("First number is not bigger than second number or third number");
// }

let count:number=10;


// count+=5;
// console.log("The value of count after addition is:"+count);    
// count-=3;
// console.log("The value of count after subtraction is:"+count);    
// count*=2;   
// console.log("The value of count after multiplication is:"+count);

// console.log(10 =="10");
// console.log(10 ==="10");
// console.log(10 != "10");
// console.log(10 !== "10");
// console.log(10 !== 10);

// let leavebalance:number=10;
// let leaveapplied:number=5;
// let leaveapproved:boolean=true;
// let reason:string="Medical Leave";
// let reason1:string="Personal Leave";

// if(leavebalance>=leaveapplied && leaveapproved){
//     console.log("Leave approved!");
// } else if(reason==="Medical Leave" || reason1==="Personal Leave"){
//     console.log("Leave approved.");
// }
//     else
//     {
//         console.log("Leave not approved.");
//     }   


    // let orderAmount:number=4999;
    // let premiumMember:boolean=false;

    // if(orderAmount>5000 && premiumMember){
    //     console.log("You are eligible for coupon!");
    // }
    // else if(orderAmount>5000 || premiumMember){
    //     console.log("You are eligible for coupon!");
    // }
    // else{
    //     console.log("You are not eligible for coupon!");
    // }


    // let aadharnumber:boolean=false;
    // let pancardnumber:boolean=false;
    // let voteridnumber:boolean=false; 
    // let drivinglicensenumber:boolean=false;
    // let voterAge:number=18;
    // let voterAge2:number=17;

    // if(aadharnumber && pancardnumber && voteridnumber && drivinglicensenumber && voterAge >= 18) {
    //     console.log("All documents are valid and voter is eligible.");
    // // } else if(aadharnumber || pancardnumber || voteridnumber || drivinglicensenumber && voterAge >= 18) {
    // //     console.log("Some documents are valid and voter is eligible.");
    // } else if(aadharnumber || pancardnumber || voteridnumber || drivinglicensenumber && (voterAge2 >= 18)) {
    //     console.log("Some documents are valid and voter is eligible.");
    // } else {
    //     console.log("Some documents are invalid or voter is not eligible.");
    // }



    // 
    

    let orderAmount:number=150;
    

    if(orderAmount>=1500){
        console.log("You are eligible for Free Delivery!");
    }
    else if(orderAmount>=1000 && orderAmount<=1499){
        console.log("Delivery charges Applied- 20/-Rs ");
           }
           else if(orderAmount>500 && orderAmount<=999){
            console.log("Delivery charges Applied- 40/-Rs!");
           }
           else if(orderAmount>=200 && orderAmount<=499){
            console.log("Delivery charges Applied- 60/-Rs!");
           }
           else if(orderAmount<=200){
            console.log("Delivery charges Applied- 80/-Rs!");
           }
           else {
            console.log("Invalid order amount!");
           }


        
        
    





