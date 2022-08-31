import React from "react";
import {
  Canvas,
  Fill,
  Group,
  Rect,
  rect,
  useCanvas,
  useComputedValue,
} from "@shopify/react-native-skia";
 
const MyComp = () => {
  // 💚 useCanvas() can safely be used here
  const { size } = useCanvas();
  // 💚 canvas is a regular skia value that can be used for animations
  const rct = useComputedValue(() => {
    return rect(0, 0, size.current.width, size.current.height / 2);
  }, [size]);
  return (
    <Group>
      <Fill color="magenta" />
      <Rect color="cyan" rect={rct} />
      {/* ❌ this won't update since canvas is a skia value */}
    </Group>
  );
};
 
export default function Example() {
  // ❌ Using useCanvas() here would crash
  return (
    <Canvas style={{ flex: 1 }}>
      <MyComp />
    </Canvas>
  );
};