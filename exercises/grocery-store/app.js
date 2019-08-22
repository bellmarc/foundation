 const shopper = {
    name: "Mel",
    age: 23,
    groceryCart: ["quinoa", "carrot", "ginger"],
    hasBag: true,
    hasCoupon: true,
    applyBagDiscount: function(){
       if (shopper.hasBag === true && shopper.hasCoupon === true || shopper.hasCoupon === true){
           console.log("Apply bag discount at register!")
        } else {
            console.log ("Sorry no discount.")
         }
    }
 }
     shopper.applyBagDiscount();


//Object practice
const client = {
    location: ["texas", "new york", "miami", "la"],
    isAdult: true,
    joinMailingList: true,
    sendInvite: function(){
        if(client.isAdult === true && client.location[0]){
            console.log ("You're invited to join our mailing list for more information!")
        } else{
            console.log("Don't give out an invitation")
        }
    }
}
    client.sendInvite();

