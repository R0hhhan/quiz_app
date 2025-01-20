import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Ques } from "./Ques";
import axios from "axios";
import { Navbar } from "./navbar";
import { CountdownTimer } from "./CountdownTimer";
import '../stylesheet/styles.css'

const parser = new DOMParser();

//function to parse questions
function processQuestion(q) {
    q.correct_answer = parser.parseFromString(q.correct_answer, "text/html").documentElement.textContent
                    
    q.incorrect_answers = q.incorrect_answers.map((option) => {
        return parser.parseFromString(option, "text/html").documentElement.textContent
    })
    const options = [...q.incorrect_answers, q.correct_answer];
    q.question = parser.parseFromString(q.question, "text/html").documentElement.textContent

    return {
        ...q,
        options: options.sort(() => Math.random() - 0.5),
        
    };
}


export function Test() {


    const [ques, setQues] = useState([{}]);
    const [curQues, setCurQues] = useState(0);
    const navigate = useNavigate();
    const [ticks, setTicks] = useState({});// stores user marked options  
    const [recall, setRecall] = useState(1);

    //useeffect to fetch data on first load
    useEffect(() => {
        for (let i = 0; i < 15; i++){
            setTicks({ ...ticks, i: null });
        }
        const fetchData = async () => {
            const apiURL = "https://opentdb.com/api.php?amount=15";
            try {
                const response = await axios.get(apiURL);
                const fetchedQues = response.data.results;
                const processedQues = fetchedQues.map(processQuestion);
                setQues(processedQues);

            } catch (error) {

                console.error("Error fetching data:", error);
                //make a recall every 2 seconds in case of an error
                setTimeout(() => {

                    setRecall(recall + 1);
                    console.log("recalling");

                }, 2000)
                
            }
        };

        fetchData();
    }, [recall]);

    //submit and navigate to '/finish'
    const subm = () => {
        let ans = 0;
        for (let ind = 0; ind < ques.length; ind++){
            ans += ticks[ind] === ques[ind].correct_answer;
        }
        console.log(ans);
        const argument = { score: ans ,ticks:ticks,ques:ques};
        navigate("/finish", { state: { argument } });
    };

    //onclick function for submit button
    const oc = () => {
        const userConfirmed = window.confirm("Are you sure you want to submit?");
        if (userConfirmed) {
            subm();
        }
    };
    return (
        <div className="test-container">
            <div className="nav-and-counter">
                <CountdownTimer oc={subm}></CountdownTimer>
                <Navbar setCurQues={setCurQues}></Navbar> 
            </div>

            <Ques key={curQues} ind={curQues} ticks={ticks} setTicks={setTicks} qs={ques[curQues]}></Ques>  
            
            <button  className="submit-button" onClick={oc}>submit</button>
            <button className="change-buttons" onClick={() =>setCurQues((curQues-1+ques.length)%ques.length)}>prev</button>
            <button className="change-buttons" onClick={() =>setCurQues((curQues+1)%ques.length)}>next</button>              
        </div>
    );
}

