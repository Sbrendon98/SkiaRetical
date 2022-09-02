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
import { View, Text, StyleSheet, Animated } from "react-native"
import { useState, useRef } from "react"

const size = 100
const recSize = 10
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
  },
  canvas:  {
    width: 200,
    height: 200,
    borderStyle: "solid",
    borderColor: "red",
    borderRadius: 100,
    borderWidth: 2
  }
})

export default function BettingDial() {
  // const [touched, setTouched] = useState(true)
  // const handler = () => {
  //   setTouched((prevState) => !prevState)
  //   console.log("I was touched")
  // }

  const recX = useValue(100)
  const recY = useValue(35)
  const started = useValue(false)
  const startPoint = useValue([])

  const touchHandler = useTouchHandler({
    onStart: () => { started.current = true; },
    onActive: ({ x, y }) => {
      recX.current = (Math.cos(-y / 50) * strokeSize) + 100
      recY.current = (Math.sin(-y / 50) * strokeSize) + 100
      // recX.current = x
      // recY.current = y
    },
    onEnd: () => { started.current = false; }
    
  })
  // function pointLimiter([]) {
  //    /*Cheeck the position of the circle, the x and y axis and return which shape was hit */
  // }
  return (
    <Canvas style={styles.canvas} onTouch={touchHandler}>
      <Circle r={size} cy={size} cx={size} color='#4fg' />
      <Group color='white' style="stroke" strokeWidth={1}>
        <Circle cx={size} cy={size} r={strokeSize} />
      </Group>
      <Circle r={recSize} cy={recY} cx={recX} />
    </Canvas>
  )
}