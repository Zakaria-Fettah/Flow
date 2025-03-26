
/**
 * Animation utility for adding staggered animations to children elements
 * @param staggerChildren - The delay between each child animation
 * @param delayChildren - Initial delay before starting children animations
 * @returns Animation variants for parent element
 */
export const staggerContainer = (staggerChildren?: number, delayChildren?: number) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0.1,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

/**
 * Animation for elements appearing from bottom with fade
 */
export const fadeInUp = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/**
 * Animation for elements appearing with scale effect
 */
export const scaleIn = {
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Add animation delay class based on index
 * @param index - Element index in a list
 * @returns Tailwind CSS class for animation delay
 */
export const getAnimationDelay = (index: number): string => {
  const delays = ['animate-delay-100', 'animate-delay-200', 'animate-delay-300', 'animate-delay-400', 'animate-delay-500'];
  return delays[index % delays.length];
};
