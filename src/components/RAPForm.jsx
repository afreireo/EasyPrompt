import React from 'react'

const RAPForm = ({ fields, onFieldChange }) => {
  const handleChange = (field, value) => {
    onFieldChange(field, value)
  }

  return (
    <div className="rap-form">
      <h2>🧩 Modo Simple (RAP Framework)</h2>
      <p className="form-description">
        Construye prompts simples y efectivos con solo 3 elementos clave
      </p>
      
      <div className="form-fields">
        <div className="form-field">
          <label htmlFor="role">
            <span className="field-icon">👤</span>
            <strong>Role (Rol)</strong>
          </label>
          <p className="field-description">¿Quién es el modelo? Define su identidad y expertise</p>
          <textarea
            id="role"
            value={fields.role}
            onChange={(e) => handleChange('role', e.target.value)}
            placeholder="Ej: Eres un experto en marketing digital con 10 años de experiencia..."
            rows={3}
          />
        </div>

        <div className="form-field">
          <label htmlFor="audience">
            <span className="field-icon">🎯</span>
            <strong>Audience (Audiencia)</strong>
          </label>
          <p className="field-description">¿Para quién es la respuesta? Define el público objetivo</p>
          <textarea
            id="audience"
            value={fields.audience}
            onChange={(e) => handleChange('audience', e.target.value)}
            placeholder="Ej: Para un emprendedor principiante que quiere lanzar su primera campaña..."
            rows={3}
          />
        </div>

        <div className="form-field">
          <label htmlFor="purpose">
            <span className="field-icon">🎯</span>
            <strong>Purpose (Propósito)</strong>
          </label>
          <p className="field-description">¿Qué debe lograr? Define el objetivo específico</p>
          <textarea
            id="purpose"
            value={fields.purpose}
            onChange={(e) => handleChange('purpose', e.target.value)}
            placeholder="Ej: Crear una estrategia de marketing digital paso a paso..."
            rows={3}
          />
        </div>
      </div>
    </div>
  )
}

export default RAPForm 