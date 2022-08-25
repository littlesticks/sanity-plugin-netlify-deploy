import React, {useState} from 'react'
import {PublishIcon} from '@sanity/icons'
import {Flex, Heading, Text, Card, Button as SanityButton, Grid} from '@sanity/ui'

const getBadgeImage = (siteID: string) => {
  const time = new Date().getTime()
  return `https://api.netlify.com/api/v1/badges/${siteID}/deploy-status?${time}`
}

export default function NetlifyDeploy({config}: {config: any}) {
  const siteID = config.siteID || ''
  const siteURL = config.siteURL || ''
  const buildHookID = config.buildHookID || ''
  const siteName = config.siteName || ''

  const [badgeImageURL, setBadgeImageURL] = useState(
    `https://api.netlify.com/api/v1/badges/${siteID}/deploy-status`
  )

  const deployNetlify = async () => {
    await fetch(`https://api.netlify.com/build_hooks/${buildHookID}`, {
      method: 'POST',
    }).then((res) => {
      if (res.ok) {
        // eslint-disable-next-line no-console
        console.log('Deployed to Netlify', res)
        setBadgeImageURL(getBadgeImage(siteID))
        // eslint-disable-next-line no-console
        console.log(badgeImageURL)
      } else {
        // eslint-disable-next-line no-console
        console.log('Failed to deploy to Netlify')
      }
    })
  }

  if (!siteID) {
    return null
  }

  return (
    <Grid autoCols={'fr'} columns={1}>
      <Flex direction="column" padding={4}>
        <Flex align="center" justify="space-between">
          <Card padding={4}>
            <Heading as="h1">Production</Heading>
            <Card paddingTop={4}>
              <img src={badgeImageURL} />
            </Card>
            <Flex align="center" justify="space-between">
              <a href={siteURL} target="_blank" rel="noopener noreferrer">
                <Card paddingTop={4}>
                  <Text>View Site</Text>
                </Card>
              </a>
              <a
                href={`https://app.netlify.com/sites/${siteName}/overview`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card paddingTop={4} paddingLeft={4}>
                  <Text>Open Netlify</Text>
                </Card>
              </a>
            </Flex>
          </Card>
          <Card padding={4}>
            <SanityButton
              tone="positive"
              onClick={deployNetlify}
              icon={PublishIcon}
              fontSize={[2, 2, 3]}
              padding={[3, 3, 4]}
              text="Deploy to Netlify"
            />
          </Card>
        </Flex>
      </Flex>
    </Grid>
  )
}
