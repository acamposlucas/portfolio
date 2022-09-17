import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
	return (
		<section className=" text-zinc-100 rounded-lg flex flex-col gap-4">
			<header className="bg-slate-800 flex items-center justify-between rounded-lg p-4">
				<h2 className="font-heading text-base">Projects</h2>
				<a
					href="#"
					className="text-sm">
					See all
				</a>
			</header>
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</section>
		</section>
	);
};
