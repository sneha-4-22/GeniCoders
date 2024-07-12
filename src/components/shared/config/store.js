// state.js

import { proxy } from 'valtio'

// Image

import { MarkFormelle } from '../../public'
const state = proxy({
  color: '#fff',
  currentSize: 'XXL',
  currentRotate: false,
  isLogoTexture: true,
  isFullTexture: false,
  isBackLogoTexture: false,
  logoDecal: MarkFormelle,
  fullDecal: MarkFormelle,
  currentClothing: localStorage.getItem('currentClothing') || 'shirt',
})

export default state