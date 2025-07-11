import { Box, IconButton, useToast } from "@chakra-ui/react";
import { FaShareAlt } from "react-icons/fa";

const ShareButton = ({ url }) => {
  const toast = useToast();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "You can now share it anywhere.",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <IconButton
      icon={<FaShareAlt />}
      position="absolute"
      top="10px"
      right="10px"
      zIndex="10"
      bg="white"
      borderRadius="50%"
      boxShadow="md"
      onClick={handleShare}
      aria-label="Share"
    />
  );
};

export default ShareButton;
