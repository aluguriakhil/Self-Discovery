import React from 'react'

const About = () => {
    return (
        <div>
            <div className="flex justify-center space-x-8">
                <div className="bg-blue-500 h-11 w-10 rounded-2xl">
                    <a href="https://www.linkedin.com/in/akhil-aluguri" target='_blank'><i class="fa-brands fa-linkedin text-2xl ml-2 mt-2"></i></a>
                </div>
                <div className="bg-red-600 h-10 w-12 rounded-xl">
                    <a href="https://www.youtube.com/@akhilaluguri3879" target='_blank'><i class="fa-brands fa-youtube text-2xl ml-2 mt-2"></i></a>
                </div>
            </div>
        </div>
    )
}

export default About
