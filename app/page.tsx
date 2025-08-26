"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function CreatorsHub() {
  const [showLoader, setShowLoader] = useState(true)
  const [showSite, setShowSite] = useState(false)
  const [animationPhase, setAnimationPhase] = useState("initial")

  useEffect(() => {
    const phase1Timer = setTimeout(() => {
      setAnimationPhase("logoGlow")
    }, 2000)

    const phase2Timer = setTimeout(() => {
      setAnimationPhase("logoFloat")
    }, 4000)

    const phase3Timer = setTimeout(() => {
      setAnimationPhase("logoSpin")
    }, 6000)

    const phase4Timer = setTimeout(() => {
      setAnimationPhase("logoExpand")
    }, 8000)

    const finalTimer = setTimeout(() => {
      setAnimationPhase("fadeOut")
      setTimeout(() => {
        setShowLoader(false)
        setTimeout(() => setShowSite(true), 200)
      }, 800)
    }, 10000)

    return () => {
      clearTimeout(phase1Timer)
      clearTimeout(phase2Timer)
      clearTimeout(phase3Timer)
      clearTimeout(phase4Timer)
      clearTimeout(finalTimer)
    }
  }, [])

  const scrollToCreators = () => {
    const creatorsSection = document.getElementById("creators-section")
    if (creatorsSection) {
      creatorsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToSpaces = () => {
    const spacesSection = document.getElementById("spaces-section")
    if (spacesSection) {
      spacesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToPodcasts = () => {
    const podcastsSection = document.getElementById("podcasts-section")
    if (podcastsSection) {
      podcastsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToMusic = () => {
    const musicSection = document.getElementById("music-section")
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bg01.png"
          alt="Background"
          fill
          className={`object-cover transition-all duration-2000 ${showLoader ? "blur-[30px] scale-110" : "blur-0 scale-100"}`}
          priority
        />
        <div
          className={`absolute inset-0 transition-all duration-2000 ${showLoader ? "bg-black/60" : "bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"}`}
        />
      </div>

      {/* Enhanced Loading Animation */}
      {showLoader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="relative flex items-center justify-center">
            <div
              className={`relative transition-all duration-1000 ease-out ${
                animationPhase === "logoGlow" ? "pulse-glow scale-110" : ""
              } ${animationPhase === "logoFloat" ? "pulse-glow scale-110 animate-float" : ""} ${
                animationPhase === "logoSpin" ? "pulse-glow scale-125 animate-spin-slow" : ""
              } ${animationPhase === "logoExpand" ? "pulse-glow scale-150 animate-pulse" : ""} ${
                animationPhase === "fadeOut" ? "opacity-0 scale-200" : "opacity-100"
              }`}
            >
              <Image
                src="/logo.png"
                alt="Creators Hub Logo"
                width={120}
                height={120}
                className="object-contain drop-shadow-2xl"
                priority
              />

              <div
                className={`absolute inset-0 rounded-full border-2 border-primary/50 transition-all duration-1000 ${
                  animationPhase === "logoGlow" ||
                  animationPhase === "logoFloat" ||
                  animationPhase === "logoSpin" ||
                  animationPhase === "logoExpand"
                    ? "animate-ping scale-150"
                    : "scale-100 opacity-0"
                }`}
              />

              <div
                className={`absolute inset-0 rounded-full border border-secondary/30 transition-all duration-1500 ${
                  animationPhase === "logoFloat" || animationPhase === "logoSpin" || animationPhase === "logoExpand"
                    ? "animate-ping scale-200"
                    : "scale-100 opacity-0"
                }`}
              />
            </div>
          </div>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="w-64 h-1 bg-muted/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-10000 ease-out"
                style={{
                  width:
                    animationPhase === "initial"
                      ? "0%"
                      : animationPhase === "logoGlow"
                        ? "25%"
                        : animationPhase === "logoFloat"
                          ? "50%"
                          : animationPhase === "logoSpin"
                            ? "75%"
                            : animationPhase === "logoExpand"
                              ? "90%"
                              : "100%",
                }}
              />
            </div>
            <p className="text-center text-primary/80 text-sm mt-3 shimmer">
              {animationPhase === "initial" || animationPhase === "logoGlow"
                ? "Starting Up..."
                : animationPhase === "logoFloat"
                  ? "Gathering Creators..."
                  : "Loading Content..."}
            </p>
          </div>
        </div>
      )}

      {/* Main Site Content */}
      <div
        className={`relative z-10 transition-all duration-1000 ${showSite ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <nav className="fixed top-0 left-0 right-0 z-40 h-20 backdrop-blur-xl bg-card/80 border-b border-border/50 transition-all duration-300 hover:bg-card/90 shadow-lg">
          <div className="flex items-center justify-between h-full px-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10 transition-all duration-300 hover:bg-primary/20">
                <Image src="/logo.png" alt="Creators Hub Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-2xl font-bold text-primary font-sans transition-all duration-300">
                Creators Hub
              </span>
            </div>

            <div className="flex items-end h-full">
              <div className="flex gap-8 pb-4">
                <button
                  onClick={scrollToCreators}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
                >
                  Creators
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={scrollToSpaces}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
                >
                  Spaces
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={scrollToPodcasts}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
                >
                  Podcasts
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={scrollToMusic}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
                >
                  Music
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={scrollToAbout}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-20 min-h-screen">
          <div className="container mx-auto px-8 py-16">
            <div className="text-center text-foreground">
              <ImageSlideshow />
            </div>
          </div>

          <CreatorsSection />
          <SpacesSection />
          <PodcastsSection />
          <MusicSection />
          <AboutSection />
        </main>
      </div>
    </div>
  )
}

function ImageSlideshow() {
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const allCreatorImages = [
    "/nam6.jpeg",
    "/nam4.jpeg",
    "/nam3.jpeg",
    "/nam1.jpeg",
    "/nampfp.jpg",
    "/nam2.jpeg",
    "/z4.jpeg",
    "/z2.jpeg",
    "/z1.jpeg",
    "/z5.jpeg",
    "/z3.jpeg",
    "/kangarooz-art1.jpeg",
    "/kangarooz-art2.jpeg",
    "/kangarooz-art3.jpeg",
    "/kangarooz-art4.jpeg",
    "/d3.jpeg",
    "/d2.jpeg",
    "/d5.jpeg",
    "/d4.jpeg",
    "/d7.jpeg",
    "/d6.jpeg",
    "/P5.jpeg",
    "/P4.jpeg",
    "/P6.jpeg",
    "/P2.jpeg",
    "/P3.jpeg",
    "/prazzzss-art1.jpeg",
    "/prazzzss-art2.jpeg",
    "/prazzzss-art3.jpeg",
    "/prazzzss-art4.jpeg",
    "/prazzzss-art5.jpeg",
    "/gelllsz-art1.jpeg",
    "/gelllsz-art2.jpeg",
    "/gelllsz-art3.jpeg",
    "/gelllsz-art4.jpeg",
    "/gelllsz-art5.jpeg",
    "/gelllsz-art6.jpeg",
    "/gelllsz-art7.jpeg",
    "/gelllsz-art8.jpeg",
    "/gelllsz-art9.jpeg",
    "/gelllsz-art10.jpeg",
    "/gelllsz-art11.jpeg",
    "/gelllsz-art12.jpeg",
  ]

  const shuffledImages = [...allCreatorImages]
    .sort(() => Math.random() - 0.5)
    .map((src, index) => ({
      id: index + 1,
      src,
      alt: `Creator Artwork ${index + 1}`,
    }))

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % shuffledImages.length)
      } else {
        setCurrentIndex((prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length)
      }
    }
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % shuffledImages.length)
  }

  return (
    <div
      className="relative h-96 overflow-hidden rounded-2xl"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-card/80 hover:bg-card/90 backdrop-blur-sm rounded-full p-3 opacity-70 hover:opacity-100 transition-all duration-300 border border-border/50 hover:border-primary/50"
      >
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-card/80 hover:bg-card/90 backdrop-blur-sm rounded-full p-3 opacity-70 hover:opacity-100 transition-all duration-300 border border-border/50 hover:border-primary/50"
      >
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        className={`flex gap-6 h-full transition-transform duration-[30s] ease-linear ${
          isPaused ? "animate-none" : "animate-slide-infinite"
        }`}
        style={{
          width: `${shuffledImages.length * 450}px`,
        }}
      >
        {shuffledImages.map((image) => (
          <div key={`first-${image.id}`} className="flex-shrink-0 w-96 h-80 relative cursor-pointer group">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover rounded-xl transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
          </div>
        ))}
        {shuffledImages.map((image) => (
          <div key={`second-${image.id}`} className="flex-shrink-0 w-96 h-80 relative cursor-pointer group">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover rounded-xl transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  )
}

function CreatorsSection() {
  const [currentCreatorIndex, setCurrentCreatorIndex] = useState(0)
  const [selectedCreator, setSelectedCreator] = useState(null)
  const [expandedArtwork, setExpandedArtwork] = useState(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const creators = [
    {
      id: 1,
      name: "@kangarooz_v2",
      image: "/z.jpg",
      bio: "Beautiful and passionate artist Zee, A self-taught web3 digital artist stuns the community with her impressive artwork.From goofy to serious every work of art she creates is nothing short of breathtaking. ",
      images: [
        "/z4.jpeg",
        "/z2.jpeg",
        "/z1.jpeg",
        "/z5.jpeg",
        "/z3.jpeg",
        "/kangarooz-art1.jpeg",
        "/kangarooz-art2.jpeg",
        "/kangarooz-art3.jpeg",
        "/kangarooz-art4.jpeg",
      ],
      twitterUrl: "https://x.com/Kangarooz_v2",
    },
    {
      id: 2,
      name: "@nam",
      image: "/nampfp.jpeg",
      bio: "Lady Nam uses her artistic skills to create stunning visuals for the Arichain community.With her unique style, her artistic contribution to the community is greatly recognized. ",
      images: ["/nam6.jpeg", "/nam4.jpeg", "/nam3.jpeg", "/nam1.jpeg", "/nampfp.jpg", "/nam2.jpeg"],
      twitterUrl: "https://x.com/voidsnam",
    },
    {
      id: 3,
      name: "@prazzzss",
      image: "/p1.jpg",
      bio: "og artist Prazzzss creates art in his unique style to create art for the community.Dedicated to redefining art Prazzzss ,the world is his canvas",
      images: [
        "/P5.jpeg",
        "/P4.jpeg",
        "/P6.jpeg",
        "/P2.jpeg",
        "/P3.jpeg",
        "/prazzzss-art1.jpeg",
        "/prazzzss-art2.jpeg",
        "/prazzzss-art3.jpeg",
        "/prazzzss-art4.jpeg",
        "/prazzzss-art5.jpeg",
      ],
      twitterUrl: "https://x.com/Prazzzss",
    },
    {
      id: 4,
      name: "@Dianheto",
      image: "/d1.jpg",
      bio: "A talented artist, Dianheto has always loved art since he was young.Akilled in digital art creation from a young age. He hopes to becme a web3 creator in the near future.",
      twitterUrl: "https://x.com/diannheto",
      images: ["/d3.jpeg", "/d2.jpeg", "/d5.jpeg", "/d4.jpeg", "/d7.jpeg", "/d6.jpeg"],
    },
    {
      id: 5,
      name: "@Gelllsz",
      image: "/gelllsz-profile.jpeg",
      bio: "If he isn't getting his hands greasy, he's making art. Skilled in both Automobiles and art, Gelllsz meticulously crafts lovely handmade visuals for the team.",
      images: [
        "/gelllsz-art1.jpeg",
        "/gelllsz-art2.jpeg",
        "/gelllsz-art3.jpeg",
        "/gelllsz-art4.jpeg",
        "/gelllsz-art5.jpeg",
        "/gelllsz-art6.jpeg",
        "/gelllsz-art7.jpeg",
        "/gelllsz-art8.jpeg",
        "/gelllsz-art9.jpeg",
        "/gelllsz-art10.jpeg",
        "/gelllsz-art11.jpeg",
        "/gelllsz-art12.jpeg",
      ],
      twitterUrl: "https://x.com/RAYHAN333222?t=EXtqB3-m80DQ18Ym5EOJ-Q&s=09",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCreatorIndex((prev) => (prev + 1) % creators.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [creators.length])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        setCurrentCreatorIndex((prev) => (prev + 1) % creators.length)
      } else {
        setCurrentCreatorIndex((prev) => (prev - 1 + creators.length) % creators.length)
      }
    }
  }

  const goToPreviousCreator = () => {
    setCurrentCreatorIndex((prev) => (prev - 1 + creators.length) % creators.length)
  }

  const goToNextCreator = () => {
    setCurrentCreatorIndex((prev) => (prev + 1) % creators.length)
  }

  return (
    <section id="creators-section" className="py-20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-16 font-sans">Featured Creators</h2>

        <div
          className="flex justify-center items-center min-h-[400px] relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={goToPreviousCreator}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-card/80 hover:bg-card/90 backdrop-blur-sm rounded-full p-3 opacity-70 hover:opacity-100 transition-all duration-300 border border-border/50 hover:border-primary/50"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNextCreator}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-card/80 hover:bg-card/90 backdrop-blur-sm rounded-full p-3 opacity-70 hover:opacity-100 transition-all duration-300 border border-border/50 hover:border-primary/50"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            key={creators[currentCreatorIndex].id}
            className="creator-card-slide-in-right cursor-pointer animate-float"
            onClick={() => setSelectedCreator(creators[currentCreatorIndex])}
          >
            <div className="bg-card/60 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-card/80 transition-all duration-500 transform hover:scale-105 border border-border/30 hover:border-primary/50 shadow-xl hover:shadow-2xl">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <Image
                  src={creators[currentCreatorIndex].image || "/placeholder.svg"}
                  alt={creators[currentCreatorIndex].name}
                  fill
                  className="object-cover rounded-full border-4 border-primary/50 hover:border-primary transition-all duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2 font-sans">{creators[currentCreatorIndex].name}</h3>
            </div>
          </div>
        </div>

        {selectedCreator && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
            <div className="dialog-animate-in bg-card/95 backdrop-blur-2xl rounded-3xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto m-4 border-2 border-primary/30 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 relative">
                    <Image
                      src={selectedCreator.image || "/placeholder.svg"}
                      alt={selectedCreator.name}
                      fill
                      className="object-cover rounded-full border-4 border-primary"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-2 font-sans">{selectedCreator.name}</h3>
                    <p className="text-muted-foreground text-lg max-w-2xl">{selectedCreator.bio}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCreator(null)}
                  className="text-muted-foreground hover:text-destructive text-2xl font-bold transition-colors duration-200 p-2 hover:bg-destructive/10 rounded-full"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {selectedCreator.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square relative stagger-item group cursor-pointer"
                    onClick={() =>
                      setExpandedArtwork({ image, title: `${selectedCreator.name} - Artwork ${index + 1}` })
                    }
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${selectedCreator.name} work ${index + 1}`}
                      fill
                      className="object-cover rounded-xl transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <a
                  href={selectedCreator.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary/10 hover:bg-primary/20 text-primary font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 border border-primary/30 hover:border-primary/50 shadow-lg hover:shadow-primary/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Follow on X
                </a>
              </div>
            </div>
          </div>
        )}

        {expandedArtwork && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 backdrop-blur-md">
            <div className="dialog-animate-in bg-card/95 backdrop-blur-2xl rounded-2xl p-6 max-w-5xl max-h-[95vh] overflow-hidden m-4 border-2 border-primary/30 shadow-2xl">
              <div className="flex justify-end items-center mb-4">
                <button
                  onClick={() => setExpandedArtwork(null)}
                  className="text-muted-foreground hover:text-destructive text-2xl font-bold transition-colors duration-200 p-2 hover:bg-destructive/10 rounded-full"
                >
                  ×
                </button>
              </div>

              <div className="relative max-w-4xl max-h-[80vh] mx-auto">
                <Image
                  src={expandedArtwork.image || "/placeholder.svg"}
                  alt={expandedArtwork.title}
                  width={1200}
                  height={800}
                  className="object-contain rounded-xl w-full h-full"
                  style={{ maxHeight: "80vh" }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function SpacesSection() {
  const [showSpacesDialog, setShowSpacesDialog] = useState(false)
  const [selectedHost, setSelectedHost] = useState<any>(null)

  const spacesHosts = [
    {
      id: 1,
      name: "@jennychuks",
      image: "/jenny.jpg",
      info: "Lead host",
      bio: "Jenny is a passionate Arichain community member and the lead host of Creators Hub Spaces. With a strong prescence in the Arichain community, she lends her voice to Arichain in the form of the weekly space. ",
      twitter: "https://x.com/Jennychuks7_71",
    },
    {
      id: 2,
      name: "@AlisonSokuma",
      image: "/alison.jpg",
      info: "Industry expert",
      bio: "Alison is a creative visionary who specializes in web3 analysis and project evaluation. A long term web3 enthusiast, Alison uses his expertise to shed share knowledge on the podcast.",
      twitter: "https://x.com/AlisonSokuma",
    },
    {
      id: 3,
      name: "@eaglecancellor",
      image: "/eagle.jpg",
      info: "Storyteller",
      bio: "Eagle is a seasoned creative with deep expertise in blockchain. Constantly cooking up new ways to make the community spaces all the more enjoyable.",
      twitter: "https://x.com/eaglechancellor",
    },
    {
      id: 4,
      name: "@Gerald_yea",
      image: "/gerald.jpg",
      info: "Moderator",
      bio: "Gerald, a web3 enthusiasts lends his technical skills to the community space, ensuring everything flows as planned.",
      twitter: "https://x.com/Gerald_yea",
    },
  ]

  const episodes = [
    {
      id: 1,
      title: "Pilot: ARI Connect Fest",
      duration: "1:09:32",
      link: "https://x.com/Jennychuks7_71/status/1934261377410970039",
    },
    {
      id: 2,
      title: "What is Arichain Building?",
      duration: "23:05",
      link: "https://x.com/eaglechancellor/status/1936784044118704241",
    },
    { id: 3, title: "Kaito Oboarding", duration: "42:08", link: "https://x.com/Gerald_yea/status/1939316319226036451" },
    {
      id: 4,
      title: "Web3 for Mianstream Adoption:Arichain bridges the Gap",
      duration: "1:11:22",
      link: "https://x.com/Gerald_yea/status/1941496568038973714",
    },
    {
      id: 5,
      title: "Arichain 101: Your guide to earn and Contribute the right way",
      duration: "39:45",
      link: "https://x.com/eaglechancellor/status/1944389777849024884",
    },
    {
      id: 6,
      title: "Mastering Your Role in Arichain",
      duration: "2:03:18",
      link: "https://x.com/Gerald_yea/status/1946840542706331706",
    },
    {
      id: 7,
      title: "Invisible But Important: How lurkers can contribute to Arichain",
      duration: "2:10:33",
      link: "https://x.com/eaglechancellor/status/1949360766907199684",
    },
    { id: 8, title: "Unavailable", duration: "---", link: "" },
    {
      id: 9,
      title: "The Multi-vm Web3 Mesh:Arichain's Expanding Network",
      duration: "1:17:52",
      link: "https://x.com/eaglechancellor/status/1952006822967046372",
    },
    {
      id: 10,
      title: "From Defi to Data:Industry Applications of Arichain's infrastructure",
      duration: "2:30:22",
      link: "https://x.com/Jennychuks7_71/status/1954543577800888322",
    },
    {
      id: 11,
      title: "Impact Of Arichain Point Reduction/Red Squared",
      duration: "1:48:10",
      link: "https://x.com/Gerald_yea/status/1957003881512120597",
    },
    {
      id: 12,
      title: "From wallet points to practical steps to represent ARICHAIN better",
      duration: "---",
      link: "https://x.com/AlisonSokuma/status/1959617150164889653",
    },
  ]

  return (
    <section id="spaces-section" className="py-20 bg-muted/30 backdrop-blur-sm">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-16 font-sans">Spaces</h2>

        <div className="flex justify-center">
          <div
            className="animate-float bg-card/60 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-card/80 transition-all duration-500 transform hover:scale-105 cursor-pointer max-w-md border border-border/30 hover:border-primary/50 shadow-xl hover:shadow-2xl"
            onClick={() => setShowSpacesDialog(true)}
          >
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <Image
                src="/arichain-community-icon.png"
                alt="Arichain Community Space"
                className="object-cover rounded-full border-4 border-primary/50 hover:border-primary transition-all duration-300"
                fill
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2 font-sans">Arichain Community Space</h3>
            <p className="text-muted-foreground">Creative collaboration spaces</p>
          </div>
        </div>

        {showSpacesDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
            <div className="dialog-animate-in bg-card/90 backdrop-blur-xl rounded-2xl p-8 max-w-6xl max-h-[90vh] overflow-y-auto m-4 border border-border/50 shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-bold text-primary font-sans">Spaces</h3>
                <button
                  onClick={() => setShowSpacesDialog(false)}
                  className="text-muted-foreground hover:text-destructive text-2xl font-bold transition-colors duration-200 p-2 hover:bg-destructive/10 rounded-full"
                >
                  ×
                </button>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-primary mb-6 font-sans">Meet the Arichain space team</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {spacesHosts.map((host, index) => (
                    <div
                      key={host.id}
                      className="text-center stagger-item cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
                      onClick={() => setSelectedHost(host)}
                    >
                      <div className="w-20 h-20 mx-auto mb-3 relative group">
                        <Image
                          src={host.image || "/placeholder.svg"}
                          alt={host.name}
                          fill
                          className="object-cover rounded-full border-2 border-primary/50 group-hover:border-primary transition-all duration-300"
                        />
                      </div>
                      <h5 className="text-foreground font-semibold text-sm mb-1">{host.name}</h5>
                      <p className="text-muted-foreground text-xs">{host.info}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary mb-6 font-sans">Latest Sessions</h4>
                <div className="space-y-3">
                  {episodes.map((episode, index) => (
                    <div
                      key={episode.id}
                      className={`stagger-item bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-all duration-300 border border-border/30 hover:border-primary/30 ${
                        episode.link ? "cursor-pointer hover:shadow-lg" : "cursor-default"
                      }`}
                      onClick={() => episode.link && window.open(episode.link, "_blank")}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="text-foreground font-medium">{episode.title}</h5>
                          <p className="text-muted-foreground text-sm">Session {episode.id}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-secondary text-sm font-medium">{episode.duration}</span>
                          {episode.link && (
                            <svg
                              className="w-4 h-4 text-secondary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedHost && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 backdrop-blur-lg">
            <div className="dialog-animate-in bg-card/95 backdrop-blur-2xl rounded-3xl p-8 max-w-md max-h-[80vh] overflow-y-auto m-4 border-2 border-primary/30 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={selectedHost.image || "/placeholder.svg"}
                      alt={selectedHost.name}
                      fill
                      className="object-cover rounded-full border-3 border-primary/60"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1 font-sans">{selectedHost.name}</h3>
                    <p className="text-secondary text-sm font-medium">{selectedHost.info}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedHost(null)}
                  className="text-muted-foreground hover:text-destructive text-xl font-bold transition-colors duration-200 p-2 hover:bg-destructive/10 rounded-full"
                >
                  ×
                </button>
              </div>

              <div className="mb-8">
                <p className="text-foreground/90 leading-relaxed text-sm">{selectedHost.bio}</p>
              </div>

              <div className="flex justify-center">
                <a
                  href={`https://twitter.com/${selectedHost.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary/10 hover:bg-primary/20 text-primary font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 border border-primary/30 hover:border-primary/50 shadow-lg hover:shadow-primary/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Follow on X
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function PodcastsSection() {
  const [showPodcastDialog, setShowPodcastDialog] = useState(false)

  const podcastHost = {
    id: 1,
    name: "Lord Eagle",
    image: "/casted.jpg",
    bio: "Creator of the Arichain podcast.",
  }

  const podcastEpisodes = [
    {
      id: 1,
      title: "Arichain Podcasr Vol.1",
      duration: "1:18",
      description: "Ever wondered why Ari is called a SuperOrganism Chain?",
      link: "https://x.com/eaglechancellor/status/1929324548018569242",
    },
    {
      id: 2,
      title: "Arichain Podcast Vol.2",
      duration: "1:35",
      description: "Arichain Partnership",
      link: "https://x.com/eaglechancellor/status/1929747905289900497",
    },
    {
      id: 3,
      title: "Arichain Podcast Vol.3",
      duration: "1:39",
      description: "Why Arichain?",
      link: "https://x.com/eaglechancellor/status/1930621730164277745",
    },
    {
      id: 4,
      title: "Arichain Podcast Vol.4",
      duration: "2:52",
      description: "Ari Contributors",
      link: "https://x.com/eaglechancellor/status/1930988889000292690",
    },
    {
      id: 5,
      title: "Arichain Podcast Vol.5",
      duration: "1:37",
      description: "What Arichain ecosystem is all about",
      link: "https://x.com/eaglechancellor/status/1931674833735025129",
    },
    {
      id: 6,
      title: "Arichain Podcast Special",
      duration: "1:28",
      description: "Uncle explains What the Arichain Ecosystem is About",
      link: "https://x.com/eaglechancellor/status/1935260462989689049",
    },
  ]

  return (
    <section id="podcasts-section" className="py-20 bg-card/40 backdrop-blur-sm">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-16 font-sans">Podcasts</h2>

        <div className="flex justify-center">
          <div
            className="animate-float bg-card/60 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-card/80 transition-all duration-500 transform hover:scale-105 cursor-pointer max-w-md border border-border/30 hover:border-primary/50 shadow-xl hover:shadow-2xl"
            onClick={() => setShowPodcastDialog(true)}
          >
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <Image
                src="/casted.jpg"
                alt="Creators Hub Podcast"
                fill
                className="object-cover rounded-full border-4 border-primary/50 hover:border-primary transition-all duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2 font-sans">Arichain Podcast</h3>
            <p className="text-muted-foreground">Inspiring conversations about Arichain</p>
          </div>
        </div>

        {showPodcastDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
            <div className="dialog-animate-in bg-card/90 backdrop-blur-xl rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto m-4 border border-border/50 shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-bold text-primary font-sans">Arichain Podcast</h3>
                <button
                  onClick={() => setShowPodcastDialog(false)}
                  className="text-muted-foreground hover:text-destructive text-2xl font-bold transition-colors duration-200 p-2 hover:bg-destructive/10 rounded-full"
                >
                  ×
                </button>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-primary mb-6 font-sans">Host</h4>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 relative">
                    <Image
                      src={podcastHost.image || "/placeholder.svg"}
                      alt={podcastHost.name}
                      fill
                      className="object-cover rounded-full border-4 border-primary"
                    />
                  </div>
                  <div>
                    <h5 className="text-2xl font-bold text-primary mb-2">{podcastHost.name}</h5>
                    <p className="text-muted-foreground text-lg max-w-2xl">{podcastHost.bio}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary mb-6 font-sans">Featured Episodes</h4>
                <div className="space-y-4">
                  {podcastEpisodes.map((episode, index) => (
                    <div
                      key={episode.id}
                      className={`stagger-item bg-muted/30 rounded-xl p-6 hover:bg-muted/50 transition-all duration-300 border border-border/30 hover:border-primary/30 ${
                        episode.link ? "cursor-pointer hover:shadow-lg" : "cursor-default"
                      }`}
                      onClick={() => episode.link && window.open(episode.link, "_blank")}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h5 className="text-foreground font-semibold text-lg mb-2">{episode.title}</h5>
                          <p className="text-muted-foreground text-sm">{episode.description}</p>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <span className="text-secondary font-medium">{episode.duration}</span>
                          {episode.link && (
                            <svg
                              className="w-4 h-4 text-secondary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span>Episode {episode.id}</span>
                        <span>•</span>
                        <span>Available now</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function MusicSection() {
  const [showMusicDialog, setShowMusicDialog] = useState(false)

  const musicArtist = {
    id: 1,
    name: "Arichain Music",
    image: "/arichain-music-note.png",
    bio: "Curated music and sounds from the Arichain community.",
  }

  const musicTracks = [
    {
      id: 1,
      title: "One Chain",
      duration: "3:10",
      description: "Arianna",
      link: "https://x.com/shermansensei/status/1942887516304011492",
    },
    {
      id: 2,
      title: "One Flame",
      duration: "3:58",
      description: "Arianna",
      link: "https://x.com/shermansensei/status/1948322099744981352",
    },
    {
      id: 3,
      title: "Community",
      duration: "3:33",
      description: "Arianna",
      link: "https://x.com/shermansensei/status/1948322103993757810",
    },
  ]

  return (
    <section id="music-section" className="py-20 bg-muted/40 backdrop-blur-sm">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-16 font-sans">Music</h2>

        <div className="flex justify-center">
          <div
            className="animate-float bg-card/60 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-card/80 transition-all duration-500 transform hover:scale-105 cursor-pointer max-w-md border border-border/30 hover:border-primary/50 shadow-xl hover:shadow-2xl"
            onClick={() => setShowMusicDialog(true)}
          >
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <Image
                src="/arichain-music-note.png"
                alt="Arichain Music"
                fill
                className="object-cover rounded-full border-4 border-primary/50 hover:border-primary transition-all duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2 font-sans">Arichain Music</h3>
            <p className="text-muted-foreground">Sounds of Arichain</p>
          </div>
        </div>

        {showMusicDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
            <div className="dialog-animate-in bg-card/90 backdrop-blur-xl rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto m-4 border border-border/50 shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-bold text-primary font-sans">Arichain Music</h3>
                <button
                  onClick={() => setShowMusicDialog(false)}
                  className="text-muted-foreground hover:text-destructive text-2xl font-bold transition-colors duration-200 p-2 hover:bg-destructive/10 rounded-full"
                >
                  ×
                </button>
              </div>

              <div className="mb-8 text-center">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <Image
                    src={musicArtist.image || "/placeholder.svg"}
                    alt={musicArtist.name}
                    fill
                    className="object-cover rounded-full border-4 border-primary/50"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2 font-sans">{musicArtist.name}</h4>
                <p className="text-muted-foreground">{musicArtist.bio}</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary mb-6 font-sans">Latest Tracks</h4>
                <div className="space-y-4">
                  {musicTracks.map((track, index) => (
                    <div
                      key={track.id}
                      className="stagger-item bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-all duration-300 border border-border/30 hover:border-primary/30"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h5 className="text-foreground font-semibold mb-1">{track.title}</h5>
                          <p className="text-muted-foreground text-sm mb-1">{track.description}</p>
                          <p className="text-muted-foreground text-xs">{track.duration}</p>
                        </div>
                        {track.link && (
                          <a
                            href={track.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-all duration-300 text-sm font-medium"
                          >
                            Listen
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function AboutSection() {
  
    < section
      id="about-section"
      className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 backdrop-blur-sm"
>
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-16 font-sans">About</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/60 backdrop-blur-md rounded-3xl p-12 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-2xl hover:shadow-primary/10">
            <div className="text-center mb-12">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <Image src="/logo.png" alt="Creators Hub Logo" fill className="object-contain drop-shadow-lg" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6 font-sans">Arichain Creators Hub</h3>
              <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
                <p className="text-lg mb-6">
                  The Arichain creators hub is dedicated to showcasing the incredible work of the Arichain community
                  creators, From digital art and storytelling to world-building and groundbreaking projects,
                </p>
                <p className="text-lg mb-6">
                  The Creators Hub is a living archive, preserving every creation and idea as part of Arichain's growing
                  legacy. It's a space where visionaries share their work, connect with a global community, and inspire
                  the next wave of builders in the decentralized future.
                </p>
                <p className="text-lg">
                  Whether you're here to explore, to showcase your own work, or to witness how creativity fuels
                  Arichain's ecosystem, the Creators Hub is where it all comes together. Dedicated to the creative
                  community of Arichain.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-border/30 pt-8">
              <h4 className="text-xl font-bold text-primary text-center mb-8 font-sans">Connect </h4>
              <div className="flex justify-center gap-8">
                <a
                  href="https://arichain.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    Website
                  </span>
                </a>

                <a
                  href="https://discord.gg/xWC8XUC5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.120.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956\
