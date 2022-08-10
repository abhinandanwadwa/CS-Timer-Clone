<<<<<<< HEAD
import React, { useState } from 'react'

const Navbar = (props) => {



  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-0">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CS Timer</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul style={{marginLeft: "auto"}} className="nav justify-content-center navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <span style={{fontSize: "20px", letterSpacing: "3px"}} className="nav-link active" aria-current="page" href="#">{props.scramble}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

=======
import React, { useState } from 'react'

const Navbar = (props) => {



  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-0">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CS Timer</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul style={{marginLeft: "auto"}} className="nav justify-content-center navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <span style={{fontSize: "20px", letterSpacing: "3px"}} className="nav-link active" aria-current="page" href="#">{props.scramble}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

>>>>>>> e9d56484aa343a028f98211c2d4dfc334710d589
export default Navbar