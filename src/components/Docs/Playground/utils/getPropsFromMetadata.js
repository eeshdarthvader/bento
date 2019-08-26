const getPropsFromMetadata = (metadata, displayName) => {

  // Get all nodes
  const nodes = metadata.allComponentMetadata.nodes

  // Filter nodes by displayName
  const comp = nodes.filter(
    node => node.displayName === displayName
  )

  // Get props of component
  const props = comp[0].props

  return props
}

export default getPropsFromMetadata