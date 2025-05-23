import express from 'express';

// ===== Import your controllers =====
import createIncident from './../../controllers/createIncident.controller';
import getAllIncidents from './../../controllers/getAllIncidents.controller';
import getIncidentById from './../../controllers/getIncidentById.controller';
import deleteIncident from './../../controllers/deleteIncident.controller';
// ====================================

const humanChainRouter = express.Router();

// =================================================
//@ts-ignore
humanChainRouter.post('/incidents', createIncident);     // Log a new incident to the database
// @ts-ignore
humanChainRouter.get('/incidents', getAllIncidents);      // Retrieve all incidents
//@ts-expect-error
humanChainRouter.get('/incidents/:id', getIncidentById);  // Retrieve a specific incident by ID
//@ts-ignore
humanChainRouter.delete('/incidents/:id', deleteIncident); // Delete a specific incident by ID
// =================================================

export default humanChainRouter;
