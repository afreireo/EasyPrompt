/**
 * PromptBuilder.js
 * Lógica para convertir campos de formulario en prompts estructurados
 */

/**
 * Construye un prompt usando el framework RAP (Role, Audience, Purpose)
 * @param {Object} fields - Objeto con campos role, audience, purpose
 * @returns {string} - Prompt formateado
 */
export const buildRAPPrompt = (fields) => {
  const { role, audience, purpose } = fields
  
  // Filtrar campos vacíos
  const nonEmptyFields = Object.entries({ role, audience, purpose })
    .filter(([_, value]) => value.trim() !== '')
    .map(([key, value]) => ({ key, value: value.trim() }))
  
  if (nonEmptyFields.length === 0) {
    return ''
  }
  
  let prompt = ''
  
  // Construir el prompt basado en los campos disponibles
  if (nonEmptyFields.length === 1) {
    // Solo un campo: usar directamente
    prompt = nonEmptyFields[0].value
  } else if (nonEmptyFields.length === 2) {
    // Dos campos: combinar con "y"
    prompt = `${nonEmptyFields[0].value}\n\n${nonEmptyFields[1].value}`
  } else {
    // Tres campos: estructura RAP completa
    prompt = `${role}\n\n${audience}\n\n${purpose}`
  }
  
  return prompt
}

/**
 * Construye un prompt usando el framework CRISP (Context, Role, Instruction, Specifics, PostProcess)
 * @param {Object} fields - Objeto con campos context, role, instruction, specifics, postProcess
 * @returns {string} - Prompt formateado
 */
export const buildCRISPPrompt = (fields) => {
  const { context, role, instruction, specifics, postProcess } = fields
  
  // Filtrar campos vacíos
  const nonEmptyFields = Object.entries({ context, role, instruction, specifics, postProcess })
    .filter(([_, value]) => value.trim() !== '')
    .map(([key, value]) => ({ key, value: value.trim() }))
  
  if (nonEmptyFields.length === 0) {
    return ''
  }
  
  // Si solo hay un campo, devolverlo directamente
  if (nonEmptyFields.length === 1) {
    return nonEmptyFields[0].value
  }
  
  // Construir el prompt estructurado
  let promptParts = []
  
  // Context (opcional)
  if (context.trim()) {
    promptParts.push(`CONTEXTO:\n${context}`)
  }
  
  // Role (requerido para CRISP)
  if (role.trim()) {
    promptParts.push(`ROL:\n${role}`)
  }
  
  // Instruction (requerido para CRISP)
  if (instruction.trim()) {
    promptParts.push(`INSTRUCCIÓN:\n${instruction}`)
  }
  
  // Specifics (opcional)
  if (specifics.trim()) {
    promptParts.push(`ESPECIFICACIONES:\n${specifics}`)
  }
  
  // PostProcess (opcional)
  if (postProcess.trim()) {
    promptParts.push(`FORMATO DE RESPUESTA:\n${postProcess}`)
  }
  
  return promptParts.join('\n\n')
}

/**
 * Función auxiliar para limpiar y formatear texto
 * @param {string} text - Texto a limpiar
 * @returns {string} - Texto limpio
 */
export const cleanText = (text) => {
  return text.trim().replace(/\s+/g, ' ')
} 