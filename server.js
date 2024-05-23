import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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
const dataFilePath = path.join(__dirname, 'casas.json');

// Endpoint to handle marker saving
app.post('/save-marker', (req, res) => {
    const markerData = req.body;
    console.log('Received marker data:', markerData);

    // Read the existing markers data
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
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
        fs.writeFile(dataFilePath, JSON.stringify(markersData, null, 2), (err) => {
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


app.post('/casas.json', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'casas.json');

    // Check if the file exists
    if (fs.existsSync(jsonFilePath)) {
        // Read the file and send its content as response
        fs.readFile(jsonFilePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Error reading the JSON file' });
            }
            res.json(JSON.parse(data));
        });
    } else {
        res.status(404).json({ error: 'JSON file not found' });
    }
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
