const useGoToTx = () => {
  const uri = 'https://blockindex.net/tx/'

  const goToTx = (tx) =>
    window.open(uri + tx, '_blank')
  return goToTx
}

export default useGoToTx
