function calculateBodaFare() {
    let input = prompt("Sasa bossy, leo unaenda kama kilomita ngapi hivi");
    let distanceInKilometres = Number(input);

    if(distanceInKilometres <= 0) {
        console.log("please enter a valid number of distanceInKilometres");
    }

    const baseFare = 50; // in ksh
    const chargePerKm = 15; // in ksh

    let totalFare = {
        totalFare: baseFare + (distanceInKilometres * chargePerKm),
    };

    console.log("Haina noma bossy kufika huko si doh mob");
    console.log("kukalia boda ni 50 ksh");
    console.log("Alafu nalipisha 15 ksh kwa kila kilometre so utanipea");
    console.log(`${totalFare.totalFare} kufika huko`);
    console.log("asanti sana, Enjoy your ride!");
}

calculateBodaFare();