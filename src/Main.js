import {Course} from './course.js';
import { coursesList } from './coursesList.js';

export function MainLeft() {
	return (
		
			<div className='left'>
				<div className="skill-search">
				Skills Level
				<i className="fa fa-chevron-down"></i>
				</div>

				<div className="skill-search-content">
					<input id="Advanced" className="facet-checkbox" type="checkbox" value="Advanced"></input>
					<label htmlFor="Advanced">Advanced</label>
				</div>

				<div className="skill-search-content">
					<input id="Beginner" className="facet-checkbox" type="checkbox" value="Beginner"></input>
					<label htmlFor="Beginner">Beginner</label>
				</div>

				<div className="skill-search-content">
					<input id="Intermediate" className="facet-checkbox" type="checkbox" value="Intermediate"></input>
					<label htmlFor="Intermediate">Intermediate</label>
				</div>

			</div>

	);
}

export function MainRight() {
	return (
	<div className='main'>
					{ coursesList.map((element) => Course(element)) }
			</div>
	);
}

