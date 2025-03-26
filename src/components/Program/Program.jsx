import React, { Fragment, useState, useRef, useEffect} from 'react'

const Program = ({ id, name, description, location, type, tags, isMatch, resultIndex, showProgram }) => {

  return (
    <article
      className={`program ${isMatch===true?'match':''}
      ${showProgram===true && isMatch===true ?'reveal':''}`}>
      <div className="inner-wrapper" style={ {
          transitionDelay: `${resultIndex * 0.125}s`
        }}>
        <div className="content">
          <h3>{name} {resultIndex * 0.25} </h3>
          <p className="description">{description}</p>
        </div>

        <div className="metadata">
          <ul>
            <li>location: {location}</li>
            <li>type: {type}</li>
          </ul>
          <ul>
            { tags.map( (tag, index) => {
              <li key={index}>{tag}</li>
            })}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default Program;
