const useGoToTx = () => {
  const uri = 'https://185.48.116.150:9140/tx/'

  const goToTx = (tx) =>
    window.open(uri + tx, '_blank')
  return goToTx
}

export default useGoToTx
