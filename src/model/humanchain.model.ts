import mongoose, { Schema, Document } from 'mongoose';

// Define an interface for the incident schema
interface IIncident extends Document {
    title: string;
    description: string;
    severity: 'Low' | 'Medium' | 'High';
    reported_at: Date;
}

// Define the Mongoose schema for incidents
const incidentSchema: Schema<IIncident> = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        severity: {
            type: String,
            enum: ['Low', 'Medium', 'High'],
            required: true,
        },
        reported_at: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

// Create the Mongoose model based on the schema
const Incident = mongoose.model<IIncident>('Incident', incidentSchema);

export default Incident;
