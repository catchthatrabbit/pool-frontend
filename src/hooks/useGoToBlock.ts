const useGoToBlock = () => {
  const uri = 'https://185.48.116.150:9140/block/'

  const goToBlock = (block) =>
    window.open(uri + block, '_blank')
  return goToBlock
}

export default useGoToBlock
