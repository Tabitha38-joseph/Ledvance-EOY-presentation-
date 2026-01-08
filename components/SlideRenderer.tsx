
import React from 'react';
import { SlideData } from '../constants';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Target, 
  Book, 
  Layout, 
  Database, 
  Cog, 
  Calendar, 
  TrendingUp, 
  Sparkles, 
  Rocket, 
  Quote, 
  Route, 
  Users, 
  BarChart3, 
  Globe, 
  Filter, 
  TrendingUp as TrendIcon, 
  MousePointer2, 
  TableProperties, 
  ChevronDown,
  ExternalLink,
  ShieldAlert,
  Fingerprint,
  Layers
} from 'lucide-react';

interface Props {
  slide: SlideData;
  index: number;
}

const SlideRenderer: React.FC<Props> = ({ slide }) => {
  const { layout, content, header } = slide;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'route': return <Route size={32} />;
      case 'users': return <Users size={32} />;
      case 'rocket': return <Rocket size={32} />;
      case 'globe': return <Globe size={32} />;
      case 'database': return <Database size={32} />;
      case 'filter': return <Filter size={32} />;
      case 'zap': return <Zap size={32} />;
      default: return <Target size={32} />;
    }
  };

  const renderContent = () => {
    switch (layout) {
      case 'performance':
        return (
          <div className="h-full w-full bg-white flex flex-col p-10 md:p-14 overflow-hidden relative">
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-ledvance"></div>
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">Marketing Performance</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-darkgrey tracking-tighter">{header}</h2>
              </div>

              <div className="flex-1 flex gap-10 min-h-0">
                <div className="flex-1 overflow-hidden flex flex-col">
                  <div className="bg-white border border-gray-100 rounded-[2rem] shadow-xl flex-1 flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <TableProperties className="text-ledvance" size={20} />
                        <h3 className="text-sm font-black uppercase tracking-widest text-darkgrey">2025 Performance Matrix (Jan - Nov)</h3>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-ledvance"></div>
                        Strategic Milestones Identified
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto px-10 py-6">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-gray-100">
                            <th className="py-4 text-xs font-black uppercase tracking-widest text-gray-400">Month</th>
                            <th className="py-4 text-xs font-black uppercase tracking-widest text-gray-400">Successful Sends</th>
                            <th className="py-4 text-xs font-black uppercase tracking-widest text-gray-400">Unique Open Rate</th>
                            <th className="py-4 text-xs font-black uppercase tracking-widest text-gray-400">CTOR</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          {content.table.map((row: any, i: number) => (
                            <tr key={i} className={`group hover:bg-gray-50 transition-colors ${row.highlight ? 'bg-ledvance/5' : ''}`}>
                              <td className="py-4">
                                <span className={`font-bold text-lg ${row.highlight ? 'text-ledvance' : 'text-darkgrey'}`}>{row.month}</span>
                                {row.highlight && (
                                  <span className="ml-3 text-[10px] font-black text-white bg-ledvance px-2 py-1 rounded uppercase tracking-tighter">
                                    {row.highlight}
                                  </span>
                                )}
                              </td>
                              <td className="py-4 text-lg font-medium text-gray-600 font-mono">{row.sends}</td>
                              <td className="py-4 text-lg font-bold text-darkgrey">{row.open}</td>
                              <td className="py-4 text-lg font-bold text-ledvance">{row.ctor}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-between p-6 bg-darkgrey rounded-2xl text-white">
                <div className="flex items-center gap-4">
                  <Sparkles className="text-ledvance" size={24} />
                  <p className="text-lg font-bold">Proven Enterprise Scale & Data Integrity Turning Point</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-ledvance"></div>
                  <span className="text-xs font-black uppercase tracking-widest text-ledvance">2026 Launchpad Ready</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'title':
        return (
          <div className="h-full w-full bg-white flex flex-col justify-center items-center p-20 relative overflow-hidden text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 mb-16 animate-in fade-in zoom-in duration-1000">
              <div className="flex items-center gap-6 bg-ledvance px-10 py-6 rounded-sm shadow-xl hover:scale-105 transition-transform duration-500">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-white/20"></div>
                  <div className="absolute inset-2 rounded-full bg-white/40"></div>
                  <div className="absolute inset-4 rounded-full bg-white/60"></div>
                  <div className="absolute inset-6 rounded-full bg-white shadow-sm"></div>
                </div>
                <span className="text-white font-black text-6xl tracking-tighter uppercase">Ledvance</span>
              </div>
              <div className="hidden md:block text-gray-200 text-5xl font-extralight select-none">×</div>
              <div className="flex items-center group">
                 <span className="text-[#001d3d] font-black text-6xl lg:text-7xl tracking-tighter">SalesLab</span>
                 <span className="text-[#00aeef] font-black text-7xl lg:text-8xl -ml-0.5 transform group-hover:scale-110 transition-transform duration-500">X</span>
              </div>
            </div>
            <div className="z-10 max-w-5xl">
              <h1 className="text-6xl md:text-7xl font-black text-[#102a43] mb-8 tracking-tighter leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
                LEDVANCE 2025 <br />
                <span className="text-ledvance">Annual Business Review</span>
              </h1>
              <div className="w-24 h-1.5 bg-[#00aeef] mx-auto mb-10 animate-in fade-in duration-1000"></div>
              <p className="text-2xl text-gray-400 font-medium tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
                {content.sub}
              </p>
            </div>
            <div className="absolute bottom-12 text-center w-full left-0">
              <p className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-300">Strategic Alignment | SalesLabX Partnership</p>
            </div>
          </div>
        );

      case 'executive':
        return (
          <div className="h-full w-full bg-white flex flex-col relative overflow-hidden">
            <div className="p-10 md:p-14 pb-4 md:pb-6 z-20 flex justify-between items-end">
              <div>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-1 bg-ledvance"></div>
                  <span className="text-xs font-black text-ledvance uppercase tracking-[0.5em]">Executive Summary</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-darkgrey tracking-tighter uppercase leading-none">{header}</h2>
              </div>
            </div>
            <div className="flex-1 flex flex-col z-10 px-10 md:px-14">
              <div className="py-8 md:py-10 animate-in fade-in slide-in-from-top-8 duration-1000">
                <div className="max-w-5xl">
                  <h3 className="text-xs font-black text-ledvance uppercase tracking-[0.3em] mb-4">Strategic Realignment</h3>
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-darkgrey leading-snug tracking-tight border-l-4 border-ledvance pl-8">{content.body}</p>
                </div>
              </div>
              <div className="flex-1 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
                  {content.achievements.map((item: any, i: number) => (
                    <div key={i} className="group bg-white border border-gray-100 hover:border-ledvance p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col shadow-sm">
                      <div className="mb-6 flex justify-between items-start">
                        <div className="w-14 h-14 bg-lightgrey rounded-2xl flex items-center justify-center font-black text-2xl text-darkgrey group-hover:bg-ledvance group-hover:text-white transition-all shadow-sm">{i + 1}</div>
                        <CheckCircle className="text-ledvance opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                      </div>
                      <div className="flex-1">
                        <h6 className="text-xs font-black text-ledvance uppercase tracking-widest mb-3">{item.label}</h6>
                        <p className="text-xl font-bold text-darkgrey leading-snug tracking-tight">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'velocity':
        return (
          <div className="h-full w-full bg-white flex flex-col p-10 md:p-14 overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-black text-darkgrey mb-12 uppercase tracking-tighter">{header}</h2>
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-0">
              <div className="border-2 border-ledvance rounded-[2rem] p-10 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 bg-white relative">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="bg-ledvance text-white p-4 rounded-2xl shadow-lg shadow-ledvance/20"><Layout size={28} /></div>
                  <div>
                    <h3 className="text-xs uppercase font-black tracking-widest text-ledvance mb-1">Infrastructure</h3>
                    <h4 className="text-3xl font-black text-darkgrey tracking-tighter">Increased Frequency</h4>
                  </div>
                </div>
                <ul className="space-y-6 mb-8">
                  {content.volume.points.map((p: string, i: number) => (
                    <li key={i} className="flex items-start space-x-4 text-xl text-gray-700 font-medium">
                      <div className="mt-1.5 p-1 bg-ledvance/10 rounded-full">
                        <ArrowRight className="text-ledvance" size={18} />
                      </div>
                      <span className="leading-tight">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto group/banner relative h-64 overflow-hidden bg-black rounded-[2rem] border border-ledvance/40 shadow-2xl flex items-center p-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0a00] to-ledvance/20 opacity-90 transition-opacity duration-500 group-hover/banner:opacity-100"></div>
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,#FF660022_0%,transparent_60%)]"></div>
                  <div className="relative z-10 flex flex-1 items-center justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 animate-pulse">
                        <div className="h-[2px] w-8 bg-ledvance"></div>
                        <span className="text-[10px] text-ledvance uppercase font-black tracking-[0.4em]">MISSION CRITICAL</span>
                      </div>
                      <div className="flex flex-col mb-4">
                        <span className="text-4xl font-black text-white uppercase tracking-tighter leading-none">Power</span>
                        <div className="flex items-center gap-3">
                           <span className="text-6xl font-black text-white uppercase tracking-tighter leading-none">Through</span>
                           <span className="text-6xl font-black text-ledvance uppercase tracking-tighter leading-none italic">Launch</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-ledvance/40 blur-[40px] rounded-full scale-110 animate-pulse"></div>
                      <div className="relative bg-white/5 border border-white/10 p-6 rounded-full backdrop-blur-sm group-hover/banner:scale-110 transition-transform duration-700 ease-out">
                         <Rocket className="text-white transform -rotate-45 group-hover/banner:translate-x-1 group-hover/banner:-translate-y-1 transition-all duration-500" size={110} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1.5 bg-ledvance w-0 group-hover/banner:w-full transition-all duration-700 ease-in-out"></div>
                </div>
              </div>
              <div className="border-2 border-ledvance rounded-[2rem] p-10 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                <div className="flex items-center space-x-6 mb-10">
                  <div className="bg-ledvance text-white p-4 rounded-2xl shadow-lg shadow-ledvance/20"><Zap size={28} /></div>
                  <div>
                    <h3 className="text-xs uppercase font-black tracking-widest text-ledvance mb-1">Variety & Impact</h3>
                    <h4 className="text-3xl font-black text-darkgrey tracking-tighter uppercase">{content.variety.title}</h4>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-0">
                  {content.variety.items.map((item: any, i: number) => (
                    <div key={i} className="group/item flex flex-col p-8 rounded-[1.5rem] bg-lightgrey border border-transparent hover:border-ledvance hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                      <div className="mb-4">
                        <span className="text-[10px] font-black text-ledvance uppercase tracking-widest block mb-1">Spotlight {i + 1}</span>
                        <h5 className="text-2xl font-black text-darkgrey leading-tight group-hover/item:text-ledvance transition-colors">{item.name}</h5>
                      </div>
                      <p className="text-lg text-gray-500 leading-tight font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'strategy':
        return (
          <div className="h-full w-full bg-white flex flex-col p-10 md:p-14 overflow-hidden relative">
            <div className="relative z-10 mb-8 flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-12 h-1 bg-ledvance"></div>
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-ledvance">Next Phase Vision</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-black text-darkgrey tracking-tighter uppercase leading-none">{header}</h2>
              </div>
              <Sparkles className="text-ledvance/20 animate-pulse hidden lg:block" size={50} />
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 min-h-0">
              {content.pillars.map((pillar: any, i: number) => {
                const colors = [
                  'from-ledvance to-orange-500',
                  'from-blue-600 to-cyan-500',
                  'from-purple-700 to-pink-600'
                ];
                const shadowColors = [
                  'shadow-ledvance/20',
                  'shadow-blue-500/20',
                  'shadow-purple-500/20'
                ];
                
                return (
                  <div 
                    key={i} 
                    className={`group relative flex flex-col bg-white border-2 border-gray-100 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:border-transparent hover:scale-[1.02] shadow-xl ${shadowColors[i]}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className={`p-4 rounded-xl bg-gray-50 text-darkgrey group-hover:bg-white/10 group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-6`}>
                          {getIcon(pillar.icon)}
                        </div>
                        <span className="text-4xl font-black text-gray-100 group-hover:text-white/20 transition-colors leading-none tracking-tighter select-none">0{i+1}</span>
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-start">
                        <h3 className="text-xl lg:text-2xl font-black leading-[1.2] tracking-tighter uppercase break-words group-hover:text-white transition-colors mb-6">
                          {pillar.title}
                        </h3>
                        <p className="text-sm lg:text-base font-medium leading-relaxed text-gray-500 group-hover:text-white/90 transition-colors">
                          {pillar.description}
                        </p>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-white/20">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="text-ledvance group-hover:text-white" size={16} />
                          <span className="text-[10px] font-black uppercase tracking-widest text-darkgrey group-hover:text-white">Ready for Launch</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gray-50 rounded-full group-hover:bg-white/5 transition-colors pointer-events-none"></div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="h-full w-full bg-white flex flex-col overflow-hidden">
            <div className="p-10 md:p-14 pb-0">
               <div className="flex items-center space-x-4 mb-2">
                  <div className="w-12 h-1 bg-ledvance"></div>
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">Conversion Architecture</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-darkgrey tracking-tighter leading-none mb-4">{header}</h2>
            </div>
            
            <div className="flex-1 flex flex-col lg:flex-row min-h-0">
              {/* Left Column: The Problem */}
              <div className="lg:w-1/3 bg-gray-50 p-10 md:p-14 flex flex-col justify-center border-r border-gray-100">
                <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-l-8 border-red-500 relative overflow-hidden group">
                  <div className="absolute -top-6 -right-6 text-red-100 opacity-50 group-hover:scale-110 transition-transform">
                    <ShieldAlert size={120} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-red-500 font-black text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                       <ShieldAlert size={16} /> The Critical Challenge
                    </h3>
                    <p className="text-2xl md:text-3xl font-black text-darkgrey leading-tight mb-4 italic">
                      "{content.problem}"
                    </p>
                    <div className="h-1 w-12 bg-red-100 mb-6"></div>
                    <p className="text-lg text-gray-500 font-medium leading-relaxed">
                      Missing audience segmentation leads to diluted messaging and lower B2B conversion potential.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: The Strategic Solutions */}
              <div className="lg:w-2/3 p-10 md:p-14 flex flex-col justify-center space-y-8 bg-white overflow-y-auto">
                 {content.solutions.map((sol: any, i: number) => (
                   <div key={i} className="group flex items-stretch gap-8 bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-2xl hover:border-ledvance transition-all duration-500 hover:-translate-y-1">
                     <div className="flex flex-col items-center justify-center">
                        <div className="w-20 h-20 rounded-3xl bg-ledvance/5 text-ledvance flex items-center justify-center flex-shrink-0 group-hover:bg-ledvance group-hover:text-white transition-all duration-500 shadow-inner">
                          {i === 0 ? <Fingerprint size={32} /> : <Layers size={32} />}
                        </div>
                        <div className="mt-4 text-[10px] font-black text-gray-300 uppercase tracking-widest">Phase 0{i+1}</div>
                     </div>
                     <div className="flex-1 flex flex-col justify-center">
                       <div className="flex items-center gap-3 mb-2">
                         <div className="h-1 w-6 bg-ledvance"></div>
                         <h4 className="text-2xl md:text-3xl font-black text-darkgrey group-hover:text-ledvance transition-colors leading-none tracking-tight">
                           {sol.title}
                         </h4>
                       </div>
                       <p className="text-lg text-gray-600 leading-relaxed font-medium">
                         {sol.text}
                       </p>
                       <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <CheckCircle className="text-green-500" size={16} />
                          <span className="text-xs font-black uppercase text-gray-400 tracking-widest">Data Integrity Secured</span>
                       </div>
                     </div>
                     <div className="flex items-center pr-4">
                        <ArrowRight className="text-gray-200 group-hover:text-ledvance transition-colors transform group-hover:translate-x-2" size={32} />
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        );

      case 'columns':
      case 'dark':
      case 'technical':
      case 'summary':
        if (layout === 'columns') {
          return (
            <div className="h-full w-full bg-white flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              <div className="relative z-10 p-10 md:p-14 pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-ledvance"></div>
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">Execution Phase</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-darkgrey tracking-tighter leading-none mb-10">{header}</h2>
              </div>
              <div className="flex-1 p-10 md:p-14 pt-0 grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch relative z-10">
                {content.map((item: any, i: number) => (
                  <div key={i} className="flex flex-col bg-white border border-gray-100 p-10 rounded-[2.5rem] shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:border-ledvance group">
                    <div className="w-20 h-20 bg-lightgrey text-ledvance rounded-3xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-ledvance group-hover:text-white group-hover:rotate-12 shadow-inner">
                      {getIcon(item.icon)}
                    </div>
                    <div className="mb-8">
                      <span className="text-xs font-black text-ledvance uppercase tracking-[0.3em] mb-4 block">Primary Goal</span>
                      <h3 className="text-3xl font-black text-darkgrey leading-tight group-hover:text-black transition-colors">{item.goal}</h3>
                    </div>
                    <div className="mt-auto">
                      <div className="h-px w-12 bg-gray-200 mb-8 group-hover:w-full group-hover:bg-ledvance transition-all duration-700"></div>
                      <p className="text-gray-500 leading-relaxed font-medium text-lg group-hover:text-gray-700 transition-colors">{item.execution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        if (layout === 'dark') {
          return (
            <div className="h-full w-full bg-darkgrey text-white flex flex-col p-10 md:p-14">
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-black mb-6">{header}</h2>
                <p className="text-xl text-gray-400 max-w-3xl">{content.intro}</p>
              </div>
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <span className="w-10 h-10 bg-ledvance rounded flex items-center justify-center"><Book size={20} /></span>
                    {content.lightpoint.title}
                  </h3>
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <p className="text-lg mb-6 opacity-80">{content.lightpoint.desc}</p>
                    <div className="grid grid-cols-1 gap-2">
                      {content.lightpoint.topics.map((t: string, i: number) => (
                        <div key={i} className="flex items-center space-x-3 group">
                          <div className="w-1.5 h-1.5 bg-ledvance rounded-full"></div>
                          <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                     <span className="w-10 h-10 bg-ledvance rounded flex items-center justify-center"><Target size={20} /></span>
                     Strategic Training Initiatives
                  </h3>
                  <div className="space-y-4">
                    {content.live.map((l: string, i: number) => (
                      <div key={i} className="p-6 rounded-2xl bg-white/5 border-l-4 border-ledvance hover:bg-white/10 transition-all">
                        <p className="text-lg leading-relaxed">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }
        if (layout === 'technical') {
          return (
            <div className="h-full w-full bg-white flex flex-col p-10 md:p-14">
              <h2 className="text-4xl md:text-5xl font-black text-darkgrey mb-8">{header}</h2>
              <div className="p-8 bg-ledvance text-white rounded-2xl mb-12 shadow-lg">
                <p className="text-2xl font-light italic text-center">Stabilizing the system in 2025 to enable the increased frequency of 2026.</p>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.map((item: string, i: number) => (
                  <div key={i} className="flex flex-col p-8 rounded-xl bg-lightgrey border-t-4 border-darkgrey hover:border-ledvance hover:bg-white transition-all">
                    <p className="text-xl text-gray-600 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        if (layout === 'summary') {
          return (
            <div className="h-full w-full flex flex-col md:flex-row overflow-hidden bg-white">
              <div className="md:w-1/2 p-12 lg:p-20 flex items-center bg-white">
                <div className="max-w-xl">
                  <h2 className="text-ledvance text-6xl font-black mb-12">Summary</h2>
                  <p className="text-3xl text-darkgrey font-bold leading-relaxed">{content.white}</p>
                </div>
              </div>
              <div className="md:w-1/2 p-12 lg:p-20 flex items-center bg-ledvance text-white relative">
                <div className="max-w-xl space-y-8">
                  <h3 className="text-5xl font-black tracking-tight border-b-4 border-white inline-block pb-4 mb-8">Ready for 2026</h3>
                  <div className="space-y-6">
                    {content.orange.map((point: string, i: number) => (
                      <div key={i} className="flex items-center space-x-6">
                        <CheckCircle size={32} />
                        <span className="text-2xl font-black">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null;

      default:
        return <div>Layout not found</div>;
    }
  };

  return (
    <div className="h-full w-full overflow-hidden transition-opacity duration-500">
      {renderContent()}
    </div>
  );
};

export default SlideRenderer;
