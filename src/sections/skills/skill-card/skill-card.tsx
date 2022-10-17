import { Avatar, CardContent } from "@mui/material";
import { Card } from "reactstrap";
import { Skill } from "../skills";

import './skills-card.scss';

interface SkillCardProps {
    skill: Skill
}

export const SkillCard = (props: SkillCardProps) => {

    const { name, icon, color, experiences } = props.skill;

    return (
        <Card className='skills-card'>
            <CardContent>
                <Avatar style={{ 
                    background: color, 
                    height: 60,
                    width: 60
                }}>
                    {icon}
                </Avatar>
                <h3 style={{ color: `${color}`}}>{name}</h3>
                {experiences.map(e => <div key={e}>{e}</div>)}
            </CardContent>
        </Card>
    );
};