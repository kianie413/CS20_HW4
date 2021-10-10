hotdogs = (prompt("Enter # of hotdogs you want-- Must be whole #", "0"));

fries = prompt("Enter # of fries you want-- Must be a whole #");

drinks = prompt("Enter # of drinks you want-- Must be a whole #");

hotdogsCost = 3.75, friesCost = 2.00, drinksCost = 1.50;

totalHotdogsCost = (hotdogs * hotdogsCost);
totalFriesCost = (fries * friesCost);
totalDrinksCost = (drinks * drinksCost);

subTotal = totalDrinksCost + totalFriesCost + totalHotdogsCost;

discount = subTotal * 0.9;

taxDiscount = 0.0625 * subTotal;
tax = 0.0625 * subTotal;

totalDiscount = taxDiscount + discount;
total = tax + subTotal;
