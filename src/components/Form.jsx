import { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [inputs, setInputs] = useState({
        dob: '',
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Corrected typo here
        console.log('Form Data:', inputs); // Handle form submission using the collected inputs
        onSubmit(inputs);
    };



    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div className='bg-gray-100/30 rounded-3xl flex justify-center'>
                    <h2 className=' text-white'>Enter your Details</h2>
                </div>
                <div className='flex justify-center'>
                    <div className='flex justify-between'>

                        <div className='m-5 bg-gray-100/15 p-10 rounded-xl'>
                            <label htmlFor="dob" className='font-medium text-white'>Enter your date of Birth</label><br />
                            <input type="date" id='dob' name='dob' className='bg-blue-400/75 rounded-lg my-2 p-2' value={inputs.dob} onChange={handleChange} />
                        </div>


                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type="submit" className="bg-red-500 text-white rounded-lg px-4 py-2 mt-2 mb-1 ">Submit</button>
                </div>
                
            </form>
        </div>
    );
};


export default Form;

