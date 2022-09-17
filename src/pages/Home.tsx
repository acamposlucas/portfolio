import { ProfileCard } from "../components/ProfileCard";
import { Projects } from "../components/Projects";

export const Home = () => {
	return (
		<div className="w-11/12 max-w-7xl mx-auto my-32">
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-12 ">
				<div className="lg:col-span-4">
					<ProfileCard />
				</div>
				<main className="lg:col-span-8">
					<Projects />
				</main>
			</div>
		</div>
	);
};
