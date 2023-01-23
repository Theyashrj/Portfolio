import React from 'react'

const Details = () => {
  return (<>
  <div className='details'
  >
    <div className='text-white'>
        <h3>Skills</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt laudantium doloremque, debitis vel sapiente hic, illo porro at 
            id dolorem facilis harum nisi quam sed officia ipsam fugiat placeat impedit!</p>
    </div>
    <br/>
    <div className="progress ">

    <div className="progress-bar progress-bar-striped " role="progressbar" aria-label="Default striped example" style={{width:'90%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">HTML</div>
</div>
<br/>
<div className="progress ">
    <div className="progress-bar progress-bar-striped " role="progressbar" aria-label="Default striped example" style={{width:'90%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">CSS</div>
</div> <br/>
<div className="progress ">
    <div className="progress-bar progress-bar-striped " role="progressbar" aria-label="Default striped example" style={{width:'90%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Java</div>
</div> <br/>
<div className="progress ">
    <div className="progress-bar progress-bar-striped " role="progressbar" aria-label="Default striped example" style={{width:'80%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Bootstrap</div>
</div> <br/>
<div className="progress ">
    <div className="progress-bar progress-bar-striped " role="progressbar" aria-label="Default striped example" style={{width:'60%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">ReactJs</div>
</div><br/>
<div className="progress ">
    <div className="progress-bar progress-bar-striped " role="progressbar" aria-label="Default striped example" style={{width:'70%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
</div><br/>
<div className="progress ">
    <div className="progress-bar progress-bar-striped " role="progressbar" aria-label="Default striped example" style={{width:'70%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Python</div>
</div><br/>

</div>

    </>
  )
}

export default Details;