export function Hero(): string {
  return `
    <section class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto w-full relative pt-24 mb-12">
      
      <!-- Main Grid Layout -->
      <div class="grid lg:grid-cols-3 gap-8">
        
        <!-- Left Side - Media Gallery -->
        <div class="lg:col-span-2">
          <!-- Main Game Image/Video -->
          <div class="relative mb-4 group" id="main-display">
            <img id="main-image" src="https://placehold.co/800x450" alt="Ribbit Up: Frog Climber" class="w-full h-96 object-cover rounded-sm shadow-2xl hidden">
            <iframe id="main-video" 
              src="https://www.youtube.com/embed/77248MsuRfo" 
              title="Ribbit Up: Frog Climber Gameplay"
              class="w-full h-96 rounded-sm shadow-2xl"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              onload="this.style.opacity='1'"
              onerror="this.style.display='none'; document.getElementById('video-fallback').style.display='block'">
            </iframe>
            <!-- Fallback for when iframe fails -->
            <div id="video-fallback" class="w-full h-96 bg-gradient-to-br from-blue-900 to-purple-900 rounded-sm shadow-2xl flex items-center justify-center cursor-pointer group hidden" onclick="window.open('https://www.youtube.com/watch?v=77248MsuRfo', '_blank')">
              <div class="text-center">
                <div class="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-red-700 transition-colors">
                  <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 class="text-white text-xl font-semibold mb-2">Watch on YouTube</h3>
                <p class="text-gray-300 text-sm">Click to view the trailer</p>
              </div>
            </div>
            <!-- Play Button Overlay (only shows for image) -->
            <div id="play-overlay" class="absolute inset-0 flex items-center justify-center bg-black/20 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden">
              <button class="w-16 h-16 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200">
                <svg class="w-6 h-6 text-gray-800 dark:text-gray-200 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Thumbnail Gallery -->
          <div class="flex gap-2 overflow-x-auto pb-2">
            <div class="relative flex-shrink-0 thumbnail-item border-2 border-blue-500 rounded cursor-pointer hover:opacity-80 transition-all" data-type="video" data-src="https://www.youtube.com/embed/77248MsuRfo">
              <div class="w-24 h-16 bg-gray-900 rounded flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <img src="/assets/gameplay1.jpg" alt="Screenshot 2" class="w-24 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent" data-type="image" data-src="/assets/gameplay1.jpg">
            <img src="/assets/gameplay2.jpg" alt="Screenshot 3" class="w-24 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent" data-type="image" data-src="/assets/gameplay2.jpg">
            <img src="/assets/gameplay3.jpg" alt="Screenshot 4" class="w-24 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent" data-type="image" data-src="/assets/gameplay3.jpg">
            <img src="/assets/gameplay4.jpg" alt="Screenshot 5" class="w-24 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent" data-type="image" data-src="/assets/gameplay4.jpg">
            <img src="/assets/gameplay5.jpg" alt="Screenshot 5" class="w-24 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent" data-type="image" data-src="/assets/gameplay5.jpg">
            <img src="/assets/gameplay6.jpg" alt="Screenshot 5" class="w-24 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent" data-type="image" data-src="/assets/gameplay6.jpg">
            <img src="/assets/gameplay7.jpg" alt="Screenshot 5" class="w-24 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent" data-type="image" data-src="/assets/gameplay7.jpg">
            <img src="/assets/gameplay8.jpg" alt="Screenshot 5" class="w-24 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent" data-type="image" data-src="/assets/gameplay8.jpg">
            
            <!-- Navigation arrows -->
            <button class="flex-shrink-0 w-8 h-16 bg-gray-800/80 hover:bg-gray-700 dark:bg-gray-700/80 dark:hover:bg-gray-600 text-white rounded flex items-center justify-center">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

            <!-- About Game Section -->
      <div class="mt-16 max-w-4xl mx-auto">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">About Game</h2>
          <div class="w-16 h-1 bg-blue-600 dark:bg-blue-500"></div>
        </div>
        
        <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
          <p class="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Welcome to the enchanting world of <strong class="text-gray-800 dark:text-gray-100">Ribbit Up: Frog Climber</strong>, where adventure meets tranquility in a beautifully crafted open-world experience. Step into the webbed feet of Ribbit, a charming frog with big dreams and an even bigger heart.
          </p>
          
          <p class="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            In this cozy adventure, you'll explore a mysterious swamp filled with ancient secrets, delightful characters, and countless opportunities for discovery. The world around you is alive with possibility - from solving intricate puzzles left behind by previous inhabitants to cooking mouth-watering dishes using ingredients you've foraged during your travels.
          </p>
          
          <p class="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Customize your experience by personalizing both Ribbit's appearance and your home base. Build meaningful relationships with the diverse cast of characters you'll meet along your journey, each with their own stories, quests, and friendship rewards. The swamp is yours to restore, one lily pad at a time.
          </p>
          
          <p class="leading-relaxed text-gray-700 dark:text-gray-300">
            Whether you're a seasoned adventurer or someone looking for a peaceful gaming experience, Ribbit Up offers the perfect blend of exploration, creativity, and relaxation. Take your time, enjoy the journey, and discover what makes this swamp so special.
          </p>
        </div>
      </div>
        </div>
        
        <!-- Right Side - Game Information -->
        <div class="lg:col-span-1">
          <!-- Game Logo/Title -->
          <div class="mb-6">
            <img src="/assets/heroImage.jpg" alt="Ribbit Up: Frog Climber Logo" class="w-full max-w-sm h-48 rounded-sm mb-4">
          </div>
          
          <!-- Game Title -->
          <div class="mb-6">
            <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Ribbit Up: Frog Climber</h1>
          </div>
          
          <!-- Game Description -->
          <div class="mb-6">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
             Ribbit Up: Frog Climber is a climber frog game developed by a single person, which you can play single, online with your friends or other players. Take revenge on the witch who pushed you down by climbing back to the princess! The game has one rule: JUMP! See a rock? Jump on it. Spot a tent? Jump on it. If you can reach it, you can climb it. Don’t fear falling—you’ll always respawn at the campfire to warm up and try again. Leap, explore, and out-hop rivals in this chaotic vertical climb!
            </p>
          </div>

          <!-- Game Action Buttons -->
          <div class="mb-6 space-y-3">
            <button class="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-6 py-3 rounded-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              Play Now!
            </button>
          </div>
          
          <!-- Reviews Section -->
          <div class="mb-6 space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-sm text-gray-500 dark:text-gray-400 uppercase">Recent Reviews:</span>
              <span class="text-blue-400 dark:text-blue-300 font-medium">Very Positive</span>
              <span class="text-gray-400 dark:text-gray-500">(292)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm text-gray-500 dark:text-gray-400 uppercase">All Reviews:</span>
              <span class="text-blue-400 dark:text-blue-300 font-medium">Very Positive</span>
              <span class="text-gray-400 dark:text-gray-500">(4,524)</span>
            </div>
          </div>
          
          <!-- Release Information -->
          <div class="mb-6 space-y-3">
            <div class="flex justify-between">
              <span class="text-sm text-gray-500 dark:text-gray-400 uppercase">Release Date:</span>
              <span class="text-gray-800 dark:text-gray-200 font-medium">20.02.2025</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-500 dark:text-gray-400 uppercase">Early Access:</span>
              <span class="text-gray-800 dark:text-gray-200 font-medium">To Be Announced</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-500 dark:text-gray-400 uppercase">Developer:</span>
              <span class="text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200 cursor-pointer font-medium">Team K6</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-500 dark:text-gray-400 uppercase">Publisher:</span>
              <span class="text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200 cursor-pointer font-medium">Team K6</span>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-sm border border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p class="text-xs text-gray-500 dark:text-gray-400 uppercase">Contact Mail</p>
                <button onclick="navigator.clipboard.writeText('ka6andev@gmail.com'); this.innerHTML='✓ Copied!'; setTimeout(() => this.innerHTML='ka6andev@gmail.com', 2000)" 
                        class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200">
                  ka6andev@gmail.com
                </button>
              </div>
            </div>
          </div>
          
          <!-- Tags Section -->
          <div class="mb-6">
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Popular user-defined tags for this product:</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white text-sm rounded cursor-pointer transition-colors">Cozy</span>
              <span class="px-3 py-1 bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white text-sm rounded cursor-pointer transition-colors">Open World</span>
              <span class="px-3 py-1 bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white text-sm rounded cursor-pointer transition-colors">Adventure</span>
              <span class="px-3 py-1 bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white text-sm rounded cursor-pointer transition-colors">Simulation</span>
              <span class="px-3 py-1 bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white text-sm rounded cursor-pointer transition-colors">Cute</span>
              <span class="px-3 py-1 bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white text-sm rounded cursor-pointer transition-colors">+</span>
            </div>
          </div>
          
          <!-- Supported Languages -->
          <div class="mb-6">
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Supported Languages:</p>
            <div class="flex flex-wrap gap-2">
              <img src="https://flagcdn.com/w40/gb.png" alt="English" class="w-8 h-6 object-cover rounded shadow-sm" title="English">
              <img src="https://flagcdn.com/w40/es.png" alt="Spanish" class="w-8 h-6 object-cover rounded shadow-sm" title="Spanish">
              <img src="https://flagcdn.com/w40/ru.png" alt="Russian" class="w-8 h-6 object-cover rounded shadow-sm" title="Russian">
              <img src="https://flagcdn.com/w40/cn.png" alt="Chinese" class="w-8 h-6 object-cover rounded shadow-sm" title="Chinese">
              <img src="https://flagcdn.com/w40/jp.png" alt="Japanese" class="w-8 h-6 object-cover rounded shadow-sm" title="Japanese">
              <img src="https://flagcdn.com/w40/tr.png" alt="Turkish" class="w-8 h-6 object-cover rounded shadow-sm" title="Turkish">
              <img src="https://flagcdn.com/w40/kr.png" alt="Korean" class="w-8 h-6 object-cover rounded shadow-sm" title="Korean">
              <img src="https://flagcdn.com/w40/fr.png" alt="French" class="w-8 h-6 object-cover rounded shadow-sm" title="French">
              <img src="https://flagcdn.com/w40/de.png" alt="German" class="w-8 h-6 object-cover rounded shadow-sm" title="German">
              <img src="https://flagcdn.com/w40/pl.png" alt="Polish" class="w-8 h-6 object-cover rounded shadow-sm" title="Polish">
              <img src="https://flagcdn.com/w40/cz.png" alt="Czech" class="w-8 h-6 object-cover rounded shadow-sm" title="Czech">
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="space-y-3">
            <button class="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              Download Press Kit
            </button>
            <button class="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-sm font-semibold transition-all duration-200">
              Preview Assets
            </button>
          </div>
          
        </div>
        
      </div>
      
    </section>
  `
}

export function setupMediaGallery() {
  const thumbnailItems = document.querySelectorAll<HTMLElement>('.thumbnail-item')
  const mainImage = document.querySelector<HTMLImageElement>('#main-image')
  const mainVideo = document.querySelector<HTMLIFrameElement>('#main-video')
  const playOverlay = document.querySelector<HTMLElement>('#play-overlay')

  thumbnailItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault()

      const type = item.getAttribute('data-type')
      const src = item.getAttribute('data-src')

      // Remove active border from all thumbnails
      thumbnailItems.forEach(thumb => {
        thumb.classList.remove('border-blue-500', 'border-blue-400')
        thumb.classList.add('border-transparent')
      })

      // Add active border to clicked thumbnail
      item.classList.remove('border-transparent')
      item.classList.add('border-blue-500')

      if (type === 'video') {
        // Show video, hide image and overlay
        if (mainImage) mainImage.style.display = 'none'
        if (mainVideo) {
          mainVideo.style.display = 'block'
          mainVideo.src = src || ''
        }
        if (playOverlay) playOverlay.style.display = 'none'
      } else if (type === 'image') {
        // Show image, hide video, show overlay
        if (mainVideo) mainVideo.style.display = 'none'
        if (mainImage) {
          mainImage.style.display = 'block'
          mainImage.src = src || ''
        }
        if (playOverlay) playOverlay.style.display = 'block'
      }
    })
  })

  // Handle play button click to switch to video
  if (playOverlay) {
    const playButton = playOverlay.querySelector<HTMLButtonElement>('button')
    if (playButton) {
      playButton.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        const videoThumbnail = document.querySelector<HTMLElement>('.thumbnail-item[data-type="video"]')
        if (videoThumbnail) {
          videoThumbnail.click()
        }
      })
    }
  }
}

// Call this function after the Hero component is rendered to the DOM
// Example: setupMediaGallery()
