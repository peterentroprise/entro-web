import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  CardContent,
  Container,
  Box,
  Button,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {},
}))
const IndexComponent = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <Box mt={2} mb={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vestibulum eros sit amet efficitur consequat. Vivamus vel tempus
              purus. Sed id massa eu quam dignissim mollis. In eget rhoncus sem.
              Etiam pharetra neque tortor. Sed vitae tincidunt augue, eu
              fermentum felis. Quisque convallis condimentum quam in varius. Sed
              rhoncus mollis massa, in pellentesque libero tincidunt ac. Ut
              fermentum erat eget mi pharetra, ut ultrices nisl tincidunt.
              Aliquam mollis, sapien et dignissim bibendum, urna quam cursus
              lacus, vitae rutrum erat massa vel purus. Pellentesque id interdum
              lacus, ut tincidunt diam. Donec dictum mauris eget felis viverra,
              volutpat fermentum metus dictum. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Donec
              euismod, nunc a congue scelerisque, nibh mi congue neque, blandit
              blandit turpis nisi eu neque. Donec volutpat risus quam, sit amet
              aliquam augue cursus eu. Nullam ultrices neque ut lorem eleifend
              tempor. Aenean laoreet arcu augue, a molestie mi posuere eu. Fusce
              fringilla erat est. In id dictum neque. Maecenas ut sapien non leo
              pulvinar ultrices a vitae diam. Sed in lacus vel ante porttitor
              rhoncus. Nunc nisi risus, rutrum rutrum interdum quis, pharetra ac
              tellus. Nunc id volutpat sapien. Nulla consequat arcu tortor, vel
              vestibulum quam ultrices non. Suspendisse sed fringilla massa, et
              scelerisque metus. Nulla et consectetur enim. In nec pretium
              tortor. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Proin et tincidunt magna. Aliquam
              ac enim nulla. Curabitur pretium leo feugiat eros eleifend, in
              egestas tellus pellentesque. Curabitur sit amet sodales ligula.
              Sed in felis at sapien sagittis iaculis in et sapien. Nam sodales
              turpis et ante lacinia elementum. Mauris tincidunt ex at tortor
              luctus accumsan. Quisque congue purus id sem ultricies viverra.
              Sed ut faucibus arcu, at viverra tellus. Aenean quam urna, maximus
              nec aliquam vitae, cursus a leo. Duis volutpat id arcu eu
              pharetra. Nullam condimentum, urna non scelerisque cursus, dolor
              purus facilisis odio, non luctus justo est at sapien. In
              sollicitudin dolor velit, sit amet aliquet purus porttitor eget.
              Sed fringilla, elit fermentum finibus tincidunt, erat justo
              pellentesque erat, in cursus libero ex id tortor. Proin suscipit
              venenatis gravida. In hac habitasse platea dictumst. Nullam
              rhoncus egestas consequat. Integer nec urna lacus. Suspendisse
              ultrices tellus sed nunc varius scelerisque. Proin vestibulum
              vulputate velit ac malesuada. Vivamus bibendum eget ligula et
              eleifend. Fusce neque risus, tempor nec placerat sollicitudin,
              sagittis vel quam. Pellentesque vel purus ac dolor rutrum
              ullamcorper. Curabitur non consectetur nisl. Donec ullamcorper
              urna vitae sapien semper, nec finibus velit pellentesque. Morbi
              pulvinar feugiat neque ut dictum. Vivamus tincidunt dolor at arcu
              volutpat pretium.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default IndexComponent
