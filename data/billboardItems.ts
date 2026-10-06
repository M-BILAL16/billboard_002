export type PillAccent = "white" | "ice" | "sky" | "blue" | "navy";

export type BillboardItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  number: string;
  /** Swap the film by replacing this path. Only the active story is loaded. */
  video: string;
  poster: string;
  image: string;
  accent: PillAccent;
  /** Desktop anchor, as a percentage of the scene. The tile stays at center. */
  x: number;
  y: number;
};

export const heroItems: BillboardItem[] = [
  {
    id: "reach",
    title: "Reach more people",
    description: "A single placement can meet a city between home and the day ahead.",
    category: "Reach",
    number: "01",
    video: "/videos/reach.mp4",
    poster: "/posters/reach.jpg",
    image: "/thumbs/reach.jpg",
    accent: "white",
    x: 50,
    y: 15,
  },
  {
    id: "action",
    title: "Turn attention into action",
    description: "The right screen, at the right corner, when the city is actually looking.",
    category: "Attention",
    number: "02",
    video: "/videos/action.mp4",
    poster: "/posters/action.jpg",
    image: "/thumbs/action.jpg",
    accent: "ice",
    x: 18,
    y: 28,
  },
  {
    id: "impact",
    title: "High-impact outdoor advertising",
    description: "Formats large enough to feel inevitable. Never noisy.",
    category: "Impact",
    number: "03",
    video: "/videos/impact.mp4",
    poster: "/posters/impact.jpg",
    image: "/thumbs/impact.jpg",
    accent: "blue",
    x: 82,
    y: 24,
  },
  {
    id: "audience",
    title: "Reach the right audience",
    description: "Context, time of day, and neighborhood — planned, not guessed.",
    category: "Audience",
    number: "04",
    video: "/videos/audience.mp4",
    poster: "/posters/audience.jpg",
    image: "/thumbs/audience.jpg",
    accent: "white",
    x: 14,
    y: 54,
  },
  {
    id: "visibility",
    title: "Build brand visibility",
    description: "Show up until the skyline feels familiar with your name.",
    category: "Visibility",
    number: "05",
    video: "/videos/visibility.mp4",
    poster: "/posters/visibility.jpg",
    image: "/thumbs/visibility.jpg",
    accent: "sky",
    x: 86,
    y: 52,
  },
  {
    id: "measure",
    title: "Measure campaign performance",
    description: "Proof of play, audience flow, and the lift that followed.",
    category: "Measurement",
    number: "06",
    video: "/videos/measure.mp4",
    poster: "/posters/measure.jpg",
    image: "/thumbs/measure.jpg",
    accent: "navy",
    x: 34,
    y: 78,
  },
];

export const campaignItems: BillboardItem[] = [
  {
    id: "commute",
    title: "Own the commute",
    description: "Be the still point in a moving city.",
    category: "Routes",
    number: "01",
    video: "/videos/commute.mp4",
    poster: "/posters/commute.jpg",
    image: "/thumbs/commute.jpg",
    accent: "white",
    x: 22,
    y: 22,
  },
  {
    id: "night",
    title: "Light up the skyline",
    description: "Night is just another prime-time window.",
    category: "Night",
    number: "02",
    video: "/videos/night.mp4",
    poster: "/posters/night.jpg",
    image: "/thumbs/night.jpg",
    accent: "ice",
    x: 76,
    y: 20,
  },
  {
    id: "motion",
    title: "Meet them on the move",
    description: "Highways, arteries, and the long way home.",
    category: "Motion",
    number: "03",
    video: "/videos/motion.mp4",
    poster: "/posters/motion.jpg",
    image: "/thumbs/motion.jpg",
    accent: "sky",
    x: 18,
    y: 72,
  },
  {
    id: "canvas",
    title: "Make the city your medium",
    description: "One idea, scaled to the size of a place.",
    category: "Place",
    number: "04",
    video: "/videos/canvas.mp4",
    poster: "/posters/canvas.jpg",
    image: "/thumbs/canvas.jpg",
    accent: "blue",
    x: 74,
    y: 74,
  },
];
