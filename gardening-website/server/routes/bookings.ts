import { Router } from 'express';

const router = Router();

// Mock database for bookings
let bookings = [];

// Route to create a new booking
router.post('/', (req, res) => {
    const { name, email, service, date } = req.body;
    const newBooking = { id: bookings.length + 1, name, email, service, date };
    bookings.push(newBooking);
    res.status(201).json(newBooking);
});

// Route to retrieve all bookings
router.get('/', (req, res) => {
    res.status(200).json(bookings);
});

// Route to retrieve a specific booking by ID
router.get('/:id', (req, res) => {
    const booking = bookings.find(b => b.id === parseInt(req.params.id));
    if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
});

// Route to delete a booking by ID
router.delete('/:id', (req, res) => {
    bookings = bookings.filter(b => b.id !== parseInt(req.params.id));
    res.status(204).send();
});

export default router;