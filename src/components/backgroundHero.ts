export function BackgroundHero(): string {
  return `
    <section class="fixed bg-white dark:bg-gray-900 h-screen w-full flex items-center justify-center -z-10">
        <!-- Background Image -->
        <img src="/assets/background.png" alt="Hero" class="top-0 left-0 w-full h-full object-cover opacity-10">
        <!-- End Background Image -->
    </section>
  `
}