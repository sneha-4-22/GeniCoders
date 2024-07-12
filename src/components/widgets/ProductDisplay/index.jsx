// Hooks
import { useEffect, useState, useCallback } from 'react'

// React-Three
import { Center, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ModelViewControl from '../../features/ModelViewControl'

import { useSnapshot } from 'valtio'
import state from '../../shared/config/store'
import Shirt from '../../entities/Shirt'
import Socks from '../../entities/Socks'
import Underpants from '../../entities/Underpants'
import Pants from '../../entities/Pants'
import Hoodie from '../../entities/Hoodie'
const ProductDisplay = () => {
	// Initialize state with currentClothing from global state or default to 'shirt'
	const snap = useSnapshot(state)  
	const [currentClothing, setCurrentClothing] = useState(snap.currentClothing)

	// Effect to synchronize currentClothing state with localStorage
	useEffect(() => {
		setCurrentClothing(snap.currentClothing)
  }, [snap.currentClothing])

	// Callback to render the correct clothing model based on currentClothing state
	const renderClothingModel = useCallback(() => {
		switch (currentClothing) {
			case 'shirt':
				return <Shirt />
			case 'socks':
				return <Socks />
			case 'underpants':
				return <Underpants />
			case 'pants':
				return <Pants />
			case 'hoodie':
				return <Hoodie />
			default:
				return <Shirt />
		}
	}, [currentClothing])

	return (
		<Canvas
			shadows
			camera={{ position: [0, 0, 0], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
			className='w-full max-w-full h-full transition-all ease-in'
		>
			<ambientLight intensity={0.5} />
			<Environment preset='city' />

			<ModelViewControl>
				<Center>{renderClothingModel()}</Center>
			</ModelViewControl>
		</Canvas>
	)
}

export default ProductDisplay
