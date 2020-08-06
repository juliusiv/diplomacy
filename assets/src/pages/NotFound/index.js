import React from "react";

import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";

const NotFound = ({...props}) => {
  return (
    <PageContainer page={Pages.NOT_FOUND}>
      <div>
        Oops, that page wasn't found.
      </div>
    </PageContainer>
  )
}

export default NotFound
