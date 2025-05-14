import { Builder } from "@builder.io/react";
import AsteroidVisualization from "@/components/nasa/AsteroidVisualization";

// Register NASA components to be used in the Builder.io visual editor
Builder.registerComponent(AsteroidVisualization, {
  name: "NASAAsteroidVisualization",
  description: "Visual representation of NASA's Asteroids NeoWs data",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Near Earth Asteroids",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Explore asteroids that will pass near Earth in the coming days",
    },
  ],
});

// This allows using the NASA components in the builder editor
export default function RegisterNASAComponents() {
  return null;
}
