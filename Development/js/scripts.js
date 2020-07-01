let temp=[100,50,30,60,10];



function logger(){
    console.log(temp);
}

logger();



function hottestdays(){
    let hotdays=[];
    for(day of temp){
        if(day>50){
            hotdays.push(day);
        }
    }
    console.log(hotdays);
      

}

hottestdays(temp);


function booksearch(){

let holder = false;    
let books=[
          book1={
              name:"harry potter",
              id:"111"
          },
          book2={
              name:"diary of a wimpy kid"
              ,id:"123"

         },
          book3={
            name:"sherlock holmes",
               id:"333"
           }
           ]


           
               let search=prompt("type in the name and id of your book")
               for(let i =0; i< books.length;i++){
                   if(search==books[i].name && holder == false){
                       alert("we have found your book"); holder=true
                   }
               }
               if(holder==false){
               alert("error:unidentified")}
               

           }


           
           


           




























