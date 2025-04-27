import { Request, Response } from 'express';
import Incident from './../model/humanchain.model';
// ====================================================

const getIncidentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; // Path param

        const incident = await Incident.findById(id);

        if (!incident) {
            return res.status(404).json({ message: 'Incident not found' });
        }

        return res.status(200).json(incident);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default getIncidentById;
