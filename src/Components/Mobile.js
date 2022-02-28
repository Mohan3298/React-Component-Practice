
function Mobi(props){
    
    return(
        <div>
        <h1>{props.model}</h1>
        <img src={props.image} alt="oppo A31" width= "300" height="300" />
        <br/>
        <br/>
        <h2><a href={props.link} >{props.pattern}</a></h2>
        <h4>Colour:{props.color}</h4>
        <h4>Size name:{props.length}</h4>
        <h4>Style name:{props.offer}</h4>
        <h4>Pattern name:{props.model}</h4>
        <h4>MRP: {props.rate}</h4>
        </div>
    );
}

export default Mobi;