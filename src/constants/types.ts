import type {ReactNode} from "react";


export interface TitleHeaderProps  {
    title: string;
    sub: string;
}

export interface ExperienceCard {
    review: string;
    imgPath: string;
    logoPath: string;
    title: string;
    date: string;
    responsibilities: string[];
}

export interface GlowCardProps {
    card: ExperienceCard;
    children: ReactNode;
    index: number;
}

export interface ButtonProps {
    text: string;
    className: string;
    id: string;
}

export interface TechStack{
    name: string;
    modelPath: string;
    scale: number;
    rotation: Array<number>;
}

export interface TechStackProps {
    model: TechStack;
}
