import { useLocation } from "react-router-dom";
import { Ques } from "./Ques";
import "../stylesheet/styles.css";

export function Finish() {
    const location = useLocation();
    const { argument } = location.state;

    return (
        <section className="finish-container">

            <h1 className="finish-title">Thank You for Submitting the Test!</h1>
            <div className="score-container">
                <h2>Your Score:</h2>
                <p className="score-value">{argument.score}</p>
            </div>
            <div className="questions-container">
                <h2>Questions and Answers:</h2>
                {argument.ques.map((elem, index) => (
                    <article className="question-item" key={index}>
                       
                        <Ques
                            //reusing the Ques component

                            qs={elem}
                            ind={index}
                            ticks={argument.ticks}
                            
                            //passing fake setTicks so that user marked options cannot be changed in finish page
                            setTicks={() => {}}
                        />
                        <p className="correct-answer">
                            <strong>Correct Answer:</strong> {elem.correct_answer}
                        </p>
                    </article>
                ))}
            </div>

        </section>
    );
}
