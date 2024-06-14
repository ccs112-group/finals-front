// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function DoctorManagement() {
//     const [appointments, setAppointments] = useState([]);
//     const navigate = useNavigate();
//     const loggedInEmail = localStorage.getItem('user-email'); // Get logged-in user's email
//     const userId = localStorage.getItem('user-id'); // Get logged-in user's ID
//     console.log('Logged in email:', loggedInEmail);
//     console.log('Logged in user ID:', userId);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch patient details based on user id
//                 const patientResponse = await fetch(`http://127.0.0.1:8000/api/patients?patient_id=${userId}`);
//                 const patientData = await patientResponse.json();

//                 if (patientData.length > 0) {
//                     let patientId = null;

//                     // Iterate through each patient object in patientData
//                     for (let i = 0; i < patientData.length; i++) {
//                         // Check if the patient_id of the current patient matches the loggedIn userId
//                         if (patientData[i].patient_id === userId) {
//                             // If match found, set the patientId and break the loop
//                             patientId = patientData[i].id; // Assuming 'id' is the field representing the patient's ID
//                             break;
//                         }
//                     }

//                     if (patientId !== null) {
//                         // Fetch appointments for the patient
//                         const appointmentResponse = await fetch('http://127.0.0.1:8000/api/appointments');
//                         const appointmentData = await appointmentResponse.json();

//                         // Filter appointments based on logged-in patient's ID
//                         const filteredAppointments = appointmentData.filter(appointment => appointment.patient_id === patientId);
//                         setAppointments(filteredAppointments);
//                     } else {
//                         console.error('No patient found with the provided user ID.');
//                         // If no patient found with the provided user ID, handle accordingly
//                         // For example, redirect the user to a page to register as a patient
//                         navigate('/register-as-patient');
//                     }
//                 } else {
//                     console.error('No patients found in the database.');
//                     // Handle the case where no patients are found in the database
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         if (loggedInEmail && userId) {
//             fetchData();
//         }
//     }, [loggedInEmail, userId, navigate]);

// part 1 sa 
// part 2 sa baba
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Homepageuser from './homepageuser';

// export default function DoctorManagement() {
//     const [appointments, setAppointments] = useState([]);
//     const navigate = useNavigate();
//     const loggedInEmail = localStorage.getItem('user-email'); // Get logged-in user's email
//     const userId = Number(localStorage.getItem('user-id')); // Get logged-in user's ID and convert it to a number
//     console.log('Logged in email:', loggedInEmail);
//     console.log('Logged in user ID:', userId);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch appointments
//                 const appointmentResponse = await fetch('http://127.0.0.1:8000/api/appointments');
//                 const appointmentData = await appointmentResponse.json();

//                 console.log('Fetched appointment data:', appointmentData);

//                 if (appointmentData.length > 0) {
//                     let userAppointments = [];

//                     // Iterate through each appointment object in appointmentData
//                     for (let i = 0; i < appointmentData.length; i++) {
//                         console.log('Checking appointment:', appointmentData[i]);
//                         // Check if the patient_id of the current appointment matches the loggedIn userId
//                         if (appointmentData[i].patient_id === userId) {
//                             console.log('Match found for userId:', userId);
//                             // If match found, add to userAppointments array
//                             userAppointments.push(appointmentData[i]);
//                         }
//                     }

//                     if (userAppointments.length > 0) {
//                         setAppointments(userAppointments);
//                     } else {
//                         console.error('No appointments found for the provided user ID.');
//                         // Handle the case where no appointments are found for the user
//                     }
//                 } else {
//                     console.error('No appointments found in the database.');
//                     // Handle the case where no appointments are found in the database
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         if (userId) {
//             fetchData();
//         }
//     }, [userId]);
  
//     return (
//         <div>
//            <Homepageuser />
//             <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4 main-content">
//                 <h1>Appointments</h1>
//                 <table className='table table-striped'>
//                     <thead className='thead-dark'>
//                         <tr>
                         
//                             <th>Patient ID</th>
//                             <th>Doctor ID</th>
//                             <th>Appointment Date</th>
//                             <th>Status</th>
//                             <th>Reason</th>
//                             <th>Option</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {appointments.map((appointment) => (
//                             <tr key={appointment.id}>
//                                 <td>{appointment.id}</td>
//                                 <td>{appointment.patient_id}</td>
                              
//                                 <td>{new Date(appointment.appointment_date).toLocaleString()}</td>
//                                 <td>{appointment.status}</td>
//                                 <td>{appointment.reason}</td>
//                                 <td>

//                                     <button className="btn btn-danger" onClick={() => openDeleteAppointment(doctor)} type="button"> Cancel</button>
//                                     {/* Add options here */}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </main>
//         </div>
//     );
// }
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Homepageuser from './homepageuser';

export default function DoctorManagement() {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    const loggedInEmail = localStorage.getItem('user-email'); // Get logged-in user's email
    const userId = Number(localStorage.getItem('user-id')); // Get logged-in user's ID and convert it to a number
    console.log('Logged in email:', loggedInEmail);
    console.log('Logged in user ID:', userId);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch appointments
                const appointmentResponse = await fetch('http://127.0.0.1:8000/api/appointments');
                const appointmentData = await appointmentResponse.json();

                console.log('Fetched appointment data:', appointmentData);

                if (appointmentData.length > 0) {
                    let userAppointments = [];

                    // Iterate through each appointment object in appointmentData
                    for (let i = 0; i < appointmentData.length; i++) {
                        console.log('Checking appointment:', appointmentData[i]);
                        // Check if the patient_id of the current appointment matches the loggedIn userId
                        if (appointmentData[i].patient_id === userId) {
                            console.log('Match found for userId:', userId);
                            // If match found, add to userAppointments array
                            userAppointments.push(appointmentData[i]);
                        }
                    }

                    if (userAppointments.length > 0) {
                        setAppointments(userAppointments);
                    } else {
                        console.error('No appointments found for the provided user ID.');
                        // Handle the case where no appointments are found for the user
                    }
                } else {
                    console.error('No appointments found in the database.');
                    // Handle the case where no appointments are found in the database
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (userId) {
            fetchData();
        }
    }, [userId]);

    const deleteAppointment = async (appointmentId) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/appointments/${appointmentId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Remove the deleted appointment from the state
                setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
            } else {
                console.error('Failed to delete the appointment.');
            }
        } catch (error) {
            console.error('Error deleting the appointment:', error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <Homepageuser />
                </nav>

                {/* Main content */}
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 main-content">
                    <h1>Appointments</h1>
                    <table className='table table-striped'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>ID</th>
                                <th>Patient ID</th>
                                <th>Doctor ID</th>
                                <th>Appointment Date</th>
                                <th>Status</th>
                                <th>Reason</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment.id}>
                                    <td>{appointment.id}</td>
                                    <td>{appointment.patient_id}</td>
                                    <td>{appointment.doctor_id}</td>
                                    <td>{new Date(appointment.appointment_date).toLocaleString()}</td>
                                    <td>{appointment.status}</td>
                                    <td>{appointment.reason}</td>
                                    <td>
                                        <button 
                                            className="btn btn-danger" 
                                            onClick={() => deleteAppointment(appointment.id)} 
                                            type="button">
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    );
}
