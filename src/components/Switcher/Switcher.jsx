import React from 'react';
import { CustomSwitcher } from 'react-custom-switcher';

const Switcher = ({ options }) => {
    return (

        q.choices.map(({name, value}, index) => (<li key={index}>{name}, {value}</li>))}

        <CustomSwitcher
            options={[
                {
                    value: 'onsite',
                    label: 'On Site',
                },
                {
                    value: 'offline',
                    label: 'Off Line',
                },
                {
                    value: "mixed",
                    label: "Online with some onsite courses/content"
                }
            ]}
            value={'off'}
            containerSize={300}
            callback={(currentValue) => console.log(currentValue)}
        />
        )
    }

export default Switcher;