const SampleListing = [
    {
        jobProfile: "Full-Stack Developer",
        jobRequirements: [
            "JavaScript",
            "Node.js",
            "React",
            "MongoDB",
            "REST APIs"
        ],
        resumeData: {
            fileName: "jane_resume.pdf",
            content: "An experienced developer with a focus on building web applications using the MERN stack."
        },
        timeDuration: 30,
        startTime: new Date("2025-08-19T10:00:00Z"),
        endTime: new Date("2025-08-19T10:25:00Z"),
        status: "completed",
        questionsAndAnswers: [
            {
                question: "Tell me about your experience with Node.js.",
                userResponse: "I have two years of experience building back-end services with Node.js and Express.",
                aiFeedback: "Good response, but could be more specific.",
                timestamp: new Date("2025-08-19T10:05:00Z")
            },
            {
                question: "Explain the concept of a RESTful API.",
                userResponse: "A RESTful API is an architectural style for an API that uses HTTP requests to access and use data. It's stateless and uses standard HTTP methods like GET, POST, PUT, and DELETE.",
                aiFeedback: "Excellent and comprehensive explanation.",
                timestamp: new Date("2025-08-19T10:10:00Z")
            }
        ],
        review: {
            overallFeedback: "A solid performance. You demonstrated a strong grasp of foundational concepts. Your responses were clear and well-structured.",
            strengths: [
                "Clear explanations of technical concepts.",
                "Directly addressed the questions asked."
            ],
            weaknesses: [
                "Responses lacked specific project examples.",
                "Could have elaborated more on problem-solving approaches."
            ],
            suggestions: [
                "Link your technical knowledge to specific projects and outcomes.",
                "Prepare concise stories about how you've solved technical challenges in the past."
            ]
        },
    },
    {
        jobProfile: "Data Scientist",
        jobRequirements: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "Machine Learning",
            "SQL"
        ],
        resumeData: {
            fileName: "john_resume.pdf",
            content: "A data scientist specializing in predictive modeling and data analysis using Python and SQL."
        },
        timeDuration: 45,
        startTime: new Date("2025-08-19T11:00:00Z"),
        endTime: new Date("2025-08-19T11:40:00Z"),
        status: "completed",
        questionsAndAnswers: [
            {
                question: "Walk me through your data science workflow.",
                userResponse: "My typical workflow starts with data cleaning and exploration using Pandas. Then I move to feature engineering, model selection with Scikit-learn, and finally, model evaluation.",
                aiFeedback: "A great high-level overview. You hit all the major points.",
                timestamp: new Date("2025-08-19T11:05:00Z")
            },
            {
                question: "Explain the difference between supervised and unsupervised learning.",
                userResponse: "Supervised learning uses labeled data to train a model to predict outcomes, while unsupervised learning works with unlabeled data to find patterns or groupings within the data.",
                aiFeedback: "A perfect, textbook definition. Clear and accurate.",
                timestamp: new Date("2025-08-19T11:15:00Z")
            },
            {
                question: "What is a major challenge you've faced with data preprocessing?",
                userResponse: "I once worked with a dataset that had a lot of missing values. I had to use a combination of imputation methods and feature scaling to prepare the data for the model, which was a time-consuming but crucial step.",
                aiFeedback: "Excellent, practical example that shows you can handle real-world data issues.",
                timestamp: new Date("2025-08-19T11:25:00Z")
            }
        ],
        review: {
            overallFeedback: "You demonstrated a strong theoretical and practical understanding of data science. Your ability to provide specific examples of challenges and solutions is a huge plus.",
            strengths: [
                "Deep understanding of core data science concepts.",
                "Provided relevant and specific examples.",
                "Clear and confident communication style."
            ],
            weaknesses: [
                "Could have been more specific about which imputation methods were used.",
                "Did not mention the importance of feature selection."
            ],
            suggestions: [
                "Be ready to dive deeper into your methodologies, such as discussing specific algorithms or techniques.",
                "Incorporate more business context into your answers—explain the 'why' behind your decisions."
            ]
        },
    },

];

module.exports = {data: SampleListing};
