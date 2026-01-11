export const formatPhone = (value: string) => {
  if (!value) return value;
  const num = value.replace(/[^\d]/g, ""); 
  if (num.length < 2) return "+7 (7";
  if (num.length < 5) return `+7 (${num.slice(1)}`;
  if (num.length < 8) return `+7 (${num.slice(1, 4)}) ${num.slice(4)}`;
  if (num.length < 10) return `+7 (${num.slice(1, 4)}) ${num.slice(4, 7)}-${num.slice(7)}`;
  return `+7 (${num.slice(1, 4)}) ${num.slice(4, 7)}-${num.slice(7, 9)}-${num.slice(9, 11)}`;
};

export const triggerHaptic = () => {
  if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(50);
  }
};