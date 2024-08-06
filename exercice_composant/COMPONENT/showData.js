import dataPartieDuDiscours from "../DATA/dataPartieDeDiscours.js";
import dataFonctionneGrammaticale from "../DATA/dataFonctionneGrammaticale.js";

function Text({className,children}) {
    return (
        <p className = {className}>{children}</p>
    )
}

function Input({...inputProps}) {
    return (
        <input {...inputProps}></input>
    )
}

function ShowQuizData({dataQuiz}) {
    const listQuiz = dataQuiz.map((quiz,index)=>
        <div key={index} className="listQuiz">
             <Text className="question" >{quiz.question} </Text>
             <Text className="phrase">{quiz.phrase}</Text>
        
             <div className="groupeRadio">
                 {quiz.reponses.map((reponse,index) => (
                     <label htmlFor={index}  key={index}>
                        <Input type="radio" name="radio" value={reponse.texte} />
                         {reponse.texte}
                     </label>
                 ))}
             </div>
         </div>)

    return (
        <div>
            {listQuiz[5]}
        </div>
    )
}

const container = document.querySelector("#root");
const root =  ReactDOM.createRoot(container);
root.render(<ShowQuizData dataQuiz={dataFonctionneGrammaticale}/>)


