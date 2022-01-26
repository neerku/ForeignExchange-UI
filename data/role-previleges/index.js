
import { screener } from './screener'
import { frontdesk } from './frontdesk'
import { nurse } from './nurse'
import { provider } from './provider'
import { discharger } from './discharger'
import { practiceManager } from './practice-manager'
import { admin } from './admin'

const rolePrevileges = {
  screener,
  frontdesk,
  nurse,
  provider,
  discharger,
  practiceManager,
  admin,
}

export { rolePrevileges }