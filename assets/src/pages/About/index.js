import React from "react";

import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";

const Frontpage = ({...props}) => {

  return (
    <PageContainer page={Pages.ABOUT} withNavigation>
      <div>
          About all the stuff!
      </div>
    </PageContainer>
  )
}

export default Frontpage
