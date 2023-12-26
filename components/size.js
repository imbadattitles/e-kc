import { ref, onMounted, onBeforeUnmount } from "vue";

export default function useScreenSize() {
  const isDesktop = ref(true);
  const isMobile = ref(false);

  const handleResize = () => {
    isDesktop.value = window.innerWidth >= 1024;
    isMobile.value = window.innerWidth <= 1024;
  };

  onMounted(() => {
    if (process.client) {
      isDesktop.value = window.innerWidth >= 1024;
      isMobile.value = window.innerWidth < 1024;
      window.addEventListener("resize", handleResize);
    }
  });

  onBeforeUnmount(() => {
    if (process.client) {
      window.removeEventListener("resize", handleResize);
    }
  });

  return {
    isDesktop,
    isMobile,
  };
}
