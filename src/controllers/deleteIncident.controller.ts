import { Request, Response } from 'express';
import Incident from './../model/humanchain.model';
// ====================================================

const deleteIncident = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; // Path parameter (incident ID)

        // Delete the incident and check if it existed
        const incident = await Incident.findByIdAndDelete(id);

        if (!incident) {
            // Incident not found
            return res.status(404).json({ message: 'Incident not found' });
        }

        // Return success response
        return res.status(200).json({ message: 'Incident deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default deleteIncident;
