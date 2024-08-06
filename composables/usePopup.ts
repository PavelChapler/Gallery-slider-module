import { ref } from 'vue';

export function usePopup() {
  const isOpen = ref(false);

  const openPopup = () => {
    isOpen.value = true;
  };

  const closePopup = () => {
    isOpen.value = false;
  };

  return {
    isOpen,
    openPopup,
    closePopup,
  };
}
