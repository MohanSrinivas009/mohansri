import React from 'react'
import NPTEL from './Images/NPTEL.jpg'
 export const AboutPage = () => {
  return (
    <div className="title scroll bg-About">
      <div>
        <h1 className="content about">About</h1>
      </div>
      <div className="Bio"></div>
      <div className="Education">
        <h2>Education</h2>
        <div className="cards">
          <div className="GradDetails">
            <h3>Bachelor's</h3>
            <div>
              <div className="degree">
                <p>B.Tech (ECE)</p>
                <p>Batch: 2019-2023</p>
                <p>CGPA: 7.8</p>
              </div>
            </div>
          </div>
          <div className="GradDetails">
            <h3>High School</h3>
            <div>
              <div className="degree">
                <p>MPC</p>
                <p>Graduated Year: 2019</p>
                <p>Percentage: 82%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>MERN Stack</li>
            <li>C++</li>
            <li>Java</li>
            <li>RDMS</li>
            <li>Mysql</li>
          </ul>
        </div>
      </div>
      <div className="Certification">
        <h2>Certification</h2>
        <div className='certificateCard'>
        <div className="certificate">
          <div>
            <h3>Course title: Programming in C/C++</h3>
            <p>By: Internshala</p>
          </div>
          <img src={require('./Images/Programming_c++.jpg')} alt='C/C++'/>
        </div>
        <div className="certificate">
          <div>
            <h3>Course title: Python For Everybody</h3>
            <p>By: University of Michigan/Coursera</p>
          </div>
          <img src={require('./Images/PythonForEverybody.jpeg')} alt='Python' />
        </div>
        <div className="certificate">
          <div>
            <h3>Course title: Introduction to Internet of Things</h3>
            <p>By: NPTEL</p>
          </div>
          <img src={require('./Images/NPTEL.jpg')} alt='NPTEL' />
        </div>
        <div className="certificate">
          <div>
            <h3>Course Title: Responsive Web Design</h3>
            <p>By: Sololearn</p>
          </div>
          <img src={require('./Images/Responsive-Web-Design_certificate.jpg')} alt='WebResponsive' />
        </div>
        </div>
      </div>
    </div>
  );
}