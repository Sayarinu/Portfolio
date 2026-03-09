import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'P01',
    title: 'DRAFT GAP',
    year: '2026',
    description: 'Full-stack League of Legends prediction platform that compares model odds against bookmaker lines for upcoming and live matches.',
    longDescription: `Draft Gap is a full-stack ML product for forecasting professional League of Legends outcomes and surfacing betting-edge insights.

    It ingests historical match and player statistics from OraclesElixir, resolves teams/players/champions/leagues into canonical entities across sources, computes leakage-safe rolling features, and trains multiple models (Logistic Regression, XGBoost, MLP) with temporal validation.

    The backend exposes FastAPI endpoints for live and upcoming fixtures enriched with model odds, series-aware win probabilities (BO1/BO3/BO5), and bookmaker comparisons when cached odds are available. Celery + Redis handle asynchronous jobs for ingest, feature computation, retraining, roster sync, and periodic refresh.

    Stack highlights:
    - Frontend: Next.js 15, React, TypeScript, Tailwind
    - Backend: FastAPI, Pydantic, SQLAlchemy 2
    - Data + Infra: PostgreSQL, Redis, Celery, Docker Compose
    - ML: pandas, scikit-learn, XGBoost, PyTorch, SHAP

    Persistence is production-oriented: PostgreSQL stores entities/features/model runs and task results, Redis is configured with durable AOF for queues/cache, model artifacts are volume-backed, and OE/PandaScore datasets are cached for restart safety.`,
    tags: [
      'NEXT.JS',
      'FASTAPI',
      'POSTGRESQL',
      'REDIS',
      'CELERY',
      'SCIKIT-LEARN',
      'XGBOOST',
      'PYTORCH',
      'DOCKER'
    ],
    images: [
      '/images/projects/draft-gap-1.png',
      '/images/projects/draft-gap-2.png',
      '/images/projects/draft-gap-3.png'
    ],
    links: { demo: 'https://draft-gap.sayarin.xyz' },
    imageCount: 3
  }
];
