const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '_app/immutable/assets'))); // Serve static assets like CSS files
app.use(express.static(path.join(__dirname))); // Serve static files

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'iloveyoumanu', // Replace with your MySQL password
    database: 'd_carbn', // Replace with your MySQL database name
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Serve create.html (your form page)
app.get('/routes', (req, res) => {
    res.sendFile(path.join(__dirname, 'routes', 'create.html'));
});

// Handle form submission to save data
app.post('/submit', (req, res) => {
    const formData = {
        start_postcode: req.body.start_postcode,
        end_postcode: req.body.end_postcode,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        date: req.body.date,
        route_id: req.body.route_id,
        client: req.body.client,
        planned_or_actual: req.body.planned_or_actual,
        start_mileage: req.body.start_mileage,
        end_mileage: req.body.end_mileage,
        total_number_of_stops: req.body.total_number_of_stops,
        total_number_of_delivery_stops: req.body.total_number_of_delivery_stops,
        total_delivered_parcels: req.body.total_delivered_parcels,
        total_number_of_collection_stops: req.body.total_number_of_collection_stops,
        total_collected_parcels: req.body.total_collected_parcels,
        total_undelivered_parcels: req.body.total_undelivered_parcels,
        total_uncollected_parcels: req.body.total_uncollected_parcels,
    };

    const query = 'INSERT INTO delivery_routes SET ?';
    db.query(query, formData, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Error saving data.');
        }
        res.send('Data submitted successfully!');
    });
});

// Fetch route_ids from the database to display on routes.html
app.get('/fetch-routes', (req, res) => {
    const query = 'SELECT route_id, depot, date FROM delivery_routes';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching route data:', err);
            return res.status(500).send('Error fetching routes.');
        }
        res.json(results);
    });
});

// Fetch route details by route_id for route-details.html
app.get('/route-details/:id', (req, res) => {
    const routeId = req.params.id;
    const query = 'SELECT * FROM delivery_routes WHERE route_id = ?';
    db.query(query, [routeId], (err, result) => {
        if (err) {
            console.error('Error fetching route details:', err);
            return res.status(500).send('Error fetching route details.');
        }
        res.json(result[0]); // Send the first result (single row)
    });
});

// Update a route by route_id
app.put('/routes/:id', (req, res) => {
    const routeId = req.params.id;
    const updatedData = {
        depot: req.body.depot,
        start_postcode: req.body.start_postcode,
        end_postcode: req.body.end_postcode,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        date: req.body.date,
        client: req.body.client,
        planned_or_actual: req.body.planned_or_actual,
        start_mileage: req.body.start_mileage,
        end_mileage: req.body.end_mileage,
        total_number_of_stops: req.body.total_number_of_stops,
        total_number_of_delivery_stops: req.body.total_number_of_delivery_stops,
        total_delivered_parcels: req.body.total_delivered_parcels,
        total_number_of_collection_stops: req.body.total_number_of_collection_stops,
        total_collected_parcels: req.body.total_collected_parcels,
        total_undelivered_parcels: req.body.total_undelivered_parcels,
        total_uncollected_parcels: req.body.total_uncollected_parcels,
    };

    const query = 'UPDATE delivery_routes SET ? WHERE route_id = ?';
    db.query(query, [updatedData, routeId], (err, result) => {
        if (err) {
            console.error('Error updating route:', err);
            return res.status(500).send('Error updating route.');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Route not found.');
        }
        res.send('Route updated successfully!');
    });
});

// Delete a route by route_id
app.delete('/routes/:id', (req, res) => {
    const routeId = req.params.id;

    const query = 'DELETE FROM delivery_routes WHERE route_id = ?';
    db.query(query, routeId, (err, result) => {
        if (err) {
            console.error('Error deleting route:', err);
            return res.status(500).send('Error deleting route.');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Route not found.');
        }
        res.send('Route deleted successfully!');
    });
});

// Serve route-details.html (details of a route)
app.get('/route-details', (req, res) => {
    res.sendFile(path.join(__dirname, 'routes', 'route-details.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
