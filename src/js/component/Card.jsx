import React from "react";
import {useHistory} from "react-router-dom";

export const Card = (props) => {
	const {image, name, uid} = props;
	const history = useHistory();
	const handleClick = () => {
		history.push(`\${uid}`)
	};
	return (
		<div class="container-fluid px-5">
        	<div class="row scrolling flex-row flex-nowrap">
				<div className="card col-3">
				<img className="card-img-top" src={image} alt="Card image cap" />
					<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">
					</p>
					<div className="row">
						<div className="d-flex justify-content-start col-10">
							<button onClick={handleClick} className="btn btn-outline-primary">Learn more!</button>
						</div>
						<div className="d-flex justify-content-end col-2">
							<button onClick={() => actions.addFav({ id: props.id, name: props.name })} className="btn btn-outline-warning">
							<i class="fa fa-heart" aria-hidden="true"></i>
							</button>
						</div>
					</div>
					</div>
				</div>
       		</div>
		</div>
		);
};

export default Card;