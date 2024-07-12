// Customizer.jsx

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSnapshot } from 'valtio'

// Features
import ColorSelector from '../../features/ColorSelector'
import ImageFileSelector from '../../features/ImageFileSelector'
import SizePicker from '../../features/SizePicker'
import Tab from '../../features/Tab'

// Shared -> Config; Libs
import state from '../../shared/config/store'
import { slideAnimation } from '../../shared/config/motion'
import { reader } from '../../shared/libs/helpers'
import {
  DecalTypes,
  EditorTabs,
  FilterTabs,
  ClothesChoice,
} from '../../shared/config/constants'

const Customizer = () => {
  const snap = useSnapshot(state)
  const [tabWidth, setTabWidth] = useState(388)
  const [file, setFile] = useState('')
  const [prompt, setPrompt] = useState('')
  const [generatingImg, setGeneratingImg] = useState(false)
  const [activeEditorTab, setActiveEditorTab] = useState('')
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    backLogo: false,
    stylishShirt: false,
  })

  // Handle editor tab click
  const handleClickEditorTab = tabName => {
    setActiveEditorTab(prevTab => prevTab === tabName ? '' : tabName)
  }

  // Handle mouse movement to resize the tab width
  const handleMouseMove = e => {
    const newWidth = e.clientX
    setTabWidth(Math.min(Math.max(newWidth, 280), 640))
  }

  // Remove event listeners and allow text selection again
  const handleMouseUp = () => {
    document.body.classList.remove('no-select')
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
  }

  // Add event listeners and prevent text selection
  const handleMouseDown = () => {
    document.body.classList.add('no-select')
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  // Generate content based on the active editor tab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case 'colorpicker':
        return <ColorSelector />
      case 'filepicker':
        return (
          <ImageFileSelector
            file={file}
            setFile={setFile}
            readFile={readFile}
            tabWidth={tabWidth}
          />
        )
      case 'sizepicker':
        return (
          <SizePicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
            tabWidth={tabWidth}
          />
        )
      default:
        return null
    }
  }

  // Handle form submission to generate an image
  const handleSubmit = async type => {
    if (!prompt) return alert('Please enter a prompt')

    try {
      setGeneratingImg(true)

      const response = await fetch('http://localhost:8080/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
        }),
      })

      const data = await response.json()

      handleDecals(type, `data:image/png;base64,${data.photo}`)
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false)
      setActiveEditorTab('')
    }
  }

  // Handle decal application
  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type]

    state[decalType.stateProperty] = result

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  // Handle active filter tab toggle
  const handleActiveFilterTab = tabName => {
    switch (tabName) {
      case 'logoShirt':
        state.isLogoTexture = !activeFilterTab[tabName]
        break
      case 'backLogo':
        state.isBackLogoTexture = !activeFilterTab[tabName]
        break
      case 'rotation':
        state.currentRotate = !snap.currentRotate
        break
      case 'stylishShirt':
        state.isFullTexture = !activeFilterTab[tabName]
        break
      default:
        state.isLogoTexture = true
        state.isBackLogoTexture = false
        state.isFullTexture = false
        break
    }

    setActiveFilterTab(prevState => ({
      ...prevState,
      [tabName]: !prevState[tabName],
    }))
  }

  // Handle file reading
  const readFile = type => {
    reader(file).then(result => {
      handleDecals(type, result)
      setActiveEditorTab('')
    })
  }

  // Handle clothing choice
  const handleClothingChoice = clothing => {
    state.currentClothing = clothing
    localStorage.setItem('currentClothing', clothing)
  }

  return (
    <>
      <motion.div
        key='custom'
        className='absolute top-0 left-0 z-10'
        style={{ width: `${tabWidth}px` }}
        {...slideAnimation('left')}
      >
        <div className='min-h-screen bg-pink-300 relative'>
          <div
            className='editortabs-container'
            style={{ width: `${tabWidth}px` }}
          >
            {EditorTabs.map(tab => (
              <Tab
                key={tab.name}
                tab={tab}
                handleClick={() => handleClickEditorTab(tab.name)}
              />
            ))}
            {generateTabContent()}
          </div>
          {/* Resizer element */}
          <div className='resizer' onMouseDown={handleMouseDown}></div>
        </div>
      </motion.div>

      <motion.div
        className='filtertabs-container'
        {...slideAnimation('up')}
      >
        {FilterTabs.map(tab => (
          <Tab
            key={tab.name}
            tab={tab}
            isFilterTab
            isActiveTab={activeFilterTab[tab.name]}
            handleClick={() => handleActiveFilterTab(tab.name)}
          />
        ))}
      </motion.div>

      <motion.div
        className='clothestabs-container'
        {...slideAnimation('up')}
      >
        {ClothesChoice.map(tab => (
          <Tab
            key={tab.name}
            tab={tab}
            isFilterTab
            isActiveTab={snap.currentClothing === tab.name}
            handleClick={() => handleClothingChoice(tab.name)}
          />
        ))}
      </motion.div>
    </>
  )
}

export default Customizer