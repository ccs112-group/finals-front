import React from 'react';
import { Link } from 'react-router-dom';

const Homepageuser = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="position-sticky">
                        <div className="nav flex-column">
                            <Link className="nav-link" to="/user">Admin Dashboard</Link>
                            <Link className="nav-link" to="/appointmentDoctor">manage appointment</Link>
                            <Link className="nav-link" to="/userpage">appoint doctor</Link>
                            <Link className="nav-link" to="/mymedicalrecord">my medical record</Link>
                        </div>
                    </div>
                </nav>

                <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
                    {/* Your main content goes here */}
                </main>
            </div>
        </div>
    );
}

export default Homepageuser;
