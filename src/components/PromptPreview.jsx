import React from 'react'

const PromptPreview = ({ prompt }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt)
      .then(() => {
        // Opcional: mostrar notificación de éxito
        console.log('Prompt copiado al portapapeles')
      })
      .catch(err => {
        console.error('Error al copiar: ', err)
      })
  }

  return (
    <div className="prompt-preview">
      <div className="preview-header">
        <h2>📝 Vista Previa del Prompt</h2>
        <button 
          className="copy-button"
          onClick={handleCopy}
          disabled={!prompt.trim()}
        >
          📋 Copiar
        </button>
      </div>
      
      <div className="preview-content">
        {prompt.trim() ? (
          <pre className="prompt-text">{prompt}</pre>
        ) : (
          <div className="empty-prompt">
            <div className="empty-prompt-content">
              <span className="empty-icon">💡</span>
              <p>Completa los campos del formulario para ver tu prompt aquí</p>
            </div>
          </div>
        )}
      </div>
      
      {prompt.trim() && (
        <div className="prompt-stats">
          <span>📊 Caracteres: {prompt.length}</span>
          <span>📝 Palabras: {prompt.split(/\s+/).filter(word => word.length > 0).length}</span>
        </div>
      )}
    </div>
  )
}

export default PromptPreview 