import PropTypes from 'prop-types';
export default function Body (props){
    return(
        //PROPS
        //PROP TYPES
        <div className="person">
            <img src="http://placeholder.pics/svg/150x150" alt="" className="person-picture" />
            <p>This is <strong>{props.name} </strong>favorite food </p>
            <p>{(props.food).toUpperCase()}</p>
            <p>Is it Healthy:
                {props.isHealthy ? "Yes" : "No" }</p>
            <p><strong>{props.name}</strong> is 
            {props.age}  years old!</p>
        </div>
    );
}

Body.PropTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    isHealthy: PropTypes.bool,
    age: PropTypes.number
    }
    
    Body.defaultProps = {
        name: "Guess",
        food: "Unknown",
        isHealthy: false,
        age: 0
    }