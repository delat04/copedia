import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Allow only this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Use CORS middleware with options
app.use(cors(corsOptions));

// Parse JSON request bodies
app.use(express.json());

// Define the path to the data file
//const dataFilePath = path.join(__dirname, 'casas.json');

// Endpoint to handle marker saving
app.post('/save-marker', (req, res) => {
    const markerData = req.body;
    console.log('Received marker data:', markerData);

    // Read the existing markers data
    fs.readFile('casas.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading markers data:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Parse the existing data
        let markersData;
        try {
            markersData = JSON.parse(data);
        } catch (parseErr) {
            console.error('Error parsing JSON data:', parseErr);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Add the new marker data
        markersData.features.push(markerData);

        // Write the updated data back to the file
        fs.writeFile('casas.json', JSON.stringify(markersData, null, 2), (err) => {
            if (err) {
                console.error('Error saving marker data:', err);
                res.status(500).send('Internal Server Error');
                return;
            }
            console.log('Marker saved successfully to casas.json');
            res.status(200).json({ message: 'Marker saved successfully' });
        });
    });
});

// Endpoint to get marker data
app.get('/data', (req, res) => {
    // Read the JSON file from the server filesystem
    fs.readFile('casas.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // Send the JSON data as a response to the client
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
