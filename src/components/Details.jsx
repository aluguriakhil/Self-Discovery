import React, { useEffect } from 'react'
import BirthPredictions from './BirthPredictions';
const Details = ({ dateInfo }) => {

    function sumOfDigits(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if (sum > 9) {
            return sumOfDigits(sum);
        } else {
            return sum;
        }
    }

    let BirthNumber = sumOfDigits(dateInfo.day);
    let DestinyNumber = sumOfDigits(sumOfDigits(dateInfo.day) + sumOfDigits(dateInfo.month) + sumOfDigits(dateInfo.year)) + 1;

    return (
        <div>
            <div>
                <BirthPredictions BirthNumber={BirthNumber} DestinyNumber={DestinyNumber}/>
            </div>

        </div>
    )
}

export default Details
