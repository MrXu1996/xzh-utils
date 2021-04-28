import {pull} from './pull.js'
export function pullAll (array, values) {
  if (!values || !Array.isArray(values)) {
    return []
  }
  return pull(array, ...values)
}