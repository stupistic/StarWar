import React from 'react';
import './planetDetail.css'

const Planet  = (props) => {

  return <div className='container-fluid c3 shadow text-center'>
       <h1 className='c1'>Planet Details</h1>

        <h1 className='c2 float-left row text-center'>
        <div className=' col  shadow'><span className='float-left'><i className="fa fa-globe d1"/></span>Planet Name</div>
        <div className='c4 col shadow'>{props.detail.name}</div>
        </h1>

        <h1 className='c2  float-left row'>
        <div className=' col shadow' ><span className='float-left'><i className="far fa-clock d1"/></span>Rotation Period</div>
         <div className='c4 col shadow'>{props.detail.rotation_period}</div>
         </h1>

        <h1 className='c2 float-left row'>
        <div className=' col shadow'><span className='float-left'><i className="fa fa-circle d1"/></span> Diameter</div>
         < div className='c4 col shadow'>{props.detail.diameter}</div>
        </h1>

        <h1 className='c2  float-left row'>
        <div className=' col shadow'><span className='float-left'><i className="fab fa-grav d1"/> </span>Gravity </div>
        <div className='c4 col shadow'>{props.detail.gravity}</div>
        </h1>

        <h1 className='c2  float-left row'>
        <div className=' col shadow'><span className='float-left'><i class="fas fa-map-marker-alt d1 " /></span> Terrain</div>
         <div className='c4 col shadow'>{props.detail.terrain}</div>
         </h1>

        <h1 className='c2  float-left row'>
        <div className='  col shadow'><span className='float-left'><i className="fa fa-water d1"/> </span>Surface water</div>
         <div className='c4 col shadow'>{props.detail.surface_water}</div>
         </h1>

        <h1 className='c2  float-left row'>
        <div className=' col shadow'><span className='float-left'><i class="fa fa-users d1" /> </span>Population </div>
        <div className='c4 col shadow'>{props.detail.population}</div>
        </h1>

        </div>
}
export default Planet
