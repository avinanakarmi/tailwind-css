import '@fortawesome/fontawesome-free/css/all.min.css';

import '../styles/carousel.css';
import { useState } from 'react';

const Info = ({ type, color, value }) => {
	let icon;
	let unit;
	let iconColor;

	switch (type) {
		case "calories":
			icon = "fas fa-solid fa-fire";
			unit = "kcal";
			break;

		case "prep_time":
			icon = "fas fa-regular fa-clock";
			unit = "mins";
			break;

		default:
			icon = "fas fa-solid fa-user";
			unit = "people";
			break;
	}

	switch (color) {
		case 'green':
			iconColor = '#a0bf80';
			break;

		case 'yellow':
			iconColor = '#d1ae80';
			break;

		default:
			iconColor = '#fa7f97';
			break;
	}

	return (
		<div className='flex flex-row items-baseline gap-2'>
			<i className={icon} style={{ color: iconColor }} />
			<p className={`text-${color}-default`}>
				<span className={`text-${color}-default font-bold`}>{value}</span> {unit}
			</p>
		</div>
	)
};

const CarouselItem = ({ item, color, isHighlighted }) => {
	return (
		<div
			key={item}
			className={`
				px-8 py-14 rounded-lg min-w-96 mx-8 
				bg-${color}-light
				transform transition-transform duration-300 
				${isHighlighted ? `scale-100` : `scale-90`}
		`}
		>
			<div className='flex flex-row justify-between'>
				<div className='flex flex-col self-center'>
					<Info type='calories' color={color} value={item.calories} />
					<div className='h-4' />
					<Info type='prep_time' color={color} value={item.prep_time} />
					<div className='h-4' />
					<Info type='servings' color={color} value={item.servings} />
				</div>
				<img src={item.image_source} alt='' className="w-60 h-60 rounded-full -mx-24 shadow-2xl shadow-black object-cover" />
			</div>
			<p className='font-bodoni font-bold text-3xl my-8'>{item.name}</p>
			<p className={`truncate-lines text-${color}-default`}>{item.description}</p>
		</div >
	);
};

const Carousel = ({ items }) => {
	const [highlightedItem, setHighlightedItem] = useState(0);

	const scroll = (direction) => {
		const container = document.getElementById('carousel-container');
		let scrollBy;
		if (direction === 'left') {
			scrollBy = -450;
			if (highlightedItem > 0) setHighlightedItem(highlightedItem - 1);
		}
		else {
			scrollBy = 450;
			if (highlightedItem < items.length) setHighlightedItem(highlightedItem + 1);
		}
		container.scrollBy({ left: scrollBy, behavior: 'smooth' });
	};

	return (
		<div className="carousel-wrapper col-span-9">
			<div id="carousel-container" className="overflow-x-scroll flex flex-row h-full">
				{
					items.map((item, index) => {
						const itemColor = index % 3 === 0 ? 'green' : index % 2 === 0 ? 'pink' : 'yellow';
						return (
							<CarouselItem key={item.recipe_id} item={item} color={itemColor} isHighlighted={index === highlightedItem} />
						)
					})
				}
			</div>
			<div className="carousel-arrow carousel-arrow-left h-full" onClick={() => scroll('left')}>
				<i className="fas fa-chevron-left" style={{ color: '#7f7f7f' }} />
			</div>
			<div className="carousel-arrow carousel-arrow-right h-full" onClick={() => scroll('right')}>
				<i className="fas fa-chevron-right" style={{ color: '#7f7f7f' }} />
			</div>
		</div>
	);
};

export default Carousel;