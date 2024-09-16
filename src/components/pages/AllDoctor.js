import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../AllDoctor.css';

export default function Doctors() {
    const doctorsList = [
        { name: "Dr. Subhas Mondal", specialty: "Cardiology", image: 'doctor-image-path' },
        { name: "Dr. Subhojit Kundu", specialty: "Dermatology", image: 'doctor-image-path' },
        { name: "Dr. Rajib Pandit", specialty: "Neurology", image: 'doctor-image-path' },
        { name: "Dr. Prabir Santra", specialty: "Psychiatry", image: 'doctor-image-path' },
        { name: "Dr. Rakesh Santra", specialty: "Dental", image: 'doctor-image-path' },
        { name: "Dr. Anwesha Dey", specialty: "Gastroenterology", image: 'doctor-image-path' },
        { name: "Dr. Pritam Kundu", specialty: "Orthopedics", image: 'doctor-image-path' },
        { name: "Dr. Raja Dey", specialty: "Oncology", image: 'doctor-image-path' },
        { name: "Dr. Suman Nayak", specialty: "Neurosurgery", image: 'doctor-image-path' },
        { name: "Dr. Sumit Ghosh", specialty: "Cardiothoracic Surgery", image: 'doctor-image-path' },
    ];

    const doctorGridRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show-grid');
                        const doctorCards = entry.target.querySelectorAll('.doctor-card');
                        doctorCards.forEach((card, index) => {
                            if (index % 2 === 0) {
                                card.classList.add('left-card');
                            } else {
                                card.classList.add('right-card');
                            }
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (doctorGridRef.current) {
            observer.observe(doctorGridRef.current);
        }

        return () => {
            if (doctorGridRef.current) {
                observer.unobserve(doctorGridRef.current);
            }
        };
    }, []);

    return (
        <div className="doctors">
            <h2>Our Doctors</h2>
            <div className="doctor-grid" ref={doctorGridRef}>
                {doctorsList.map((doctor, index) => (
                    <div key={index} className="doctor-card">
                        <img src={doctor.image} alt={doctor.name} />
                        <h3>{doctor.name}</h3>
                        <p>{doctor.specialty}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
