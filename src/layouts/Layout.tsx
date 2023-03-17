import React, { FC } from "react";
import { Box } from "@material-ui/core";

interface LayoutStateProps {}
interface LayoutDispatchProps {}

type LayoutProps = LayoutStateProps & LayoutDispatchProps;

const Layout: FC<LayoutProps> = () => {
  return (
    <Box>
      <div>Layout</div>
    </Box>
  );
};

export default Layout;
