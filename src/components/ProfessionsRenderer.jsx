import React from 'react';
const ProfessionsRenderer = ({ destinyNumber, birthNumber, professionsDataWithIcons }) => {
    // Function to retrieve professions based on destiny and birth numbers
    const getProfessions = () => {
        const destiny = destinyNumber.toString();
        const birth = birthNumber.toString();
        if (professionsDataWithIcons.hasOwnProperty(destiny) && professionsDataWithIcons[destiny].hasOwnProperty(birth)) {
            console.log(professionsDataWithIcons[destiny][birth])
            return professionsDataWithIcons[destiny][birth];
        }
        return [];
    };

    
    

    return (
        <div className='bg-gray-100/15 p-5 m-2 rounded-2xl sm:w-72'>
            <h1 className='font-bold bg-white rounded-t-3xl p-2'>Professions</h1>
            <div className='bg-blue-300 p-2 rounded-b-2xl m-2'>
                <ul>
                    {getProfessions().map((profession, index) => (
                        <li key={index}>
                            <span style={{fontSize:'30px'}} dangerouslySetInnerHTML={{ __html: profession.icon }} /> {profession.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProfessionsRenderer;
