import React from 'react'

function Footer() {
  return (
    <>
        <footer>
        <h3 className="mb-5">GET IN TOUCH</h3>
        <div className="row">
            <div className="col-lg-3 col-md-12">
                    <i className="fa-solid fa-phone"></i>
                    <p>8281760431</p>
            </div>
            <div className="col-lg-3 col-md-12">
                <i className="fa-solid fa-envelope"></i>
                <p>mtshafad@gmail.com</p>
            </div>
            <div className="col-lg-3 col-md-12">
                <i className="fa-brands fa-twitter d-block"></i>
                <a href="https://twitter.com/313bddb9ea704df">Safadmt</a>
            </div>
            <div className="col-lg-3 col-md-12">
                <i className="fa-brands fa-linkedin d-block"></i>
                <a href="https://www.linkedin.com/in/safad-mt-9121721b8">Safad Mt</a>
            </div>
        </div>
    </footer>

    </>
  )
}

export default Footer