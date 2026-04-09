import React, { ChangeEvent, FormEvent, useState } from 'react';

interface BookingData {
    name: string;
    email: string;
    zone: string;
    issue: string;
    date: string;
    notes: string;
}

const BookingForm: React.FC = () => {
    const [bookingData, setBookingData] = useState<BookingData>({
        name: '',
        email: '',
        zone: 'Pelouse',
        issue: 'Mauvaises herbes',
        date: '',
        notes: '',
    });
    const [isSent, setIsSent] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setBookingData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSent(true);
    };

    return (
        <div className="booking-form">
            <h3>Planifier un traitement</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nom</label>
                <input id="name" name="name" type="text" value={bookingData.name} onChange={handleChange} required />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={bookingData.email} onChange={handleChange} required />

                <label htmlFor="zone">Zone du jardin</label>
                <select id="zone" name="zone" value={bookingData.zone} onChange={handleChange}>
                    <option value="Pelouse">Pelouse</option>
                    <option value="Massif">Massif floral</option>
                    <option value="Potager">Potager</option>
                    <option value="Arbustes">Arbustes</option>
                </select>

                <label htmlFor="issue">Probleme principal</label>
                <select id="issue" name="issue" value={bookingData.issue} onChange={handleChange}>
                    <option value="Mauvaises herbes">Mauvaises herbes</option>
                    <option value="Sol appauvri">Sol appauvri</option>
                    <option value="Parasites">Parasites</option>
                    <option value="Arrosage">Arrosage irregulier</option>
                </select>

                <label htmlFor="date">Date souhaitee</label>
                <input id="date" name="date" type="date" value={bookingData.date} onChange={handleChange} required />

                <label htmlFor="notes">Notes</label>
                <textarea id="notes" name="notes" rows={4} value={bookingData.notes} onChange={handleChange} />

                <button type="submit">Envoyer la demande</button>
            </form>
            {isSent ? <p className="form-success">Demande envoyee. Un conseiller VertAtlas vous contacte sous 24h.</p> : null}
        </div>
    );
};

export default BookingForm;
