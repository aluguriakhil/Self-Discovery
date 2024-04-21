import React from 'react';
import '..//..//style.css';
import { Predictions } from './Predictions';
import { Predictions1 } from './Predictions1';
import { Predictions2 } from './Predictions2';
import { professionsDataWithIcons } from './professionsDataWithIcons';
import ProfessionsRenderer from './ProfessionsRenderer';

const BirthPredictions = ({ BirthNumber, DestinyNumber }) => {

    let number = BirthNumber;
    let number1 = DestinyNumber;

    //Cross checking values
    console.log(BirthNumber);
    console.log(DestinyNumber);

    if (BirthNumber > 0) {
        return (
            <div className='h-auto'>
                <div className='flex flex-wrap justify-center'>

                    <div className='bg-white h-[15rem] p-5 m-2 rounded-2xl sm:w-72'>
                        <h1 className='font-bold bg-black/20 rounded-full pl-16 pt-2 pb-2'>Birth Number</h1>
                        <div className='bg-black/20 h-[10rem] p-2 rounded-full m-2 text-lg'>
                            <p className='text-9xl pl-16 pr-16 text-black/65'>
                                {BirthNumber}
                            </p>
                        </div>
                    </div>

                    <div className='bg-white h-[15rem] p-5 m-2 rounded-2xl  sm:w-72'>
                        <h1 className='font-bold bg-black/20 rounded-full pt-2 pb-2 pl-16'>Destiny Number</h1>
                        <div className='bg-black/10 h-[10rem] p-2 rounded-full m-2 text-lg'>
                            <p className='text-9xl pl-16 pr-16 text-black/65'>
                                {DestinyNumber}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center'>
                    <div className='bg-gray-100/15 p-5 m-2 rounded-2xl sm:w-72'>
                        <h1 className='font-bold bg-white rounded-t-3xl p-2'>Traits</h1>
                        <div className='bg-yellow-100 p-2 rounded-b-2xl m-2'>
                            {Predictions[number].traits.map((trait, index) => (
                                <li key={index}>{trait}</li>
                            ))}
                        </div>
                    </div>

                    <div className='bg-gray-100/15 p-5 m-2 rounded-2xl sm:w-72'>
                        <h1 className='font-bold bg-white rounded-t-3xl p-2'>Challenges</h1>
                        <div className='bg-purple-200 p-2 rounded-b-2xl m-2'>
                            {Predictions[number].challenges.map((challenge, index) => (
                                <li key={index}>{challenge}</li>
                            ))}
                        </div>
                    </div>



                    <div className='bg-gray-100/15 p-5 m-2 rounded-2xl sm:w-72'>
                        <h1 className='font-bold bg-white rounded-t-3xl p-2'>Skills</h1>
                        <div className='bg-green-200 p-2 rounded-b-2xl m-2'>
                            {Predictions1[number1].career_possibilities.map((career_possibility, index) => (
                                <li key={index}>{career_possibility}</li>
                            ))}
                        </div>
                    </div>

                    <div className='bg-gray-100/15 p-5 m-2 rounded-2xl sm:w-72'>
                        <h1 className='font-bold bg-white rounded-t-3xl p-2'>Dos</h1>
                        <div className='bg-pink-200 p-2 rounded-b-2xl m-2'>
                            <ul>
                                {Predictions2[number].dos.map((advice, index) => (
                                    <li key={index}>{advice}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <ProfessionsRenderer
                            destinyNumber={DestinyNumber}
                            birthNumber={BirthNumber}
                            professionsDataWithIcons={professionsDataWithIcons}
                        />
                    </div>
                </div>

            </div>
        );
    } else {
        return (
            <div className='h-[59vh]'></div>
        );
    }
};

export default BirthPredictions;