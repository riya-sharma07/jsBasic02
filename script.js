const menu=[{
    foodItem:"FARM HOUSE PIZZA",
    category:"Pizza",
    price:250,
    quantity:25,
},
{
    foodItem:"FARM HOUSE PIZZA",
    category:"Pizza",
    price:250,
    quantity:25,
},
{
    foodItem:"PANEER MAKHANI PIZZA",
    category:"Pizza",
    price:350,
    quantity:15,
},
{
    foodItem:"WHITE SAUCE PASTA",
    category:"Pasta",
    price:130,
    quantity:11,
},
{
    foodItem:"RED SAUCE PASTA",
    category:"Pasta",
    price:100,
    quantity:11,
},
{
    foodItem:"OREO SHAKE",
    category:"shakes",
    price:90,
    quantity: 2,
},
{
    foodItem:"STRAWBERRY SHAKE",
    category:"shakes",
    price:85,
    quantity:9,
},
{
    foodItem:"GARLIC BREAD",
    category:"garlic bread",
    price:120,
    quantity:13,
},
{
    foodItem:"CHEESE GARLIC BREAD",
    category:"garlic bread",
    price:130,
    quantity:20,
},
]

console.log("------------------------");
console.log("MENU");
console.log("-------------------------");
menu.forEach((item)=>{
    console.log(item.foodItem);
    console.log(item.price);
});


console.log("-----ITEMS WHOSE QUANTITY IS GREATER THAN 10------");
let result=menu.filter((item)=>{
    return item.quantity>=10
});
console.log(result);
 

 function categories (){
    for (let i = 0; i < 2; i++) {
        let choice = prompt("What would you like to have(pizza,pasta , shakes or garlic bread :");
        switch (choice) 
        {
            case 'pizza':
               let result= menu.filter((pro)=>{
                    return pro.category=="pizza";
                });
                console.log(result);

                break;
            case 'pasta':
                let final= menu.filter((pro)=>{
                    return pro.category=="pasta";
                });
                console.log(final);

                break;
            case 'shakes':
                let result2= menu.filter((pro)=>{
                    return pro.category=="shakes";
                });
                console.log(result2);

                break;
             case 'garlic bread':
                let result3= menu.filter((pro)=>{
                    return pro.category=="garlic bread";
                });
                console.log(result3);

                break;
            default:
                console.log("Invalid choice");
                i--;
                continue;
        }
    }
        
}   
categories();

















