// ==============================================================
import { Request, Response } from 'express';
import Incident from '../model/humanchain.model';
// ==============================================================




const createIncident = async (req: Request, res: Response) => {
    try {
        console.log("Request body:", req.body);
        const { title, description, severity } = req.body;

        const allowedSeverities = ['Low', 'Medium', 'High'];

        if (!title || !description || !severity) {
            return res.status(400).json({ message: 'All fields (title, description, severity) are required.' });
        }
        if (!allowedSeverities.includes(severity)) {
            return res.status(400).json({ message: 'Severity must be one of: Low, Medium, High.' });
        }

        const incident = await Incident.create({
            title,
            description,
            severity,
        });

        return res.status(201).json({
            message: 'Incident created successfully.',
            incident,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

export default createIncident;
