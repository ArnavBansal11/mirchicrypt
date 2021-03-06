import Head from 'next/head';

const Meta = ({ children }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta name="theme-color" content="#0779e4" />
				<link rel="shortcut icon" href="" type="image/x-icon" />
				<title>MirchiCrypt 1.0</title>
				<link rel="icon" href="/favicon.jpg" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div style={{ display: 'flex', height: '100vh', width: '100vw' }}>{children}</div>
		</>
	);
};

export default Meta;
