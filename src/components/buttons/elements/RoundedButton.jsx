import ButtonBase from "@mui/material/ButtonBase";

const RoundedButton = ( props ) => {
  return (
    <ButtonBase
      sx={{
        borderRadius: 50,
        height: 50,
        width: 50,
        backgroundColor: "primary.main",
        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
      { props.children || "Button"}
    </ButtonBase>
  );
};

export default RoundedButton;
