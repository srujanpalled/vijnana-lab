import React, { useState } from 'react';

export interface ProtocolStep {
  id: string;
  name: string;
  desc: string;
  action: string;
}

export type LabPhase = 'PREP' | 'OBSERVATION' | 'ANALYSIS';

interface LabProtocolEngineProps {
  labId: string;
  labTitle: string;
  labSubtitle: string;
  prepTitle?: string;
  prepSubtitle?: string;
  hexColor: string;
  prepSteps: ProtocolStep[];
  renderSetupScene: (step: number) => React.ReactNode;
  renderObservationScene: () => React.ReactNode;
  renderObservationSidebar: (finishObservation: () => void) => React.ReactNode;
  renderAnalysisScene?: () => React.ReactNode;
  renderAnalysisSidebar?: () => React.ReactNode;
  observationHUD?: React.ReactNode;
}

export const LabProtocolEngine: React.FC<LabProtocolEngineProps> = ({
  labId,
  labTitle,
  labSubtitle,
  prepTitle = 'Bench Preparation',
  prepSubtitle = 'Slide Preparation Protocol',
  hexColor,
  prepSteps,
  renderSetupScene,
  renderObservationScene,
  renderObservationSidebar,
  renderAnalysisScene,
  renderAnalysisSidebar,
  observationHUD
}) => {
  const [phase, setPhase] = useState<LabPhase>('PREP');
  const [prepStep, setPrepStep] = useState(0);

  const finishObservation = () => {
    if (renderAnalysisSidebar) {
        setPhase('ANALYSIS');
    }
  };

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'row', overflow: 'hidden', background: '#020617', fontFamily: "'Inter', system-ui, sans-serif" }}>
      
      {/* ──── 3D VIEWPORT CONTAINER ──── */}
      <div style={{ flex: 1, position: 'relative', margin: 16, borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 48px rgba(0,0,0,0.6)' }}>
        
        {phase === 'PREP' && renderSetupScene(prepStep)}
        {phase === 'OBSERVATION' && renderObservationScene()}
        {phase === 'ANALYSIS' && (renderAnalysisScene ? renderAnalysisScene() : renderObservationScene())}

        {/* HUD: top-left badge */}
        <div style={{
          position: 'absolute', top: 16, left: 16, zIndex: 20,
          background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14,
          padding: '12px 18px', maxWidth: 280, pointerEvents: 'none'
        }}>
          <p style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 3, color: hexColor, margin: 0, marginBottom: 4 }}>{labId}</p>
          <p style={{ color: '#fff', fontWeight: 800, fontSize: 15, margin: 0 }}>{labTitle}</p>
          <p style={{ color: '#94a3b8', fontSize: 11, margin: 0, marginTop: 4, lineHeight: 1.4 }}>
            {phase === 'PREP' && 'Follow the pre-experiment procedures on the workbench.'}
            {phase === 'OBSERVATION' && labSubtitle}
            {phase === 'ANALYSIS' && 'Lab Data Analysis and Scientific Inference.'}
          </p>
        </div>

        {phase === 'OBSERVATION' && observationHUD}
      </div>

      {/* ──── SIDEBAR CONTROLS ──── */}
      <div style={{
        width: 320, background: '#0f172a', borderLeft: '1px solid rgba(255,255,255,0.04)',
        display: 'flex', flexDirection: 'column', overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 style={{ color: '#fff', fontSize: 18, fontWeight: 900, margin: 0 }}>
             {phase === 'PREP' && prepTitle}
             {phase === 'OBSERVATION' && 'Data Collection'}
             {phase === 'ANALYSIS' && 'Observation & Inference'}
          </h2>
          <p style={{ color: '#64748b', fontSize: 11, margin: 0, marginTop: 4 }}>
             {phase === 'PREP' && prepSubtitle}
             {phase === 'OBSERVATION' && 'Observe and record the results.'}
             {phase === 'ANALYSIS' && 'Record observations and conclude the experiment.'}
          </p>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
           {phase === 'PREP' && (
              // --- PREPARATION SIDEBAR ---
              <>
                 <div style={{ padding: 16, borderRadius: 14, background: hexColor + '15', border: `1px solid ${hexColor}35` }}>
                   <p style={{ fontWeight: 800, fontSize: 14, color: hexColor, margin: 0, marginBottom: 8 }}>{prepSteps[prepStep].name}</p>
                   <p style={{ color: '#cbd5e1', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{prepSteps[prepStep].desc}</p>
                 </div>
                 
                 <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10 }}>
                   {prepSteps.map((s, i) => (
                     <div key={s.id} style={{
                        padding: '12px 16px', borderRadius: 12, fontSize: 12, fontWeight: 700,
                        background: prepStep === i ? hexColor + '28' : '#020617',
                        border: prepStep === i ? `1px solid ${hexColor}` : '1px solid rgba(255,255,255,0.08)',
                        color: prepStep > i ? '#10b981' : (prepStep === i ? '#fff' : '#64748b'),
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                     }}>
                       <span>{s.name}</span>
                       {prepStep > i && <span>✅</span>}
                     </div>
                   ))}
                 </div>

                 <div style={{ marginTop: 'auto', paddingTop: 16 }}>
                    <button onClick={() => {
                        if (prepStep < prepSteps.length - 1) {
                            setPrepStep(p => p + 1);
                        } else {
                            setPhase('OBSERVATION');
                        }
                    }}
                    style={{
                      width: '100%', padding: '14px 0', borderRadius: 12, border: 'none',
                      background: hexColor, color: '#fff', fontSize: 14, fontWeight: 800, cursor: 'pointer',
                      boxShadow: `0 4px 14px ${hexColor}40`
                    }}>
                       {prepStep < prepSteps.length - 1 ? prepSteps[prepStep].action : 'Start Observation Phase'}
                    </button>
                 </div>
              </>
           )}

           {phase === 'OBSERVATION' && renderObservationSidebar(finishObservation)}

           {phase === 'ANALYSIS' && renderAnalysisSidebar && renderAnalysisSidebar()}

        </div>
      </div>
    </div>
  );
};
