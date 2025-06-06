export function Hero(): string {
  return `
    <section class="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto w-full -mt-36 relative">
      
      <!-- Main Grid Layout -->
      <div class="grid lg:grid-cols-3 gap-8">
        
        <!-- Left Side - Media Gallery -->
        <div class="lg:col-span-2">
          <!-- Main Game Image -->
          <div class="relative mb-4 group">
            <img src="https://placehold.co/800x450" alt="Ribbit Up: Frog Climber" class="w-full h-96 object-cover rounded-lg shadow-2xl">
            <!-- Play Button Overlay -->
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200">
                <svg class="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Thumbnail Gallery -->
          <div class="flex gap-2 overflow-x-auto pb-2">
            <div class="relative flex-shrink-0">
              <img src="https://placehold.co/150x90" alt="Screenshot 1" class="w-24 h-16 object-cover rounded cursor-pointer border-2 border-blue-500">
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center rounded">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <img src="https://placehold.co/150x90" alt="Screenshot 2" class="w-24 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity">
            <img src="https://placehold.co/150x90" alt="Screenshot 3" class="w-24 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity">
            <img src="https://placehold.co/150x90" alt="Screenshot 4" class="w-24 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity">
            <img src="https://placehold.co/150x90" alt="Screenshot 5" class="w-24 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity">
            <!-- Navigation arrows -->
            <button class="flex-shrink-0 w-8 h-16 bg-gray-800/80 hover:bg-gray-700 text-white rounded flex items-center justify-center">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Right Side - Game Information -->
        <div class="lg:col-span-1">
          <!-- Game Logo/Title -->
          <div class="mb-6">
            <img src="https://placehold.co/300x120" alt="Ribbit Up: Frog Climber Logo" class="w-full max-w-sm h-auto rounded-lg mb-4">
          </div>
          
          <!-- Game Description -->
          <div class="mb-6">
            <p class="text-gray-700 leading-relaxed text-sm">
              Embark on a cozy, open-world adventure with Ribbit the Frog. Befriend beloved characters as you explore and restore a mysterious swamp, solve ancient puzzles, cook delicious dishes, customize yourself and your home, and so much more.
            </p>
          </div>
          
          <!-- Reviews Section -->
          <div class="mb-6 space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-sm text-gray-500 uppercase">Recent Reviews:</span>
              <span class="text-blue-400 font-medium">Very Positive</span>
              <span class="text-gray-400">(292)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm text-gray-500 uppercase">All Reviews:</span>
              <span class="text-blue-400 font-medium">Very Positive</span>
              <span class="text-gray-400">(4,524)</span>
            </div>
          </div>
          
          <!-- Release Information -->
          <div class="mb-6 space-y-3">
            <div class="flex justify-between">
              <span class="text-sm text-gray-500 uppercase">Release Date:</span>
              <span class="text-gray-800 font-medium">20.02.2025</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-500 uppercase">Early Access:</span>
              <span class="text-gray-800 font-medium">To Be Announced</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-500 uppercase">Developer:</span>
              <span class="text-blue-400 hover:text-blue-600 cursor-pointer font-medium">Team K6</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-500 uppercase">Publisher:</span>
              <span class="text-blue-400 hover:text-blue-600 cursor-pointer font-medium">Team K6</span>
            </div>
          </div>
          
          <!-- Contact Information -->
          <div class="mb-6 p-4 bg-gray-50 rounded-lg border">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p class="text-xs text-gray-500 uppercase">Contact Mail</p>
                <button onclick="navigator.clipboard.writeText('ka6andev@gmail.com'); this.innerHTML='✓ Copied!'; setTimeout(() => this.innerHTML='ka6andev@gmail.com', 2000)" 
                        class="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                  ka6andev@gmail.com
                </button>
              </div>
            </div>
          </div>
          
          <!-- Tags Section -->
          <div class="mb-6">
            <p class="text-sm text-gray-500 mb-3">Popular user-defined tags for this product:</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded cursor-pointer transition-colors">Cozy</span>
              <span class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded cursor-pointer transition-colors">Open World</span>
              <span class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded cursor-pointer transition-colors">Adventure</span>
              <span class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded cursor-pointer transition-colors">Simulation</span>
              <span class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded cursor-pointer transition-colors">Cute</span>
              <span class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded cursor-pointer transition-colors">+</span>
            </div>
          </div>
          
          <!-- Supported Languages -->
          <div class="mb-6">
            <p class="text-sm text-gray-500 mb-3">Supported Languages:</p>
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
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              Download Press Kit
            </button>
            <button class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-all duration-200">
              Preview Assets
            </button>
          </div>
        </div>
        
      </div>
     
      
    </section>
  `
}