import React from 'react'
import {createPlugin} from 'sanity'
import RocketIcon from './RocketIcon'
import NetlifyDeploy from './NetlifyDeploy'

interface NetlifyDeployConfig {
  siteID?: string
  siteURL?: string
  buildHookID?: string
}

export const netlifyDeploy = createPlugin<NetlifyDeployConfig | void>((config = {}) => {
  return {
    tools: (prev, context) => {
      return [
        ...prev,
        {
          name: 'sanity-plugin-netlify-deploy',
          tool: NetlifyDeploy,
          title: 'Deploy',
          icon: RocketIcon,
          component: () => <NetlifyDeploy config={config} />,
        },
      ]
    },
  }
})
