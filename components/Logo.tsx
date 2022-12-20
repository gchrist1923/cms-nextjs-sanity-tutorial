import Image from "next/image";


export default function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image className="rounded-full object-cover" width={50} height={50} src="https://avatars.githubusercontent.com/u/86810332?s=400&u=fa195a7bf024ffaa353bbdbe56a47b4b8fc9f830&v=4" alt="Logo" />
      {<>{renderDefault(props)}</>}
    </div>
  )
}
