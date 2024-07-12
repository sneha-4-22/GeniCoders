
import './styles.css';
import ProductDisplay from '../widgets/ProductDisplay'
import Customizer from '../pages/Customizer';
import Canvas from '../widgets/ProductDisplay'
function DesignStudio() {
  return (
    <main className='app transition-all ease-in'>
      <Canvas />
      <Customizer />
	  <ProductDisplay />
    </main>
  )
}

export default DesignStudio;