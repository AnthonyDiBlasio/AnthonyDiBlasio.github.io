// Skills.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faHtml5, faCss3, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import vscode from '../images/vscode.png';
import graphql from '../images/graphql.svg.png';
import sql from '../images/sql.png'
import mongodb from '../images/mongodb.svg'
import '../index.css'

const Skills = () => {
  return (
    <div className="skills-container">
      <ul className='row'>
        <ul className='col-2'>
          <FontAwesomeIcon icon={faReact} /> React
        </ul>
        <ul className='col-2'>
          <FontAwesomeIcon icon={faJs} /> JavaScript
        </ul>
        <ul className='col-2'>
          <FontAwesomeIcon icon={faHtml5} /> HTML5
        </ul>
        <ul className='col-2'>
          <FontAwesomeIcon icon={faCss3} /> CSS3
        </ul>
        <ul className='col-2'>
          <FontAwesomeIcon icon={faNodeJs} /> Node.js
        </ul>
        <ul className='col-2'>
          <img src={vscode} alt="VSCode" style={{ width: '24px', marginRight: '5px' }} /> VSCode
        </ul>
        <ul className='col-2'>
          <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
        </ul>
        <ul className='col-2'>
          <img src={graphql} alt="GraphQL" style={{ width: '24px', marginRight: '5px' }} /> GraphQL
        </ul>
        <ul className='col-2'>
          <img src={mongodb} alt="Mongodb" style={{ width: '24px', marginRight: '5px' }} /> Mongodb
        </ul>
        <ul className='col-2'>
          <img src={sql} alt="SQL" style={{ width: '24px', marginRight: '5px' }} /> SQL
        </ul>
      </ul>
    </div>
  );
};

export default Skills;
