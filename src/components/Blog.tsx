import { BlogCard } from "./BlogCard";

export const Blog = () => {
	return (
		<section className="text-zinc-100 rounded-lg flex flex-col gap-4">
			<header className="bg-slate-800 rounded-lg p-4">
				<h2>Blog</h2>
			</header>
			<section className="grid grid-cols-1 gap-4">
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</section>
		</section>
	);
};
