import GeneratorBtn from "./components/GeneratorBtn";
import LikeBtn from "./components/LikeBtn";
import Title from "./components/Title";

const App = ({ db, initCount }) => {
    return(
        <div>
            <Title/>
            <LikeBtn db={ db } initCount={ initCount }/>
            <GeneratorBtn/>
        </div>
    );
}

export default App;
