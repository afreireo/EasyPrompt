/**
 * PromptBuilder.js
 * Lógica para convertir campos de formulario en prompts estructurados con técnicas de prompt engineering
 */

/**
 * Construye un prompt usando el framework RAP (Role, Audience, Purpose)
 * @param {Object} fields - Objeto con campos role, audience, purpose
 * @returns {string} - Prompt formateado con técnicas de prompt engineering
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
    // Solo un campo: usar directamente con mejoras de prompt engineering
    prompt = `${nonEmptyFields[0].value}\n\nPor favor, proporciona una respuesta clara y detallada.`
  } else if (nonEmptyFields.length === 2) {
    // Dos campos: combinar con estructura mejorada
    const field1 = nonEmptyFields[0]
    const field2 = nonEmptyFields[1]
    
    if (field1.key === 'role' && field2.key === 'audience') {
      prompt = `${field1.value}\n\n${field2.value}\n\nBasándote en tu rol y la audiencia objetivo, proporciona una respuesta apropiada y útil.`
    } else if (field1.key === 'role' && field2.key === 'purpose') {
      prompt = `${field1.value}\n\n${field2.value}\n\nComo experto en tu campo, asegúrate de que tu respuesta sea específica y orientada al objetivo.`
    } else if (field1.key === 'audience' && field2.key === 'purpose') {
      prompt = `${field1.value}\n\n${field2.value}\n\nAdapta tu respuesta para que sea accesible y útil para la audiencia especificada.`
    } else {
      prompt = `${field1.value}\n\n${field2.value}\n\nProporciona una respuesta completa y bien estructurada.`
    }
  } else {
    // Tres campos: estructura RAP completa con técnicas avanzadas
    prompt = `${role}\n\n${audience}\n\n${purpose}\n\n---\n\nINSTRUCCIONES ADICIONALES:\n- Mantén un tono profesional pero accesible\n- Proporciona ejemplos cuando sea apropiado\n- Estructura tu respuesta de manera clara y lógica\n- Considera el nivel de experiencia de la audiencia\n- Asegúrate de que tu respuesta sea específica y orientada al propósito\n\nFORMATO DE RESPUESTA:\nOrganiza tu respuesta en secciones claras con encabezados si es necesario.`
  }
  
  return prompt
}

/**
 * Construye un prompt usando el framework CRISP (Context, Role, Instruction, Specifics, PostProcess)
 * @param {Object} fields - Objeto con campos context, role, instruction, specifics, postProcess
 * @returns {string} - Prompt formateado con técnicas avanzadas de prompt engineering
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
  
  // Si solo hay un campo, devolverlo con mejoras básicas
  if (nonEmptyFields.length === 1) {
    return `${nonEmptyFields[0].value}\n\nProporciona una respuesta detallada y bien estructurada.`
  }
  
  // Construir el prompt estructurado con técnicas avanzadas
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
  
  // Agregar técnicas de prompt engineering
  promptParts.push(`TÉCNICAS DE PROMPT ENGINEERING APLICADAS:\n- Chain of Thought: Piensa paso a paso\n- Few-shot Learning: Incluye ejemplos relevantes si es apropiado\n- Role-playing: Mantén tu rol consistentemente\n- Output Formatting: Sigue el formato especificado\n- Context Awareness: Considera el contexto proporcionado`)
  
  // Agregar optimizaciones para diferentes modelos
  promptParts.push(`OPTIMIZACIONES:\n- Usa lenguaje claro y específico\n- Evita ambigüedades\n- Proporciona contexto suficiente\n- Mantén coherencia en el tono y estilo\n- Asegúrate de que la respuesta sea completa`)
  
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

/**
 * Función para agregar técnicas específicas de prompt engineering
 * @param {string} basePrompt - Prompt base
 * @param {string} technique - Técnica a aplicar
 * @returns {string} - Prompt mejorado
 */
export const applyPromptTechnique = (basePrompt, technique) => {
  const techniques = {
    'chain-of-thought': '\n\nINSTRUCCIÓN DE RAZONAMIENTO:\nPiensa paso a paso y explica tu proceso de razonamiento antes de proporcionar la respuesta final. Esto ayudará a asegurar que tu respuesta sea lógica y bien fundamentada.',
    'few-shot': '\n\nEJEMPLOS:\nAntes de responder, considera ejemplos similares o casos de uso relacionados. Si es apropiado, incluye ejemplos concretos en tu respuesta para ilustrar los conceptos.',
    'role-play': '\n\nCONSISTENCIA DE ROL:\nMantén tu rol y expertise consistentemente a lo largo de toda la respuesta. No cambies de perspectiva ni contradigas tu identidad establecida.',
    'output-format': '\n\nESTRUCTURA DE RESPUESTA:\nOrganiza tu respuesta de manera clara y estructurada. Usa encabezados, listas numeradas o viñetas cuando sea apropiado para mejorar la legibilidad.',
    'context-aware': '\n\nCONSIDERACIÓN DE CONTEXTO:\nConsidera cuidadosamente el contexto proporcionado y adapta tu respuesta para que sea relevante y útil en esa situación específica.'
  }
  
  return basePrompt + (techniques[technique] || '')
} 