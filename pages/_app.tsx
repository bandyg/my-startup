import '@styles/globals.css';
import { montserrat } from '@styles/fonts';

const databaseUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;
const secretToken = process.env.SECRET_TOKEN;
console.log(`db: ${databaseUrl}, apikey: ${apiKey}, st: ${secretToken}`);

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${montserrat.className} w-full min-h-screen`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
