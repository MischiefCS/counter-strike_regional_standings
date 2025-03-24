function curveFunction(x) {
    return 1 / (1 + Math.abs(Math.log10(x)));
}

function findMaxPercentageIncrease(limit) {
    let maxIncrease = 0;
    let maxX = 1;
    let prevValue = curveFunction(1);

    for (let x = 2; x <= limit; x++) {
        let currentValue = curveFunction(x);
        let percentageIncrease = ((prevValue - currentValue) / currentValue) * 100;
        
        if (percentageIncrease > maxIncrease) {
            maxIncrease = percentageIncrease;
            maxX = x - 1;
        }
        
        prevValue = currentValue;
    }

    return { maxX, maxIncrease };
}

function remapValueClamped( val, inStart, inEnd, outStart, outEnd )
{
    const interp = ( inStart === inEnd ) ? 0.5 : ((val - inStart) / (inEnd - inStart));
    const clamped = Math.max( Math.min( interp, 1 ), 0);
    return ( clamped * outEnd + ( 1 - clamped ) * outStart );
}

const decayDiff = remapValueClamped(1742800281,1742811081,1727248281,0,1)
console.log(decayDiff * 30);

//const result = findMaxPercentageIncrease(1000000);
//console.log(`Max percentage increase occurs at x = ${result.maxX} to x = ${result.maxX + 1} with an increase of ${result.maxIncrease.toFixed(6)}%`);
