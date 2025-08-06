import React from 'react'

const CRISPForm = ({ fields, onFieldChange }) => {
  const handleChange = (field, value) => {
    onFieldChange(field, value)
  }

  return (
    <div className="crisp-form">
      <h2>🧠 Modo Avanzado (CRISP Framework)</h2>
      <p className="form-description">
        Construye prompts detallados y precisos con 5 elementos estructurados
      </p>
      
      <div className="form-fields">
        <div className="form-field">
          <label htmlFor="context">
            <span className="field-icon">🌍</span>
            <strong>Context (Contexto)</strong>
          </label>
          <p className="field-description">Contexto o situación del usuario</p>
          <textarea
            id="context"
            value={fields.context}
            onChange={(e) => handleChange('context', e.target.value)}
            placeholder="Ej: Soy un desarrollador que está creando una aplicación web para una startup..."
            rows={3}
          />
        </div>

        <div className="form-field">
          <label htmlFor="role">
            <span className="field-icon">👤</span>
            <strong>Role (Rol)</strong>
          </label>
          <p className="field-description">Rol que debe asumir el modelo</p>
          <textarea
            id="role"
            value={fields.role}
            onChange={(e) => handleChange('role', e.target.value)}
            placeholder="Ej: Actúa como un arquitecto de software senior con experiencia en React..."
            rows={3}
          />
        </div>

        <div className="form-field">
          <label htmlFor="instruction">
            <span className="field-icon">📋</span>
            <strong>Instruction (Instrucción)</strong>
          </label>
          <p className="field-description">Instrucción principal o tarea a realizar</p>
          <textarea
            id="instruction"
            value={fields.instruction}
            onChange={(e) => handleChange('instruction', e.target.value)}
            placeholder="Ej: Diseña la arquitectura de componentes para una aplicación de gestión de tareas..."
            rows={3}
          />
        </div>

        <div className="form-field">
          <label htmlFor="specifics">
            <span className="field-icon">⚙️</span>
            <strong>Specifics (Especificaciones)</strong>
          </label>
          <p className="field-description">Detalles como tono, estilo, idioma, restricciones, etc.</p>
          <textarea
            id="specifics"
            value={fields.specifics}
            onChange={(e) => handleChange('specifics', e.target.value)}
            placeholder="Ej: Usa un tono profesional pero accesible, incluye ejemplos de código, considera escalabilidad..."
            rows={3}
          />
        </div>

        <div className="form-field">
          <label htmlFor="postProcess">
            <span className="field-icon">📤</span>
            <strong>PostProcess (Post-Procesamiento)</strong>
          </label>
          <p className="field-description">Formato esperado de la respuesta</p>
          <textarea
            id="postProcess"
            value={fields.postProcess}
            onChange={(e) => handleChange('postProcess', e.target.value)}
            placeholder="Ej: Proporciona la respuesta en formato JSON con las claves: components, structure, recommendations..."
            rows={3}
          />
        </div>
      </div>
    </div>
  )
}

export default CRISPForm 