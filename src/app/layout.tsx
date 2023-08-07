import Script from "next/script";
import React from "react";
import Navbar from "~/components/navigation/navbar";

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-Z1DRMXMGH7" />
			<Script id="google-analytics">
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-Z1DRMXMGH7');
				`}
			</Script>
			<Script id="google-tag-manager">
				{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WP4BH6T6');
      `}
			</Script>
		</html>
	);
}
