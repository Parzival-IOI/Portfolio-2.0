import Parallax from "./Parallax"
import Introduction from "./introduction"
import Provider from "./Provider"

const Page = ({session}) => {
  return (
    <Provider session={session}>
      <div>
        <Parallax>
          <Introduction/>
        </Parallax>
      </div>
    </Provider>
  )
}

export default Page