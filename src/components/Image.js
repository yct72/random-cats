
const Image = ({ randomNum }) => {
    return(
        <div className="imgBlock">
            <img src={require(`../catPic/${randomNum}.png`).default} alt="img not found"/>
        </div>
    );
}

export default Image;