import { ProfileCard } from "../components/ProfileCard";
import { Projects } from "../components/Projects";

export const Home = () => {
	return (
		<div className="w-11/12 max-w-[1440px] mx-auto my-32">
			<div className="grid grid-cols-1 gap-4 xl:grid-cols-12 ">
				<div className="xl:col-span-3">
					<ProfileCard />
				</div>
				<main className="xl:col-span-8">
					<Projects />
				</main>
			</div>
		</div>
	);
};
