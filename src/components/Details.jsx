import React from 'react'
import BirthPredictions from './BirthPredictions';
const Details = ({ dateInfo }) => {

    function sumOfDigits(num) {
        if(num===10){
            return 1;
        }
        // Function to calculate the sum of digits of a number
        function digitSum(n) {
            return n.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
    
        // Keep summing digits until a single-digit number is obtained
        while (num > 9) {
            num = digitSum(num);
        }
    
        return num;
    }

    let BirthNumber = sumOfDigits(dateInfo.day);
    let DestinyNumber = sumOfDigits(sumOfDigits(sumOfDigits(dateInfo.day) + sumOfDigits(dateInfo.month) + sumOfDigits(dateInfo.year))+1);

    
    return (
        <div>
            <div>
                <BirthPredictions BirthNumber={BirthNumber} DestinyNumber={DestinyNumber}/>
            </div>

        </div>
    )
}

export default Details
