import { LinkedinLogo, GithubLogo } from "phosphor-react";

export const ProfileCard = () => {
	return (
		<div className="flex flex-col w-full gap-4 items-center bg-slate-800 text-zinc-100 rounded-lg py-4">
			<img
				className="w-48 h-48 rounded-full -mt-10"
				src="https://github.com/acamposlucas.png"
				alt="Lucas"
			/>
			<div className="flex flex-col gap-2 items-center w-4/5 after:h-0.5 after:w-full after:block after:bg-slate-100 after:opacity-50">
				<h1 className="text-2xl font-bold font-heading">Lucas Almeida</h1>
				<strong className="font-normal">Software Engineer</strong>
				<p className="text-center">
					Coder, swimmer, historian. None of those activities made me someone
					important, but I'm ok with that.
				</p>
			</div>
			<ul className="flex items-center justify-center gap-2 flex-wrap">
				<li className="px-4 py-2 bg-red-400 rounded-lg">JavaScript</li>
				<li className="px-4 py-2 bg-red-400 rounded-lg">React</li>
				<li className="px-4 py-2 bg-red-400 rounded-lg">TypeScript</li>
			</ul>
			<div>
				<ul className="flex gap-2">
					<li>
						<a
							href="https://linkedin.com"
							className=""
							aria-label="Access my Linkedin profile">
							<LinkedinLogo
								size={32}
								aria-hidden="true"
							/>
						</a>
					</li>
					<li>
						<a
							href="https://github.com/acamposlucas"
							className=""
							aria-label="Access my Github profile">
							<GithubLogo
								size={32}
								aria-hidden="true"
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
