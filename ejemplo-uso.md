# 📝 Ejemplos de Uso - EasyPrompt

## 🧩 Ejemplo 1: Modo RAP (Simple)

### Escenario: Crear un prompt para un asistente de marketing

**Role (Rol):**
```
Eres un experto en marketing digital con más de 10 años de experiencia en estrategias de crecimiento para startups y empresas establecidas. Tienes especialización en marketing de contenidos, SEO, publicidad digital y análisis de datos.
```

**Audience (Audiencia):**
```
Para un emprendedor principiante que acaba de lanzar su primera aplicación móvil y necesita crear una estrategia de marketing desde cero, con un presupuesto limitado de $500 mensuales.
```

**Purpose (Propósito):**
```
Crear una estrategia de marketing digital paso a paso que incluya: 1) Identificación del público objetivo, 2) Canales de marketing más efectivos para el presupuesto, 3) Plan de contenidos para 3 meses, 4) Métricas clave a seguir, 5) Timeline de implementación.
```

### Prompt Generado:
```
Eres un experto en marketing digital con más de 10 años de experiencia en estrategias de crecimiento para startups y empresas establecidas. Tienes especialización en marketing de contenidos, SEO, publicidad digital y análisis de datos.

Para un emprendedor principiante que acaba de lanzar su primera aplicación móvil y necesita crear una estrategia de marketing desde cero, con un presupuesto limitado de $500 mensuales.

Crear una estrategia de marketing digital paso a paso que incluya: 1) Identificación del público objetivo, 2) Canales de marketing más efectivos para el presupuesto, 3) Plan de contenidos para 3 meses, 4) Métricas clave a seguir, 5) Timeline de implementación.
```

---

## 🧠 Ejemplo 2: Modo CRISP (Avanzado)

### Escenario: Análisis técnico de código

**Context (Contexto):**
```
Soy un desarrollador senior que está revisando el código de un equipo junior. Necesito analizar una función específica que maneja la autenticación de usuarios en una aplicación React.
```

**Role (Rol):**
```
Actúa como un arquitecto de software senior con 15 años de experiencia en desarrollo web, especializado en React, Node.js y seguridad de aplicaciones. Tienes experiencia en code review y mentoring de desarrolladores junior.
```

**Instruction (Instrucción):**
```
Analiza la siguiente función de autenticación y proporciona un feedback detallado sobre: 1) Seguridad y vulnerabilidades potenciales, 2) Mejores prácticas de React, 3) Optimización de rendimiento, 4) Legibilidad y mantenibilidad del código, 5) Sugerencias de mejora específicas.
```

**Specifics (Especificaciones):**
```
Usa un tono constructivo y educativo. Incluye ejemplos de código cuando sea apropiado. Prioriza la seguridad sobre la optimización. Considera las mejores prácticas actuales de React 18. Proporciona explicaciones claras para cada punto.
```

**PostProcess (Formato de Respuesta):**
```
Proporciona la respuesta en formato JSON con las siguientes secciones: security_issues, react_best_practices, performance_optimization, code_quality, specific_recommendations. Cada sección debe incluir un array de items con "issue", "explanation" y "solution".
```

### Prompt Generado:
```
CONTEXTO:
Soy un desarrollador senior que está revisando el código de un equipo junior. Necesito analizar una función específica que maneja la autenticación de usuarios en una aplicación React.

ROL:
Actúa como un arquitecto de software senior con 15 años de experiencia en desarrollo web, especializado en React, Node.js y seguridad de aplicaciones. Tienes experiencia en code review y mentoring de desarrolladores junior.

INSTRUCCIÓN:
Analiza la siguiente función de autenticación y proporciona un feedback detallado sobre: 1) Seguridad y vulnerabilidades potenciales, 2) Mejores prácticas de React, 3) Optimización de rendimiento, 4) Legibilidad y mantenibilidad del código, 5) Sugerencias de mejora específicas.

ESPECIFICACIONES:
Usa un tono constructivo y educativo. Incluye ejemplos de código cuando sea apropiado. Prioriza la seguridad sobre la optimización. Considera las mejores prácticas actuales de React 18. Proporciona explicaciones claras para cada punto.

FORMATO DE RESPUESTA:
Proporciona la respuesta en formato JSON con las siguientes secciones: security_issues, react_best_practices, performance_optimization, code_quality, specific_recommendations. Cada sección debe incluir un array de items con "issue", "explanation" y "solution".
```

---

## 💡 Consejos para Usar EasyPrompt

### Para el Modo RAP:
1. **Role**: Sé específico sobre la experiencia y expertise del modelo
2. **Audience**: Define claramente quién recibirá la respuesta
3. **Purpose**: Establece objetivos claros y medibles

### Para el Modo CRISP:
1. **Context**: Proporciona suficiente contexto sin ser redundante
2. **Role**: Define el expertise específico necesario
3. **Instruction**: Sé claro y estructurado en la tarea
4. **Specifics**: Incluye detalles importantes como tono, formato, restricciones
5. **PostProcess**: Especifica exactamente cómo quieres la respuesta

### Consejos Generales:
- ✅ **Sé específico** en cada campo
- ✅ **Usa ejemplos** cuando sea apropiado
- ✅ **Mantén un tono consistente** en todo el prompt
- ✅ **Revisa la vista previa** antes de copiar
- ✅ **Ajusta según sea necesario** basándote en los resultados

---

**¡Experimenta con diferentes combinaciones para encontrar el prompt perfecto para tu caso de uso! 🚀** 