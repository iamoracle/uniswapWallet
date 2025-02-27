import { useEffect } from 'react'
import { DEMO_SEED_PHRASE } from 'react-native-dotenv'
import { useAppDispatch } from 'src/app/hooks'
import { importAccountActions } from 'src/features/import/importAccountSaga'
import { ImportAccountType } from 'src/features/import/types'

const MNEMONIC_TEST_ONLY = DEMO_SEED_PHRASE
export const DEMO_ACCOUNT_ADDRESS = '0xdd0E380579dF30E38524F9477808d9eE37E2dEa6'

export function useTestAccount(): void {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (__DEV__) {
      dispatch(
        importAccountActions.trigger({
          type: ImportAccountType.Mnemonic,
          name: 'Demo Account',
          validatedMnemonic: MNEMONIC_TEST_ONLY,
          markAsActive: true,
          ignoreActivate: true,
        })
      )
    }
  }, [dispatch])
}
