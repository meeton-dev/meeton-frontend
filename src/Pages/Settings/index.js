import React, { useState } from 'react';
import { RadioBtnGroup } from '../../Components/Forms/RadioButtonGroup';

const langArray = [
    {
        id: "en",
        value: "en",
        label: "english",
        isSelected: true
    },
    {
        id: "de",
        value: "de",
        label: "german",
        isSelected: false
    },
    {
        id: "hu",
        value: "hu",
        label: "hungarian",
        isSelected: false
    }
]

const Settings = () => {

    const [languages,  setLanguages] = useState(langArray);

    const handleLanguageChange = (value) => {
        setLanguages(prevState => {
            // console.log(prevState);
            const newState = [...prevState];
            newState.map(object => {
                if(object.value === value) {
                    object.isSelected = true
                } else {
                    object.isSelected = false
                }

            })
            return newState;

        })
    }

// modalVisible
    return (
        <section className='Settings'>
            Settings page
            <RadioBtnGroup data={languages} onChange={handleLanguageChange}/>
        </section>
    );
};


export default Settings