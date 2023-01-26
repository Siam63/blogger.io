import styles from '../../styles/Slug.module.css';
import { GraphQLClient, gql } from 'graphql-request';
import Nav from '@/components/Nav';

const graphcms = new GraphQLClient(
  "https://api-ca-central-1.hygraph.com/v2/cldc5swc10x3w01urdgbx8mo7/master"
);

const QUERY = gql`
    query Post($slug: String!){
        post(where: {slug: $slug}){
            id,
            title,
            slug,
            datePublished,
            author{
                id,
                name,
                avatar{
                    url
                }
            }
            content{
                html
            }
            coverPhoto{
                id,
                url
            }
        }
    }
`;

const SLUGLIST = gql`
    {
        posts{
            slug
        }
    }
`

export async function getStaticPaths(){
    const {posts} = await graphcms.request(SLUGLIST);
    return{
        paths: posts.map((post) => ({params : {slug : post.slug }})),
        fallback: false,
    }
}

export async function getStaticProps({ params }){
  const slug = params.slug;
  const data = await graphcms.request(QUERY, {slug});
  const post = data.post;
  return{
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({post}){
    return (
        <div>
            <Nav />
            <div>
            <main className={styles.blog}>
                
                <img 
                    src={post.coverPhoto.url} 
                    className={styles.cover} 
                    alt={post.title}
                />
                <div className="flex flex-col px-5">
                    <div className={styles.title}>
                        <div className={styles.authdetails}>
                        <img src={post.author.avatar.url} alt={post.author.name} />
                        <div className={styles.authtext}>
                            <h6>By {post.author.name} </h6>
                            <h6 className={styles.date}>
                                {post.datePublished}
                            </h6>
                        </div>
                        </div>
                        <h2 className="font-semibold text-3xl">{post.title}</h2>
                    </div>

                    <div className="font-semibold">
                        <div
                            className={styles.content}
                            dangerouslySetInnerHTML={{ __html: post.content.html }}
                        />
                    </div>
                    
                </div>
            </main>
            </div>
        </div>
    )
}