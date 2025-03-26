import React, { Fragment, useState, useRef, useEffect} from 'react'
import Question from '../Question/Question'
import Program from '../Program/Program'
import "./_questions.scss";

const Questions = ({ qs, programs }) => {

  let [resultCount, setResultCount] = useState(0);
  let [displayResults, setDisplayResults] = useState(false);
  let [showPrograms, setShowPrograms] = useState(false);

  let filters = {
    location: null,
    type: null,
    workxp: null,
    interests: null
  }
  
  const currentQuestion = useRef(null);

  const revealNextQuestion = (i) => {
    let el = document.querySelectorAll('.questions .question')[i];
    el.classList.add('revealed');
  }

  const filterResults = (set, filterKey) => {
    let results = [];
    set.map(( program, i) => {
      if (filters[filterKey] != null && filters[filterKey] === program[filterKey] ) {
        program.isMatch = true;
        results.push(program);
      } else {
        program.isMatch = false;
      }
    });
    return results;
  }

  const clearFilters = () => {
    filters = {
      location: null,
      workxp: null,
      type: null,
      interests: null
    }
    setDisplayResults(false);
  }

  const updateFilters = ( newVal, id, index) => {
    filters[id] = newVal;
    revealNextQuestion(index+1);
    let results = programs;
    
    if(filters['location']) {
      results = filterResults(results, 'location');
    }

    if(filters['type']) {
      results = filterResults(results, 'type');
    }
    
    if(filters['workxp']) {
      results = filterResults(results, 'workxp');
    }
    results.map( (p,index) => {
      p.resultIndex = index;
    })

    setResultCount(results.length);
  }
  
  return (
    <div id="appWrapper" className="app">

      <section className="questions">
        {qs.map((q, index ) => (
          <Question
            key={index}
            index={index}
            updateFilters={updateFilters}
            {...q}
          />
        ))}
      </section>

      <div className="results-count-display">
        <p>Your current filters return <b>{resultCount}</b> results.</p>
        <button 
          id="button_load-results" 
          className={ `button ${resultCount == 0? "hidden": ""}`} 
          onClick={()=> {
            setDisplayResults(true);
            setShowPrograms(true);
          }
        }>
          Load Results
        </button>
        <button 
          id="button_clear-filers"
          className={ `button ${resultCount== 0? "hidden": ""}`} 
          onClick={()=> {
            clearFilters();
            setShowPrograms(false);
          }} >
            Clear Filters
        </button>
      </div>      
 
      <section className={ `result-list ${displayResults === false? 'hidden': 'visible'}` }>
          {programs.map(( p , index ) => (
            <Program 
              key={index}
              showProgram={showPrograms}
              {...p} />
          ))}
      </section>

    </div>

  )
};

export default Questions;
