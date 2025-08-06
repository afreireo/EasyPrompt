# 🧠 EasyPrompt

**Constructor de Prompts para Modelos de Lenguaje**

EasyPrompt es una aplicación web moderna que te permite construir prompts perfectos para modelos de lenguaje como GPT usando dos frameworks estructurados: **RAP** (modo simple) y **CRISP** (modo avanzado).

## ✨ Características

### 🧩 Modo Simple (RAP Framework)
- **Role**: ¿Quién es el modelo?
- **Audience**: ¿Para quién es la respuesta?
- **Purpose**: ¿Qué debe lograr?

### 🧠 Modo Avanzado (CRISP Framework)
- **Context**: Contexto o situación del usuario
- **Role**: Rol que debe asumir el modelo
- **Instruction**: Instrucción principal
- **Specifics**: Detalles (tono, estilo, idioma, etc.)
- **PostProcess**: Formato esperado de la respuesta

## 🚀 Funcionalidades

- ✅ **Cambio dinámico entre modos** RAP y CRISP
- ✅ **Actualización en tiempo real** del prompt generado
- ✅ **Vista previa del prompt** con estadísticas
- ✅ **Botón de copiar** al portapapeles
- ✅ **Diseño responsive** y accesible
- ✅ **Interfaz moderna** y fácil de usar
- ✅ **Conservación del estado** por modo

## 🛠️ Tecnologías

- **React 18** - Biblioteca de interfaz de usuario
- **JavaScript** - Lógica de la aplicación
- **Vite** - Herramienta de construcción y desarrollo
- **CSS3** - Estilos modernos y responsive

## 📦 Instalación

1. **Clona el repositorio:**
```bash
git clone <url-del-repositorio>
cd EasyPrompt
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Ejecuta la aplicación en modo desarrollo:**
```bash
npm run dev
```

4. **Abre tu navegador en:**
```
http://localhost:5173
```

## 🏗️ Estructura del Proyecto

```
/src
├── components/
│   ├── ModeSwitcher.jsx      # Selector de modo RAP/CRISP
│   ├── RAPForm.jsx          # Formulario modo simple
│   ├── CRISPForm.jsx        # Formulario modo avanzado
│   ├── PromptPreview.jsx    # Vista previa del prompt
│   └── PromptBuilder.js     # Lógica de construcción
├── App.jsx                  # Componente principal
└── main.jsx                 # Punto de entrada
```

## 🎯 Uso

1. **Selecciona el modo** que prefieras (RAP o CRISP)
2. **Completa los campos** del formulario correspondiente
3. **Observa la vista previa** que se actualiza en tiempo real
4. **Copia el prompt** usando el botón "Copiar"
5. **Usa el prompt** en tu modelo de lenguaje favorito

## 📱 Diseño Responsive

La aplicación está optimizada para:
- 📱 **Móviles** (320px+)
- 📱 **Tablets** (768px+)
- 💻 **Escritorio** (1200px+)

## 🔮 Futuras Mejoras

- [ ] **Integración con APIs** de modelos de lenguaje
- [ ] **Guardado y carga** de prompts anteriores
- [ ] **Exportación** en formatos JSON/CSV
- [ ] **Templates** predefinidos
- [ ] **Historial** de prompts generados
- [ ] **Compartir prompts** por URL

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **Frameworks RAP y CRISP** por proporcionar metodologías estructuradas para la construcción de prompts
- **Comunidad React** por las herramientas y documentación
- **Vite** por la excelente experiencia de desarrollo

---

**¡Construye prompts perfectos con EasyPrompt! 🚀**
