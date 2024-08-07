const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');

const prisma = new PrismaClient();
const app = express();
app.use(bodyParser.json());

app.post('/availability', async (req, res) => {
    const { day, timeSlots } = req.body;

    try {
        const availability = await prisma.availability.create({
            data: {
                day: new Date(day),
                timeSlots: JSON.stringify(timeSlots)
            }
        });
        res.json(availability);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.get('/availability', async (req, res) => {
    try {
        const availabilities = await prisma.availability.findMany();
        res.json(availabilities);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
