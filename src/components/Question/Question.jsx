import React, { Fragment, useState, useRef, useEffect} from 'react'
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'

import "./_question.scss";

const Question = ({ index, id, question, blurb, choices, updateFilters }) => {

  let [selected, setSelected] = useState(false);
  let [answered, setAnswered] = useState(false);
  let [revealed, setRevealed] = useState(false);
  
  return (
    <section className={`question ${answered===true? 'answered':''} ${(index===0||revealed===true||answered===true)?'revealed':''}`} index={index}>
      <div className="content">
        <h2>{question}</h2>
        <p className="blurb">{blurb}</p>
      </div>
      <RadioGroup className="radiogroup-wrapper" value={selected} onChange={(newVal)=>{
        setSelected(newVal);
        setAnswered(true);
        updateFilters(newVal, id, index);
        }} aria-label="">

        {choices.map(({ label, value }, index ) => (
          <Field 
            key={label}
            className={ `radiogroup ${value===selected? "active": "" }`}>
            <Radio
              value={value}
              className={ `radiogroup ${value===selected? "active": "" }`}>
              <Label>{label}</Label>
            </Radio>
          </Field>
        ))}
      </RadioGroup>
    </section>
  )
}

export default Question;
