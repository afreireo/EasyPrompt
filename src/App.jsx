import { useState, useEffect } from 'react'
import './App.css'
import ModeSwitcher from './components/ModeSwitcher'
import RAPForm from './components/RAPForm'
import CRISPForm from './components/CRISPForm'
import PromptPreview from './components/PromptPreview'
import PromptTechniques from './components/PromptTechniques'
import { buildRAPPrompt, buildCRISPPrompt, applyPromptTechnique } from './components/PromptBuilder'

function App() {
  const [mode, setMode] = useState('RAP') // 'RAP' o 'CRISP'
  const [currentPrompt, setCurrentPrompt] = useState('')
  const [selectedTechniques, setSelectedTechniques] = useState([])
  
  // Estado para el modo RAP
  const [rapFields, setRapFields] = useState({
    role: '',
    audience: '',
    purpose: ''
  })
  
  // Estado para el modo CRISP
  const [crispFields, setCrispFields] = useState({
    context: '',
    role: '',
    instruction: '',
    specifics: '',
    postProcess: ''
  })

  // Función para actualizar campos RAP
  const updateRAPFields = (field, value) => {
    setRapFields(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Función para actualizar campos CRISP
  const updateCRISPFields = (field, value) => {
    setCrispFields(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Generar el prompt basado en el modo actual
  const generatePrompt = () => {
    let prompt = ''
    
    if (mode === 'RAP') {
      prompt = buildRAPPrompt(rapFields)
      console.log('RAP Fields:', rapFields)
      console.log('Generated RAP Prompt:', prompt)
    } else {
      prompt = buildCRISPPrompt(crispFields)
      console.log('CRISP Fields:', crispFields)
      console.log('Generated CRISP Prompt:', prompt)
    }
    
    // Aplicar técnicas seleccionadas
    selectedTechniques.forEach(technique => {
      prompt = applyPromptTechnique(prompt, technique)
    })
    
    return prompt
  }

  // Actualizar el prompt cuando cambien los campos, el modo o las técnicas
  useEffect(() => {
    const newPrompt = generatePrompt()
    setCurrentPrompt(newPrompt)
  }, [mode, rapFields, crispFields, selectedTechniques])

  return (
    <div className="app">
      <header className="app-header">
        <h1>💡 EasyPrompt</h1>
        <p>Construye prompts perfectos para modelos de lenguaje</p>
      </header>
      
      <main className="app-main">
        <ModeSwitcher 
          currentMode={mode} 
          onModeChange={setMode} 
        />
        
        <div className="form-container">
          {mode === 'RAP' ? (
            <RAPForm 
              fields={rapFields} 
              onFieldChange={updateRAPFields} 
            />
          ) : (
            <CRISPForm 
              fields={crispFields} 
              onFieldChange={updateCRISPFields} 
            />
          )}
        </div>
        
        <PromptTechniques 
          selectedTechniques={selectedTechniques}
          onTechniqueChange={setSelectedTechniques}
        />
        
        <PromptPreview 
          prompt={currentPrompt} 
          selectedTechniques={selectedTechniques}
        />
      </main>
    </div>
  )
}

export default App
