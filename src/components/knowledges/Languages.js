import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "Javascript", xp: 0.7 },
            { id: 2, value: "CSS", xp: 0.7 },
            { id: 3, value: "HTML5", xp: 0.7 },
        ],
        frameworks: [
            { id: 1, value: "React", xp: 0.7 },
            { id: 2, value: "Redux", xp: 0.7 },
            { id: 3, value: "Express", xp: 0.7 },
            { id: 4, value: "Mongoose", xp: 0.7 },
        ]
    }
    render() {
        let { languages, frameworks } = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                languages={frameworks} 
                title="Frameworks & bibliothèques"
                className="frameworksDisplay"/>
            </div>
        );
    }
}

export default Languages;