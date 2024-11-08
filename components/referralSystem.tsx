'use client'

import { initUtils } from '@telegram-apps/sdk'

interface ReferralSystemProps {

  userId: string

}

const ReferralSystem: React.FC<ReferralSystemProps> = ({ userId }) => {

  //const INVITE_URL = "https://t.me/MelaOnTelegram_bot/MeleTelegram"
    const INVITE_URL = "https://t.me/MelaOnTelegram_bot"


  const handleInviteFriend = () => {
    const utils = initUtils()
    const inviteLink = `${INVITE_URL}?startapp=${userId}`
    const shareText = `Join me mele and become rich!`
    const fullUrl = `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}&text=${encodeURIComponent(shareText)}`
    utils.openTelegramLink(fullUrl)
  }

  const handleCopyLink = () => {
    const inviteLink = `${INVITE_URL}?startapp=${userId}`
    navigator.clipboard.writeText(inviteLink)
    alert('Invite link copied to clipboard!')
  }

  return (
    <div className="w-full max-w-md">
     
      <div className="flex flex-col space-y-4">
        <button
          onClick={handleInviteFriend}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Invite Friend
        </button>
        <button
          onClick={handleCopyLink}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Copy Invite Link
        </button>
      </div>
     
    </div>
  )
}

export default ReferralSystem