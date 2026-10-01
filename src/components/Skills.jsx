import "../styles/skills.css";

import {
    FaReact,
    FaJs,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaDocker,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";

import { SiDjango, SiPostgresql } from "react-icons/si";

const mainSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Python", icon: <FaPython /> },
];

const complementarySkills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
];

const tools = [
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
];

function SkillNode({ skill }) {
    return (
        <div className='skill-node'>
            <span className='node-connection node-top'></span>

            <div className='skill-node-icon'>{skill.icon}</div>

            <span className='skill-node-name'>{skill.name}</span>

            <span className='node-connection node-bottom'></span>
        </div>
    );
}

function NetworkLines({ type }) {
    return (
        <svg
            className={`network-connections ${type}`}
            viewBox='0 0 1000 160'
            preserveAspectRatio='none'
            aria-hidden='true'
        >
            {/* Línea principal */}
            <path className='connection-line' d='M 100 80 H 900' />

            {/* Líneas verticales de los nodos */}
            <path className='connection-line' d='M 100 25 V 80' />

            <path className='connection-line' d='M 366 25 V 80' />

            <path className='connection-line' d='M 633 25 V 80' />

            <path className='connection-line' d='M 900 25 V 80' />

            {/* Flujo de energía */}
            <circle className='energy-dot energy-one' r='4'>
                <animateMotion
                    dur='3.5s'
                    repeatCount='indefinite'
                    path='M 100 80 H 900'
                />
            </circle>

            <circle className='energy-dot energy-two' r='4'>
                <animateMotion
                    dur='3.5s'
                    begin='1.75s'
                    repeatCount='indefinite'
                    path='M 900 80 H 100'
                />
            </circle>
        </svg>
    );
}

function GroupConnector({ type }) {
    return (
        <div className={`group-connector ${type}`}>
            <svg
                viewBox='0 0 1000 130'
                preserveAspectRatio='none'
                aria-hidden='true'
            >
                <defs>
                    <filter id={`glow-${type}`}>
                        <feGaussianBlur stdDeviation='3' result='blur' />

                        <feMerge>
                            <feMergeNode in='blur' />
                            <feMergeNode in='SourceGraphic' />
                        </feMerge>
                    </filter>
                </defs>

                <path
                    className='group-connection-line'
                    d='
                        M 120 0
                        V 40
                        Q 120 65 150 65
                        H 420
                        Q 500 65 500 105
                    '
                />

                <path
                    className='group-connection-line'
                    d='
                        M 880 0
                        V 40
                        Q 880 65 850 65
                        H 580
                        Q 500 65 500 105
                    '
                />

                {/* Flujo izquierdo */}
                <circle
                    className='group-energy'
                    r='4'
                    filter={`url(#glow-${type})`}
                >
                    <animateMotion
                        dur='3s'
                        repeatCount='indefinite'
                        path='
                            M 120 0
                            V 40
                            Q 120 65 150 65
                            H 420
                            Q 500 65 500 105
                        '
                    />
                </circle>

                {/* Flujo derecho */}
                <circle
                    className='group-energy'
                    r='4'
                    filter={`url(#glow-${type})`}
                >
                    <animateMotion
                        dur='3s'
                        begin='1.5s'
                        repeatCount='indefinite'
                        path='
                            M 880 0
                            V 40
                            Q 880 65 850 65
                            H 580
                            Q 500 65 500 105
                        '
                    />
                </circle>
            </svg>

            <span className='connector-center'></span>
        </div>
    );
}

function SkillGroup({ number, title, skills, main = false }) {
    return (
        <div className={`skill-group ${main ? "skill-group-main" : ""}`}>
            {/* CABECERA */}

            <div className='skill-group-title'>
                <span className='skill-group-number'>{number}</span>

                <span className='title-line'></span>

                <div className='skill-group-label'>
                    <span className='label-dot'></span>

                    <h3>{title}</h3>
                </div>

                <span className='title-line'></span>
            </div>

            {/* NODOS */}

            <div className='skill-network'>
                <NetworkLines
                    type={main ? "main-network" : "secondary-network"}
                />

                <div className='skill-nodes'>
                    {skills.map((skill) => (
                        <SkillNode key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Skills() {
    return (
        <section id='skills' className='skills-section'>
            <div className='skills-header'>
                <p className='section-label'>SKILLS</p>

                <h2>
                    Tecnologías con las que
                    <span> trabajo.</span>
                </h2>

                <p className='skills-description'>
                    Herramientas y tecnologías que utilizo para desarrollar
                    aplicaciones web funcionales y mantenibles.
                </p>
            </div>

            <div className='skills-map'>
                {/* =========================
                    STACK PRINCIPAL
                ========================= */}

                <SkillGroup
                    number='01'
                    title='STACK PRINCIPAL'
                    skills={mainSkills}
                    main
                />

                {/* CONECTOR 1 */}

                <GroupConnector type='connector-main' />

                {/* =========================
                    COMPLEMENTARIAS
                ========================= */}

                <SkillGroup
                    number='02'
                    title='TECNOLOGÍAS COMPLEMENTARIAS'
                    skills={complementarySkills}
                />

                {/* CONECTOR 2 */}

                <GroupConnector type='connector-secondary' />

                {/* =========================
                    HERRAMIENTAS
                ========================= */}

                <SkillGroup number='03' title='HERRAMIENTAS' skills={tools} />
            </div>
        </section>
    );
}

export default Skills;
