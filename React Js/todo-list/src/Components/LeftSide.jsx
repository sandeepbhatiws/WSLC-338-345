import React from 'react'

export default function LeftSide() {
  return (
    <>
        <div class="md:col-span-1">
            <div class="bg-zinc-800/45 rounded-xl p-6 shadow-lg border border-purple-500/20">
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                        {/* <!--               <i class="fas fa-user-ninja text-4xl"></i> --> */}
                        <img src="https://avatarfiles.alphacoders.com/347/347356.jpg" class="rounded-full bg-cover border-2 border-purple-400" />
                    </div>
                    <h2 class="text-2xl font-bold mb-2">
                        Welcome, <span id="playerName" class="text-purple-400">Adventurer</span>
                        <button onclick="editName()" class="ml-2 text-sm text-gray-400 hover:text-purple-400">
                            <i class="fas fa-edit"></i>
                        </button>
                    </h2>

                    {/* <!-- Level and Experience --> */}
                    <div class="w-full mt-4">
                        <div class="flex justify-between mb-2">
                            <span>Level <span id="level">6</span></span>
                            <span>XP: <span id="xp">40</span>/100</span>
                        </div>
                        <div class="w-full bg-gray-700 rounded-full h-2">
                            <div id="xpBar" class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2 transition-all duration-300" style={{ width : '40%' }}></div>
                        </div>
                    </div>

                    {/* <!-- Stats Grid --> */}
                    <div class="grid grid-cols-2 gap-4 w-full mt-6">
                        <div class="bg-zinc-800 rounded-lg p-4 transition-all duration-300 hover:bg-zinc-700">
                            <div class="flex items-center">
                                <i class="fas fa-fist-raised text-yellow-500 mr-2"></i>
                                <span>Strength</span>
                            </div>
                            <div id="strength" class="text-2xl font-bold">10</div>
                        </div>
                        <div class="bg-zinc-800  rounded-lg p-4 transition-all duration-300 hover:bg-zinc-700">
                            <div class="flex items-center">
                                <i class="fas fa-brain text-blue-500 mr-1"></i>
                                <span>Intelligence</span>
                            </div>
                            <div id="intelligence" class="text-2xl font-bold">10</div>
                        </div>
                        <div class="bg-zinc-800  rounded-lg p-4 transition-all duration-300 hover:bg-zinc-700">
                            <div class="flex items-center">
                                <i class="fas fa-star text-purple-500 mr-2"></i>
                                <span>Charisma</span>
                            </div>
                            <div id="charisma" class="text-2xl font-bold">0</div>
                        </div>
                        <div class="bg-zinc-800  rounded-lg p-4 transition-all duration-300 hover:bg-zinc-700">
                            <div class="flex items-center">
                                <i class="fas fa-palette text-pink-500 mr-2"></i>
                                <span>Creativity</span>
                            </div>
                            <div id="creativity" class="text-2xl font-bold">10</div>
                        </div>
                    </div>

                    {/* <!-- Currency --> */}
                    <div class="mt-6 bg-zinc-800 rounded-lg p-4 w-full transition-all duration-300 hover:bg-gray-600">
                        <div class="flex items-center justify-between">
                            <span class="text-lg">🪙Coins</span>
                            <span id="coins" class="text-2xl font-bold text-yellow-500">310</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
