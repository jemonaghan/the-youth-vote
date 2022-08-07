import React from 'react';

import "./Home.css";

function Home() {
	return (
		<div id="homepage">
			<div id="heading">
				<h1>THE YOUTH VOTE</h1>
			</div>

			<div class="text-box">
				<h2>Youth Voting Matters</h2>
				<p>Voting is habit-forming:
When young people understand the voting process and vote, they are more likely to do so when they are older.  Getting people to vote early could be the key to raising a 
new generation of voters. </p>
			</div>

			<div id="vote">
				<button>VOTE</button>
			</div>

			<div class="text-box">
				<h2>Sign Up To Take Part</h2>
				<p>Information for teaches/educators. Text to explain how the sign up process works, poll cards etc </p>
			</div>

			<div id="sign-up">
				<button>SIGN-UP</button>
			</div>
			
		</div>
	);
}

export default Home;