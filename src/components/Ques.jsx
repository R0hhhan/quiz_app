import { useState } from "react";
import React from "react";

export const Ques = React.memo(({ ind, qs, ticks, setTicks }) => {
    

    if (Object.keys(qs).length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="question-container">
            <p className="question-title">Qs {ind+1}: {qs.question}</p>
            <p>Difficulty: {qs.difficulty}</p>

            <form className="options">
                <p>Options</p>
                {
                    qs.options.map((elem, index) => {
                        return (
                            <label key={index}>
                                <input
                                    className="option"
                                    type="radio"

                                    value={elem}
                                    checked={ticks[ind]==elem}
                                    onChange={() => {
                                        
                                        setTicks((prev) => ({
                                            ...prev,
                                            [ind]: elem,
                                        }));
                                    }}
                                />
                                {elem}
                            </label>
                        );
                    })
                }
            </form>
        </div>
        </div>
        
    );
});
