import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, Button } from '@acme/ui'
// import '@acme/ui/dist/index.s'

const meta: Meta<typeof Dialog.Root> = {
  component: Dialog.Root,
  argTypes: {
    // 你可以在這裡添加其他的 argTypes 配置
  },
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: (props) => (
    <Dialog.Root>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className='DialogOverlay'>
          <Dialog.Content className='DialogContent'>.......</Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  ),
  name: 'Default Dialog',
  args: {},
}
