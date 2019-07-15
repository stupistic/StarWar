import React from 'react';
import './planetDetail.css'

const Planet  = (props) => {

  if(props.detail ===undefined ){
     return <div> No result Found </div>
     
} return <div className='container-fluid c3  text-center'>
                  <h1 className='c1'>Planet Info</h1>

                  <h1 className='c2 float-left row'>
                        <div className=' col e1'>
                        <span className='float-left'>
                        <i className="fa fa-globe d1 d100"/>
                        </span>
                        Planet Name
                        </div>

                        <div className='c4 col shadow'>
                        {props.detail.name}
                        </div>
                 </h1>

                <h1 className='c2  float-left row'>
                        <div className=' col  e1' >
                        <span className='float-left'>
                        <i class="fas fa-temperature-low d107" />
                        </span>
                        Climate
                        </div>

                       <div className='c4 col  shadow'>
                       {props.detail.climate}
                       </div>
                </h1>

                <h1 className='c2  float-left row'>
                      <div className=' col  e1' >
                      <span className='float-left'>
                      <i className="far fa-clock d1 d101"/>
                      </span>
                      Rotation Period
                      </div>

                      <div className='c4 col  shadow'>
                      {props.detail.rotation_period}
                      </div>
                </h1>

                <h1 className='c2 float-left row'>
                      <div className=' col  e1'>
                      <span className='float-left'>
                      <i className="fa fa-circle d1 d102"/>
                      </span>
                      Diameter
                      </div>

                     < div className='c4 col shadow '>
                     {props.detail.diameter}
                     </div>
               </h1>

               <h1 className='c2  float-left row'>
                      <div className=' col  e1'>
                      <span className='float-left'>
                      <i className="fab fa-grav d1 d103"/>
                      </span>
                      Gravity
                      </div>

                      <div className='c4 col  shadow'>
                      {props.detail.gravity}
                      </div>
               </h1>

               <h1 className='c2  float-left row'>
                      <div className=' col  e1'>
                      <span className='float-left'>
                      <i className="fas fa-map-marker-alt d1 d104" />
                      </span>
                      Terrain
                      </div>

                      <div className='c4 col shadow '>
                      {props.detail.terrain}
                      </div>
               </h1>

               <h1 className='c2  float-left row'>
                      <div className='  col  e1'>
                      <span className='float-left'>
                      <i className="fa fa-water d1 d105"/>
                      </span>
                      Surface water
                      </div>

                      <div className='c4 col shadow '>
                      {props.detail.surface_water}
                      </div>
               </h1>

               <h1 className='c2  float-left row'>
                      <div className=' col  e1'>
                      <span className='float-left'>
                      <i className="fa fa-users d1 d106" />
                      </span>
                      Population
                      </div>

                      <div className='c4 col  shadow'>
                      {props.detail.population}
                      </div>
               </h1>

      </div>
}
export default Planet
