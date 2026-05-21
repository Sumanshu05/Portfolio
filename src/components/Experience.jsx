import React from 'react'
import experience from './data/experience.json'

const Experience = () => {
  return (
    <>
      <div className="container ex" id='experience'>
        <h1>EDUCATION</h1> 
        {
          experience.map((data)=>{
            return(
              <div key={data.id} className='ex-items my-5'
              data-aos="zoom-in"
              data-aos-duration="1000"> 
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>

                <div className="right">
                  <h2>{data.role}</h2>
                  {data.work && (
                    <h4>
                      <span className="edu-work">{data.work}</span>
                    </h4>
                  )}
                  <h4>
                    <span className="edu-year">{data.year}</span>
                  </h4>
                  <h4>
                    <span className="edu-location">{data.location}</span>
                  </h4>
                  <h5 className="edu-percentage">{data.Percentage}</h5>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Experience
