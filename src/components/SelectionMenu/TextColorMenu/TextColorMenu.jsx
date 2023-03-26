import { Menu } from "@mantine/core";
import { ColorPicker } from "@/components/SelectionMenu/TextColorMenu/ColorPicker";
//tried using a component package just for experiment.
//I dont think using any is neccesary. I am in favor of web components usage in this project to begin with
const TextColorMenu = ({ editor }) => {
  return (
    <Menu position="top" offset={8}>
      <Menu.Target>
        <button className="bg-white m-1 p-1 hover:cursor-pointer hover:bg-gray-200 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4FCEFE] to-[#7672E7]">
          Color
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        <ColorPicker editor={editor} />
      </Menu.Dropdown>
    </Menu>
  );
};

export default TextColorMenu;
