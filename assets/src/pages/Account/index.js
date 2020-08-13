import React from "react";

import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";

const Account = ({...props}) => {

  return (
    <PageContainer page={Pages.Account}>
      <div>
          Account
      </div>
    </PageContainer>
  )
}

export default Account
