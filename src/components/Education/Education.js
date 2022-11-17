import React, { useContext } from 'react';
import exam from '../../assets/lottie/exams.json';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css';
import EducationCard from './EducationCard';

import { Container } from '@material-ui/core';
import { educationData } from '../../data/educationData';
import AnimationLottie from '../Animation';

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className="education" id="resume">
                <div className="education-body">
                <h1 style={{ color: theme.primary }}>Education</h1>
                    <div className="education-image">
                        <AnimationLottie animationPath={exam} />
                    </div>
                    <div className="education-description">
                        {educationData.map(edu => (
                            <EducationCard
                                key={edu.id}
                                id={edu.id}
                                institution={edu.institution}
                                course={edu.course}
                                startYear={edu.startYear}
                                endYear={edu.endYear}
                                gpa = {edu.gpa}
                            />
                        ))}
                    </div>
                </div>
                <div className="line-styling">       
                    <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
                </div> 
            </Container>
        </div>
    )
}

export default Education
