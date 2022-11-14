import React from "react";

export default function Step(props) {
    return (
        <div className={"stepBlock" + (props.selected ? " selected" : "")}>
            <div className="circleWrapper" onClick={() => props.updateStep(props.index + 1)}>
                <div className="circle ml-14">{props.index + 1}</div>
            </div>
            <span className="ml-20">{props.label}</span>
        </div>
    )
}