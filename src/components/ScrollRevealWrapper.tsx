import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
    delay?: number
}

const ScrollRevealWrapper = ({ children, delay = 0 }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}

export default ScrollRevealWrapper
