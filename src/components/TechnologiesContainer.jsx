import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
	{
		icon: DiHtml5,
		name: "HTML5",
		id: "html",
	},
	{
		icon: DiCss3,
		name: "CSS3",
		id: "css",
	},
	{
		icon: DiJsBadge,
		name: "JavaScript",
		id: "js",
	},
	{
		icon: DiReact,
		name: "React",
		id: "react",
	},
];

const TechnologiesContainer = () => {
	return (
		<section className="technologies-container">
			<h2>Tecnologias</h2>
			<div className="technologies-grid">
				{technologies.map(tecnologia => (
					<div
						key={tecnologia.id}
						id={tecnologia.id}
						className="technology-card"
					>
						{<tecnologia.icon />}
						<div className="technology-info">
							<h3>{tecnologia.name}</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Voluptatibus, perferendis modi reiciendis, labore natus quo ab.
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TechnologiesContainer;
