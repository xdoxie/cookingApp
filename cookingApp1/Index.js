const Cook = require('./Cook');
const cook1 = new Cook("Bill Oakes", 123, "Chicken Parm", 40000, 3);

cook1.on('Cooked Correctly', function(){
    console.log("Delicious! Put a review in yelp, my ID number is: "+cook1.IDNumber);
})

cook1.on('I did my best', function(){
   cook1.salary= cook1.salary- (cook1.salary*.05);
   console.log("I did my best");
})

cook1.on('Going on Strike', function(){
    cook1.salary= cook1.salary+(cook1.salary*.1)
    console.log("Ok I'll fix your salary, your salary is: " +cook1.salary);
})
cook1.on('fine', function(){
    console.log("I’ll raise your wage next paycheck, I promise, your salary is: "+cook1.salary);
 })
cook1.makeFood("Spaghetti"); //I did my best event

 cook1.makeFood("Chicken Parm"); //Cooked Correctly event


 cook1.salaryCut(10000); //Going on Strike event

 cook1.salaryCut(1); //fine event, and cuts salary by 1


cook1.goOnBreak(1000); //Wait 1 second and print "Break Done!, also decrease number of breaks

 cook1.goOnBreak(1000);  //Wait 1 second and print "Break Done!, also decrease number of breaks

 cook1.goOnBreak(1000);  //Wait 1 second and print "Break Done!, also decrease number of breaks

 cook1.goOnBreak(1000);  //Prints No more breaks allowed!