import React from 'react'
import '..//..//style.css';
const BirthPredictions = ({ BirthNumber, DestinyNumber }) => {

    const Predictions = {
        "1": {
            "traits": [
                "Leadership Qualities",
                "Originality and Creativity",
                "Determination and Persistence",
                "Independence",
                "Self-Confidence"
            ],
            "challenges": [
                "Impatience",
                "Stubbornness",
                "Egotism"
            ]
        },
        "2": {
            "traits": [
                "Diplomacy and Harmony",
                "Cooperation and Collaboration",
                "Sensitivity and Intuition",
                "Adaptability",
                "Empathy and Compassion"
            ],
            "challenges": [
                "Indecisiveness",
                "Fear of Confrontation"
            ]
        },
        "3": {
            "traits": [
                "Creativity and Expression",
                "Optimism and Enthusiasm",
                "Communication Skills",
                "Social Butterfly",
                "Versatility and Adaptability"
            ],
            "challenges": [
                "Scattering Energy",
                "Exaggeration",
                "Drama"
            ]
        },
        "4": {
            "traits": [
                "Practicality and Stability",
                "Reliability and Dependability",
                "Discipline and Organization",
                "Pragmatism and Realism",
                "Persistence and Determination"
            ],
            "challenges": [
                "Rigidity",
                "Stubbornness"
            ]
        },
        "5": {
            "traits": [
                "Adventurous Spirit",
                "Versatility and Adaptability",
                "Curiosity and Intellect",
                "Communication Skills",
                "Freedom and Independence"
            ],
            "challenges": [
                "Restlessness",
                "Impulsiveness"
            ]
        },
        "6": {
            "traits": [
                "Nurturing and Compassionate",
                "Responsibility and Duty",
                "Harmony and Balance",
                "Creativity and Artistry",
                "Service to Others"
            ],
            "challenges": [
                "Overprotectiveness",
                "Codependency"
            ]
        },
        "7": {
            "traits": [
                "Introspection and Spirituality",
                "Intellectualism and Analytical Skills",
                "Intuition and Insight",
                "Independence and Solitude",
                "Skepticism and Critical Thinking"
            ],
            "challenges": [
                "Feelings of Isolation",
                "Alienation"
            ]
        },
        "8": {
            "traits": [
                "Ambition and Drive",
                "Practicality and Material Success",
                "Power and Influence",
                "Resilience and Determination"
            ],
            "challenges": [
                "Issues with Control",
                "Obsession with Success"
            ]
        },
        "9": {
            "traits": [
                "Compassion and Humanity",
                "Idealism and Vision",
                "Wisdom and Insight",
                "Altruism and Sacrifice",
                "Universal Love and Spirituality"
            ],
            "challenges": [
                "Feelings of Martyrdom",
                "Burnout"
            ]
        }
    };

    const Predictions1 = {
        "1": {
            "career_possibilities": [
                "Entrepreneurship",
                "Leadership roles",
                "Management positions",
                "Consulting",
                "Innovative fields",
                "Self-employment"
            ]
        },
        "2": {
            "career_possibilities": [
                "Mediation",
                "Counseling",
                "Social work",
                "Human resources",
                "Diplomacy",
                "Creative fields"
            ]
        },
        "3": {
            "career_possibilities": [
                "Writing",
                "Editing",
                "Public speaking",
                "Teaching",
                "Performing arts",
                "Marketing"
            ]
        },
        "4": {
            "career_possibilities": [
                "Finance",
                "Accounting",
                "Project management",
                "Engineering",
                "Architecture",
                "Real estate"
            ]
        },
        "5": {
            "career_possibilities": [
                "Sales",
                "Advertising",
                "Media",
                "Public relations",
                "Travel industry",
                "Event planning"
            ]
        },
        "6": {
            "career_possibilities": [
                "Caregiving",
                "Nursing",
                "Teaching",
                "Social work",
                "Counseling",
                "Hospitality industry"
            ]
        },
        "7": {
            "career_possibilities": [
                "Research",
                "Analysis",
                "Science",
                "Philosophy",
                "Spiritual counseling",
                "Psychology"
            ]
        },
        "8": {
            "career_possibilities": [
                "Business",
                "Finance",
                "Management",
                "Investment banking",
                "Entrepreneurship",
                "Executive positions"
            ]
        },
        "9": {
            "career_possibilities": [
                "Humanitarian work",
                "Philanthropy",
                "Teaching",
                "Counseling",
                "Writing",
                "Advocacy"
            ]
        }
    }

    const Predictions2 = {
        "1": {
            "dos": ["Strive to be understanding and humble."]
        },
        "2": {
            "dos": ["Strive to maintain emotional balance and approach situations with a positive outlook."]
        },
        "3": {
            "dos": ["Exercise discernment in placing trust and prioritize avoiding harmful dependencies."]
        },
        "4": {
            "dos": ["Surround yourself with positivity."]
        },
        "5": {
            "dos": ["Practice open-mindedness and avoid rushing to judgments."]
        },
        "6": {
            "dos": ["Be mindful of your spending and focus on essentials."]
        },
        "7": {
            "dos": ["Be discerning in placing trust and consider the timing and context when sharing your emotions."]
        },
        "8": {
            "dos": ["Exercise caution and refrain from engaging in unlawful activities."]
        },
        "9": {
            "dos": ["Practice patience and considerate behavior."]
        }
    };

    let number = BirthNumber;
    let number1 = DestinyNumber;

    //Cross checking values
    // console.log(BirthNumber);
    // console.log(DestinyNumber);

    if (BirthNumber > 0) {
        return (
            <div className='h-auto'>
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
                        <h1 className='font-bold bg-white rounded-t-3xl p-2'>Career Possibilies</h1>
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