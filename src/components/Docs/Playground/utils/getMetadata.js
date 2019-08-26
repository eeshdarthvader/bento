import { useStaticQuery, graphql } from "gatsby"

const getMetadata = () => {

  // Possible to filter this data component wise
  // however, since this a static query, cannot pass arguments
  const metadata = useStaticQuery(graphql`
    query MetaData {
      allComponentMetadata {
        totalCount
        nodes {
          displayName
          props {
            name
            type {
              name
              value
            }
            required
            defaultValue {
              value
            }
            description {
              text
            }
          }
        }
      }
    }
  `)

  return metadata;
}

export default getMetadata;