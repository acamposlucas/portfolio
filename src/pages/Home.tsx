import { ProfileCard } from "../components/ProfileCard";

export const Home = () => {
	return (
		<div className="w-11/12 max-w-7xl mx-auto my-32">
			<section className="grid grid-cols-1 lg:grid-cols-12 lg:gap-4">
				<div className="col-span-4">
					<ProfileCard />
				</div>
				<main className="col-span-8"></main>
			</section>
		</div>
	);
};
