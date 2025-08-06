import React from 'react'

const ModeSwitcher = ({ currentMode, onModeChange }) => {
  return (
    <div className="mode-switcher">
      <h2>Selecciona el modo de construcción</h2>
      <div className="mode-buttons">
        <button
          className={`mode-button ${currentMode === 'RAP' ? 'active' : ''}`}
          onClick={() => onModeChange('RAP')}
        >
          <span className="mode-icon">🧩</span>
          <div className="mode-info">
            <h3>Modo Simple (RAP)</h3>
            <p>Role • Audience • Purpose</p>
          </div>
        </button>
        
        <button
          className={`mode-button ${currentMode === 'CRISP' ? 'active' : ''}`}
          onClick={() => onModeChange('CRISP')}
        >
          <span className="mode-icon">🧠</span>
          <div className="mode-info">
            <h3>Modo Avanzado (CRISP)</h3>
            <p>Context • Role • Instruction • Specifics • PostProcess</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ModeSwitcher 