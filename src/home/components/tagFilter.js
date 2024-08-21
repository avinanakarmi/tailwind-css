const TagChip = ({ tag, onSelectTag, selected = false }) => {
	return (
		<div onClick={() => onSelectTag(tag)}>
			<p
				className={`
					w-max-24 px-2 py-1 rounded-full capitalize 
					bg-gray-500 text-gray-900 
					hover:text-green-default hover:font-bold hover:bg-green-light 
					${selected && 'text-green-default font-bold bg-green-light'}`}
			>
				{tag}
			</p>
		</div>
	);
};

const TagFilter = ({ tags, selectedTags, onSelectTag }) => {
	const selectTag = (tag) => {
		if (selectedTags.includes(tag))
			onSelectTag(selectedTags.filter(selectedTag => selectedTag !== tag));
		else
			onSelectTag((prevSelected) => [...prevSelected, tag]);
	}

	return (
		<div className="col-span-3 py-8 px-4 content-center">
			<div className="flex flex-row flex-wrap gap-4 justify-center">
				{tags.map(tag => (
					<TagChip key={tag} onSelectTag={selectTag} tag={tag} selected={selectedTags.includes(tag)} />
				))}
			</div>
		</div>
	);
};

export default TagFilter;