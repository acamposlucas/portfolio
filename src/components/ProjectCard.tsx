import { GitFork } from "phosphor-react";

export const ProjectCard = () => {
	return (
		<div className="bg-slate-800 rounded-lg p-4 flex flex-col gap-4">
			<div>
				<h3>Project x</h3>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere
				sed aut. Dolorem, numquam reprehenderit.
			</p>
			<div className="flex justify-between">
				<ul className="flex gap-4">
					<li>HTML</li>
					<li>CSS</li>
					<li>Javascript</li>
				</ul>
				<ul>
					<li>
						<a
							href="#"
							aria-label="See code on Github">
							<GitFork
								aria-hidden="true"
								size={24}
								color="#67e8f9"
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
