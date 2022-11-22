export function Course(props) {
	return (
		
		<div className="course" key={props.courseId}>
		{props.Name}
		<ul className="course-elements">
			<li key={"duration" + props.courseId}>Course Duration : {props.Duration}</li>
			<li key={"level" + props.courseId}>Skills Level : {props.Level}</li>
			<li key={"fee" + props.courseId}>Course Fee : {props.Fee}</li>
		</ul>
		</div>
		
	)
}