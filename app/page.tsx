"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Brain,
  Database,
  BarChart3,
  Code,
  Calendar,
  MapPin,
  Download,
  Send,
  Menu,
  X,
} from "lucide-react"

import emailjs from "@emailjs/browser"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set())
  const [expandedImpacts, setExpandedImpacts] = useState<Set<number>>(new Set())

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        "service_er5ups5", // Replace with your EmailJS service ID
        "template_cligyur", // Replace with your EmailJS template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Rohith B",
        },
        "e3zS5AHIaPMt9GQsu", // Replace with your EmailJS public key
      )

      setSubmitStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Height of your fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  const projects = [
    {
      title: "Zenith (AI-driven SaaS platform)",
      description:
        "Developed a comprehensive AI SaaS platform that provides end-to-end solutions for businesses looking to leverage AI in their operations.",
      technologies: ["Flask", "Bloomberg API", "OpenAI API", "Langchain", "NLP", "Prediction Algorithms"],
      image: "/images/stock-prediction.png",
      github: "https://github.com/Rohith-AI-HUB/AI-Driven-SAAS-Platform",
      demo: null,
      impact: "Streamlined Prediction in Stock Market analysis and provide insights to the user.",
    },
    {
      title: "Jarvis Voice Assistant",
      description:
        "Designed and implemented a voice-activated personal assistant using Python, integrating speech recognition and natural language processing to provide users with a seamless and intuitive experience.",
      technologies: ["Python", "SpeechRecognition", "Natural Language Processing", "PyAudio"],
      image: "/images/jarvis-ai.png",
      github: "https://github.com/Rohith-AI-HUB/Jarvis-Voice-Assistant",
      demo: null,
      impact: "Enhanced user productivity and accessibility through voice-controlled interactions.",
    },
    {
      title: "MEDBOT (Healthcare AI)",
      description:
        "Developed an AI-powered healthcare chatbot that offers personalized medical advice and support to patients, improving healthcare accessibility and outcomes.",
      technologies: ["TensorFlow", "Keras", "Flask", "Natural Language Processing", "OCR"],
      image: "/images/medical-ai.png",
      github: "https://github.com/Rohith-AI-HUB/MEDBOT-Healthcare-AI",
      demo: null,
      impact: "Improved healthcare accessibility and patient outcomes through AI-driven medical advice and support.",
    },
    {
      title: "Feedback App",
      description:
        "Engineered a feedback collection app using React.js and Firebase, enabling businesses to gather and analyze customer feedback efficiently.",
      technologies: ["React.js", "MongoDB", "CSS"],
      image: "/images/feedback-app.png",
      github: "https://github.com/Rohith-AI-HUB/feedback-app",
      demo: null,
      impact:
        "Empowered businesses to gather and analyze customer feedback efficiently, leading to improved products and services.",
    },
    {
      title: "S.P.E.A.R (No-code platform)",
      description:
        "Developed a no-code platform that allows users to build and deploy applications without writing any code.",
      technologies: ["React.js", "BootStrap", "Node.js", "Express.js", "MongoDB"],
      image: "/images/bolt-homepage.png",
      github: "https://github.com/Rohith-AI-HUB/S.P.E.A.R",
      demo: "https://spearwebsite.vercel.app/",
      impact:
        "Democratized app development by enabling users to build and deploy applications without coding knowledge.",
    },
  ]

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "C", "C++", "SQL"],
    },
    {
      title: "Technologies",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        "React.js",
        "Tailwind",
        "OpenAI",
        "LangChain",
        "Flask",
        "Firebase",
        "Git",
        "Docker",
        "Basic-GCP",
        "MongoDB",
      ],
    },
    {
      title: "ML Libraries",
      icon: <Database className="w-6 h-6" />,
      skills: ["scikit-learn", "TensorFlow", "Keras", "PyTorch"],
    },
  ]

  const [activeTimeline, setActiveTimeline] = useState("education")

  const educationData = [
    {
      type: "education",
      title: "B.E. in Artificial Intelligence and Machine Learning",
      company: "BMS College of Engineering",
      location: "Bangalore, India",
      period: "Nov 2021 - Jun 2025 (Expected)",
      description:
        "Currently pursuing Bachelor's degree in AI & ML with current CGPA: 6.46/10.0. Core courses include Machine Learning, Deep Learning, Data Structures, AI, and Computer Vision. Actively involved in research projects and AI development.",
      icon: "🎓",
    },
  ]

  const workExperienceData = [
    {
      type: "work",
      title: "Frontend Developer",
      company: "RightSense.in",
      location: "Remote",
      period: "Mar 2025 - Present",
      description:
        "Developed responsive UI components with React and Tailwind CSS. Collaborated with design and backend teams for usability improvements. Implemented real-time features and performance optimizations. Also worked on Backend for constructing Agentic framework.",
      icon: "💼",
    },
  ]

  const certificationsData = [
    {
      type: "certification",
      title: "Machine Learning Course",
      company: "Google Developer Student Club",
      location: "Online",
      period: "2024",
      description:
        "Completed comprehensive Machine Learning course covering fundamental algorithms, supervised and unsupervised learning techniques, and practical implementation.",
      icon: "📜",
    },
    {
      type: "certification",
      title: "UI/UX Course",
      company: "Google (Coursera)",
      location: "Online",
      period: "2024",
      description:
        "Gained expertise in user interface and user experience design principles, prototyping, and design thinking methodologies.",
      icon: "📜",
    },
    {
      type: "certification",
      title: "AI Essentials",
      company: "Google (Coursera)",
      location: "Online",
      period: "2024",
      description:
        "Acquired foundational knowledge in artificial intelligence concepts, applications, and ethical considerations in AI development.",
      icon: "📜",
    },
    {
      type: "certification",
      title: "Web Development",
      company: "Udemy",
      location: "Online",
      period: "2023",
      description:
        "Mastered full-stack web development including HTML, CSS, JavaScript, React.js, and backend technologies for building modern web applications.",
      icon: "📜",
    },
    {
      type: "certification",
      title: "Python Programming",
      company: "Udemy",
      location: "Online",
      period: "2023",
      description:
        "Developed proficiency in Python programming language, including data structures, algorithms, and application development for AI/ML projects.",
      icon: "📜",
    },
  ]

  const getCurrentTimelineData = () => {
    switch (activeTimeline) {
      case "education":
        return educationData
      case "work":
        return workExperienceData
      case "certifications":
        return certificationsData
      default:
        return educationData
    }
  }

  const toggleProjectExpansion = (projectIndex: number) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(projectIndex)) {
        newSet.delete(projectIndex)
      } else {
        newSet.add(projectIndex)
      }
      return newSet
    })
  }

  const toggleImpactExpansion = (projectIndex: number) => {
    setExpandedImpacts((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(projectIndex)) {
        newSet.delete(projectIndex)
      } else {
        newSet.add(projectIndex)
      }
      return newSet
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">Rohith B</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23007BFF' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Column */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                  Passionate
                  <span className="text-blue-600 block">AI & Machine Learning Engineer</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 text-justify">
                  A passionate AI and Machine Learning student focused on building intelligent systems that solve
                  real-world problems and deliver business value.
                </p>
              </div>

              {/* Skills Badge Row */}
              <div className="flex flex-wrap gap-3">
                {["Machine Learning", "Deep Learning", "Data Analysis", "React.js", "Python", "NLP"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 px-4 py-1.5 text-sm rounded hover:bg-blue-200 transition"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg relative group transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                  aria-label="View my projects"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center">
                    View My Projects
                    <svg
                      className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>

                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg relative group transition duration-300 ease-in-out shadow-sm hover:shadow-md"
                  aria-label="Get in touch"
                >
                  <span className="relative flex items-center">
                    Get in Touch
                    <svg
                      className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="AI Professional"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                <Brain className="w-10 h-10 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-pulse delay-1000">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg p-2"
            aria-label="Scroll to About section"
          >
            <div className="relative w-12 h-12 mb-2">
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>

              {[
                { top: 0, left: "50%", delay: "0s" },
                { bottom: 0, left: "50%", delay: "0.5s" },
                { left: 0, top: "50%", delay: "1s" },
                { right: 0, top: "50%", delay: "1.5s" },
              ].map((style, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
                  style={{ ...style, transform: "translate(-50%, -50%)", animationDelay: style.delay }}
                />
              ))}

              {/* Connection lines */}
              <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent transform -translate-y-1/2 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-gradient-to-l from-blue-500/50 to-transparent transform -translate-y-1/2 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-gradient-to-b from-blue-500/50 to-transparent transform -translate-x-1/2 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-gradient-to-t from-blue-500/50 to-transparent transform -translate-x-1/2 animate-pulse" />
            </div>

            {/* Typing AI.ML */}
            <div className="text-xs text-blue-500 font-mono tracking-wider animate-pulse">
              {"AI • ML".split("").map((char, i) => (
                <span
                  key={i}
                  className={`inline-block ${char !== " " ? "animate-bounce" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </div>

            {/* Arrow */}
            <ChevronDown className="w-4 h-4 text-blue-400 mt-1 animate-bounce" style={{ animationDelay: "2s" }} />
          </button>
        </div>
      </section>

      {/* About Section - Comprehensive Professional Profile */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23007BFF' fillOpacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
              Professional Profile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
              A comprehensive overview of my capabilities, experience, and aspirations in AI & Machine Learning
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Profile Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Professional Summary */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Professional Summary</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-700 leading-relaxed text-base mb-4 text-justify">
                  Passionate AI & Machine Learning Engineering student at BMS College of Engineering with a strong
                  foundation in developing intelligent systems that solve real-world problems. Currently maintaining a
                  CGPA of 6.46/10.0 while actively pursuing cutting-edge research in AI applications.
                </p>
                <p className="text-gray-700 leading-relaxed text-base mb-4 text-justify">
                  Experienced in full-stack development with expertise in React.js, Python, and modern AI frameworks.
                  Successfully delivered multiple AI-driven projects including healthcare chatbots, voice assistants,
                  and SaaS platforms that demonstrate practical application of machine learning concepts.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border-l-4 border-l-blue-500">
                  <p className="text-sm font-semibold text-blue-800 mb-2">Career Objective</p>
                  <p className="text-gray-700 text-sm">
                    To leverage my technical expertise in AI/ML and software development to create innovative solutions
                    that drive business value and contribute to the advancement of artificial intelligence technology.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Current Role & Goals */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Current Role & Goals</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Current Position
                  </h4>
                  <p className="text-gray-700 ml-5 text-justify">
                    Frontend Developer at RightSense.in (Remote) - Developing responsive UI components with React and
                    Tailwind CSS, implementing real-time features, and contributing to backend Agentic framework
                    development.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Short-term Goals (2025)
                  </h4>
                  <ul className="text-gray-700 ml-5 space-y-1">
                    <li>• Complete B.E. in AI & ML with distinction</li>
                    <li>• Contribute to open-source AI projects</li>
                    <li>• Gain industry certifications in cloud AI services</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Long-term Vision
                  </h4>
                  <p className="text-gray-700 ml-5 text-justify">
                    Become a leading AI researcher and entrepreneur, developing innovative AI solutions that positively
                    impact healthcare, education, and business automation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Soft Skills */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0
01-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Problem Solving",
                    "Team Collaboration",
                    "Critical Thinking",
                    "Communication",
                    "Adaptability",
                    "Leadership",
                    "Time Management",
                    "Creative Innovation",
                  ].map((skill, index) => (
                    <div key={skill} className="flex items-center" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">English</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Fluent</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Tamil</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Native</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Kannada</span>
                      <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Native</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Telugu</span>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Basic</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hobbies & Interests */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Hobbies & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { icon: "🤖", text: "AI Research & Innovation" },
                    { icon: "🎮", text: "Gaming & Tech Exploration" },
                    { icon: "🎵", text: "Music & Audio Tech" },
                  ].map((hobby, index) => (
                    <div
                      key={hobby.text}
                      className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-lg mr-3">{hobby.icon}</span>
                      <span className="text-gray-700 text-sm">{hobby.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Values */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Innovation", desc: "Pushing boundaries in AI technology" },
                    { title: "Ethics", desc: "Responsible AI development" },
                    { title: "Excellence", desc: "Delivering high-quality solutions" },
                    { title: "Learning", desc: "Continuous skill development" },
                    { title: "Impact", desc: "Creating meaningful change" },
                    { title: "Collaboration", desc: "Building strong partnerships" },
                  ].map((value, index) => (
                    <div
                      key={value.title}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h5 className="font-semibold text-gray-900 text-sm mb-1">{value.title}</h5>
                      <p className="text-gray-600 text-xs leading-relaxed">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Experience Timeline */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5"></div>
            <CardHeader className="relative z-10 text-center pb-8">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                Professional Journey
              </CardTitle>
              <p className="text-gray-600 max-w-2xl mx-auto text-justify">
                A timeline of my educational and professional milestones in AI & Machine Learning
              </p>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="relative max-w-4xl mx-auto">
                {/* Centered Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full"></div>

                <div className="space-y-12">
                  {[
                    {
                      year: "2025",
                      title: "Frontend Developer",
                      org: "RightSense.in",
                      type: "work",
                      desc: "Developing responsive UI components and Designing Agentic framework development",
                      status: "current",
                    },
                    {
                      year: "2024",
                      title: "Multiple AI Certifications",
                      org: "Google, Udemy",
                      type: "cert",
                      desc: "Completed certifications in ML, UI/UX, AI Essentials, and Web Development",
                      status: "completed",
                    },
                    {
                      year: "2023-2024",
                      title: "AI Project Development",
                      org: "Personal Projects",
                      type: "project",
                      desc: "Built Zenith SaaS platform, MEDBOT healthcare AI, and Jarvis voice assistant",
                      status: "completed",
                    },
                    {
                      year: "2021-2025",
                      title: "B.E. AI & Machine Learning",
                      org: "BMS College of Engineering",
                      type: "education",
                      desc: "Pursuing Bachelor's degree with focus on ML, Deep Learning, and Computer Vision",
                      status: "ongoing",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                    >
                      {/* Timeline dot - always centered */}
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${
                          item.status === "current"
                            ? "bg-green-500"
                            : item.status === "ongoing"
                              ? "bg-blue-500"
                              : "bg-gray-400"
                        }`}
                      ></div>

                      {/* Content - alternating sides with consistent sizing */}
                      <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-48 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                {item.year}
                              </span>
                              <Badge
                                variant="outline"
                                className={`text-xs ${
                                  item.type === "work"
                                    ? "border-green-200 text-green-700"
                                    : item.type === "education"
                                      ? "border-blue-200 text-blue-700"
                                      : item.type === "cert"
                                        ? "border-purple-200 text-purple-700"
                                        : "border-orange-200 text-orange-700"
                                }`}
                              >
                                {item.type === "work"
                                  ? "💼 Work"
                                  : item.type === "education"
                                    ? "🎓 Education"
                                    : item.type === "cert"
                                      ? "📜 Certification"
                                      : "🚀 Project"}
                              </Badge>
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg leading-tight">{item.title}</h4>
                            <p className="text-blue-600 font-semibold mb-3 text-sm">{item.org}</p>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed text-justify flex-grow">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
              A showcase of AI and machine learning projects that demonstrate my expertise in solving complex problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-3 bg-white/80 backdrop-blur-sm overflow-hidden h-full flex flex-col border-0 shadow-lg hover:shadow-blue-500/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Project type badge */}
                  <div className="absolute top-5 left-5">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg backdrop-blur-sm px-3 py-1 text-sm font-medium">
                      {project.title.includes("AI") ||
                      project.title.includes("MEDBOT") ||
                      project.title.includes("Jarvis")
                        ? "AI/ML"
                        : "Web App"}
                    </Badge>
                  </div>

                  {/* Action buttons overlay */}
                  <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-white/95 text-gray-900 hover:bg-white flex-1 backdrop-blur-md shadow-lg border-0 font-semibold transition-all duration-300 hover:scale-105"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.demo && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 flex-1 shadow-lg border-0 font-semibold transition-all duration-300 hover:scale-105"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4 flex-shrink-0 px-6 pt-6">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 h-16 flex items-start">
                    <span className="line-clamp-2 leading-tight">{project.title}</span>
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed h-18 overflow-hidden text-justify">
                    <span className="line-clamp-3">{project.description}</span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5 pt-0 px-6 pb-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 min-h-[3rem]">
                      {(expandedProjects.has(index) ? project.technologies : project.technologies.slice(0, 4)).map(
                        (tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs px-3 py-1.5 bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200 h-7 flex items-center font-medium transition-all duration-300 hover:from-blue-50 hover:to-purple-50 hover:border-blue-300"
                          >
                            {tech}
                          </Badge>
                        ),
                      )}
                      {project.technologies.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 hover:from-blue-100 hover:to-purple-100 cursor-pointer transition-all duration-300 h-7 flex items-center font-medium border-blue-200 hover:border-blue-400"
                          onClick={() => toggleProjectExpansion(index)}
                        >
                          {expandedProjects.has(index) ? "Show Less" : `+${project.technologies.length - 4} More`}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-blue-50 p-4 rounded-xl border-l-4 border-l-green-500 mt-auto shadow-sm">
                    <p className="text-sm font-medium text-gray-800 flex items-start">
                      <span className="text-green-600 mr-3 mt-0.5 flex-shrink-0 text-base">📈</span>
                      <span className={expandedImpacts.has(index) ? "" : "line-clamp-2"}>{project.impact}</span>
                    </p>
                    {project.impact.length > 80 && (
                      <button
                        onClick={() => toggleImpactExpansion(index)}
                        className="text-blue-600 hover:text-blue-800 text-xs font-semibold mt-2 transition-colors duration-300 hover:underline"
                      >
                        {expandedImpacts.has(index) ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
              A comprehensive toolkit for building intelligent systems and extracting insights from data
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="text-center relative z-10 pb-4">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110">
                      <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                    </div>
                    {/* Floating particles effect */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:border-blue-200 transition-all duration-300 border border-gray-200 hover:shadow-md hover:scale-105 cursor-default font-medium px-4 py-2 text-sm"
                        style={{
                          animationDelay: `${skillIndex * 100}ms`,
                          animation: "fadeInUp 0.6s ease-out forwards",
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Card>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-blue-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-blue-900 bg-clip-text text-transparent mb-6">
              Experience & Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
              My journey in AI and machine learning, from education to professional development
            </p>
          </div>

          {/* Interactive Timeline Buttons */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-white/50 shadow-blue-500/10">
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setActiveTimeline("education")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 relative overflow-hidden ${
                    activeTimeline === "education"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105 shadow-blue-500/30"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 bg-gray-50/50"
                  }`}
                  style={{ animationDelay: "0.1s" }}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="text-xl mr-2">🎓</span>
                    Education
                  </span>
                </button>
                <button
                  onClick={() => setActiveTimeline("work")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 relative overflow-hidden ${
                    activeTimeline === "work"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105 shadow-blue-500/30"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 bg-gray-50/50"
                  }`}
                  style={{ animationDelay: "0.2s" }}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="text-xl mr-2">💼</span>
                    Work Experience
                  </span>
                </button>
                <button
                  onClick={() => setActiveTimeline("certifications")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 relative overflow-hidden ${
                    activeTimeline === "certifications"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105 shadow-blue-500/30"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 bg-gray-50/50"
                  }`}
                  style={{ animationDelay: "0.3s" }}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="text-xl mr-2">📜</span>
                    Certifications
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Timeline Display */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-indigo-400 to-purple-400 rounded-full shadow-sm"></div>

            <div className="space-y-16">
              {getCurrentTimelineData().map((item, index) => (
                <div
                  key={`${activeTimeline}-${index}`}
                  className={`relative flex items-center opacity-0 animate-fadeInUp ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{
                    animationDelay: `${index * 0.2 + 0.3}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-xl z-10 opacity-0 animate-fadeInUp hover:scale-125 transition-transform duration-300"
                    style={{
                      animationDelay: `${index * 0.2 + 0.1}s`,
                      animationFillMode: "forwards",
                    }}
                  ></div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-indigo-500/20 border-l-4 border-l-gradient-to-b border-l-blue-500 relative overflow-hidden group">
                      {/* Subtle background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <CardHeader className="relative z-10 pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                              {item.title}
                            </CardTitle>
                            <p className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold text-lg mb-4">
                              {item.company}
                            </p>
                            <div className="flex flex-wrap items-center text-gray-500 text-sm gap-4">
                              <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full">
                                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                {item.location}
                              </div>
                              <div className="flex items-center bg-blue-100 px-3 py-1.5 rounded-full">
                                <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                                {item.period}
                              </div>
                            </div>
                          </div>
                          <div className="text-4xl ml-6 transform group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <p className="text-gray-600 leading-relaxed text-base text-justify">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Ready to collaborate on your next AI project? Let's discuss how we can work together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:rohithb892@gmail.com"
                    className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">rohithb892@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/rohith-ai-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">LinkedIn</p>
                      <p className="text-gray-600">linkedin.com/in/rohith-ai-hub</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Rohith-AI-HUB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Github className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">GitHub</p>
                      <p className="text-gray-600">github.com/Rohith-AI-HUB</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="/resume/Rohith_B_Resume.pdf"
                  download="Rohith_B_Resume.pdf"
                  className="inline-flex items-center"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 backdrop-blur-sm border-0 shadow-2xl shadow-blue-500/10">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/10 to-blue-400/10 rounded-full translate-y-12 -translate-x-12"></div>

              <CardHeader className="relative z-10 pb-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-center">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-center text-gray-600 text-lg leading-relaxed">
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3 group">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-semibold text-gray-700 group-focus-within:text-blue-600 transition-colors duration-300"
                      >
                        First Name *
                      </Label>
                      <div className="relative">
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          required
                          className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    <div className="space-y-3 group">
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-semibold text-gray-700 group-focus-within:text-blue-600 transition-colors duration-300"
                      >
                        Last Name *
                      </Label>
                      <div className="relative">
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          required
                          className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 group">
                    <Label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700 group-focus-within:text-blue-600 transition-colors duration-300"
                    >
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="space-y-3 group">
                    <Label
                      htmlFor="subject"
                      className="text-sm font-semibold text-gray-700 group-focus-within:text-blue-600 transition-colors duration-300"
                    >
                      Subject *
                    </Label>
                    <div className="relative">
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project Collaboration, Job Opportunity, etc."
                        required
                        className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="space-y-3 group">
                    <Label
                      htmlFor="message"
                      className="text-sm font-semibold text-gray-700 group-focus-within:text-blue-600 transition-colors duration-300"
                    >
                      Message *
                    </Label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, collaboration ideas, or how we can work together..."
                        rows={6}
                        required
                        className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300 resize-none"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-green-800">
                            Message sent successfully! I'll get back to you soon.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-red-800">
                            Failed to send message. Please try again or contact me directly.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:translate-x-1" />
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2025 Rohith.B . Built with Next.js and Tailwind CSS.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://github.com/Rohith-AI-HUB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/rohith-ai-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:rohithb892@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
