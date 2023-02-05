import React , {useState} from 'react'

const SearchBar = (props) => {

	const {onFormSubmit} = props;

	const [searchText , setSearchText] = useState("");

	const handleOnChange = (e)=>{
		const data = e.target.value;
		setSearchText(data);
	}

	const handleOnSubmit = (e)=>{
		e.preventDefault();
		onFormSubmit(searchText)
	}

	return (
		<div className = "search-bar ui segment" styles = {{"align-items" : "centre"}}>
			<form className="ui form" onSubmit={handleOnSubmit}>
				<div>
					<label>Video Search</label>
					<input type= "text" value = {searchText} onChange = {handleOnChange}/>
				</div>
			</form>
		</div>
	)
}

export default SearchBar



