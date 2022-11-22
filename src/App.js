import './App.css';
import { MainLeft, MainRight } from './Main';

function WebHeader() {
	return (
		<div className='header'>
			<div>
				<h2>ezLearn</h2>
			</div>

			<div>
			<ul className='menu'>
				<li><a href='#'>Courses</a></li>
				<li><a href='#'>Plans</a></li>
			</ul>
			</div>

			<div className='search-container'>
				<form className='search'>
				<input type="text" placeholder="What do you want to learn ?" name="search"/>
      			<button type="submit"><i className="fa fa-search"></i></button>
				</form>
			</div>

			<div>
			<ul className='menu login'>
				<li><a href='#'>Log in</a></li>
				<li><a href='#' className='signup'>Sign up</a></li>
			</ul>
			</div>
			</div>
		
	);
}


function App() {
	return (
	<div >
		<WebHeader/>
		<div className='row'>
			<MainLeft/>
			<MainRight/>
		</div>
	</div>
	);
}

export default App;
