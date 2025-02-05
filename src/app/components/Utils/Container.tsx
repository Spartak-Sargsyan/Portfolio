/** @format */

import { ReactNode } from 'react'

interface IChildren {
    children: ReactNode
}

const Container = ({ children }: IChildren) => {
    return <div style={{ margin: '0 auto', maxWidth: 1530 }}>{children}</div>
}

export default Container
