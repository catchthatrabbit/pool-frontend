const useGoToBlock = () => {
  const uri = 'https://blockindex.net/block/'

  const goToBlock = (block) =>
    window.open(uri + block, '_blank')
  return goToBlock
}

export default useGoToBlock
