import { useState } from "react";
import Carousel from "./components/carousel";
import MealFilter from "./components/mealFilter";
import TagFilter from "./components/tagFilter";

const Home = () => {
	const [selectedMeal, setSelectedMeal] = useState('all');
	const [selectedTags, setSelectedTags] = useState([]);

	const onSelectMeal = (meal) => {
		if (meal !== selectedMeal) {
			setSelectedTags([]);
			setSelectedMeal(meal);
		}
	}

	return (
		<div className="grid grid-cols-12 h-full overflow-auto">
			<div className="col-span-1 content-center">
				<div className="flex -rotate-90">
					<p className="overflow-visible whitespace-nowrap font-bodoni">Everyday is tasty !</p>
				</div>
			</div>
			<div className="col-span-11 py-8">
				<p className="text-4xl font-bodoni font-bold">Discover</p>
				<MealFilter selectedMeal={selectedMeal} onSelectMeal={onSelectMeal} />
				<div className="grid grid-cols-12">
					<TagFilter
						tags={[]}
						selectedTags={selectedTags}
						onSelectTag={setSelectedTags}
					/>
					<Carousel items={[]} />
				</div>
			</div>
		</div>
	);
};

export default Home;