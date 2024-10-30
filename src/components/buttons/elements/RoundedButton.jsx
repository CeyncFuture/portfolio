import ButtonBase from "@mui/material/ButtonBase";

const RoundedButton = ( props ) => {
  return (
    <ButtonBase
      {...props }
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
    </ButtonBase>
  );
};

export default RoundedButton;
