import React from 'react';
import { Link } from 'react-router-dom';

const Homepagereceptionist = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="position-sticky">
                        <div className="nav flex-column">
                            <Link className="nav-link" to="/homepagereceptionist">Admin Dashboard</Link>
                            <Link className="nav-link" to="/appointment">appointment</Link>
                            <Link className="nav-link" to="/managepatient">Manage Patient</Link>
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

export default Homepagereceptionist;
