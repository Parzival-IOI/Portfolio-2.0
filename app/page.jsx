import Parallax from "./Parallax"
import Introduction from "./introduction"
// import Provider from "./Provider"

const Page = () => {
  return (
    <div>
        {/*  <Provider session={session}> */}
        <Parallax>
          <Introduction/>
        </Parallax>
        {/* </Provider> */}
      </div>
  )
}

export default Page