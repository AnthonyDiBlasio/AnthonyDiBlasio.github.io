import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faNodeJs,
  faBootstrap,
  faFigma, // Import Figma icon
  faJira, // Import Jira icon
} from '@fortawesome/free-brands-svg-icons';
import vscode from '../images/vscode.png';
import graphql from '../images/graphql.svg.png';
import sql from '../images/sql.png';
import mongodb from '../images/mongodb.svg';

import '../index.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <ul className='row'>
        <ul className='col-6 col-md-3'>
          <FontAwesomeIcon icon={faReact} color='#61DAFB' /> React
        </ul>
        <ul className='col-6 col-md-3'>
          <FontAwesomeIcon icon={faJs} color='#F0DB4F' /> JavaScript
        </ul>
        <ul className='col-6 col-md-3'>
          <FontAwesomeIcon icon={faHtml5} color='#E44D26' /> HTML5
        </ul>
        <ul className='col-6 col-md-3'>
          <FontAwesomeIcon icon={faCss3} color='#264DE4' /> CSS3
        </ul>
        <ul className='col-6 col-md-3'>
          <FontAwesomeIcon icon={faNodeJs} color='#68A063' /> Node.js
        </ul>
        <ul className='col-6 col-md-3'>
          <img src={vscode} alt="VSCode" style={{ width: '20px', marginRight: '5px' }} /> VSCode
        </ul>
        <ul className='col-6 col-md-3'>
          <FontAwesomeIcon icon={faBootstrap} color='#563D7C' /> Bootstrap
        </ul>
        <ul className='col-6 col-md-3'>
          <img src={graphql} alt="GraphQL" style={{ width: '20px', marginRight: '5px' }} /> GraphQL
        </ul>
        <ul className='col-6 col-md-3'>
          <img src={mongodb} alt="Mongodb" style={{ width: '20px', marginRight: '5px' }} /> Mongodb
        </ul>
        <ul className='col-6 col-md-3'>
          <FontAwesomeIcon icon={faJira} color='#0052CC' /> JIRA
        </ul>
        <ul className='col-6 col-md-3'>
          <FontAwesomeIcon icon={faFigma} color='#F24E1E' /> Figma
        </ul>
        <ul className='col-6 col-md-3'>
          <img src={sql} alt="SQL" style={{ width: '20px', marginRight: '5px' }} /> SQL
        </ul>
      </ul>
    </div>
  );
};

export default Skills;
