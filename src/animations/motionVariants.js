// Professional, Reusable Animation System

// Standard transition used across the application for a premium feel
export const premiumTransition = { 
  duration: 0.6, 
  ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for a smooth, natural ease-out
};

// Container for staggering children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Faster stagger for grids/lists
export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Standard fade-up used for headings, sections, and basic cards
export const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: premiumTransition,
  },
};

// Simple fade-in (opacity only)
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: premiumTransition,
  },
};

// Scale-in pop effect, used for badges/skills to avoid vertical layout shifts
export const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Directional slides for desktop (used primarily in About section)
export const slideFromLeft = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: premiumTransition,
  },
};

export const slideFromRight = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: premiumTransition,
  },
};

// Modal animation variants
export const modalVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" }
  },
  exit: { 
    scale: 0.95, 
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};
