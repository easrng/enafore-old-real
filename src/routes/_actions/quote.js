import { importShowComposeDialog } from '../_components/dialog/asyncDialogs/importShowComposeDialog.js'
import { store } from '../_store/store.js'
import { database } from '../_database/database.js'

export async function quote (status) {
  const dialogPromise = importShowComposeDialog()
  store.setComposeData('dialog', {
    text: "",
    contentType: null,
    contentWarningShown: !!status.spoiler_text,
    contentWarning: status.spoiler_text || '',
    postPrivacy: status.visibility,
    media: null,
    inReplyToId: null,
    inReplyToHandle: null,
    poll: null,
    sensitive: !!status.sensitive,
    quoteId: status.id,
    quoteHandle: "@"+status.account.acct
  })
  const showComposeDialog = await dialogPromise
  showComposeDialog()
}