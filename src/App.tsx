import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Cloud, 
  LayoutDashboard, 
  CheckCircle2, 
  Terminal, 
  Users, 
  Award, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  CheckCircle
} from 'lucide-react';

const CurriculumItem = ({ number, title, isOpen, onClick, children }: { number: string, title: string, isOpen: boolean, onClick: () => void, children: React.ReactNode }) => (
  <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden mb-4 transition-all duration-300">
    <button 
      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-800/80 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <span className="text-slate-500 font-mono text-sm">{number}.</span>
        <span className="text-white font-medium text-lg">{title}</span>
      </div>
      {isOpen ? <ChevronUp className="text-slate-400" size={20} /> : <ChevronDown className="text-slate-400" size={20} />}
    </button>
    {isOpen && (
      <div className="px-6 pb-6 pt-2 border-t border-slate-700/50 mt-2 animate-in slide-in-from-top-2 fade-in duration-200">
        {children}
      </div>
    )}
  </div>
);

export default function App() {
  const [openSection, setOpenSection] = useState<number | null>(2);

  const handleEnrollClick = () => {
    const phoneNumber = "593988372107";
    const message = encodeURIComponent("Hola, estoy interesado en comprar el curso de React Mastery.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500/30">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full relative z-10">
        <div className="font-bold text-xl text-white tracking-tight">React Mastery</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Projects</a>
          <a href="#" className="hover:text-white transition-colors">Curriculum</a>
          <a href="#" className="hover:text-white transition-colors">Testimonials</a>
        </div>
        <button onClick={handleEnrollClick} className="bg-cyan-400 text-slate-900 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          Enroll Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center relative">
        {/* Background glow */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="inline-block bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-bold px-3 py-1.5 rounded-full mb-8 tracking-wider uppercase shadow-sm">
            New Course for 2024
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Master React by <br/> Building Real <br/> World Projects
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
            Stop watching tutorials and start shipping. From architecture to deployment, build five production-grade applications that will anchor your professional portfolio.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={handleEnrollClick} className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:-translate-y-0.5">
              Start Building Today
            </button>
            <button className="bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold border border-slate-700 hover:bg-slate-700 transition-all hover:-translate-y-0.5">
              View Curriculum
            </button>
          </div>
        </div>
        
        <div className="relative lg:ml-auto w-full max-w-lg">
          {/* Code Editor Mockup */}
          <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 relative z-10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-slate-700/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
            </div>
            <div className="p-6 text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed">
              <pre>
                <code>
                  <span className="text-pink-400">import</span> {'{'} useState, useEffect {'}'} <span className="text-pink-400">from</span> <span className="text-amber-300">'react'</span>;{'\n'}
                  {'\n'}
                  <span className="text-pink-400">export default function</span> <span className="text-emerald-400">App</span>() {'{'}{'\n'}
                  {'  '}<span className="text-pink-400">const</span> [data, setData] = <span className="text-blue-400">useState</span>(<span className="text-pink-400">null</span>);{'\n'}
                  {'\n'}
                  {'  '}<span className="text-blue-400">useEffect</span>(() <span className="text-pink-400">=&gt;</span> {'{'}{'\n'}
                  {'    '}<span className="text-pink-400">async function</span> <span className="text-blue-400">fetchData</span>() {'{'}{'\n'}
                  {'      '}<span className="text-pink-400">const</span> response = <span className="text-pink-400">await</span> <span className="text-blue-400">fetch</span>(<span className="text-amber-300">'/api/data'</span>);{'\n'}
                  {'      '}<span className="text-pink-400">const</span> result = <span className="text-pink-400">await</span> response.<span className="text-blue-400">json</span>();{'\n'}
                  {'      '}<span className="text-blue-400">setData</span>(result);{'\n'}
                  {'    '}{'}'}{'\n'}
                  {'    '}<span className="text-blue-400">fetchData</span>();{'\n'}
                  {'  '}{'}'}, []);{'\n'}
                  {'\n'}
                  {'  '}<span className="text-pink-400">return</span> ({'\n'}
                  {'    '}&lt;<span className="text-blue-400">div</span> <span className="text-emerald-300">className</span>=<span className="text-amber-300">"app-container"</span>&gt;{'\n'}
                  {'      '}{'{'}data ? &lt;<span className="text-blue-400">Dashboard</span> <span className="text-emerald-300">data</span>={'{'}data{'}'} /&gt; : &lt;<span className="text-blue-400">Loading</span> /&gt;{'}'}{'\n'}
                  {'    '}&lt;/<span className="text-blue-400">div</span>&gt;{'\n'}
                  {'  '});{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
          </div>
          {/* Decorative blur behind code editor */}
          <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl -z-10 rounded-full"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-slate-900/50 py-24 border-y border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">The Project Portfolio</h2>
            <p className="text-slate-400 text-lg">Five production-ready apps you'll build from scratch.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Project 1 - Large */}
            <div className="lg:col-span-2 bg-slate-800/80 rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center text-white group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                  <ShoppingCart size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">Project 01</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Ultimate E-Commerce Engine</h3>
              <p className="text-slate-400 mb-8 max-w-md leading-relaxed">A full-scale store with Stripe integration, product filtering, and cart persistence using Redux Toolkit.</p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs font-semibold text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-700/50">Stripe API</span>
                <span className="text-xs font-semibold text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-700/50">Redux</span>
                <span className="text-xs font-semibold text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-700/50">Framer Motion</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center text-white group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                  <Cloud size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">Project 02</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Weather Flux</h3>
              <p className="text-slate-400 leading-relaxed">Real-time data fetching with dynamic UI shifts based on local climate conditions.</p>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center text-white group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                  <LayoutDashboard size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">Project 03</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Social Metrics</h3>
              <p className="text-slate-400 leading-relaxed">A complex dashboard featuring charting libraries and heavy data visualization.</p>
            </div>

            {/* Project 4 */}
            <div className="lg:col-span-2 bg-slate-800/80 rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col md:flex-row gap-8 items-center overflow-hidden relative">
              <div className="flex-1 relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center text-white group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold md:hidden">Project 04</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Task Architect</h3>
                <p className="text-slate-400 leading-relaxed max-w-md">Advanced Kanban-style task manager with drag-and-drop and real-time collaboration features.</p>
              </div>
              <div className="hidden md:block relative z-10">
                 <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold mb-4 block text-right">Project 04</span>
                 {/* Mockup image placeholder */}
                 <div className="w-72 h-48 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-1/3 h-3 bg-slate-800 rounded"></div>
                      <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
                    </div>
                    <div className="flex gap-3 h-full">
                      <div className="flex-1 bg-slate-800/50 rounded-lg p-2 space-y-2">
                        <div className="w-full h-8 bg-slate-700/50 rounded"></div>
                        <div className="w-full h-12 bg-slate-700/50 rounded"></div>
                      </div>
                      <div className="flex-1 bg-slate-800/50 rounded-lg p-2 space-y-2">
                        <div className="w-full h-8 bg-slate-700/50 rounded"></div>
                        <div className="w-full h-16 bg-slate-700/50 rounded"></div>
                      </div>
                    </div>
                 </div>
              </div>
              {/* Decorative gradient for Project 4 */}
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-slate-800/50 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Portfolio Pro */}
          <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700/50 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Portfolio Pro</h3>
              <p className="text-slate-400 leading-relaxed">Deploy your final masterpiece: A performant, high-SEO React portfolio to host these 5 projects.</p>
            </div>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold border border-slate-700 hover:bg-slate-700 transition-colors whitespace-nowrap shadow-sm">
              View Project Scope
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-4 order-2 lg:order-1">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 flex gap-6 items-start hover:bg-slate-800/80 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center shrink-0 text-slate-300">
              <Terminal size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2 tracking-tight">Practical Skills Only</h4>
              <p className="text-slate-400 text-sm leading-relaxed">No theory-bloat. We focus on hooks, state management, and API orchestration that companies actually use.</p>
            </div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 flex gap-6 items-start hover:bg-slate-800/80 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center shrink-0 text-slate-300">
              <Users size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2 tracking-tight">Architect Community</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Get access to our private Discord where senior engineers review your React components.</p>
            </div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 flex gap-6 items-start hover:bg-slate-800/80 transition-colors relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent pointer-events-none"></div>
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 text-cyan-400 relative z-10">
              <Award size={24} />
            </div>
            <div className="relative z-10">
              <h4 className="text-lg font-bold text-white mb-2 tracking-tight">Portfolio Ready</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Each project is designed to stand out in a technical interview with high performance and accessibility.</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
            Engineered for the <br/> <span className="text-cyan-400">Next Level</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            The difference between a junior and a senior developer is the ability to handle complexity. We don't just teach you syntax; we teach you how to think in components, how to manage global state without the mess, and how to optimize for the user.
          </p>
          <a href="#" className="inline-flex items-center text-white font-semibold hover:text-cyan-400 transition-colors group">
            Explore the learning methodology 
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 bg-slate-900/30 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">Course Curriculum</h2>
          
          <CurriculumItem 
            number="01" 
            title="Foundations of Modern React" 
            isOpen={openSection === 1} 
            onClick={() => setOpenSection(openSection === 1 ? null : 1)}
          >
            <p className="text-slate-400 mb-4 leading-relaxed">Learn the core concepts of React 18+ including components, props, and basic hooks. We'll build a solid mental model of how React renders and updates the DOM.</p>
          </CurriculumItem>

          <CurriculumItem 
            number="02" 
            title="Advanced State & Context" 
            isOpen={openSection === 2} 
            onClick={() => setOpenSection(openSection === 2 ? null : 2)}
          >
            <p className="text-slate-400 mb-6 leading-relaxed">
              Mastering the `useContext` and `useReducer` hooks for global state management. Implementing custom hooks to extract logic and keep components clean.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-300 text-sm">
                <CheckCircle size={18} className="text-cyan-400 mr-3 shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Deep dive into useReducer:</strong> Handle complex state logic with actions and reducers.</span>
              </li>
              <li className="flex items-start text-slate-300 text-sm">
                <CheckCircle size={18} className="text-cyan-400 mr-3 shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Avoiding Prop Drilling:</strong> Architect your app to pass data efficiently without cluttering intermediate components.</span>
              </li>
              <li className="flex items-start text-slate-300 text-sm">
                <CheckCircle size={18} className="text-cyan-400 mr-3 shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Performance profiling:</strong> Identify and fix unnecessary re-renders in complex component trees.</span>
              </li>
            </ul>
          </CurriculumItem>

          <CurriculumItem 
            number="03" 
            title="Routing & Performance Optimization" 
            isOpen={openSection === 3} 
            onClick={() => setOpenSection(openSection === 3 ? null : 3)}
          >
            <p className="text-slate-400 mb-4 leading-relaxed">Implementing React Router for complex navigation, code splitting for faster initial loads, and memoization techniques (useMemo, useCallback) to keep your app snappy.</p>
          </CurriculumItem>

          <CurriculumItem 
            number="04" 
            title="The Project Phase: Building Project 1-5" 
            isOpen={openSection === 4} 
            onClick={() => setOpenSection(openSection === 4 ? null : 4)}
          >
            <p className="text-slate-400 mb-4 leading-relaxed">Applying everything learned to build the five core portfolio projects. We'll cover integrating third-party APIs, handling authentication, and deploying to production.</p>
          </CurriculumItem>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center tracking-tight">Built by Engineers, Trusted by Students</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <img src="https://i.pravatar.cc/150?img=11" alt="Alex Rivera" className="w-12 h-12 rounded-full object-cover border-2 border-slate-700" />
              <div>
                <div className="text-white font-bold">Alex Rivera</div>
                <div className="text-slate-500 text-xs uppercase tracking-wider font-semibold mt-0.5">Frontend Developer</div>
              </div>
            </div>
            <p className="text-slate-300 italic text-sm leading-relaxed">
              "The 'E-commerce Engine' project alone got me through my interview at a top fintech. The way architecture is taught here is unparalleled."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 translate-y-0 md:translate-y-4 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <img src="https://i.pravatar.cc/150?img=5" alt="Sarah Chen" className="w-12 h-12 rounded-full object-cover border-2 border-slate-700" />
              <div>
                <div className="text-white font-bold">Sarah Chen</div>
                <div className="text-slate-500 text-xs uppercase tracking-wider font-semibold mt-0.5">Career Switcher</div>
              </div>
            </div>
            <p className="text-slate-300 italic text-sm leading-relaxed">
              "I went from struggling with basic hooks to deploying a complex social dashboard. The community support is a game-changer."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <img src="https://i.pravatar.cc/150?img=33" alt="James Miller" className="w-12 h-12 rounded-full object-cover border-2 border-slate-700" />
              <div>
                <div className="text-white font-bold">James Miller</div>
                <div className="text-slate-500 text-xs uppercase tracking-wider font-semibold mt-0.5">UI Architect</div>
              </div>
            </div>
            <p className="text-slate-300 italic text-sm leading-relaxed">
              "Finally, a course that treats React as a professional tool rather than a toy. The projects feel like real work assignments."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center border border-slate-700/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 relative z-10 tracking-tight leading-tight">Ready to become a <br/> React Master?</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10">Join 10,000+ developers building the future of the web.</p>
          
          <div className="flex items-center justify-center gap-4 mb-10 relative z-10">
            <span className="text-5xl font-extrabold text-white tracking-tight">$149</span>
            <span className="text-2xl text-slate-500 line-through decoration-slate-500/50 font-medium">$499</span>
            <span className="bg-rose-500/20 text-rose-400 text-xs font-bold px-2.5 py-1 rounded-md tracking-wide">70% OFF</span>
          </div>
          
          <button onClick={handleEnrollClick} className="bg-cyan-400 text-slate-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-300 transition-all w-full sm:w-auto relative z-10 shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] hover:-translate-y-0.5">
            Enroll in React Mastery Now
          </button>
          
          <p className="text-slate-500 text-sm mt-8 relative z-10 font-medium">Lifetime Access • 30-Day Money Back Guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="font-bold text-xl text-white mb-4 tracking-tight">React Mastery</div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Elevating web development through deep technical expertise and high-fidelity building blocks.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Legal</h4>
            <p className="text-slate-500 text-xs leading-relaxed font-medium">
              © 2024 React Mastery. Engineered for the Next Architect.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
