const express = require('express');
const dashboardRouter = require('./router/dashboardRouter');

const port = 1414;

const app = express();

app.use(express.json());

app.use('/api/v1', dashboardRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
