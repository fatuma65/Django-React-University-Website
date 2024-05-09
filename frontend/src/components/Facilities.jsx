// import React from 'react'
import img1 from "../assets/images/library.png"
import img2 from "../assets/images/basketball.png"
import img3 from "../assets/images/cafeteria.png"
const Facilities = () => {
  return (
    <>
        <section className="facilities">
            <h1>Our Facilities</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className="row">
                <div className="facilities_col">
                    <img src={img1} />
                    <h3>World Class Library</h3>
                    <p>This facilitates equitable circulation of information resources among all users. Information materials borrowed on regular loan are all issued at the circulation section. Short loan materials are issued from the Circulation Section.</p>
                </div>
                <div className="facilities_col">
                    <img src={img2} />
                    <h3>Largest Play Ground</h3>
                    <p>This facilitates equitable circulation of information resources among all users. Information materials borrowed on regular loan are all issued at the circulation section. Short loan materials are issued from the Circulation Section.</p>
                </div>
                <div className="facilities_col">
                    <img src={img3} />
                    <h3>Tasty and Healthy Food</h3>
                    <p>This facilitates equitable circulation of lectures and information resources among all users. Information materials borrowed on regular loan are all issued at the circulation section. Short loan materials are issued from the Circulation Section.</p>
                </div>

            </div>
        </section>
    </>
  )
}

export default Facilities