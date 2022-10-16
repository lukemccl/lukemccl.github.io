import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardContent } from "@mui/material";
import Avatar from "@mui/material/Avatar";
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
                    {typeof icon === 'string' 
                    ? <i className={icon}></i> 
                    : <FontAwesomeIcon icon={icon} />}
                </Avatar>
                <h3 style={{ color: `${color}`}}>{name}</h3>
                {experiences.map(e => <div key={e}>{e}</div>)}
            </CardContent>
        </Card>
    );
};