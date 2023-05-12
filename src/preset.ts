function managerEntries(entry = []) {
  return [...entry, require.resolve('./manager')]
}

export default { managerEntries }
