import React from 'react';
import { Link } from 'react-router-dom';

const Homepagedoctor = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="position-sticky">
                        <div className="nav flex-column">
                            <Link className="nav-link" to="/doctor">Admin Dashboard</Link>
                            <Link className="nav-link" to="/doctorpage">manage patient</Link>
                            <Link className="nav-link" to="/myAppointment">my appointment</Link>
                            <Link className="nav-link" to="/medicalrecords">medical records</Link>
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

export default Homepagedoctor;
