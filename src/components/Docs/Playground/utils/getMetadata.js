import { useStaticQuery, graphql } from "gatsby"

const getMetadata = () => {

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