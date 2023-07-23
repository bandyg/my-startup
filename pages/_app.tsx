import '@styles/globals.css';

const databaseUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;
const secretToken = process.env.SECRET_TOKEN;
console.log(`db: ${databaseUrl}, apikey: ${apiKey}, st: ${secretToken}`);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
