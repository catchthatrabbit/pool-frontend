import { useRouter } from 'next/router'

const useGoToWallet = () => {
  const router = useRouter()

  const goToWallet = (address) =>
    router.push({
      pathname: `/wallet/${address}`,
    })

  return goToWallet
}

export default useGoToWallet
