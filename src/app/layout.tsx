import 'aos/dist/aos.css';
import '../styles/globals.css';

export const metadata = {
  title: 'KVPainting - Bringing visions to life',
  description: 'KVPainting - Bringing visions to life',
};

// const ga_id = '#########';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {/* <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?
      id=${ga_id}`}
        ></Script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');
        `,
          }}
        ></Script> */}
        {children}
      </body>
    </html>
  );
}
