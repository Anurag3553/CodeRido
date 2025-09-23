const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const codinginterview = new Schema({
    jobProfile: {
        type: String,
        required: true,
    },
    jobRequirements: {
        type: [String],
        required: true,
    },
    resumeData: {
        fileName: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    timeDuration: {
        type: Number,
        required: true,
    },
    startTime: {
        type: Date,
        default: Date.now,
    },
    endTime: {
        type: Date,
    },
    status: {
        type: String,
        enum: ["in_progress", "completed", "timeout"],
        default: "in_progress",
    },
    questionsAndAnswers: [{
        question: {
            type: String,
            required: true,
        },
        userResponse: {
            type: String,
            required: false, //  <-- CHANGE THIS
        },
        aiFeedback: {
            type: String,
            required: false, //  <-- CHANGE THIS
        },
        timestamp: {
            type: Date,
            default: Date.now,
        },
    }],
    review: {
        overallFeedback: {
            type: String,
            default: null,
        },
        strengths: {
            type: [String],
            default: [],
        },
        weaknesses: {
            type: [String],
            default: [],
        },
        suggestions: {
            type: [String],
            default: [],
        },
    },
});

const coderidoai = mongoose.model("coderidoai", codinginterview);
module.exports = coderidoai;
