import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import type { ComponentPropsWithout } from '../helpers/component-props.js'

interface DialogRootProps extends ComponentPropsWithout<typeof DialogPrimitive.Root, 'modal'> {}
const DialogRoot: React.FC<DialogRootProps> = (props) => <DialogPrimitive.Root {...props} modal />
DialogRoot.displayName = 'Dialog.Root'

export { DialogRoot as Root }
export { DialogPrimitive as Dialog }
export type { DialogPrimitive as DialogProps }

export type { DialogRootProps as RootProps }
