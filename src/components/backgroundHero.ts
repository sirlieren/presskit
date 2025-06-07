export function BackgroundHero(): string {
  return `
    <section class="fixed bg-white dark:bg-gray-900 h-screen w-full flex items-center justify-center -z-10">
        <!-- Background Image with responsive handling -->
        <img src="/assets/background.png" alt="Hero Background" class="top-0 left-0 w-full h-full object-cover object-center opacity-10 sm:opacity-15" loading="lazy">
        <!-- Gradient overlay for better text readability on mobile -->
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 dark:to-gray-900/20 sm:hidden"></div>
        <!-- End Background Image -->
    </section>
  `
}