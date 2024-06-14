import React from 'react';
import { Link } from 'react-router-dom';

const Homepagereceptionist = () => {
    return (
                <nav className="crud-side">
                    <div className="position-sticky">
                        <div className="nav flex-column">
                            <Link className="nav-link" to="/homepagereceptionist">Receptionist Dashboard</Link>
                            <Link className="nav-link" to="/appointment">Appointment</Link>
                            <Link className="nav-link" to="/managepatient">Manage Patient</Link>
                        </div>
                    </div>
                </nav>
    );
}

export default Homepagereceptionist;
