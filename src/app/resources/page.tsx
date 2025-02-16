import Link from 'next/link'
import { FiCpu, FiBriefcase, FiBookOpen, FiTrendingUp, FiUsers, FiZap, FiExternalLink, FiPlay, FiFileText } from 'react-icons/fi'
import DynamicBackground from '@/components/DynamicBackground'

export default function Resources() {
  return (
    <div className="min-h-screen relative">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <DynamicBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 pt-8 sm:pt-12 md:pt-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Digital Resource Hub
          </h1>
          
          {/* Main Topics */}
          <div className="max-w-4xl mx-auto glass-card p-4 sm:p-6 md:p-8 rounded-2xl mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Main Topics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <Link href="/asi-impact-society" className="block">
                <div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors h-full">
                  <div className="p-2 bg-blue-500/20 rounded-lg w-fit mb-3">
                    <FiCpu className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI & Society</h3>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Evolution of AI: ANI to ASI</li>
                    <li>• Healthcare & Finance Impact</li>
                    <li>• Ethical Implications</li>
                    <li>• AI in Education</li>
                  </ul>
                </div>
              </Link>
              <Link href="/future-of-work" className="block">
                <div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors h-full">
                  <div className="p-2 bg-purple-500/20 rounded-lg w-fit mb-3">
                    <FiBriefcase className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Future of Work</h3>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Job Market Transformation</li>
                    <li>• White-Collar Impact</li>
                    <li>• Emerging Opportunities</li>
                    <li>• Required Skills</li>
                  </ul>
                </div>
              </Link>
              <Link href="/high-schooler-advice" className="block">
                <div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors h-full">
                  <div className="p-2 bg-pink-500/20 rounded-lg w-fit mb-3">
                    <FiBookOpen className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Student Guide</h3>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• AI Literacy Development</li>
                    <li>• Career Preparation</li>
                    <li>• Essential Skills</li>
                    <li>• Learning Strategies</li>
                  </ul>
                </div>
              </Link>
            </div>
          </div>

          {/* Featured Media - New Section */}
          <div className="max-w-4xl mx-auto glass-card p-4 sm:p-6 md:p-8 rounded-2xl mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Featured Media
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <FiPlay className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Essential Viewing</h3>
                </div>
                <a 
                  href="https://www.youtube.com/watch?v=7xTGNNLPyMI" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="text-lg font-semibold text-blue-400 mb-2">Introduction to AI Technology</div>
                  <p className="text-sm text-gray-300">
                    A comprehensive introduction to AI technology by Andrej Karpathy, explaining core concepts and future implications.
                  </p>
                </a>
              </div>
              <div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <FiFileText className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Case Studies</h3>
                </div>
                <a 
                  href="https://blogs.worldbank.org/en/education/From-chalkboards-to-chatbots-Transforming-learning-in-Nigeria" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="text-lg font-semibold text-blue-400 mb-2">AI in Education: Nigeria Case Study</div>
                  <p className="text-sm text-gray-300">
                    World Bank's groundbreaking study (2025) shows how AI tutoring helped Nigerian students achieve two years' worth of learning in just six weeks, outperforming 80% of traditional teaching methods.
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Latest Research & Reports */}
          <div className="max-w-4xl mx-auto glass-card p-4 sm:p-6 md:p-8 rounded-2xl mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Latest Research & Reports
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Workforce & Industry</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2023" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      WEF: The Future of Jobs Report 2023
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      McKinsey: The State of AI in 2023
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://www.brookings.edu/articles/generative-ai-the-american-worker-and-the-future-of-work" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      Brookings: Generative AI & American Workers
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://www.dallasfed.org/research/swe/2023/swe2314" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      Dallas Fed: New Disruption from AI
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-3">Education & Skills</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://blogs.worldbank.org/en/education/From-chalkboards-to-chatbots-Transforming-learning-in-Nigeria" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      World Bank: AI Transforming Learning in Nigeria (2025)
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://www.gse.harvard.edu/ideas/usable-knowledge/24/09/students-are-using-ai-already" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      Harvard GSE: Students Using AI
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://www.oxfordscholastica.com/blog/how-will-ai-affect-the-world-of-work-for-high-schoolers" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      Oxford Scholastica: AI Impact on High Schoolers
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://www.wichita.edu/services/mrc/OIR/AI/jobimpacts.php" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      Impact of AI on Jobs and Education
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Academic Research */}
          <div className="max-w-4xl mx-auto glass-card p-4 sm:p-6 md:p-8 rounded-2xl mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Academic Research
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Healthcare & Technology</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://www.semanticscholar.org/paper/b9ec6906ac4cc7984827dfba102beffdd05ff3a7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      The Role of AI in Modern Healthcare Innovations
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://www.semanticscholar.org/paper/0476282bf8d42b3f763efd1cf257da1a953428be" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      Evolution and Architecture of Multimodal AI Systems
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11776378/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      AI and the State of Orthopedic Surgery
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-3">Workforce & Society</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://www.semanticscholar.org/paper/b5159d3d9a07de5fb96dfc2e7d13f8dd3301bbec" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      Empowering HR Through AI
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://www.semanticscholar.org/paper/3a00d89bfd125ea9208c9aefec9e4a130a956922" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      Algorithmic Conscience: Ethical Dilemmas in AI
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiExternalLink className="flex-shrink-0" />
                    <a href="https://www.nature.com/articles/s41599-024-02647-9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      Impact of AI on Employment: Virtual Agglomeration
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Books & Additional Reading */}
          <div className="max-w-4xl mx-auto glass-card p-4 sm:p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Recommended Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Essential Books</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• "AI Superpowers" by Kai-Fu Lee</li>
                  <li>• "Life 3.0" by Max Tegmark</li>
                  <li>• "The Age of AI" by Henry Kissinger, Eric Schmidt</li>
                  <li>• "Human + Machine" by Paul R. Daugherty</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-3">Key Statistics</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 14% of global workforce may need career changes by 2030</li>
                  <li>• 77% of employers prioritizing AI upskilling</li>
                  <li>• 60-73% of US trading is AI-driven</li>
                  <li>• 85% faster research analysis with AI tools</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                Last updated: February 16, 2025<br/>
                All statistics and projections are sourced from published research reports and studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 