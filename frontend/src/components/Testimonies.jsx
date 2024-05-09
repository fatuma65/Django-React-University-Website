// import React from 'react'
import user1 from "../assets/images/user1.jpg"
import user2 from "../assets/images/user2.jpg"

const Testimonies = () => {
  return (
    <>
        <section className="testimonials">
            <h1>What our students says</h1>
            <p>Cathyfatuma University offers students a unique educational experience with practical learning, job placements, online options, and support for diverse needs.</p>
            <div className="row">
                <div className="testimonials_col">
                    <img src={user1}/>
                    <div>
                        <p>Cathyfatuma
                             University prioritizes practical experience to enrich learning and boost graduate employability.</p>
                        <h3>Tiana Dorothy</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                       
                    </div>
                </div>
                <div className="testimonials_col">
                    <img src={user2} />
                    <div>
                        <p>Catherinah University prioritizes practical experience to enrich learning and boost graduate employability.</p>
                        <h3>David Bently</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Testimonies