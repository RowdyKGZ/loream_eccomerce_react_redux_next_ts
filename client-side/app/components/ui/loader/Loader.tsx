import { Spinner } from '@chakra-ui/react'
import { FC } from 'react'

import { COLORS } from '@/config/color.config'

import MY from './spinner.svg'

const Loader: FC = () => {
	return <img src={MY.src} alt='Loader' width={200} height={200} />
}

export default Loader
