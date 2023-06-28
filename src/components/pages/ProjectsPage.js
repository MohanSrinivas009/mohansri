import React from "react"

export const ProjectsPage = () => {
  return (
    <div className='title scroll ProjectPage'>
      <div className="main">
        <div className="content ProjectTitle">Projects</div>
      </div>
      <div className="DisplayProject">
          <div className='Project'>
          <img src={require('./Images/ScanCard.png')}/>
          <h4>Scan Card Display</h4>
          <p></p>
          <p><a>live page</a></p>
          <p><a>Git repository</a></p>
        </div>
      </div>
    </div>
  );
}
