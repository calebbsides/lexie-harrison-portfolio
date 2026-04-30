import Box from "@mui/material/Box";

export default function OrnamentalDivider() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 4, md: 10 },
        py: 1,
        "& .divider-line": {
          flex: 1,
          height: "1px",
          background:
            "linear-gradient(to var(--dir), #00695C 60%, transparent 100%)",
        },
        "& .divider-center": {
          display: "flex",
          alignItems: "center",
          gap: "6px",
          px: "10px",
          color: "#00695C",
        },
      }}
    >
      {/* Left side */}
      <Box
        className="divider-line"
        sx={{ "--dir": "left" } as React.CSSProperties}
      />

      {/* Left ornament */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          color: "#00695C",
        }}
      >
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: 4,
            height: 4,
            borderRadius: "50%",
            bgcolor: "#00695C",
          }}
        />
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: 18,
            height: 2,
            bgcolor: "#00695C",
            borderRadius: 1,
          }}
        />
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: 6,
            height: 6,
            borderRadius: "50%",
            bgcolor: "#00695C",
          }}
        />
      </Box>

      {/* Center diamond star */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          px: "8px",
          color: "#00695C",
        }}
      >
        {/* Left elongated diamond */}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: 28,
            height: 8,
            bgcolor: "#00695C",
            clipPath: "polygon(0 50%, 15% 0, 100% 50%, 15% 100%)",
          }}
        />

        {/* 4-point star */}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: 18,
            height: 18,
            bgcolor: "#00695C",
            clipPath:
              "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",
          }}
        />

        {/* Right elongated diamond */}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: 28,
            height: 8,
            bgcolor: "#00695C",
            clipPath: "polygon(0 50%, 85% 0, 100% 50%, 85% 100%)",
          }}
        />
      </Box>

      {/* Right ornament */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          color: "#00695C",
        }}
      >
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: 6,
            height: 6,
            borderRadius: "50%",
            bgcolor: "#00695C",
          }}
        />
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: 18,
            height: 2,
            bgcolor: "#00695C",
            borderRadius: 1,
          }}
        />
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: 4,
            height: 4,
            borderRadius: "50%",
            bgcolor: "#00695C",
          }}
        />
      </Box>

      {/* Right side */}
      <Box
        className="divider-line"
        sx={{ "--dir": "right" } as React.CSSProperties}
      />
    </Box>
  );
}
