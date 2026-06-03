"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { seriesData } from "@/lib/character-data"
import { HomeView } from "./home-view"
import { SeriesView } from "./series-view"
import { CharacterView } from "./character-view"
import { PowerSystemView } from "./power-system-view"

type View = "home" | "series" | "character" | "power-system"

interface NavigationState {
  view: View
  seriesId: string | null
  characterId: string | null
}

const TRANSITION_DURATION = 250 // ms - synced with CSS duration-250

function getStateFromURL(): NavigationState {
  if (typeof window === "undefined") {
    return { view: "home", seriesId: null, characterId: null }
  }
  
  const params = new URLSearchParams(window.location.search)
  const view = params.get("view") as View | null
  const seriesId = params.get("series")
  const characterId = params.get("character")
  
  if (view === "character" && seriesId && characterId) {
    return { view: "character", seriesId, characterId }
  } else if (view === "series" && seriesId) {
    return { view: "series", seriesId, characterId: null }
  } else if (view === "power-system") {
    return { view: "power-system", seriesId: null, characterId: null }
  }
  
  return { view: "home", seriesId: null, characterId: null }
}

function buildURL(state: NavigationState): string {
  const params = new URLSearchParams()
  
  if (state.view !== "home") {
    params.set("view", state.view)
  }
  if (state.seriesId) {
    params.set("series", state.seriesId)
  }
  if (state.characterId) {
    params.set("character", state.characterId)
  }
  
  const queryString = params.toString()
  return queryString ? `?${queryString}` : window.location.pathname
}

export function CharacterDatabase() {
  const [navigation, setNavigation] = useState<NavigationState>({
    view: "home",
    seriesId: null,
    characterId: null,
  })
  const [isInitialized, setIsInitialized] = useState(false)
  const [transitionPhase, setTransitionPhase] = useState<"idle" | "fade-out" | "fade-in">("idle")
  const [displayedView, setDisplayedView] = useState<NavigationState>({
    view: "home",
    seriesId: null,
    characterId: null,
  })
  
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
      }
    }
  }, [])

  // Initialize state from URL on mount
  useEffect(() => {
    const initialState = getStateFromURL()
    setNavigation(initialState)
    setDisplayedView(initialState)
    setIsInitialized(true)
  }, [])

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const newState = getStateFromURL()
      transitionTo(newState, false)
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  const transitionTo = useCallback((newState: NavigationState, pushHistory = true) => {
    // Clear any existing transition timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current)
    }

    // Phase 1: Start fade out
    setTransitionPhase("fade-out")
    
    // Phase 2: After fade out completes, update content and start fade in
    transitionTimeoutRef.current = setTimeout(() => {
      setDisplayedView(newState)
      setNavigation(newState)
      
      if (pushHistory) {
        const url = buildURL(newState)
        window.history.pushState(newState, "", url)
      }
      
      // Scroll to top only on navigation (not modal)
      window.scrollTo({ top: 0, behavior: "instant" })
      
      // Start fade in
      setTransitionPhase("fade-in")
      
      // Phase 3: Complete transition
      transitionTimeoutRef.current = setTimeout(() => {
        setTransitionPhase("idle")
      }, TRANSITION_DURATION)
    }, TRANSITION_DURATION)
  }, [])

  const handleSelectSeries = useCallback((seriesId: string) => {
    transitionTo({
      view: "series",
      seriesId,
      characterId: null,
    })
  }, [transitionTo])

  const handleSelectCharacter = useCallback((characterId: string) => {
    transitionTo({
      view: "character",
      seriesId: navigation.seriesId,
      characterId,
    })
  }, [transitionTo, navigation.seriesId])

  const handleBackToHome = useCallback(() => {
    transitionTo({
      view: "home",
      seriesId: null,
      characterId: null,
    })
  }, [transitionTo])

  const handleNavigateToPowerSystem = useCallback(() => {
    transitionTo({
      view: "power-system",
      seriesId: null,
      characterId: null,
    })
  }, [transitionTo])

  const handleBackToSeries = useCallback(() => {
    transitionTo({
      view: "series",
      seriesId: navigation.seriesId,
      characterId: null,
    })
  }, [transitionTo, navigation.seriesId])

  const currentSeries = displayedView.seriesId
    ? seriesData.find((s) => s.id === displayedView.seriesId)
    : null

  const currentCharacter =
    currentSeries && displayedView.characterId
      ? currentSeries.characters.find((c) => c.id === displayedView.characterId)
      : null

  // Don't render until initialized from URL
  if (!isInitialized) {
    return null
  }

  const transitionClasses = 
    transitionPhase === "fade-out" 
      ? "opacity-0 translate-y-2" 
      : transitionPhase === "fade-in"
      ? "opacity-100 translate-y-0"
      : "opacity-100 translate-y-0"

  return (
    <div 
      className={`transition-all duration-250 ease-in-out ${transitionClasses}`}
    >
      {displayedView.view === "home" && (
        <HomeView 
          series={seriesData} 
          onSelectSeries={handleSelectSeries} 
          onNavigateToPowerSystem={handleNavigateToPowerSystem}
        />
      )}

      {displayedView.view === "power-system" && (
        <PowerSystemView onBack={handleBackToHome} />
      )}

      {displayedView.view === "series" && currentSeries && (
        <SeriesView
          series={currentSeries}
          onBack={handleBackToHome}
          onSelectCharacter={handleSelectCharacter}
        />
      )}

      {displayedView.view === "character" && currentSeries && currentCharacter && (
        <CharacterView
          key={currentCharacter.id}
          character={currentCharacter}
          series={currentSeries}
          onBack={handleBackToSeries}
          onSelectCharacter={handleSelectCharacter}
        />
      )}
    </div>
  )
}
