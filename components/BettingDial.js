import { 
  Canvas, 
  Circle, 
  Paint, 
  Group, 
  useValue, 
  useTouchHandler, 
  useCanvas,
  rect,
  useComputedValue 
} from "@shopify/react-native-skia"
import { View, Text, StyleSheet } from "react-native"

const size = 158
const recSize = 15
const strokeSize = size / 1.5

const styles = StyleSheet.create({
  radius: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    borderRadius: '100%',
    border: 'solid',
    borderColor: 'red'
  }
})
const Rec = () => {
  const { size } = useCanvas()
}
export default function BettingDial() {
  const recX = useValue(100)
  const recY = useValue(100)

  const touchHandler = useTouchHandler({
    onActive: ({ x, y }) => {
      recX.current = (Math.cos(x / 50) * strokeSize) + 160
      recY.current = (Math.sin(x / 50) * strokeSize) + 160
    }
  })
  return (
      <Canvas onTouch={touchHandler} style={styles.radius}>
        <Circle r={size} cy={size} cx={size} color='#4fg' />
        <Group color='white' style="stroke" strokeWidth={1}>
          <Circle cx={size} cy={size} r={strokeSize} />
        </Group>
        <Circle r={recSize} cy={recY} cx={recX} color="orange" />
      </Canvas>
  )
}