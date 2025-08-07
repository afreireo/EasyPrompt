import React from 'react'

const PromptTechniques = ({ selectedTechniques, onTechniqueChange }) => {
  const techniques = [
    {
      id: 'chain-of-thought',
      name: 'Chain of Thought',
      description: 'Hace que el modelo piense paso a paso',
      icon: '🧠'
    },
    {
      id: 'few-shot',
      name: 'Few-Shot Learning',
      description: 'Incluye ejemplos para mejorar la respuesta',
      icon: '📚'
    },
    {
      id: 'role-play',
      name: 'Role Playing',
      description: 'Mantiene el rol consistentemente',
      icon: '🎭'
    },
    {
      id: 'output-format',
      name: 'Output Formatting',
      description: 'Estructura clara de la respuesta',
      icon: '📋'
    },
    {
      id: 'context-aware',
      name: 'Context Awareness',
      description: 'Considera el contexto proporcionado',
      icon: '🔍'
    }
  ]

  const handleTechniqueToggle = (techniqueId) => {
    const newSelected = selectedTechniques.includes(techniqueId)
      ? selectedTechniques.filter(id => id !== techniqueId)
      : [...selectedTechniques, techniqueId]
    onTechniqueChange(newSelected)
  }

  return (
    <div className="prompt-techniques">
      <h3>🔧 Técnicas de Prompt Engineering</h3>
      <p className="techniques-description">
        Selecciona las técnicas que quieres aplicar a tu prompt para mejorar su efectividad
      </p>
      
      <div className="techniques-grid">
        {techniques.map(technique => (
          <div
            key={technique.id}
            className={`technique-card ${selectedTechniques.includes(technique.id) ? 'selected' : ''}`}
            onClick={() => handleTechniqueToggle(technique.id)}
          >
            <div className="technique-icon">{technique.icon}</div>
            <div className="technique-info">
              <h4>{technique.name}</h4>
              <p>{technique.description}</p>
            </div>
            <div className="technique-checkbox">
              {selectedTechniques.includes(technique.id) && '✓'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PromptTechniques 