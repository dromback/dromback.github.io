import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { metaverseState } from "../atoms/metaversesAtom";
import {
  defaultMenuItem,
  DirectoryMenuItem,
  directoryMenuState,
} from "../atoms/directoryMenuAtom";
import { IoAperture } from 'react-icons/io5'

const useDirectory = () => {
  const [directoryState, setDirectoryState] =
    useRecoilState(directoryMenuState);
  const router = useRouter();

  const metaverseStateValue = useRecoilValue(metaverseState);

  const onSelectMenuItem = (menuItem: DirectoryMenuItem) => {
    setDirectoryState((prev) => ({
      ...prev,
      selectedMenuItem: menuItem,
    }));

    router?.push(menuItem.link);
    if (directoryState.isOpen) {
      toggleMenuOpen();
    }
  };

  const toggleMenuOpen = () => {
    setDirectoryState((prev) => ({
      ...prev,
      isOpen: !directoryState.isOpen,
    }));
  };

  useEffect(() => {
    const { metaverseID } = router.query;

    const existingMetaverse = metaverseStateValue.currentMetaverse;

    if (existingMetaverse.id) {
      setDirectoryState((prev) => ({
        ...prev,
        selectedMenuItem: {
          displayText: `${existingMetaverse.id}`,
          link: `metaverses/${existingMetaverse.id}`,
          icon: IoAperture,
          iconColor: "blue.500",
          imageURL: existingMetaverse.imageURL,
        },
      }));
      return;
    }
    setDirectoryState((prev) => ({
      ...prev,
      selectedMenuItem: defaultMenuItem,
    }));
  }, [metaverseStateValue.currentMetaverse]);
  //                              

  return { directoryState, onSelectMenuItem, toggleMenuOpen };
};

export default useDirectory;