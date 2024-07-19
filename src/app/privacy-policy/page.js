import AboutBanner from '@/components/about/AboutBanner'
import PrivacyPolicyBody from '@/components/PrivacyPolicy/PrivacyPolicyBody'
import React from 'react'

const page = () => {

  return (
    <div className="w-full text-center">
      <AboutBanner subtitle="Privacy Policy" title="Privacy Policy" />
      <PrivacyPolicyBody/>
    </div>
  )
}

export default page