export function Hero(): string {
  return `
    <section class="max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 mx-auto w-full relative pt-20 sm:pt-24 lg:pt-28 mb-8 sm:mb-12">
      
      <!-- Main Grid Layout -->
      <div class="grid lg:grid-cols-3 gap-6 lg:gap-8">
        
        <!-- Left Side - Media Gallery -->
        <div class="lg:col-span-2 order-2 lg:order-1">
          <!-- Main Game Image/Video -->
          <div class="relative mb-3 sm:mb-4 group" id="main-display">
            <img id="main-image" src="https://placehold.co/800x450" alt="Bug Bane" class="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-2xl hidden">
            <iframe id="main-video" 
              src="https://www.youtube.com/embed/beulDzYZyKY?si=VlPBXEbdi3gIGZMy" 
              title="Bug Bane Gameplay"
              class="w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-2xl"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              onload="this.style.opacity='1'"
              onerror="this.style.display='none'; document.getElementById('video-fallback').style.display='block'"> 
            </iframe
            <!-- Fallback for when iframe fails -->
            <div id="video-fallback" class="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg shadow-2xl flex items-center justify-center cursor-pointer group hidden" onclick="window.open('https://www.youtube.com/embed/beulDzYZyKY?si=VlPBXEbdi3gIGZMy', '_blank')">
              <div class="text-center p-4">
                <div class="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-red-700 transition-colors">
                  <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 class="text-white text-lg sm:text-xl font-semibold mb-2">Watch on YouTube</h3>
                <p class="text-gray-300 text-sm">Click to view the trailer</p>
              </div>
            </div>
            <!-- Play Button Overlay (only shows for image) -->
            <div id="play-overlay" class="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden">
              <button class="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Thumbnail Gallery - Enhanced Mobile Experience -->
          <div class="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
            <div class="relative flex-shrink-0 thumbnail-item border-2 border-cyan-500 rounded-md cursor-pointer hover:opacity-80 transition-all snap-start" data-type="video" data-src="https://www.youtube.com/embed/beulDzYZyKY?si=VlPBXEbdi3gIGZMy">
              <div class="w-20 h-12 sm:w-24 sm:h-16 bg-gray-900 rounded-md flex items-center justify-center">
                <svg class="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <img src="/assets/images/gameplay1.png" alt="Screenshot 2" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-type="image" data-src="/assets/images/gameplay1.png">
            <img src="/assets/images/gameplay2.png" alt="Screenshot 3" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-type="image" data-src="/assets/images/gameplay2.png">
            <img src="/assets/images/gameplay3.png" alt="Screenshot 4" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-type="image" data-src="/assets/images/gameplay3.png">
            <img src="/assets/images/gameplay4.png" alt="Screenshot 5" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-type="image" data-src="/assets/images/gameplay4.png">
            <img src="/assets/images/gameplay5.png" alt="Screenshot 5" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-type="image" data-src="/assets/images/gameplay5.png">
            <img src="/assets/images/gameplay6.png" alt="Screenshot 5" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-type="image" data-src="/assets/images/gameplay6.png">
            <img src="/assets/images/gameplay7.png" alt="Screenshot 5" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-type="image" data-src="/assets/images/gameplay7.png">
            <img src="/assets/images/gameplay8.png" alt="Screenshot 5" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-type="image" data-src="/assets/images/gameplay8.png">
              <img src="/assets/images/gameplay9.png" alt="Screenshot 5" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-type="image" data-src="/assets/images/gameplay9.png">
                <img src="/assets/images/gameplay10.png" alt="Screenshot 5" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-type="image" data-src="/assets/images/gameplay10.png">
                  <img src="/assets/images/gameplay11.png" alt="Screenshot 5" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-type="image" data-src="/assets/images/gameplay11.png">
            
            <!-- Navigation arrows - Hidden on mobile, shown on larger screens -->
            <button class="flex flex-shrink-0 w-8 h-12 sm:h-16 bg-gray-800/80 hover:bg-gray-700 dark:bg-gray-700/80 dark:hover:bg-gray-600 text-white rounded-md items-center justify-center transition-colors snap-start">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <!-- About Game Section - Better Mobile Spacing -->
          <div class="mt-12 sm:mt-16 max-w-4xl mx-auto">
            <div class="mb-6 sm:mb-8">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">🌿 Welcome to the Chaotic World of Bug Bane</h2>
              <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400"></div>
            </div>
            
            <div class="prose prose-sm sm:prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p class="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-700 dark:text-gray-300">
              Step into the roots of Asteria, a sentient mutant plant with one job: protect the Health Stone—the last living core of a world gone to rot. The lush green landscape may seem peaceful, but don’t be fooled. This place is abandoned, crawling with bloodthirsty bugs and beasts that would love nothing more than to chew through your chlorophyll.
              </p>
              
              <p class="leading-relaxed mb-4 sm:mb-6 text-gray-700 dark:text-gray-300">
               Bug Bane is a fast-paced, single-player rogue-like bullet hell experience where you are not the hero—you're Asteria, a sentient mutant plant. Your mission? Protect the Health Stone. If you fall, you respawn. But if the stone breaks, it’s game over.
              </p>
              
              <p class="leading-relaxed mb-4 sm:mb-6 text-gray-700 dark:text-gray-300">
               Face increasingly intense waves of enemies, including overwhelming “swarm units” that flood the screen and put your reflexes to the test. Collect bizarre, unpredictable items to shape your build—just don’t get too comfortable. At any moment, a Mutation Surge can flip everything. These temporary effects might turn you into a powerhouse... or drop you into pure chaos. Some help. Some hurt. All of them change the game.
              </p>
              
              <p class="leading-relaxed text-gray-700 dark:text-gray-300">
              There’s no base. No breaks. Just you, your weird arsenal, and a relentless fight against decay.
Every run is different. Every decision is a gamble. And every bug is out to get you.
<br><br>
🪴 You’re not here to thrive. You’re here to survive—barely.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Right Side - Game Information -->
        <div class="lg:col-span-1 order-1 lg:order-2">
          <!-- Game Logo/Title -->
          <div class="mb-4 sm:mb-6">
            <img src="/assets/images/heroImage.png" alt="BugBane" class="w-full max-w-sm h-32 sm:h-40 md:h-48 object-cover rounded-lg mb-4 mx-auto lg:mx-0">
          </div>
          
          <!-- Game Title -->
          <div class="mb-4 sm:mb-6 text-center lg:text-left">
            <h1 class="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Bug Bane</h1>
          </div>
          
          <!-- Game Description -->
          <div class="mb-4 sm:mb-6">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base text-center lg:text-left">
            Bug Bane is a single-player, pixel art rogue-like bullet hell game set in a post-apocalyptic world. You don’t play a hero—you play a mutated plant! Your mission is simple: protect the Health Stone. But an army of bugs and wild animals is coming to destroy it and rot the world for good.

            </p>
          </div>

          <!-- Game Action Buttons -->
          <div class="mb-4 sm:mb-6 space-y-3">
            <button class="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 dark:from-emerald-400 dark:to-green-500 dark:hover:from-emerald-500 dark:hover:to-green-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base">
              Play Now
            </button>
          </div>
          
          <!-- Release Information -->
          <div class="mb-4 sm:mb-6 space-y-3">
            <div class="flex justify-between items-start">
              <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase">Release Date:</span>
              <span class="text-gray-800 dark:text-gray-200 font-medium text-sm sm:text-base text-right">24.10.2025</span>
            </div>
          
            <div class="flex justify-between items-start">
              <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase">Developer:</span>
              <span class="text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 cursor-pointer font-medium text-sm sm:text-base text-right">Eren Sirli</span>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900 rounded-lg border border-indigo-100 dark:border-slate-700">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs text-gray-500 dark:text-gray-400 uppercase">Contact Mail</p>
                <button onclick="navigator.clipboard.writeText('erensirli02@gmail.com'); this.innerHTML='✓ Copied!'; setTimeout(() => this.innerHTML='erensirli02@gmail.com', 2000)" 
                        class="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors duration-200 text-sm sm:text-base truncate block w-full text-left">
                  erensirli02@gmail.com
                </button>
              </div>
            </div>
          </div>
          
          <!-- Tags Section -->
          <div class="mb-4 sm:mb-6">
            <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">Popular user-defined tags for this product:</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 sm:px-3 py-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 dark:from-teal-500 dark:to-cyan-500 dark:hover:from-teal-600 dark:hover:to-cyan-600 text-white text-xs sm:text-sm rounded cursor-pointer transition-all duration-200">Rogue like</span>
              <span class="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white text-xs sm:text-sm rounded cursor-pointer transition-all duration-200">Bullet Hell</span>
              <span class="px-2 sm:px-3 py-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 dark:from-emerald-500 dark:to-teal-500 dark:hover:from-emerald-600 dark:hover:to-teal-600 text-white text-xs sm:text-sm rounded cursor-pointer transition-all duration-200">Singleplayer</span>
              <span class="px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-600 dark:hover:to-blue-600 text-white text-xs sm:text-sm rounded cursor-pointer transition-all duration-200">Pixel Graphics</span>
              <span class="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 dark:hover:from-purple-600 dark:hover:to-pink-600 text-white text-xs sm:text-sm rounded cursor-pointer transition-all duration-200">Top-Down Shooter</span>
              <span class="px-2 sm:px-3 py-1 bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 dark:from-slate-500 dark:to-gray-500 dark:hover:from-slate-600 dark:hover:to-gray-600 text-white text-xs sm:text-sm rounded cursor-pointer transition-all duration-200">Indie</span>
            </div>
          </div>
          
          <!-- Supported Languages -->
          <div class="mb-4 sm:mb-6">
            <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">Supported Languages:</p>
            <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
              <img src="https://flagcdn.com/w40/gb.png" alt="English" class="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm" title="English">
              <img src="https://flagcdn.com/w40/es.png" alt="Spanish" class="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm" title="Spanish">
              <img src="https://flagcdn.com/w40/ru.png" alt="Russian" class="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm" title="Russian">
              <img src="https://flagcdn.com/w40/cn.png" alt="Chinese" class="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm" title="Chinese">
              <img src="https://flagcdn.com/w40/jp.png" alt="Japanese" class="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm" title="Japanese">
              <img src="https://flagcdn.com/w40/tr.png" alt="Turkish" class="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm" title="Turkish">
              <img src="https://flagcdn.com/w40/kr.png" alt="Korean" class="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm" title="Korean">
              <img src="https://flagcdn.com/w40/fr.png" alt="French" class="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm" title="French">
              <img src="https://flagcdn.com/w40/ae.png" alt="Arabic" class="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm" title="Arabic">
              <img src="https://flagcdn.com/w40/it.png" alt="Italian" class="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm" title="Italian">
               <img src="https://flagcdn.com/w40/de.png" alt="German" class="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm" title="German">
              <!-- <img src="https://flagcdn.com/w40/pl.png" alt="Polish" class="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm" title="Polish">-->
              <!-- <img src="https://flagcdn.com/w40/cz.png" alt="Czech" class="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm" title="Czech">-->
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="space-y-3">
            <button onclick="downloadImages()" class="cursor-pointer w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white px-6 py-3 rounded-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              Download Images
            </button>
            <button onclick="downloadLogo()" class="cursor-pointer w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 dark:from-amber-500 dark:to-orange-500 dark:hover:from-amber-600 dark:hover:to-orange-600 text-white px-6 py-3 rounded-sm font-semibold transition-all duration-200">
              Download Logo
            </button>
            <button class="cursor-pointer w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 dark:from-red-500 dark:to-pink-500 dark:hover:from-red-600 dark:hover:to-pink-600 text-white px-6 py-3 rounded-sm font-semibold transition-all duration-200">
              Get All Videos (Trailer, Gameplay, Clips etc.)
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

      // Ortala: tıklanan thumbnail'ı galeri içinde ortala
      const gallery = item.parentElement;
      if (gallery) {
        const galleryRect = gallery.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const scrollLeft = gallery.scrollLeft;
        const itemCenter = itemRect.left + itemRect.width / 2;
        const galleryCenter = galleryRect.left + galleryRect.width / 2;
        const offset = itemCenter - galleryCenter;
        gallery.scrollTo({
          left: scrollLeft + offset,
          behavior: 'smooth'
        });
      }

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

// Function to download the logo
export function downloadLogo() {
  const link = document.createElement('a')
  link.href = '/assets/newlogo.png'
  link.download = 'bugbane-logo.png'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Function to download all images as a zip file
export async function downloadImages() {
  try {
    // Show loading state
    const button = document.querySelector('[onclick="downloadImages()"]') as HTMLButtonElement
    let originalText = 'Download Images'
    if (button) {
      originalText = button.innerHTML
      button.innerHTML = 'Downloading...'
      button.disabled = true
    }

    // List of all images to download
    const imageFiles = [
      'gameplay1.jpg',
      'gameplay2.jpg',
      'gameplay3.jpg',
      'gameplay4.jpg',
      'gameplay5.jpg',
      'gameplay6.jpg',
      'gameplay7.jpg',
      'gameplay8.jpg',
      'gameplay9.jpg',
      'gameplay10.jpg',
      'gameplay11.jpg',
      'heroImage.png'
    ]

    // Create a simple zip-like structure using fetch and blob
    const imageBlobs: { name: string; blob: Blob }[] = []

    // Download all images as blobs
    for (const filename of imageFiles) {
      try {
        const response = await fetch(`/assets/images/${filename}`)
        if (response.ok) {
          const blob = await response.blob()
          imageBlobs.push({ name: filename, blob })
        }
      } catch (error) {
        console.warn(`Failed to download ${filename}:`, error)
      }
    }

    // Function to load JSZip dynamically
    const loadJSZip = (): Promise<any> => {
      return new Promise((resolve, reject) => {
        if ((window as any).JSZip) {
          resolve((window as any).JSZip)
          return
        }

        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js'
        script.onload = () => resolve((window as any).JSZip)
        script.onerror = reject
        document.head.appendChild(script)
      })
    }

    // Try to use JSZip if available, otherwise fall back to individual downloads
    try {
      const JSZip = await loadJSZip()
      const zip = new JSZip()

      // Create a folder structure in the zip
      const imagesFolder = zip.folder('bugBane-images')

      // Add all images to the zip
      imageBlobs.forEach(({ name, blob }) => {
        imagesFolder.file(name, blob)
      })

      // Generate and download the zip file
      const content = await zip.generateAsync({ type: 'blob' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(content)
      link.download = 'bugBane-images.zip'
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(link.href)

    } catch (zipError) {
      console.warn('JSZip not available, falling back to individual downloads:', zipError)
      // Fallback: download images individually with delays
      for (let i = 0; i < imageBlobs.length; i++) {
        const { name, blob } = imageBlobs[i]
        setTimeout(() => {
          const link = document.createElement('a')
          link.href = URL.createObjectURL(blob)
          link.download = name
          link.style.display = 'none'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(link.href)
        }, i * 200)
      }
    }

    // Restore button state
    if (button) {
      button.innerHTML = originalText
      button.disabled = false
    }
  } catch (error) {
    console.error('Error downloading images:', error)
    alert('Failed to download images. Please try again.')

    // Restore button state on error
    const button = document.querySelector('[onclick="downloadImages()"]') as HTMLButtonElement
    if (button) {
      button.innerHTML = 'Download Images'
      button.disabled = false
    }
  }
}

// Function to download video from YouTube
export function downloadVideo() {
  const videoUrl = 'https://youtu.be/beulDzYZyKY'

  // Create a modal or confirmation dialog
  const userConfirmed = confirm(
    'This will open a third-party YouTube downloader service. ' +
    'Please note that downloading YouTube videos should comply with YouTube\'s Terms of Service and copyright laws. ' +
    'Continue?'
  )

  if (userConfirmed) {
    // Open Y2mate (popular YouTube downloader) with the video URL
    const downloaderUrl = `https://www.y2mate.com/youtube/${encodeURIComponent(videoUrl)}`
    window.open(downloaderUrl, '_blank')
  }
}

// Make functions available globally
if (typeof window !== 'undefined') {
  (window as any).downloadLogo = downloadLogo;
  (window as any).downloadImages = downloadImages;
  (window as any).downloadVideo = downloadVideo
}

// Call this function after the Hero component is rendered to the DOM
// Example: setupMediaGallery()
