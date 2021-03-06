require('dotenv').config();

/* Dependencies */
const http = require('http');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const chalk = require('chalk');

const app = express();
const PORT = process.env.PORT || 3001;

/* Middleware */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.set('trust proxy', true);
app.set('trust proxy', 'loopback');

/* Routes */
app.use("/projects", require('./routes/projectRoutes'));
app.use("/billing_periods", require('./routes/billingPeriodRoutes'));
app.use("/billing_period_records", require('./routes/billingPeriodRecordRoutes'));

/* Default Routes */
app.use("/", (req, res) => res.json({ message: "WorkTimeManager-API" }));

/* Server */
const server = http.createServer(app);
server.listen(PORT, () => console.log(chalk.hex("#00ff00")("[HTTP]") + ` WorkTimeManager-API: Listening on port ${PORT}`));