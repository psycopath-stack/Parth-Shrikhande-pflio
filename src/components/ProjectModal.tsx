import React, { useState, useEffect } from 'react';
import { Project } from '../types/portfolio';
import { X, Play, Cpu, Layers, CheckCircle2, Copy, Check, Sliders, Activity, FileText, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'simulation' | 'architecture' | 'details'>('simulation');
  const [copied, setCopied] = useState(false);

  // AI Summarizer simulation state
  const [sampleTextType, setSampleTextType] = useState<'ai' | 'robotics' | 'cloud'>('ai');
  const [compressionRatio, setCompressionRatio] = useState<number>(50);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [summaryResult, setSummaryResult] = useState<string | null>(null);

  // WiFi Sensing simulation state
  const [detectedActivity, setDetectedActivity] = useState<'walking' | 'sitting' | 'falling' | 'empty'>('walking');
  const [waveOffset, setWaveOffset] = useState<number>(0);

  // Churn Analysis simulation state
  const [tenure, setTenure] = useState<number>(14);
  const [monthlySpend, setMonthlySpend] = useState<number>(85);
  const [contractType, setContractType] = useState<'month-to-month' | 'one-year' | 'two-year'>('month-to-month');
  const [supportCalls, setSupportCalls] = useState<number>(4);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // WiFi sensing wave animation
  useEffect(() => {
    if (project?.simulationType !== 'wifi-sensing') return;
    const interval = setInterval(() => {
      setWaveOffset((prev) => (prev + 0.15) % (Math.PI * 2));
    }, 50);
    return () => clearInterval(interval);
  }, [project?.simulationType]);

  if (!project) return null;

  // Sample texts for AI Summarizer
  const sampleArticles = {
    ai: `Artificial intelligence architectures have evolved rapidly from rigid rule-based heuristics into dynamic multi-modal reasoning models. In modern production systems, the primary engineering challenge has transitioned from raw model weights to scalable distributed inference, low latency streaming, context window caching, and robust evaluation metrics. By employing prompt compression and structured JSON schemas, developers achieve significant cost reductions while maintaining 99th percentile deterministic output consistency.`,
    robotics: `Autonomous robotics requires tight synchronization between physical sensor telemetry, embedded edge inference, and kinematic motor controllers. Utilizing LiDAR, stereoscopic vision, and WiFi Channel State Information enables robots to map indoor dynamic environments without reliance on intrusive optical cameras. Real-time filtering pipelines filter out multipath reflections and preserve high-fidelity trajectory planning.`,
    cloud: `Modern cloud-native engineering demands elastic compute architectures, zero-trust security postures, and automated CI/CD continuous delivery pipelines. Leveraging infrastructure as code through microservices decouples operational failure domains and guarantees resilient high-availability across global multi-region deployments.`,
  };

  const runSummarizer = () => {
    setIsSummarizing(true);
    setSummaryResult(null);
    setTimeout(() => {
      setIsSummarizing(false);
      if (sampleTextType === 'ai') {
        setSummaryResult(
          `• AI architectures have pivoted from heuristics to multi-modal reasoning.\n• Production challenges focus on distributed inference, streaming latency, and caching.\n• Prompt compression & JSON schemas cut inference overhead by ~35% with strict determinism.`
        );
      } else if (sampleTextType === 'robotics') {
        setSummaryResult(
          `• Autonomous robotics depends on sensor telemetry and embedded edge inference.\n• WiFi CSI + LiDAR provides camera-free spatial tracking and mapping.\n• Multipath filtering ensures low-latency trajectory planning without privacy intrusion.`
        );
      } else {
        setSummaryResult(
          `• Cloud-native architectures require elastic compute and zero-trust policies.\n• Microservices decouple failure domains for high availability across multi-regions.\n• Automated CI/CD pipelines ensure rapid, secure production delivery.`
        );
      }
    }, 450);
  };

  // Churn probability calculation
  const calculateChurnScore = () => {
    let score = 30;
    // Tenure impact (longer tenure = lower churn)
    score -= (tenure / 72) * 35;
    // Monthly spend impact (higher spend = slightly higher churn if dissatisfied)
    score += (monthlySpend / 120) * 20;
    // Contract type impact
    if (contractType === 'month-to-month') score += 25;
    if (contractType === 'one-year') score -= 15;
    if (contractType === 'two-year') score -= 30;
    // Support calls
    score += supportCalls * 6;

    return Math.max(5, Math.min(96, Math.round(score)));
  };

  const churnScore = calculateChurnScore();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#090d14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d121c]">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              {project.categoryLabel} · {project.date}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs (Clean segmented control) */}
        <div className="flex border-b border-white/10 px-6 bg-[#080b11] gap-2 pt-2">
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-2 border-b-2 ${
              activeTab === 'simulation'
                ? 'border-emerald-400 text-emerald-400 bg-white/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-2 border-b-2 ${
              activeTab === 'architecture'
                ? 'border-emerald-400 text-emerald-400 bg-white/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>System Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-2 border-b-2 ${
              activeTab === 'details'
                ? 'border-emerald-400 text-emerald-400 bg-white/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* TAB 1: INTERACTIVE SIMULATION */}
          {activeTab === 'simulation' && (
            <div className="space-y-6">
              {/* CASE 1: AI SUMMARIZER */}
              {project.simulationType === 'ai-summarizer' && (
                <div className="space-y-4">
                  <div className="text-xs font-medium text-slate-300">
                    Select a test topic to simulate real-time text summarization and token compression:
                  </div>

                  {/* Sample selectors */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'ai', label: 'AI Inference Scaling' },
                      { id: 'robotics', label: 'WiFi CSI Robotics' },
                      { id: 'cloud', label: 'Cloud Architecture' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setSampleTextType(tab.id as any);
                          setSummaryResult(null);
                        }}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                          sampleTextType === tab.id
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-white/5 text-slate-400 hover:bg-white/10'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Input preview */}
                  <div className="p-3 bg-black/40 border border-white/5 rounded-xl text-xs text-slate-300 font-mono leading-relaxed max-h-32 overflow-y-auto">
                    {sampleArticles[sampleTextType]}
                  </div>

                  {/* Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400">Target Distillation:</span>
                      <span className="text-xs font-mono text-emerald-400 font-semibold">
                        {compressionRatio}% Compression
                      </span>
                      <input
                        type="range"
                        min="25"
                        max="75"
                        value={compressionRatio}
                        onChange={(e) => setCompressionRatio(Number(e.target.value))}
                        className="w-28 accent-emerald-400 cursor-pointer"
                      />
                    </div>

                    <button
                      onClick={runSummarizer}
                      disabled={isSummarizing}
                      className="px-4 py-2 text-xs font-semibold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isSummarizing ? 'Processing Inference...' : 'Generate AI Summary'}</span>
                    </button>
                  </div>

                  {/* Output Simulation */}
                  {summaryResult && (
                    <div className="mt-4 p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-3 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                          Generated Distillation Output
                        </span>
                        <button
                          onClick={() => handleCopy(summaryResult)}
                          className="text-xs text-slate-400 hover:text-emerald-300 flex items-center gap-1"
                        >
                          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copied ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <pre className="text-xs text-slate-200 font-sans whitespace-pre-line leading-relaxed">
                        {summaryResult}
                      </pre>
                      <div className="pt-2 border-t border-emerald-500/20 flex flex-wrap gap-4 text-[11px] font-mono text-emerald-300/80">
                        <span>Tokens Saved: ~180 tokens</span>
                        <span>Latency: 412ms</span>
                        <span>Accuracy Score: 94.2%</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* CASE 2: WIFI SENSING SOFTWARE */}
              {project.simulationType === 'wifi-sensing' && (
                <div className="space-y-4">
                  <div className="text-xs font-medium text-slate-300">
                    Simulate real-time Channel State Information (CSI) Doppler shift and ambient activity recognition:
                  </div>

                  {/* Activity Selector */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'walking', label: 'Walking in Room', color: 'text-emerald-400' },
                      { id: 'sitting', label: 'Sitting / Typing', color: 'text-cyan-400' },
                      { id: 'falling', label: 'Sudden Fall Alert', color: 'text-rose-400' },
                      { id: 'empty', label: 'Empty Room Baseline', color: 'text-slate-400' },
                    ].map((act) => (
                      <button
                        key={act.id}
                        onClick={() => setDetectedActivity(act.id as any)}
                        className={`p-2.5 text-xs font-medium rounded-lg text-left transition-all border ${
                          detectedActivity === act.id
                            ? 'bg-white/10 border-emerald-400 text-white'
                            : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-[10px] font-mono uppercase text-slate-500">Mode</div>
                        <div className={`font-semibold ${act.color}`}>{act.label}</div>
                      </button>
                    ))}
                  </div>

                  {/* Real-time Simulated Waveform Visualizer */}
                  <div className="p-4 bg-black/60 border border-white/10 rounded-xl space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">CSI Subcarrier Amplitude (64 Channels)</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        <span>Live Doppler Telemetry</span>
                      </span>
                    </div>

                    {/* SVG Wave */}
                    <div className="h-32 w-full bg-[#05070a] rounded-lg p-2 flex items-center justify-center overflow-hidden border border-white/5">
                      <svg className="w-full h-full" viewBox="0 0 600 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#059669" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Dynamic wave paths */}
                        <path
                          d={Array.from({ length: 60 }).reduce<string>((acc, _, i) => {
                            const x = (i / 59) * 600;
                            const amp =
                              detectedActivity === 'walking'
                                ? 25 * Math.sin(i * 0.4 + waveOffset) + 15 * Math.cos(i * 0.8 - waveOffset)
                                : detectedActivity === 'falling'
                                ? 40 * Math.sin(i * 0.9 + waveOffset * 2)
                                : detectedActivity === 'sitting'
                                ? 8 * Math.sin(i * 0.2 + waveOffset)
                                : 2 * Math.sin(i * 0.1);
                            const y = 50 + amp;
                            return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                          }, '')}
                          fill="none"
                          stroke={detectedActivity === 'falling' ? '#f43f5e' : '#10b981'}
                          strokeWidth="2.5"
                        />
                        {/* Secondary echo line */}
                        <path
                          d={Array.from({ length: 60 }).reduce<string>((acc, _, i) => {
                            const x = (i / 59) * 600;
                            const amp =
                              detectedActivity === 'walking'
                                ? 15 * Math.cos(i * 0.3 - waveOffset * 0.7)
                                : detectedActivity === 'falling'
                                ? 25 * Math.cos(i * 0.6 + waveOffset)
                                : 4 * Math.cos(i * 0.2);
                            const y = 50 + amp;
                            return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                          }, '')}
                          fill="none"
                          stroke="#34d399"
                          strokeWidth="1.2"
                          strokeOpacity="0.45"
                          strokeDasharray="4 4"
                        />
                      </svg>
                    </div>

                    {/* Sensor Telemetry Stats */}
                    <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                      <div className="p-2 bg-white/5 rounded-lg">
                        <div className="text-[10px] text-slate-500 font-mono">STATUS</div>
                        <div className="text-xs font-semibold text-emerald-400 capitalize">
                          {detectedActivity === 'falling' ? 'Hazard Detected' : 'Normal Tracking'}
                        </div>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg">
                        <div className="text-[10px] text-slate-500 font-mono">CONFIDENCE</div>
                        <div className="text-xs font-semibold text-white font-mono">
                          {detectedActivity === 'falling'
                            ? '98.4%'
                            : detectedActivity === 'walking'
                            ? '96.8%'
                            : detectedActivity === 'sitting'
                            ? '92.1%'
                            : '99.5%'}
                        </div>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg">
                        <div className="text-[10px] text-slate-500 font-mono">REFRESH LATENCY</div>
                        <div className="text-xs font-semibold text-white font-mono">42ms</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CASE 3: PREDICTIVE CHURN ANALYSIS */}
              {project.simulationType === 'churn-analysis' && (
                <div className="space-y-4">
                  <div className="text-xs font-medium text-slate-300">
                    Adjust customer behavioral attributes to predict churn probability and trigger retention actions:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-black/40 border border-white/5 rounded-xl">
                    {/* Tenure */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Customer Tenure:</span>
                        <span className="font-mono text-emerald-400 font-semibold">{tenure} Months</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="72"
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-full accent-emerald-400 cursor-pointer"
                      />
                    </div>

                    {/* Monthly Spend */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Monthly Bill:</span>
                        <span className="font-mono text-emerald-400 font-semibold">${monthlySpend} / mo</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="120"
                        value={monthlySpend}
                        onChange={(e) => setMonthlySpend(Number(e.target.value))}
                        className="w-full accent-emerald-400 cursor-pointer"
                      />
                    </div>

                    {/* Contract Type */}
                    <div className="space-y-1.5">
                      <span className="text-xs text-slate-400 block">Contract Terms:</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { id: 'month-to-month', label: 'Monthly' },
                          { id: 'one-year', label: '1 Year' },
                          { id: 'two-year', label: '2 Years' },
                        ].map((c) => (
                          <button
                            key={c.id}
                            onClick={() => setContractType(c.id as any)}
                            className={`py-1.5 px-2 text-[11px] font-medium rounded-lg transition-colors ${
                              contractType === c.id
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                : 'bg-white/5 text-slate-400 hover:bg-white/10'
                            }`}
                          >
                            {c.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Support Calls */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Support Inquiries:</span>
                        <span className="font-mono text-emerald-400 font-semibold">{supportCalls} Tickets</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="9"
                        value={supportCalls}
                        onChange={(e) => setSupportCalls(Number(e.target.value))}
                        className="w-full accent-emerald-400 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Prediction Score Card */}
                  <div
                    className={`p-4 rounded-xl border transition-all ${
                      churnScore > 50
                        ? 'bg-rose-950/20 border-rose-500/30'
                        : 'bg-emerald-950/20 border-emerald-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                        Machine Learning Churn Probability
                      </span>
                      <span
                        className={`text-lg font-bold font-mono tabular-nums ${
                          churnScore > 50 ? 'text-rose-400' : 'text-emerald-400'
                        }`}
                      >
                        {churnScore}% {churnScore > 50 ? 'High Risk' : 'Healthy Retention'}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-black/50 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          churnScore > 50
                            ? 'bg-gradient-to-r from-amber-500 to-rose-500'
                            : 'bg-gradient-to-r from-teal-500 to-emerald-400'
                        }`}
                        style={{ width: `${churnScore}%` }}
                      />
                    </div>

                    <div className="mt-3 text-xs text-slate-300 flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Automated Action: </strong>
                        {churnScore > 65
                          ? 'Trigger proactive retention specialist outreach with 20% annual contract renewal incentive.'
                          : churnScore > 40
                          ? 'Enroll in quarterly loyalty benefits and follow-up on recent support ticket feedback.'
                          : 'Standard automated nurture campaign; customer satisfies prime retention criteria.'}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SYSTEM ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  End-to-End Architectural Pipeline
                </h4>

                <div className="space-y-3">
                  {project.architecture.pipeline.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                      <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0 border border-emerald-500/30">
                        {idx + 1}
                      </span>
                      <div className="pt-0.5">{step}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-white/5 rounded-xl space-y-1">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase">Frontend Layer</div>
                  <div className="text-xs text-slate-200">{project.architecture.frontend}</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl space-y-1">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase">Backend Services</div>
                  <div className="text-xs text-slate-200">{project.architecture.backend}</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl space-y-1">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase">Machine Learning Model</div>
                  <div className="text-xs text-slate-200">{project.architecture.model}</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TECHNICAL DEEP DIVE */}
          {activeTab === 'details' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Core Engineering Accomplishments
                </h4>
                <ul className="space-y-2">
                  {project.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-white/5 border border-white/10 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                {project.highlights.map((h) => (
                  <div key={h.label} className="p-3 bg-white/5 border border-white/5 rounded-xl">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">{h.label}</div>
                    <div className="text-sm font-bold font-mono text-emerald-400">{h.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-white/10 bg-[#0d121c] text-xs text-slate-400">
          <span>Press ESC or click outside to close</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
