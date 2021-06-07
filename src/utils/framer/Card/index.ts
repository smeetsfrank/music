export const cardVariants = {
  hidden: {
    scaleY: 0.85,
    scaleX: 0.85,
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  visible: {
    scaleY: 1,
    scaleX: 1,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    scaleY: 0.85,
    scaleX: 0.85,
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
};

export const cardHover = {
  scale: 1.1,
  transition: { duration: 0.2 },
};
