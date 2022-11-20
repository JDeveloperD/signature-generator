export const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

export type ItemsAnimation = {
  translateAnimation: 'left' | 'right';
};

export const item = ({ translateAnimation }: ItemsAnimation) => ({
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: translateAnimation === 'right' ? -50 : 50 },
});
