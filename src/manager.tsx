import { useState } from 'react'
import i18n from 'i18next'
import { Icons, IconButton } from '@storybook/components'
import { STORY_CHANGED, GLOBALS_UPDATED } from '@storybook/core-events'
import { type API, addons, types } from '@storybook/manager-api'

const ADDON_ID = 'storybook-addon-dir'
const PANEL_ID = `${ADDON_ID}/panel`

const isRoot = (input: any): input is Document => !!input

const direction = { true: 'rtl', false: 'ltr' }
const labels = { true: 'RTL active', false: 'RTL inactive' }

type ButtonProps = {
  active: boolean
  api: API
  config: ReturnType<typeof addons.getConfig>
  title: string
}

function Button({ active, api, config, title }: ButtonProps) {
  const iframe = document.querySelector('iframe')
  const root = iframe?.contentDocument
  const [checked, setChecked] = useState(false)

  if (!isRoot(root)) {
    return null
  }

  const update = (value: boolean) => {
    const html = root?.querySelector('html')
    if (!html) {
      return
    }

    html.setAttribute('dir', direction[`${value}`])
    setChecked(value)
  }

  const onClick = () => {
    update(!checked)
  }

  api.on(STORY_CHANGED, () => {
    update(false)
  })

  api.on(GLOBALS_UPDATED, ({ globals }) => {
    update(i18n.dir(globals.locale ?? 'en') === 'rtl')
  })

  return (
    <IconButton
      style={{
        fontSize: '12px',
        display: 'flex',
        gap: '8px',
        border: '1px solid',
        color: checked ? 'white' : config.theme?.colorSecondary || '#333333',
        backgroundColor: checked ? config.theme?.colorSecondary || '#333333' : 'transparent',
        borderColor: checked ? 'white' : config.theme?.colorSecondary || '#333333',
      }}
      active={active}
      title={title}
      onClick={onClick}
    >
      <Icons
        style={{
          transition: 'transform 200ms ease',
          transform: checked ? 'rotate(180deg)' : 'rotate(0deg)',
        }}
        icon="arrowrightalt"
      />
      {labels[`${checked}`]}
    </IconButton>
  )
}

addons.register(ADDON_ID, (api) => {
  const config = addons.getConfig()
  const title = 'Addon Direction for toggling right to left\n(only affecting css rules, will not affect position necessarilly)'

  addons.add(PANEL_ID, {
    title,
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story)$/)),
    render: ({ active }: Record<string, any>) => <Button active={active} api={api} config={config} title={title} />,
  })
})
