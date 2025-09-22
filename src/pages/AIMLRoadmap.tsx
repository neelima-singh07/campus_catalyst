import { RoadmapTemplate } from "@/components/roadmaps/RoadmapTemplate";
import { Brain } from "lucide-react";

const aimlSteps = [
  {
    id: 1,
    title: "Python Programming & Mathematics",
    description: "Master Python and essential mathematics for AI/ML including statistics and linear algebra.",
    duration: "6-8 weeks",
    difficulty: "Beginner" as const,
    resources: [
      "Python for Data Science",
      "NumPy & Pandas Tutorial",
      "Linear Algebra for ML",
      "Statistics & Probability"
    ],
    projects: [
      "Data Analysis with Pandas",
      "Statistical Calculator",
      "Matrix Operations Library"
    ]
  },
  {
    id: 2,
    title: "Data Manipulation & Visualization",
    description: "Learn to clean, process, and visualize data using pandas, matplotlib, and seaborn.",
    duration: "4-5 weeks",
    difficulty: "Beginner" as const,
    resources: [
      "Pandas Documentation",
      "Matplotlib Tutorial",
      "Seaborn Guide",
      "Data Cleaning Techniques"
    ],
    projects: [
      "Sales Data Analysis",
      "Interactive Dashboards",
      "Data Cleaning Pipeline"
    ]
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    description: "Understand core ML concepts, algorithms, and supervised/unsupervised learning.",
    duration: "6-8 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "Scikit-learn Documentation",
      "Andrew Ng's ML Course",
      "Hands-On Machine Learning",
      "ML Algorithm Comparison"
    ],
    projects: [
      "House Price Prediction",
      "Customer Segmentation",
      "Recommendation System"
    ]
  },
  {
    id: 4,
    title: "Deep Learning & Neural Networks",
    description: "Dive into neural networks, deep learning architectures using TensorFlow/PyTorch.",
    duration: "8-10 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "TensorFlow Documentation",
      "PyTorch Tutorial",
      "Deep Learning Specialization",
      "Neural Network Architectures"
    ],
    projects: [
      "Image Classification CNN",
      "Sentiment Analysis RNN",
      "Generative Adversarial Network"
    ]
  },
  {
    id: 5,
    title: "Computer Vision",
    description: "Learn image processing, object detection, and computer vision applications.",
    duration: "5-6 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "OpenCV Documentation",
      "Computer Vision Course",
      "Image Processing Techniques",
      "Object Detection Models"
    ],
    projects: [
      "Face Recognition System",
      "Object Detection App",
      "Image Style Transfer"
    ]
  },
  {
    id: 6,
    title: "Natural Language Processing",
    description: "Process and understand human language with NLP techniques and transformers.",
    duration: "5-6 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "NLTK Documentation",
      "spaCy Tutorial",
      "Transformer Models",
      "Hugging Face Library"
    ],
    projects: [
      "Chatbot Development",
      "Text Summarization Tool",
      "Language Translation App"
    ]
  },
  {
    id: 7,
    title: "MLOps & Model Deployment",
    description: "Deploy ML models to production with proper monitoring and versioning.",
    duration: "4-5 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "MLflow Tutorial",
      "Docker for ML",
      "Model Serving Frameworks",
      "Cloud ML Platforms"
    ],
    projects: [
      "ML Model API",
      "Automated ML Pipeline",
      "Model Monitoring System"
    ]
  },
  {
    id: 8,
    title: "Advanced AI Topics",
    description: "Explore cutting-edge AI topics like reinforcement learning and generative AI.",
    duration: "6-8 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "Reinforcement Learning Guide",
      "Generative AI Techniques",
      "Large Language Models",
      "AI Research Papers"
    ],
    projects: [
      "Game Playing AI Agent",
      "Creative Content Generator",
      "Custom LLM Fine-tuning"
    ]
  }
];

const AIMLRoadmap = () => {
  return (
    <RoadmapTemplate
      title="AI/ML"
      description="Master artificial intelligence and machine learning from fundamentals to advanced applications"
      icon={Brain}
      color="bg-purple-500"
      duration="10-12 months"
      difficulty="Intermediate to Advanced"
      students="8,500+"
      rating={4.9}
      steps={aimlSteps}
      prerequisites={["Python programming", "Basic mathematics", "Statistics knowledge"]}
      careerPaths={[
        "Machine Learning Engineer",
        "Data Scientist",
        "AI Research Scientist",
        "Computer Vision Engineer",
        "NLP Engineer"
      ]}
    />
  );
};

export default AIMLRoadmap;