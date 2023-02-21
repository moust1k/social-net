import React, { FC } from 'react'
import m from './preloader.module.css'

const Preloader: FC = () => {
	return (
		<div className={m.preloaderFlexCenter}>
			<img src='https://dev-to-uploads.s3.amazonaws.com/i/gqmymopg8bignlcfhvcx.gif' alt='EMPTY' />
		</div>
	)
}

export default Preloader
