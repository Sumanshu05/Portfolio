import React from 'react'
import project from './data/projects.json'

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id='projects'>
        <h1>PROJECTS</h1>
        <div className="row g-4 justify-content-center align-items-stretch">
          {project.map((data) => (
            <div 
            key={data.key} 
            className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex"
            >
              <div 
              className="card project-card text-light w-100" 
              data-aos="flip-right"
              data-aos-duration="1000"
              >
                <div className="project-img-wrapper">
                  <img
                    src={data.imageSrc}
                    className="project-img"
                    alt={data.title}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between text-center">
                  <div>
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                  </div>
                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <a href={data.demo} className="btn-gradient" target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                    <a href={data.source} className="btn-outline-cyan" target="_blank" rel="noopener noreferrer">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
