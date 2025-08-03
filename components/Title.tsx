import React from 'react'

interface TitleProps {
  label: string
}

const Title = React.memo(function Title({ label }: TitleProps) {
  return (
    <h4 className="text-2xl font-bold mb-3 mt-6">
      <span className="text-primary">root</span>
      <span className="text-muted-foreground">@</span>
      <span className="text-primary">NEULAND</span>
      <span className="text-muted-foreground">:~#</span>
      <span className="text-primary"> ./ctf-2023 </span>
      <span className="text-muted-foreground">--{label}</span>
    </h4>
  )
})

export default Title
