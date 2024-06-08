import React from 'react'

function Card() {
    return (
        <>
            <div className='me-4'>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://thumbs.dreamstime.com/b/donuts-doughnuts-whichever-you-prefer-86725230.jpg" className="card-img-top" style={{"width":"100%",height:"250px"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text</p>
                        <div className='container w-100'>
                            <select name="" id="" className='m-2 h-100  bg-success rounded '>
                                {Array.from(Array(6), (e, i) => { return (<option key={i + 1} value={i + 1}>{i + 1}</option>) })}
                            </select>
                            <select className='m-2 h-100  bg-success rounded'>
                                <option value='Half'>Half</option>
                                <option value='Full'>Full</option>

                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Totalprice

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Card