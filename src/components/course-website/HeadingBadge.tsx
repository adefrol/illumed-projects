import { icons } from 'lucide-react'

export const HeadingBadge = ({ svg, className }: { svg: keyof typeof icons, className: string }) => {
  const Icon = icons[svg]
  return (
    <div className={`w-48 h-36 rounded-3xl bg-black/45 flex items-center justify-center absolute ${className}`}><Icon width={100} height={100} color='#FFFC31' /></div>
  )
}
