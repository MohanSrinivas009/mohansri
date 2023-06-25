import React from 'react'
 export const AboutPage = () => {
  return (
    <div className="title scroll">
      <div><h1 className="content about">About</h1></div>
      <div className="Bio"></div>
      <div className="Education">
        <h2>Education</h2>
        <div>
          <h3>Graduation</h3>
          <div>
            <div>
            <p>Degree</p>
            <p>Graduated Year</p>
            <p>CGPA</p>
            </div>
            <image src=""/>
          </div>
        </div>
        <div>
          <h3>Graduation</h3>
          <div>
            <p>Degree</p>
            <p>Graduated Year</p>
            <p>CGPA</p>
          </div>
        </div>
        <div>
          <h3>Graduation</h3>
          <div>
            <p>Degree</p>
            <p>Graduated Year</p>
            <p>CGPA</p>
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
        <h2>Certificates</h2>
        <div className="certicate">
          <div>
            <h3>Course title</h3>
            <p>By</p>
            <p>Source</p>
          </div>
          <image src="" />
        </div>
        <div className="certicate">
          <div>
            <h3>Course title</h3>
            <p>By</p>
            <p>Source</p>
          </div>
          <image src="" />
        </div>
        <div className="certicate">
          <div>
            <h3>Course title</h3>
            <p>By</p>
            <p>Source</p>
          </div>
          <image src="" />
        </div>
      </div>
    </div>
  );
}