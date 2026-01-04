import type { Project } from '@/types';

import cropRecommendationImg from '@/assets/crop-recommendation.png';
import emotionClassifierImg from '@/assets/emotion-classifier.png';
import expenseTrackingImg from '@/assets/expense-tracking.jpg';
import healthcarePremiumImg from '@/assets/healthcare-premium.jpg';
import creditRiskImg from '@/assets/credit-risk.jpg';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Crop Recommendation System',
    category: 'documentary',
    year: '2024',
    slug: 'crop-recommendation',
    coverImage: cropRecommendationImg,
    description: 'A Crop Recommendation System built with Python, Machine Learning, and Streamlit, aimed at helping farmers choose the most suitable crop based on soil and climate data.',
    location: 'India',
    externalLink: 'https://crop-recomandation.streamlit.app/',
    technologies: ['Python', 'pandas', 'streamlit', 'Scikit-learn', 'numpy'],
    images: [
      {
        id: '1-1',
        src: cropRecommendationImg,
        alt: 'Crop Recommendation System Dashboard',
        aspectRatio: 'square'
      }
    ]
  },
  {
    id: '2',
    title: 'Emotion Classifier',
    category: 'documentary',
    year: '2024',
    slug: 'emotion-classifier',
    coverImage: emotionClassifierImg,
    description: 'The Emotion Classifier is an intelligent NLP-based application that detects human emotions from text inputs using machine learning. It helps determine whether a given sentence expresses joy, sadness, anger, fear, love, or surprise, and displays an appropriate emoji for better visual feedback.',
    externalLink: 'https://emotion-classifier-model.streamlit.app/',
    technologies: ['Python', 'NLP', 'streamlit', 'Scikit-learn', 'HuggingFace'],
    images: [
      {
        id: '2-1',
        src: emotionClassifierImg,
        alt: 'Emotion Classifier Application',
        aspectRatio: 'square'
      }
    ]
  },
  {
    id: '3',
    title: 'Expense Tracking System',
    category: 'documentary',
    year: '2024',
    slug: 'expense-tracking',
    coverImage: expenseTrackingImg,
    description: 'An Expense Tracking System is a web application that allows users to manage their personal or business expenses effectively. This project is built using Python and utilizes several powerful packages to ensure a robust and efficient solution.',
    externalLink: 'https://github.com/devang1005/Expense-Tracking-System',
    technologies: ['Python', 'SQL', 'streamlit'],
    images: [
      {
        id: '3-1',
        src: expenseTrackingImg,
        alt: 'Expense Tracking System Dashboard',
        aspectRatio: 'square'
      }
    ]
  },
  {
    id: '4',
    title: 'Healthcare Premium Prediction App',
    category: 'documentary',
    year: '2024',
    slug: 'healthcare-premium',
    coverImage: healthcarePremiumImg,
    description: 'This app predicts health insurance premiums based on user inputs like age, BMI, smoking status, and more — using an XGBoost model for high accuracy.',
    externalLink: 'https://healthpremium.streamlit.app/',
    technologies: ['Python', 'pandas', 'numpy', 'streamlit', 'scikit-learn'],
    images: [
      {
        id: '4-1',
        src: healthcarePremiumImg,
        alt: 'Healthcare Premium Prediction App',
        aspectRatio: 'square'
      }
    ]
  },
  {
    id: '5',
    title: 'Credit Risk Modeling Prediction',
    category: 'documentary',
    year: '2024',
    slug: 'credit-risk',
    coverImage: creditRiskImg,
    description: 'A user-friendly Streamlit web application that predicts credit risk using machine learning models. Built using powerful tools like scikit-learn, XGBoost, and designed for easy deployment and interpretability.',
    externalLink: 'https://creditcardfinance.streamlit.app/',
    technologies: ['Python', 'pandas', 'numpy', 'streamlit', 'scikit-learn'],
    images: [
      {
        id: '5-1',
        src: creditRiskImg,
        alt: 'Credit Risk Modeling Prediction',
        aspectRatio: 'square'
      }
    ]
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
