import Results from "../../../components/results";

export default async function Search({ params }) {
    const search = params?.search;
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${search}&language=en-US&page=1&include_adult=false`
    );
    const data = await res.json();
    const results = data.results;
    console.log(results.length)
    return (
        <div>
            {
                results && results.length ? <Results results={results} />
                    :
                    < h1 className="text-center pt-6">No results found</h1>
            }
        </div >
    )
}