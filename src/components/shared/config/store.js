// state.js

import { proxy } from 'valtio'

// Image

import { MarkFormelle } from '../../public'
const state = proxy({
  color: '#504C4C',
  currentSize: 'XXL',
  currentRotate: false,
  isLogoTexture: true,
  isFullTexture: false,
  isBackLogoTexture: false,
  logoDecal: MarkFormelle,
  fullDecal: MarkFormelle,
  currentClothing: localStorage.getItem('currentClothing') || 'shirt',
  textElements: [],
  currentTextElement: null,
})

export default state