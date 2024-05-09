// import React from 'react'
import london from '../assets/images/london.png'
import newYork from '../assets/images/newyork.png'
import washington from '../assets/images/washington.png';

const Campus = () => {
  return (
    <div>
        <section className="campus">
            <h1>Our Global campus</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="row">
                <div className="campus_col">
                    <img src={london} />
                    <div className="layer">
                        <h3>LONDON</h3>
                    </div>
                </div>
                <div className="campus_col">
                    <img src={newYork} />
                    <div className="layer">
                        <h3>NEW YORK</h3>
                    </div>
                </div>
                <div className="campus_col">
                    <img src={washington} />
                    <div className="layer">
                        <h3>WASHINGTON</h3>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Campus