import { ApolloClient, InMemoryCache, ApolloProvider, gql , useQuery} from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(),
});




export default function Page() {
    client
        .query({
            query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
        })
        .then((result) => console.log(result.data));
    return (<div>Hello</div>)
}

