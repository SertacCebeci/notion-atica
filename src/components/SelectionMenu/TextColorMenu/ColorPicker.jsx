import { Menu } from "@mantine/core";
import ColorMap from "@/components/ColorMap";

export const ColorPicker = ({ editor }) => {
  const colors = Object.keys(ColorMap);
  return (
    <div className="border border-black rounded">
      {colors.map((color) => (
        <Menu.Item component={"div"} key={"text-color-" + color}>
          <button
            onClick={() => {
              editor.chain().focus().setColor(ColorMap[color]).run();
            }}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        </Menu.Item>
      ))}
    </div>
  );
};
