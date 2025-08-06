import { useState } from 'react'
import './App.css'
import ModeSwitcher from './components/ModeSwitcher'
import RAPForm from './components/RAPForm'
import CRISPForm from './components/CRISPForm'
import PromptPreview from './components/PromptPreview'
import { buildRAPPrompt, buildCRISPPrompt } from './components/PromptBuilder'

function App() {
  const [mode, setMode] = useState('RAP') // 'RAP' o 'CRISP'
  
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
    if (mode === 'RAP') {
      return buildRAPPrompt(rapFields)
    } else {
      return buildCRISPPrompt(crispFields)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🧠 EasyPrompt</h1>
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
        
        <PromptPreview prompt={generatePrompt()} />
      </main>
    </div>
  )
}

export default App
