import React, { useState } from 'react'

const PromptPreview = ({ prompt, selectedTechniques = [] }) => {
  const [showCopied, setShowCopied] = useState(false)
  
  // Debug: mostrar información del prompt
  console.log('PromptPreview received prompt:', prompt)
  console.log('Prompt type:', typeof prompt)
  console.log('Prompt length:', prompt ? prompt.length : 0)
  console.log('Prompt trimmed:', prompt ? prompt.trim() : '')
  console.log('Selected techniques:', selectedTechniques)

  const handleCopy = () => {
    if (prompt && prompt.trim()) {
      navigator.clipboard.writeText(prompt)
        .then(() => {
          // Mostrar notificación de éxito
          console.log('Prompt copiado al portapapeles')
          setShowCopied(true)
          setTimeout(() => setShowCopied(false), 2000)
        })
        .catch(err => {
          console.error('Error al copiar: ', err)
        })
    }
  }

  const hasContent = prompt && prompt.trim().length > 0

  const techniqueNames = {
    'chain-of-thought': 'Chain of Thought',
    'few-shot': 'Few-Shot Learning',
    'role-play': 'Role Playing',
    'output-format': 'Output Formatting',
    'context-aware': 'Context Awareness'
  }

  return (
    <div className="prompt-preview">
      <div className="preview-header">
        <h2>📝 Vista Previa del Prompt</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {showCopied && (
            <span style={{ 
              color: '#38a169', 
              fontSize: '0.9rem', 
              fontWeight: '500',
              animation: 'fadeIn 0.3s ease-in'
            }}>
              ✅ Copiado
            </span>
          )}
          <button 
            className="copy-button"
            onClick={handleCopy}
            disabled={!hasContent}
          >
            📋 Copiar
          </button>
        </div>
      </div>
      
      {selectedTechniques.length > 0 && (
        <div className="applied-techniques">
          <h4>🔧 Técnicas Aplicadas:</h4>
          <div className="techniques-tags">
            {selectedTechniques.map(technique => (
              <span key={technique} className="technique-tag">
                {techniqueNames[technique] || technique}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <div className="preview-content">
        {hasContent ? (
          <pre className="prompt-text">{prompt}</pre>
        ) : (
          <div className="empty-prompt">
            <div className="empty-prompt-content">
              <span className="empty-icon">💡</span>
              <p>Completa los campos del formulario para ver tu prompt aquí</p>
              <small style={{color: '#718096', marginTop: '10px'}}>
                Debug: {prompt ? `Prompt recibido (${prompt.length} chars)` : 'No prompt recibido'}
              </small>
            </div>
          </div>
        )}
      </div>
      
      {hasContent && (
        <div className="prompt-stats">
          <span>📊 Caracteres: {prompt.length}</span>
          <span>📝 Palabras: {prompt.split(/\s+/).filter(word => word.length > 0).length}</span>
          {selectedTechniques.length > 0 && (
            <span>🔧 Técnicas: {selectedTechniques.length}</span>
          )}
        </div>
      )}
    </div>
  )
}

export default PromptPreview 