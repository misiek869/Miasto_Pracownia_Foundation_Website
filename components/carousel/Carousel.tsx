import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { NextButton, PrevButton, usePrevNextButtons } from './CarouselButtons'
import Image from 'next/image'

type CarouselPropType = {
	slides: string[]
	options?: EmblaOptionsType
	borderColor: string
	hideBtns?: string
}

const Carousel = ({
	slides,
	options,
	borderColor,
	hideBtns,
}: CarouselPropType) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		AutoScroll({ playOnInit: true, speed: 1 }),
	])
	const [isPlaying, setIsPlaying] = useState<boolean>(false)

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi)

	const onButtonAutoplayClick = useCallback(
		(callback: () => void) => {
			const autoScroll = emblaApi?.plugins()?.autoScroll
			if (!autoScroll) return

			const resetOrStop =
				autoScroll.options.stopOnInteraction === false
					? autoScroll.reset
					: autoScroll.stop

			resetOrStop()
			callback()
		},
		[emblaApi]
	)

	const toggleAutoplay = useCallback(() => {
		const autoScroll = emblaApi?.plugins()?.autoScroll
		if (!autoScroll) return

		const playOrStop = autoScroll.isPlaying()
			? autoScroll.stop
			: autoScroll.play
		playOrStop()
	}, [emblaApi])

	useEffect(() => {
		const autoScroll = emblaApi?.plugins()?.autoScroll
		if (!autoScroll) return

		setIsPlaying(autoScroll.isPlaying())
		emblaApi
			.on('autoScroll:play', () => setIsPlaying(true))
			.on('autoScroll:stop', () => setIsPlaying(false))
			.on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
	}, [emblaApi])

	return (
		<div className='max-w-screen m-auto '>
			<div className='overflow-hidden rounded-full' ref={emblaRef}>
				<div className='flex -ml-[1rem]'>
					{slides.map((slide, index) => (
						<Image
							className={`border-r-8 border-l-8 ${borderColor}`}
							key={index}
							src={slide}
							alt={'photo'}
							width={600}
							height={600}
						/>
					))}
				</div>
			</div>

			<div
				className={`grid grid-cols-[auto_1fr] justify-between gap-6 mt-7 w-3/4 mx-auto ${hideBtns}`}>
				<div className='grid grid-cols-2 gap-2 items-center'>
					<PrevButton
						onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
						disabled={prevBtnDisabled}
					/>
					<NextButton
						onClick={() => onButtonAutoplayClick(onNextButtonClick)}
						disabled={nextBtnDisabled}
					/>
				</div>

				<button
					className={`bg-gray-900 w-[85px] py-2 rounded-full touch-manipulation cursor-pointer items-center justify-center justify-self-end font-semibold tracking-wider uppercase hover:bg-gray-800 duration-300 text-slate-50`}
					onClick={toggleAutoplay}
					type='button'>
					{isPlaying ? 'Stop' : 'Start'}
				</button>
			</div>
		</div>
	)
}

export default Carousel
