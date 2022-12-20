// Re-export `NextStudioHead` as default if you're happy with the default behavior
export { NextStudioHead } from 'next-sanity/studio/head'

// To customize it, use it as a children component:
import { NextStudioHead } from 'next-sanity/studio/head'

export default function CustomStudioHead() {
  return (
    <>
      <NextStudioHead favicons={false} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://avatars.githubusercontent.com/u/86810332?s=400&u=fa195a7bf024ffaa353bbdbe56a47b4b8fc9f830&v=4"
      />
    </>
  )
}