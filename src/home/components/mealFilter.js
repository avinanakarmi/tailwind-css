const MealFilter = ({ selectedMeal, onSelectMeal }) => {
  const meals = [
    {
      value: 'all',
      size: 10,
    },
    {
      value: 'breakfast',
      size: 24,
    },
    {
      value: 'lunch',
      size: 20,
    },
    {
      value: 'dinner',
      size: 20,
    },
    {
      value: 'dessert',
      size: 20,
    }
  ];

  return (
    <nav className="my-8">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="w-full hidden md:flex space-x-4 text-green-default font-venir">
          {
            meals.map(meal => (
              <li
                key={meal.value}
                className={`
                  capitalize 
                  text-green-default
                  w-${meal.size} 
                  hover:font-bold 
                  ${meal.value === selectedMeal ? 'font-bold' : 'font-default'}
                `}
                onClick={() => onSelectMeal(meal.value)}
              >
                {meal.value}
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
};

export default MealFilter;